<?php
$host = 'localhost';
$db_name = 'music_and_travels';
$user = 'root';
$password ='';
try {
    $pdo = new PDO('mysql:host='.$host.';dbname='.$db_name.';charset=utf8', $user, $password);
} catch(Exception $e) {
	reponse_json($success, $data, 'Echec de la connexion à la base de données');
    exit();
}