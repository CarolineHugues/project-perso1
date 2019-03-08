<?php
try{
  $bdd = new PDO('mysql:host=localhost;dbname=music_and_travels;meta-charset=utf-8', "root", "");
  $bdd->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
}
catch(Exception $e){
  die($e->getMessage());
}