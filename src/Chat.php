<?php

namespace MyApp;

use Ratchet\MessageComponentInterface;
use Ratchet\ConnectionInterface;

class Chat implements MessageComponentInterface
{
    protected $clients;
    protected $itemsBrown;
    protected $itemsBrownDeck = [];
    protected $itemsSilver;
    protected $itemsSilverDeck = [];
    protected $itemsGold;
    protected $itemsGoldDeck = [];
    protected $itemsVampire;
    protected $itemsVampireDeck = [];
    protected $labirynth;
    protected $appendItemCounter;

    public function __construct()
    {
        $this->clients = new \SplObjectStorage;
        $this->itemsBrown = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
        $this->itemsSilver = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
        $this->itemsGold = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
        $this->itemsVampire = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        $this->labirynth = [0, 1, 2, 3, 4, 5, 6, 7, 8];
        $this->appendItemCounter = 1;
        $this->makeDeck();
        
        echo "Server Started...";
    }

    public function makeDeck()
    {
        $brownArrayPom = [];
        for($i=0; $i<22; $i++)
        {
            shuffle($this->itemsBrown);
            $brownArrayPom[$i] = array_pop($this->itemsBrown);
        }

        array_push($brownArrayPom, 27);
        shuffle($brownArrayPom);
        $this->itemsBrownDeck = $brownArrayPom;

        $silverArrayPom = [];
        for($i=0; $i<14; $i++)
        {
            shuffle($this->itemsSilver);
            $silverArrayPom[$i] = array_pop($this->itemsSilver);
        }

        array_push($silverArrayPom, 23);
        shuffle($silverArrayPom);
        $this->itemsSilverDeck = $silverArrayPom;

        $goldArrayPom = [];
        for($i=0; $i<9; $i++)
        {
            shuffle($this->itemsGold);
            $goldArrayPom[$i] = array_pop($this->itemsGold);
        }

        array_push($goldArrayPom, 22);
        shuffle($goldArrayPom);
        $this->itemsGoldDeck = $goldArrayPom;

        $vampArrayPom = [];
        for($i=0; $i<5; $i++)
        {
            shuffle($this->itemsVampire);
            $vampArrayPom[$i] = array_pop($this->itemsVampire);
        }
        $this->itemsVampireDeck = $vampArrayPom;
    }

    public function onOpen(ConnectionInterface $conn)
    {
        // Store the new connection to send messages to later
        $this->clients->attach($conn);

        echo "New connection! ({$conn->resourceId})\n";
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        $numRecv = count($this->clients) - 1;
        // echo sprintf(
        //     'Connection %d sending message "%s" to %d other connection%s' . "\n",
        //     $from->resourceId,
        //     $msg,
        //     $numRecv,
        //     $numRecv == 1 ? '' : 's'
        // );

        $data = json_decode($msg, true);

        if ($data['operation'] == 'openBrown') {
            shuffle($this->itemsBrownDeck);
            $data['itemNr'] = array_pop($this->itemsBrownDeck);
            // echo 'Co odpada -> '.$data['itemNr']. "\n";
            // echo 'Count -> '.count($this->itemsBrownDeck) . "\n";
            foreach ($this->clients as $client) {
                //if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send(json_encode($data));
                //}
            }

        } else if($data['operation'] == 'chooseSilver') {
            $pomArray = $this->itemsSilverDeck;
            if(count($pomArray) >= 2)
            {
                shuffle($pomArray);
                $data['firstItem'] = array_pop($pomArray);
                shuffle($pomArray);
                $data['secondItem'] = array_pop($pomArray);

                foreach ($this->clients as $client) {
                    if ($from == $client) {
                        $client->send(json_encode($data));
                    }
                }
            } else {
                $data['itemId'] = array_pop($pomArray);
                $data['operation'] = 'openSilver';

                foreach ($this->clients as $client) {
                    $client->send(json_encode($data));
                }
            }
        } else if($data['operation'] == 'openSilver') {
            $this->itemsSilverDeck = array_filter($this->itemsSilverDeck, fn($el) => $el != $data['itemId']);
            echo 'Silver Count -> '.count($this->itemsSilverDeck) . "\n";
            echo 'Los Srebrny -> '.$data['itemId'] . "\n";

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] == 'chooseGold') {
            $goldArray = $this->itemsGoldDeck;
            if(count($goldArray) >= 3)
            {
                shuffle($goldArray);
                $data['firstItem'] = array_pop($goldArray);
                shuffle($goldArray);
                $data['secondItem'] = array_pop($goldArray);
                shuffle($goldArray);
                $data['thirdItem'] = array_pop($goldArray);

                $data['howMany'] = 3;

                foreach ($this->clients as $client) {
                    if ($from == $client) {
                        $client->send(json_encode($data));
                    }
                }
            } else if(count($goldArray) == 2) {
                shuffle($goldArray);
                $data['firstItem'] = array_pop($goldArray);
                shuffle($goldArray);
                $data['secondItem'] = array_pop($goldArray);

                $data['howMany'] = 2;

                foreach ($this->clients as $client) {
                    if ($from == $client) {
                        $client->send(json_encode($data));
                    }
                }
            }
            else {
                $data['itemId'] = array_pop($goldArray);
                $data['operation'] = 'openGold';

                foreach ($this->clients as $client) {
                    $client->send(json_encode($data));
                }
            }
        } else if($data['operation'] == 'openGold') {
            $this->itemsGoldDeck = array_filter($this->itemsGoldDeck, fn($el) => $el != $data['itemId']);
            echo 'Gold Count -> '.count($this->itemsGoldDeck) . "\n";
            echo 'Los Złoty -> '.$data['itemId'] . "\n";

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] == 'chooseVamp') {
            $vampArray = $this->itemsVampire;
            if(count($vampArray) >= 3)
            {
                shuffle($vampArray);
                $data['firstItem'] = array_pop($vampArray);
                shuffle($vampArray);
                $data['secondItem'] = array_pop($vampArray);
                shuffle($vampArray);
                $data['thirdItem'] = array_pop($vampArray);

                $data['howMany'] = 3;

                foreach ($this->clients as $client) {
                    if ($from == $client) {
                        $client->send(json_encode($data));
                    }
                }
            } else if(count($vampArray) == 2) {
                shuffle($vampArray);
                $data['firstItem'] = array_pop($vampArray);
                shuffle($vampArray);
                $data['secondItem'] = array_pop($vampArray);

                $data['howMany'] = 2;

                foreach ($this->clients as $client) {
                    if ($from == $client) {
                        $client->send(json_encode($data));
                    }
                }
            }
            else {
                $data['itemId'] = array_pop($vampArray);
                $data['operation'] = 'openVamp';

                foreach ($this->clients as $client) {
                    $client->send(json_encode($data));
                }
            }
        } else if($data['operation'] == 'openVamp') {
            $this->itemsVampire = array_filter($this->itemsVampire, fn($el) => $el != $data['itemId']);
            echo 'Vamp Count -> '.count($this->itemsVampire) . "\n";
            echo 'Los Vamp -> '.$data['itemId'] . "\n";

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] == 'openLab') {
            shuffle($this->labirynth);
            $data['itemNr'] = array_pop($this->labirynth);

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] == 'rotLeft' || $data['operation'] == 'rotRight') {

            if($data['operation'] == 'rotLeft')
                $data['rotation'] = 'minus';
            else
                $data['rotation'] = 'plus';

            $data['operation'] = 'calcRot';

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] == 'playerPos')
        {
            foreach ($this->clients as $client) {
                if ($from !== $client) {
                    $client->send(json_encode($data));
                }
            }
        } else if($data['operation'] == 'throwK6')
        {
            $data['diceValue'] = rand(1,6);
            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'randChars')
        {
            $clientsCount = count($this->clients);
            $vampire = rand(1, $clientsCount);

            $indexChar = 1;
            foreach ($this->clients as $client) {
                if($vampire === $indexChar)
                {
                    $data['char'] = 'wampirem';
                }
                else 
                {
                    $data['char'] = 'człowiekiem';
                }

                echo 'vampire -> '.$vampire . "\n";
                echo 'indexChar -> '.$indexChar . "\n";
                
                $client->send(json_encode($data));
                $indexChar++;
            }
        } else if($data['operation'] === 'openWell')
        {
            $wellRand = rand(1, 6);
            if($wellRand == 1 || $wellRand == 2 || $wellRand == 3)
            {
                $data['operation'] = 'brownWell';
                $data['itemNr'] = array_pop($this->itemsBrownDeck);

            } else if($wellRand == 4 || $wellRand == 5)
            {
                $data['operation'] = 'silverWell';
                $data['itemNr'] = array_pop($this->itemsSilverDeck);
            } else {
                $data['operation'] = 'goldWell';
                $data['itemNr'] = array_pop($this->itemsGoldDeck);
            }

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }

        } else if($data['operation'] === 'digBrownItem')
        {
            echo 'digBrownItem: '. count($this->itemsBrown) ."\n";
            if(count($this->itemsBrown) === 0)
            {
                if(count($this->itemsSilver) === 0)
                {
                    if(count($this->itemsGold) === 0)
                    {
                        $data['operation'] = 'emptyDeck';
                    } else {
                        $data['operation'] = 'digAppendGold';
                        $data['itemNr'] = array_pop($this->itemsGold);
                    }
                } else {
                    $data['operation'] = 'digAppendSilver';
                    $data['itemNr'] = array_pop($this->itemsSilver);
                }
            } else {
                $data['operation'] = 'digAppendBrown';
                $data['itemNr'] = array_pop($this->itemsBrown);
            }

            $data['appendCounter'] = $this->appendItemCounter;
            $this->appendItemCounter++;

            $data['filterArray'] = true;

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'digSilverItem')
        {
            echo 'digSilverItem: '. count($this->itemsSilver) ."\n";
            if(count($this->itemsSilver) === 0)
            {
                if(count($this->itemsGold) === 0)
                {
                    if(count($this->itemsBrown) === 0)
                    {
                        $data['operation'] = 'emptyDeck';
                    } else {
                        $data['operation'] = 'digAppendBrown';
                        $data['itemNr'] = array_pop($this->itemsBrown);
                    }
                } else {
                    $data['operation'] = 'digAppendGold';
                    $data['itemNr'] = array_pop($this->itemsGold);
                }
            } else {
                $data['operation'] = 'digAppendSilver';
                $data['itemNr'] = array_pop($this->itemsSilver);
            }

            $data['appendCounter'] = $this->appendItemCounter;
            $this->appendItemCounter++;

            $data['filterArray'] = true;

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'digGoldItem')
        {
            echo 'digGoldItem: '. count($this->itemsGold) ."\n";
            if(count($this->itemsGold) === 0)
            {
                if(count($this->itemsSilver) === 0)
                {
                    if(count($this->itemsBrown) === 0)
                    {
                        $data['operation'] = 'emptyDeck';
                    } else {
                        $data['operation'] = 'digAppendBrown';
                        $data['itemNr'] = array_pop($this->itemsBrown);
                    }
                } else {
                    $data['operation'] = 'digAppendSilver';
                    $data['itemNr'] = array_pop($this->itemsSilver);
                }
            } else {
                $data['operation'] = 'digAppendGold';
                $data['itemNr'] = array_pop($this->itemsGold);
            }

            $data['appendCounter'] = $this->appendItemCounter;
            $this->appendItemCounter++;

            $data['filterArray'] = true;

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'upgradeItemToSilver') {
            if(count($this->itemsSilver) === 0)
            {
                $data['operation'] = 'emptyDeck';
            } else {
                $data['operation'] = 'upgradeItemToSilver';
                $data['itemNr'] = array_pop($this->itemsSilver);
                $data['filterArray'] = true;
                $data['appendCounter'] = $this->appendItemCounter;
                $this->appendItemCounter++;
            }
            
            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'upgradeItemToGold')
        {
            if(count($this->itemsGold) === 0)
            {
                $data['operation'] = 'emptyDeck';
            } else {
                $data['operation'] = 'upgradeItemToGold';
                $data['itemNr'] = array_pop($this->itemsGold);
                $data['filterArray'] = true;
                $data['appendCounter'] = $this->appendItemCounter;
                $this->appendItemCounter++;
            }
            
            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'collectorAbility')
        {
            if(count($this->itemsGold) === 0
                && count($this->itemsSilver) === 0
                && count($this->itemsBrown) === 0
            )
                $data['operation'] = 'emptyDeck';
            else {
                $data['brownArray'] = $this->itemsBrown;
                $data['silverArray'] = $this->itemsSilver;
                $data['goldArray'] = $this->itemsGold;
            }

            foreach ($this->clients as $client) {
                if ($from == $client) {
                    $client->send(json_encode($data));
                }
            }
        } else if($data['operation'] === 'collectorOpenBrown')
        {
            $data['operation'] = 'digAppendBrown';
            $data['filterArray'] = true;
            $this->itemsBrown = array_values(array_filter($this->itemsBrown, fn($el) => $el != $data['itemNr']));
            $data['appendCounter'] = $this->appendItemCounter;
            $this->appendItemCounter++;

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'collectorOpenSilver')
        {
            $data['operation'] = 'digAppendSilver';
            $data['filterArray'] = true;
            $this->itemsSilver = array_values(array_filter($this->itemsSilver, fn($el) => $el != $data['itemNr']));
            $data['appendCounter'] = $this->appendItemCounter;
            $this->appendItemCounter++;

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        } else if($data['operation'] === 'collectorOpenGold')
        {
            $data['operation'] = 'digAppendGold';
            $data['filterArray'] = true;
            $this->itemsGold = array_values(array_filter($this->itemsGold, fn($el) => $el != $data['itemNr']));
            $data['appendCounter'] = $this->appendItemCounter;
            $this->appendItemCounter++;

            foreach ($this->clients as $client) {
                $client->send(json_encode($data));
            }
        }
        else {
            foreach ($this->clients as $client) {
                //if ($from !== $client) {
                // The sender is not the receiver, send to each client connected
                $client->send(json_encode($data));
                //}
            }
        }
    }

    public function onClose(ConnectionInterface $conn)
    {
        // The connection is closed, remove it, as we can no longer send it messages
        $this->clients->detach($conn);

        echo "Connection {$conn->resourceId} has disconnected\n";
    }

    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        echo "An error has occurred: {$e->getMessage()}\n";

        $conn->close();
    }
}
