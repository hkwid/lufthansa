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

if( !isset($data["deviceid"]) ) $data["deviceid"] = "";
if( !isset($data["user_id"]) ) $data["user_id"] = "";

if( !check($data,$is_live) ){
	echo "{status:false}";
	done();
}else{
//	$values = "( 'ddddd', 'bname2', NOW(), '333BBdfa32', '66666', '77777', NOW(), '325')";
	$values = "( '".$data["user_id"]  ."', NOW(), '".$data["deviceid"]."')";
	$sql = "INSERT INTO coin ( user_id, datetime, deviceid) VALUES ".$values.";";
	mysql_query($sql , $conn);

echo $sql;
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
		echo "<li>deviceid : ".$data["deviceid"]."</li>";
		echo "<li>user_id : ".$data["user_id"]."</li>";
		echo "</ul>";
	}

	$flg = true;
	if( $data["deviceid"] == "" ) $flg = false;
	if( $data["user_id"] == "" ) $flg = false;
	return $flg;
}

?>
