<?php
/*
Ling Xiang
Lab09
A php lab
*/
   session_start(); //create a session
   //initialize number of visits session variable
   $numVisits = 0;
   if (isset($_SESSION['num'])) {
      $_SESSION['num']++;
      $numVisits = $_SESSION['num'];
   } else {
      $numVisits = 0;
      $_SESSION['num'] = 0;
   }
//see if the cmd get variable is passed into the program.
   $cmd = "";
   if (isset($_GET['cmd'])) {
      $cmd =htmlspecialchars($_GET['cmd']);
      if ($cmd != "page1" && $cmd != "page2" && $cmd != "page3") {
         $cmd = "";
      }
   }
//YOU WILL PUT YOUR FORM HANDLING CODE HERE

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name = "description" content="Lab09">
    <meta name = "author" content="Ling Xiang">
    <meta name = "contact" content = "xiangl2@miamioh.edu">

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">


    <title>Lab09</title>
</head>
<body>
        <nav class="navbar navbar-light bg-light">
                <p>XIANGL2 - Lab09</p>
              </nav>
        <div class = "container">
            <div class = row>
                <div class = "col-3">


            <nav>
            <ul class="nav flex-column">
                <li class="nav-item">
                        <a href="index.php?cmd=page1">Random Numbers</a>
                </li>
                <li class="nav-item">
                        <a href="index.php?cmd=page2">Images</a>
                </li>
                <li class="nav-item">
                        <a href="index.php?cmd=page3">Input Form</a>
                </li>
                <li class="nav-item">
                        <a href="index.php">Home</a>
                </li>
            </ul>
            </nav>
            </div>
            <div class = "col-9">
                <h1>Home</h1>
                <table class="table">
                    <thead class="thead-light">
                    <tr><th>Variable</th><th>Value</th></tr></thead>
                    <tbody>
                    <tr><th scope = "row">HTTP_HOST</th><td></td></tr>
                    <tr><th scope = "row">HTTP_USER_AGENT</th><td></td></tr>
                    <tr><th scope = "row">REMOTE_ADDR</th><td> <?php echo $_SERVER['REMOTE_ADDR'] ?> </td></tr>
                    <tr><th scope = "row">SERVER_OFTWARE</th><td></td></tr>
                    <tr><th scope = "row">REQUEST_SCHEME</th><td></td></tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</body>



