<?php
$conn = mysql_connect('localhost', 'xmlmilln_hackath', 'hackathon');
if(!$conn)  die('接続失敗です。'.mysql_error());
mysql_select_db ("xmlmilln_hackathon");

$is_live = false;
if( isset($_GET["is_live"]) ) $is_live = false;
?>