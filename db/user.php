<?php
require_once 'inc/db.php';
?>
<?php
if(!$is_live){
echo<<<EOF
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Hackathon db admin</title>
  </head>
  <body>
EOF;
}

require_once 'inc/navi.php';


$data = $_GET;

// 端末から自動的に取得するもの
/*
{
  "major":"0",
  "name":"iBeacon0:3",
  "proximity":"2",
  "minor":"3",
  "rssi":-75,
  "proximityString":"Far",
  "deviceId":"IB946c5e3cb294007a27cec8b0d0a2606fda95d83a",
  "lastSeen":0
}
*/

if( !isset($data["deviceId"]) ) $data["deviceId"] = "";
if( !isset($data["beacon_name"]) ) $data["beacon_name"] = "";
if( !isset($data["major"]) ) $data["major"] = "";
if( !isset($data["minor"]) ) $data["minor"] = "";

// ユーザ入力によるもの
if( !isset($data["user_name"]) ) $data["user_name"] = "";
if( !isset($data["seat_no"]) ) $data["seat_no"] = "";
if( !isset($data["flight_no"]) ) $data["flight_no"] = "";

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

if(!$is_live){
echo<<<EOF
</body>
</html>
EOF;
}


function check($data,$is_live){
	if(!$is_live){
		echo "<h3>params</h3>";
		echo "<ul>";
		echo "<li>user_name : ".$data["user_name"]."</li>";
		echo "<li>deviceId : ".$data["deviceId"]."</li>";
		echo "<li>major : ".$data["major"]."</li>";
		echo "<li>minor : ".$data["minor"]."</li>";
		echo "</ul>";
	}

	$flg = true;
	if( $data["user_name"] == "" ) $flg = false;
	if( $data["seat_no"] == "" ) $flg = false;
	if( $data["flight_no"] == "" ) $flg = false;
	return $flg;
}

?>
