<?php
/*


// ビーコンに近づいた際にコインを追加する処理

パラメータ

user_deviceid :  お客さんid
deviceid : ビーコンid

サンプルURL
http://xmlmill.net/sites/_hackathon/db/coin.php?deviceid=abc&user_deviceid=11111


返り値(json)

成功 :
{status:true}

失敗 :
{status:false}



*/

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
if( !isset($data["user_deviceid"]) ) $data["user_deviceid"] = "";

if( !check($data,$is_live) ){
	echo "{status:false}";
	done();
}else{
//	$values = "( 'ddddd', 'bname2', NOW(), '333BBdfa32', '66666', '77777', NOW(), '325')";
	$values = "( '".$data["user_deviceid"]  ."', NOW(), '".$data["deviceid"]."')";
	$sql = "INSERT INTO coin ( user_deviceid, datetime, deviceid) VALUES ".$values.";";
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
		echo "<li>user_deviceid : ".$data["user_deviceid"]."</li>";
		echo "</ul>";
	}

	$flg = true;
	if( $data["deviceid"] == "" ) $flg = false;
	if( $data["user_deviceid"] == "" ) $flg = false;
	return $flg;
}

?>
