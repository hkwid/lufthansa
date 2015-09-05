<?php
/*


// ゲート前で最後のビーコンが反応した時にコイン集めを締め切り、同時にコイン数を取得

パラメータ

deviceid :  お客さんid

サンプルURL
http://xmlmill.net/sites/_hackathon/db/get_coins.php?deviceid=abc

返り値(json)

成功 :
{status:true, num_coins:3}

失敗 :
{status:false}


*/

require_once 'inc/db.php';
?>
<?php

$data = $_GET;

/*





*/


if( !isset($data["deviceid"]) ) $data["deviceid"] = "";

if( !check($data,$is_live) ){
	echo "{status:false}";
	done();
}else{
//	$values = "( 'ddddd', 'bname2', NOW(), '333BBdfa32', '66666', '77777', NOW(), '325')";

	$sql = "UPDATE user SET isFinished='true' WHERE deviceid='".$data["deviceid"]."'";
//	$values = "( '".$data["deviceId"]  ."', '".$data["beacon_name"]."', NOW(), '".$data["user_name"]."', '".$data["flight_no"]."', '".$data["major"]."', '".$data["minor"]."', NOW(), '".$data["seat_no"]."')";
//	$sql = "INSERT INTO user ( deviceId, beacon_name, datetime, user_name, flight_no, major, minor, entry_date, seat_no) VALUES ".$values.";";
	mysql_query($sql , $conn);

	$sql = "SELECT * FROM coin where deviceid='".$data["deviceid"]."'";

//	mysql_query($sql , $conn);
	$result = mysql_query($sql , $conn);

	$num_coins = mysql_num_rows($result);
	echo "{status:true, num_coins:".$num_coins.'}';
}

// 切断
$close_flag = mysql_close($conn);
//if ($close_flag) print('<p>切断に成功しました。</p>');

function check($data,$is_live){
	$flg = true;
	if( $data["deviceid"] == "" ) $flg = false;
	return $flg;
}
?>
