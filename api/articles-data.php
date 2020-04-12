<?php
include('template.php');
$request = $pdo->prepare("SELECT * FROM `articles` ORDER BY id ASC");
if( $request->execute() ){
	$results = $request->fetchAll();
	$success = true;
	$data['number'] = count($results);
	$data['articles'] = $results;
} else {
	$msg = "Une erreur s'est produite";
}
reponse_json($success, $data);