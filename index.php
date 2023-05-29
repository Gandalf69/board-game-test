<!DOCTYPE html>
<html lang="pl">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Planszówka skurwysynu</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
	<script type="module" src="script.js"></script>
	<link rel="stylesheet" href="styles.css">
	<link rel="stylesheet" href="//code.jquery.com/ui/1.13.1/themes/base/jquery-ui.css">
</head>

<body>
	<div class="hamburger"></div>
	<div class="fixed-menu">
		<div class="close-menu"></div>
		<div class="menu-content">
			<button class="throw-k6 menu-btn">Rzuć kostką k6</button>
			<button class="rand-chars menu-btn">Wylosuj postacie</button>
			<button class="dig-item menu-btn">Kop przedmiot</button>
			<button class="upgrade-item-to-silver menu-btn">Pozłacanie (brązowy na srebrny)</button>
			<button class="upgrade-item-to-gold menu-btn">Pozłacanie (srebrny na złoty)</button>
			<button class="collector menu-btn">Kolekcjoner</button>
		</div>
	</div>
	<div class="board">
		<div class="container">
			<div class="labirynth">
				<span class="lab-title">Labirynt</span>
				<div class="labirynth-field lab-field-1">
					<div class="lab-road-right"></div>
					<div id="lab1" class="lab-img"></div>
					<div class="lab-road-down"></div>
				</div>
				<div class="labirynth-field lab-field-2">
					<div class="lab-road-up"></div>
					<div class="lab-road-left"></div>
					<div id="lab2" class="lab-img"></div>
					<div class="lab-road-right"></div>
				</div>
				<div class="labirynth-field lab-field-3">
					<div class="lab-road-left"></div>
					<div id="lab3" class="lab-img"></div>
					<div class="lab-road-down"></div>
				</div>
				<div class="labirynth-field lab-field-4">
					<div class="lab-road-up"></div>
					<div id="lab4" class="lab-img"></div>
					<div class="lab-road-right"></div>
				</div>
				<div class="labirynth-field lab-field-5">
					<div class="lab-road-left"></div>
					<div id="lab5" class="lab-img"></div>
					<div class="lab-road-right"></div>
					<div class="lab-road-down"></div>
				</div>
				<div class="labirynth-field lab-field-6">
					<div class="lab-road-up"></div>
					<div id="lab6" class="lab-img"></div>
					<div class="lab-road-left"></div>
				</div>
			</div>
			<div class="board-top">
				<div class="cementery">
					<span class="cem-title">Cmentarz</span>
					<div class="shrine">
						<div id="is1" class="item-silver">

						</div>
						<div class="cem-road-down"></div>
					</div>
					<div class="bigger-graves">
						<div id="is2" class="item-silver">

						</div>
						<div id="ig1" class="item-gold">

						</div>
						<div id="ip1" class="item-purple">

						</div>
						<div id="ip2" class="item-purple">

						</div>
					</div>
					<div class="graves">
						<div id="ip3" class="item-purple">

						</div>
						<div id="is3" class="item-silver">

						</div>
						<div id="is4" class="item-silver">

						</div>
					</div>
					<div class="cem-divider">
						<div class="cem-road-down"></div>
					</div>
					<div class="tomb">
						<div id="ip4" class="item-purple">

						</div>
						<div class="inner-tomb">
							<div class="cem-road-up">
								<span>zamek</span>
							</div>
							<div id="ig2" class="item-gold">

							</div>
							<div id="ig3" class="item-gold">

							</div>
						</div>
					</div>
				</div>
				<div class="manission">
					<span class="man-title">Rezydencja</span>
					<div class="man-top-left">
						<div class="man-food">
							<div id="garlic1" class="garlic"></div>
							<div id="ib1" class="item-brown">

							</div>
						</div>
						<div class="man-kitchen">
							<div class="man-road-left"></div>
							<div id="ig4" class="item-gold">

							</div>
						</div>
						<div class="man-row-road">
							<div class="man-road-left"></div>
							<div class="man-road-right"></div>
							<div class="man-road-down"></div>
						</div>
						<div class="man-row-road">
							<div class="man-road-up"></div>
							<div class="man-road-right"></div>
						</div>
					</div>
					<div class="man-top-mid">
						<div class="man-column-road">
							<div class="man-road-up"></div>
							<div class="man-road-right"></div>
						</div>
					</div>
					<div class="man-top-right">
						<div class="man-coock">
							<div id="ib2" class="item-brown">

							</div>
							<div id="is6" class="item-silver">
								<span style="font-size: 0.6rem;"></span>
							</div>
							<div class="man-road-down"></div>
						</div>
						<div class="butler">
							<div id="is7" class="item-silver"></div>
							<div id="ib3" class="item-brown"></div>
							<div class="man-road-down"></div>
						</div>
						<div class="man-row-road">
							<div class="man-road-down">
								<span><b>XXX</b></span>
							</div>
						</div>
						<div class="man-row-road">
							<div class="man-road-left"></div>
							<div class="man-road-right"></div>
						</div>
					</div>
					<div class="man-bottom-left">
						<div class="sleep">
							<div id="is8" class="item-silver">

							</div>
						</div>
						<div class="eat-room">
							<div class="man-road-up"></div>
							<div class="man-road-right"></div>
							<div id="is9" class="item-silver">

							</div>
						</div>
						<div class="secret-room">
							<div id="secret1" class="secret">

							</div>
							<div id="ig5" class="item-gold">

							</div>
						</div>
						<div class="books">

						</div>
						<div class="guest-room">
							<div class="man-road-left"></div>
							<div id="ig9" class="item-gold"></div>
						</div>
					</div>
					<div class="man-bottom-mid">
						<div class="man-column-road">
							<div class="man-road-left"></div>
							<div class="man-road-left"></div>
							<div class="man-road-up"></div>
							<div class="man-road-down">
								<span><b>XXX</b></span>
							</div>
						</div>
					</div>
					<div class="man-bottom-right">
						<div class="rooms-left">
							<div class="pre-room">
								<div class="man-road-left"></div>
								<div id="is10" class="item-silver">

								</div>
								<div id="key1" class="key">
								</div>
							</div>
							<div class="furnance">
								<div id="furnance1" class="furnance-div">

								</div>
								<div class="man-road-right"></div>
							</div>
						</div>
						<div class="rooms-mid">
							<div class="man-column-road">
							</div>
						</div>
						<div class="rooms-right">
							<div class="main-sleep">
								<div class="man-road-left"></div>
								<div id="ig6" class="item-gold">

								</div>
							</div>
							<div class="main-bottom">
								<div class="storage">
									<div class="man-road-left"></div>
									<div id="is12" class="item-silver">

									</div>
									<div id="ib4" class="item-brown">

									</div>
								</div>
								<div class="vampire-room">
									<div class="man-road-up">
										<span>zamek</span>
									</div>
									<div class="item-blue">

									</div>
									<div id="ip5" class="item-purple">

									</div>
									<div id="ig7" class="item-gold">

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="garden-up">
					<span class="gup-title">Ogród</span>
					<div class="garden-buff">
						<span class="describe">
							+1 Hp
						</span>
						<div class="gup-road-right"></div>
					</div>
					<div class="garden-divider-first"></div>
					<div class="shrine-better"></div>
					<div class="garden-divider-second"></div>
					<div class="workshop">
						<div class="gup-road-left"></div>
						<div class="work-room1">
							<div id="ib5" class="item-brown">

							</div>
							<div id="ib6" class="item-brown">

							</div>
						</div>
						<div class="work-room2">
							<div id="axe1" class="item-blue axe"></div>
						</div>
						<div class="work-room3">
							<div class="gup-road-up"></div>
							<div class="gup-road-down"></div>
						</div>
					</div>
					<div class="doors">
						<div class="gup-road-down"></div>
						<div class="gup-road-left"></div>
					</div>
				</div>
			</div>
			<div class="board-mid">
				<div class="thorns">
					<div class="thorns-item">
						<div class="tho-road-right"></div>
						<div id="ib7" class="item-brown">

						</div>
					</div>
					<div class="thorns-field">
						<span>-1HP lub 2 Akcje</span>
					</div>
				</div>
				<div class="veranda">
					<span>-1HP</span>
					<div class="ver-road-up"></div>
					<div class="ver-field-left">
						<div id="ib8" class="item-brown">

						</div>
						<div id="ib9" class="item-brown">

						</div>
						<div class="ver-road-down"></div>
					</div>
					<div class="ver-field-mid">
						<div id="ib10" class="item-brown">

						</div>
						<div class="ver-road-left"></div>
						<div class="ver-road-right"></div>
						<div class="ver-road-down"></div>
					</div>
					<div class="ver-field-right">
						<div id="is13" class="item-silver">

						</div>
						<div class="ver-road-down"></div>
					</div>
				</div>
				<div class="garden-down">
					<div class="garden-down-left">
						<div class="rods">
							<div class="gd-road-down"></div>
							<div id="rod1" class="item-blue rod"></div>
						</div>
						<div class="gd-field-up">
							<div class="gd-road-left"></div>
							<div class="gd-road-right"></div>
						</div>
						<div class="gd-field-right"></div>
						<div class="gd-field-down">
							<div class="gd-road-left"></div>
							<div class="gd-road-right"></div>
						</div>
						<div class="gd-field-left"></div>
						<div class="pond">
							<div class="bridge-up"></div>
							<div class="bridge-down"></div>
							<div class="pond-center">
								<div class="pond-left">
									<div id="small-fountain1" class="small-fountain"></div>
									<div id="ib11" class="item-brown"></div>
								</div>
								<div class="pond-mid">
									<div class="pond-mid-blue">
										<div id="ig8" class="item-gold"></div>
									</div>
								</div>
								<div class="pond-right">
									<div id="small-fountain2" class="small-fountain"></div>
									<div id="ib12" class="item-brown"></div>
									<div id="is14" class="item-silver"></div>
								</div>
							</div>
						</div>
					</div>
					<div class="garden-down-right">
						<div class="gd-road-up"></div>
						<div class="gd-field">
							<div id="ib13" class="item-brown"></div>
						</div>
						<div class="gd-road-down"></div>
					</div>
				</div>
			</div>
			<div class="board-bottom">
				<div class="granary">
					<div class="granary-rooms">
						<div class="gr-room gr-1">
							<div id="ib14" class="item-brown"></div>
							<div id="ib15" class="item-brown"></div>
							<div class="gr-road-down"></div>
						</div>
						<div class="gr-room gr-2">
							<div id="is15" class="item-silver"></div>
							<div class="gr-road-down"></div>
						</div>
						<div class="gr-big-room">
							<div id="ib16" class="item-brown"></div>
							<div class="gr-road-right"></div>
						</div>
						<div class="gr-room gr-3">
							<div class="gr-road-up"></div>
							<div id="ib17" class="item-brown"></div>
							<div class="gr-road-right"></div>
						</div>
						<div class="gr-room gr-4">
							<div class="gr-road-up"></div>
							<div id="ib18" class="item-brown"></div>
							<div id="ib19" class="item-brown"></div>
						</div>
					</div>
					<div class="granary-field">
						<div class="gr-road-up"></div>
						<div class="gr-road-down"></div>
					</div>
				</div>
				<div class="stable">
					<div class="st-long">
						<div class="st-road-right"></div>
						<div id="ib20" class="item-brown"></div>
						<div id="ib21" class="item-brown"></div>
					</div>
					<div class="st-main">
						<div class="st-room">
							<div class="st-road-down"></div>
						</div>
						<div class="st-room">
							<div id="horse1" class="item-blue horse"></div>
							<div class="st-road-down"></div>
						</div>
						<div class="st-room">
							<div class="st-road-down"></div>
						</div>
						<div class="st-room-big">
							<div class="st-road-right"></div>
						</div>
						<div class="st-room st-4">
							<div class="st-road-up"></div>
							<div id="horse2" class="item-blue horse"></div>
						</div>
						<div class="st-room st-5">
							<div class="st-road-up"></div>
						</div>
						<div class="st-room st-6">
							<div class="st-road-up"></div>
							<div id="ib22" class="item-brown" title=""></div>
						</div>
					</div>
				</div>
				<div class="courtyard">
					<div class="ct-field">
						<div class="ct-road-up"></div>
						<div class="ct-road-right"></div>
						<div class="ct-road-down"></div>
						<div class="ct-road-left"></div>
						<div id="big-fountain1" class="big-fountain"></div>
					</div>
				</div>
				<div class="well">
					<div class="we-field">
						<div class="we-road-up"></div>
						<div class="we-road-right"></div>
						<div class="we-road-down"></div>
						<div id="well1" class="well-div"></div>
					</div>
				</div>
			</div>
			<div class="forest">
				<div class="forest-left">
					<div class="fl-ladder">
						<span>1 akcja na użycie drabiny</span>
					</div>
					<div class="fl-bonfire">
						<div id="bonfire1" class="bonfire"></div>
						<div class="f-road-up"></div>
					</div>
					<div class="fl-flield-l">
						<div class="f-road-up"></div>
						<div class="f-road-right"></div>
					</div>
					<div class="fl-field-r">
						<div class="f-road-up"></div>
					</div>
					<div class="fl-start-l">
						<div class="f-road-up"></div>
					</div>
					<div class="fl-start-r">
						<div class="f-road-up"></div>
					</div>
				</div>
				<div class="forest-mid">
					<div class="fm-field-up">
						<div class="f-road-left"></div>
					</div>
					<div class="fm-field-mid">
						<div class="f-road-up"></div>
					</div>
					<div class="fm-start">
						<div class="f-road-up"></div>
					</div>
				</div>
				<div class="forest-right">
					<div class="fr-hole">
						<div class="f-road-up"></div>
						<div class="f-road-left"></div>
					</div>
					<div class="fr-bonfire">
						<div id="bonfire2" class="bonfire"></div>
						<div class="f-road-up"></div>
					</div>
					<div class="fr-flield-l">
						<div class="f-road-up"></div>
						<div class="f-road-right"></div>
					</div>
					<div class="fr-field-r">
						<div class="f-road-up"></div>
					</div>
					<div class="fr-start-l">
						<div class="f-road-up"></div>
					</div>
					<div class="fr-start-r">
						<div class="f-road-up"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="players">
		<div class="player1">
			<div class="player-icon">
				<h3 style="color: green">Gracz 1</h3>
				<span id="pl1-icon">1</span>
			</div>
			<div class="player-eq">
				<div class="head">
					<h4>Hełm</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ah1">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="torso">
					<h4>Klata</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ac1">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand1">
					<h4>Ręka 1</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aal1">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand2">
					<h4>Ręka 2</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aar1">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="foots">
					<h4>Buty</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ab1">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
			</div>
			<div class="player-atk">
				<h3>Atak</h3>
				<div class="atk-count pac1">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-atk">
				<h3>Akt. Atak</h3>
				<div class="cur-atk-count pac-cur1">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-hp">
				<h3>Hp</h3>
				<div class="cur-hp-count phc1">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-hp">
				<h3>Akt. Hp</h3>
				<div class="cur-hp-count phc-cur1">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-joker">
				<h3>Jokery</h3>
				<div class="j-count pjc1">
					<span>0</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cap">
				<h3>Cap</h3>
				<div class="c-count pcc1">
					<span>7</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-bag">
				<h3>Plecak</h3>
			</div>
		</div>
		<div class="player2">
			<div class="player-icon">
				<h3 style="color: #2c4faf">Gracz 2</h3>
				<span id="pl2-icon">2</span>
			</div>
			<div class="player-eq">
				<div class="head">
					<h4>Hełm</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ah2">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="torso">
					<h4>Klata</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ac2">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand1">
					<h4>Ręka 1</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aal2">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand2">
					<h4>Ręka 2</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aar2">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="foots">
					<h4>Buty</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ab2">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
			</div>
			<div class="player-atk">
				<h3>Atak</h3>
				<div class="atk-count pac2">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-atk">
				<h3>Akt. Atak</h3>
				<div class="cur-atk-count pac-cur2">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-hp">
				<h3>Hp</h3>
				<div class="cur-hp-count phc2">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-hp">
				<h3>Akt. Hp</h3>
				<div class="cur-hp-count phc-cur2">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-joker">
				<h3>Jokery</h3>
				<div class="j-count pjc2">
					<span>0</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cap">
				<h3>Cap</h3>
				<div class="c-count pcc2">
					<span>7</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-bag">
				<h3>Plecak</h3>
			</div>
		</div>
		<div class="player3">
			<div class="player-icon">
				<h3 style="color: #700d70">Gracz 3</h3>
				<span id="pl3-icon">3</span>
			</div>
			<div class="player-eq">
				<div class="head">
					<h4>Hełm</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ah3">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="torso">
					<h4>Klata</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ac3">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand1">
					<h4>Ręka 1</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aal3">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand2">
					<h4>Ręka 2</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aar3">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="foots">
					<h4>Buty</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ab3">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
			</div>
			<div class="player-atk">
				<h3>Atak</h3>
				<div class="atk-count pac3">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-atk">
				<h3>Akt. Atak</h3>
				<div class="cur-atk-count pac-cur3">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-hp">
				<h3>Hp</h3>
				<div class="cur-hp-count phc3">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-hp">
				<h3>Akt. Hp</h3>
				<div class="cur-hp-count phc-cur3">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-joker">
				<h3>Jokery</h3>
				<div class="j-count pjc3">
					<span>0</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cap">
				<h3>Cap</h3>
				<div class="c-count pcc3">
					<span>7</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-bag">
				<h3>Plecak</h3>
			</div>
		</div>
		<div class="player4">
			<div class="player-icon">
				<h3 style="color: #d13636">Gracz 4</h3>
				<span id="pl4-icon">4</span>
			</div>
			<div class="player-eq">
				<div class="head">
					<h4>Hełm</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ah4">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="torso">
					<h4>Klata</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ac4">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand1">
					<h4>Ręka 1</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aal4">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand2">
					<h4>Ręka 2</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aar4">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="foots">
					<h4>Buty</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ab4">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
			</div>
			<div class="player-atk">
				<h3>Atak</h3>
				<div class="atk-count pac4">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-atk">
				<h3>Akt. Atak</h3>
				<div class="cur-atk-count pac-cur4">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-hp">
				<h3>Hp</h3>
				<div class="cur-hp-count phc4">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-hp">
				<h3>Akt. Hp</h3>
				<div class="cur-hp-count phc-cur4">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-joker">
				<h3>Jokery</h3>
				<div class="j-count pjc4">
					<span>0</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cap">
				<h3>Cap</h3>
				<div class="c-count pcc4">
					<span>7</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-bag">
				<h3>Plecak</h3>
			</div>
		</div>
		<div class="player5">
			<div class="player-icon">
				<h3 style="color: #be7054">Gracz 5</h3>
				<span id="pl5-icon">5</span>
			</div>
			<div class="player-eq">
				<div class="head">
					<h4>Hełm</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ah5">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="torso">
					<h4>Klata</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ac5">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand1">
					<h4>Ręka 1</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aal5">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand2">
					<h4>Ręka 2</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aar5">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="foots">
					<h4>Buty</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ab5">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
			</div>
			<div class="player-atk">
				<h3>Atak</h3>
				<div class="atk-count pac5">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-atk">
				<h3>Akt. Atak</h3>
				<div class="cur-atk-count pac-cur5">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-hp">
				<h3>Hp</h3>
				<div class="cur-hp-count phc5">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-hp">
				<h3>Akt. Hp</h3>
				<div class="cur-hp-count phc-cur5">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-joker">
				<h3>Jokery</h3>
				<div class="j-count pjc5">
					<span>0</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cap">
				<h3>Cap</h3>
				<div class="c-count pcc5">
					<span>7</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-bag">
				<h3>Plecak</h3>
			</div>
		</div>
		<div class="player6">
			<div class="player-icon">
				<h3 style="color: palevioletred">Gracz 6</h3>
				<span id="pl6-icon">6</span>
			</div>
			<div class="player-eq">
				<div class="head">
					<h4>Hełm</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ah6">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="torso">
					<h4>Klata</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ac6">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand1">
					<h4>Ręka 1</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aac6">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="hand2">
					<h4>Ręka 2</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count aar6">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
				<div class="foots">
					<h4>Buty</h4>
					<div class="black-placeholder">
					</div>
					<div class="arm-count ab6">
						<p>Arm <span>0</span></p>
						<button class="plus">+</button>
						<button class="minus">-</button>
					</div>
				</div>
			</div>
			<div class="player-atk">
				<h3>Atak</h3>
				<div class="atk-count pac6">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-atk">
				<h3>Akt. Atak</h3>
				<div class="cur-atk-count pac-cur6">
					<span>1</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-hp">
				<h3>Hp</h3>
				<div class="cur-hp-count phc6">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cur-hp">
				<h3>Akt. Hp</h3>
				<div class="cur-hp-count phc-cur6">
					<span>6</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-joker">
				<h3>Jokery</h3>
				<div class="j-count pjc6">
					<span>0</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-cap">
				<h3>Cap</h3>
				<div class="c-count pcc6">
					<span>7</span>
					<button class="plus">+</button>
					<button class="minus">-</button>
				</div>
			</div>
			<div class="player-bag">
				<h3>Plecak</h3>
			</div>
		</div>
	</div>
	<div class="silver-modal">
		<div class="silver-modal-center">
			<h2>Wybierz przedmiot</h2>
			<div class="silver-modal-items">

			</div>
		</div>
	</div>

	<div class="collector-modal">
		<div class="collector-modal-center">
			<h2>Wybierz przedmiot</h2>
			<div class="collector-modal-items">
				<div class="collector-brown-container"></div>
				<div class="collector-silver-container"></div>
				<div class="collector-gold-container"></div>
			</div>
			<button class="collector-colse">Zamknij</button>
		</div>
	</div>
	<!-- <div id="mydiv">
		Include a header DIV with the same name as the draggable DIV, followed by "header"
		<div id="mydivheader">Click here to move</div>
		<p>Move</p>
		<p>this</p>
		<p>DIV</p>
	</div> -->
</body>

</html>