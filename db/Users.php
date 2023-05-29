<?php
    class users {
        private $id;
        private $name;
        private $loginStatus;
        private $lastLogin;
        public $dbConn;

        public function __construct()
        {
            require_once("DbConnect.php");
            $db = new DbConnect();
            $this->dbConn = $db->connect();
        }

        public function getId() {return $this->id; }
        public function setId($id) {$this->id = $id; }
        public function getName() {return $this->name; }
        public function setName($name) {$this->name = $name; }
        public function getLoginStatus() {return $this->loginStatus; }
        public function setLoginStatus($loginStatus) {$this->loginStatus = $loginStatus; }
        public function getLastLogin() {return $this->lastLogin; }
        public function setLastLogin($lastLogin) {$this->lastLogin = $lastLogin; }

        public function save() {
            $sql = "INSERT INTO `users` (`id`, `name`, `login_status`, `last_login`)
                VALUE (null, :name, :loginStatus, :lastLogin)";
            
            $statment = $this->dbConn->prepare($sql);
            $statment->bindParam(":name", $this->name);
            $statment->bindParam(":loginStatus", $this->loginStatus);
            $statment->bindParam(":lastLogin", $this->lastLogin);
            try {
                if($statment->execute()) {
                    return true;
                } else {
                    return false;
                }
            } catch(Exception $e) {
                echo $e->getMessage();
            }
        }

        public function getUserByName() {
            $statment = $this->dbConn->prepare('SELECT * FROM users WHERE name = :name');
            $statment->bindParam(':name', $this->name);
            try{
                if($statment->execute()) {
                    $user = $statment->fetch(PDO::FETCH_ASSOC);
                }
            } catch (Exception $e) {
                echo $e->getMessage();
            }
            return $user;
        }

        public function updateLoginStatus() {
            $statment = $this->dbConn->prepare('UPDATE users 
                SET login_status = :loginStatus, 
                last_login = :lastLogin
                WHERE id = :id');
            $statment->bindParam(':loginStatus', $this->loginStatus);
            $statment->bindParam(':lastLogin', $this->lastLogin);
            $statment->bindParam(':id', $this->id);
            try{
                if($statment->execute()) {
                    return true;
                } else {
                    return false;
                }
            } catch(Exception $e) {
                echo $e->getMessage();
            }
        }

        public function getAllUsers() {
			$stmt = $this->dbConn->prepare("SELECT * FROM users");
			$stmt->execute();
			$users = $stmt->fetchAll(PDO::FETCH_ASSOC);
			return $users;
		}
    }
?>