<?php
require_once 'inc/db.php';
?>
<!DOCTYPE html>
<html lang="en">
<?php require_once 'inc/head.php'; ?>
  <body>
<?php
require_once 'inc/navi.php';





$sql = "INSERT INTO user ( date ,flight_no ,major ,minor ,entry_date ,seat_no ) VALUES (  '2015-09-01',  '1111111112',  '22223',  '33334',  '2015-09-07',  '33AB' );";
$sql = "INSERT INTO  `xmlmilln_hackathon`.`coin` (user_id,date,beacon_uuid,score)"."VALUES (NULL ,  '11111',  '2015-09-01',  '22222',  '33333');";
$sql = "INSERT INTO coin ( user_id,date,beacon_uuid,score ) VALUES ( '11111',  '2015-09-01',  '22222',  '33333');";
$sql = "INSERT INTO dm ( field1 ) VALUES ('aaa')";


$sql = "INSERT INTO user ( date ,flight_no ,major ,minor ,entry_date ,seat_no ) VALUES (  '2015-09-01',  '1111111112',  '22223',  '33334',  '2015-09-07',  '33AB' );";
//*/
mysql_query($sql , $conn);

echo "done2";


/*
	$hoge='SELECT * FROM dm';
	$query_hoge=mysql_query($hoge, $conn);
	while($row_hoge=mysql_fetch_array($query_hoge)){
		print $row_hoge['field1'];
	}
*/


$close_flag = mysql_close($conn);
//if ($close_flag) print('<p>切断に成功しました。</p>');
?>
</body>
</html>






