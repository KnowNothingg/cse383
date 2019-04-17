<!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content=
      "width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
  <title>School Info System - huw8</title><!-- Bootstrap -->
  <!-- Latest compiled and minified CSS -->
  <link rel="stylesheet" href=
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <!-- jQuery library -->

  <script src=
  "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><!-- Latest compiled JavaScript -->

  <script src=
  "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script><!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <style>
  </style>
  </head>
  <body>
<?php
        session_start();
	if(!empty($_POST)){
		$_SESSION['user']=htmlspecialchars($_POST['user']);
	}
	$mysqli=mysqli_connect("localhost","cse383","HoABBHrBfXgVwMSz","cse383");
	if(mysqli_connect_errno($mysqli)){
	        echo "Failed to connect to MySQL:" . mysqli_connect_error();
		die;
	}
?>
  <div class='container-fluid'>
  <h1>School Info System</h1>
<?php
	$user = mysqli_query($mysqli,"SELECT user,password from users");
	if(!$user){
	echo "error on sql - $mysqli->error";
	}
	else{
	if(isset($_POST['user'])&&isset($_POST['password'])){
		while($row = mysqli_fetch_assoc($user)){
				if($_POST['user']==$row['user']&&password_verify($_POST['password'],$row['password'])){
				$_SESSION['isAuthenticated']=true;
				}
			
			}
		}
	}
if(isset($_SESSION['user'])&&isset($_SESSION['isAuthenticated']))	 
{
	if($_SESSION['isAuthenticated']){
		$schoolData = mysqli_query($mysqli,"SELECT SchoolName, url, NumUndergrads, Median10YearEarnings from SchoolData order by SchoolName");
	if(!$schoolData){
	        echo "error on sql - $mysqli->error";
	}
	echo "<div><form method='get' class='form-inline'>";
	echo "<label for='amount'>Filter by min salary</label><input type='text' name='amount' class='form-control mx-sm-3'><input type='submit' name='filter' value='Filter'></form></div>";
	echo "<table class='table'>";
	echo "<thead><tr><th>School Name</th><th>Num Undergrads</th><th>Median Salary</th></tr></thread>";
	if(isset($_GET['amount'])&&is_numeric($_GET['amount'])){
		while($row1 = mysqli_fetch_assoc($schoolData)){
			if($row1['Median10YearEarnings']>=$_GET['amount'])
                                echo "<tr><td><a href='http://$row1[url]' >$row1[SchoolName]</a></td><td>$row1[NumUndergrads]</td><td>$row1[Median10YearEarnings]</td></tr>";

		}
	}
	else{
	while($row1 = mysqli_fetch_assoc($schoolData)){
	echo "<tr><td><a href='http://$row1[url]' >$row1[SchoolName]</a></td><td>$row1[NumUndergrads]</td><td>$row1[Median10YearEarnings]</td></tr>";
	}
	}
	echo "</table>";

	}
}
else{

	echo "<h2>Please authenticate</h2>";
	if(isset($_SESSION['user']))
	echo "<div class='alert alert-danger' style='margin: 30px;'>Invalid User</div>";
	echo "<div>";
	echo "<form method='post' class='form-inline'>";
	echo "<label for='user'>user</label><input type='test' name='user' class='form-control mx-sm-3'>";
	echo "<label for='password'>Password</password><input type='password' name='password'>";
	echo "<input type='submit' name='submit'>";
	echo "</form>";
	echo "</div>";

}
?>
<!--div class=container-fluid-->
</body>
</html>
