<?
if(!$is_live){
echo<<<EOF
<ul>
<li><a href="index.php">TOP</a></li>
<li><a href="user.php?test=aa">USER no param</a></li>
<li><a href="user.php?user_name=Hajime&seat_no=333&flight_no=55333&deviceId=IB946c5e3cb294007a27cec8b0d0a2606fda95d83a&major=0&minor=3">USER</a></li>
<li><a href="coin.php">Coin no param</a></li>
<li><a href="coin.php?deviceid=abc&user_id=11111">Coin</a></li>
</ul>
</div>
EOF;
}
?>