<?php
/*

// put my score and get renking

params
-----------------------
deviceid : device id for customer
name : nickname
score : total score
-----------------------

example URL
-----------------------
http://xmlmill.net/sites/_hackathon/db/score.php?is_live&deviceid=abc&name=foo&score=1000
-----------------------

result (json)
-----------------------
success :
{status:true,ranking:{ deviceid : abc, name:foo, score:2500}{ deviceid : abc, name:foo, score:1500}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}{ deviceid : abc, name:foo, score:1000}}
error :
{status:false}
-----------------------


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
if( !isset($data["name"]) ) $data["name"] = "";
if( !isset($data["score"]) ) $data["score"] = "";

if( !check($data,$is_live) ){
	echo "{status:false}";
	done();
}else{
//	$values = "( 'ddddd', 'bname2', NOW(), '333BBdfa32', '66666', '77777', NOW(), '325')";
	$values = "( '".$data["deviceid"]  ."', '".$data["name"]."', '".$data["score"]."')";
	$sql = "INSERT INTO score ( deviceid, name, score) VALUES ".$values.";";
	mysql_query($sql , $conn);

	$sql = "SELECT * FROM score order by score DESC limit 10";
	$result = mysql_query($sql , $conn);

	$num_rows = mysql_num_rows($result);

	$result_json = "";

	while ($data = mysql_fetch_array($result)) {
		$result_json .= '{ deviceid : ' . $data['deviceid'] . ', name:' . $data['name'] . ', score:' . $data['score'] . "}";
	}
/*
	for($i=0; $i < $num_rows; $i++ ){
		echo $i .
	}
*/

	echo "{status:true,ranking:".$result_json."}";
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
		echo "<li>name : ".$data["name"]."</li>";
		echo "<li>score : ".$data["score"]."</li>";
		echo "</ul>";
	}

	$flg = true;
	if( $data["deviceid"] == "" ) $flg = false;
	if( $data["name"] == "" ) $flg = false;
	if( $data["score"] == "" ) $flg = false;
	return $flg;
}

?>
