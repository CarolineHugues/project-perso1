<?php
header('Content-Type: application/json');
$success = false;
$data = array();
include('pdo.php');
function reponse_json($success, $data, $msgError=NULL) {
	$array['success'] = $success;
	$array['message'] = $msgError;
	$array['result'] = $data;
	echo json_encode($array);
}