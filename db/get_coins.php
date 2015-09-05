<?php
require_once 'inc/db.php';
?>
<?php

$data = $_GET;

/*





*/

if( !isset($data["deviceId"]) ) $data["deviceId"] = "";


if( !check($data,$is_live) ){
	echo "{status:false}";
	done();
}else{
//	$values = "( 'ddddd', 'bname2', NOW(), '333BBdfa32', '66666', '77777', NOW(), '325')";
	$values = "( '".$data["deviceId"]  ."', '".$data["beacon_name"]."', NOW(), '".$data["user_name"]."', '".$data["flight_no"]."', '".$data["major"]."', '".$data["minor"]."', NOW(), '".$data["seat_no"]."')";
	$sql = "INSERT INTO user ( deviceId, beacon_name, datetime, user_name, flight_no, major, minor, entry_date, seat_no) VALUES ".$values.";";
	mysql_query($sql , $conn);
	echo "{status:true}";
}

// 切断
$close_flag = mysql_close($conn);
//if ($close_flag) print('<p>切断に成功しました。</p>');

function check($data,$is_live){
	$flg = true;
	if( $data["deviceId"] == "" ) $flg = false;
	return $flg;
}
?>
