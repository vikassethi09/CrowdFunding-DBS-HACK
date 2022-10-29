<?php
$insert = false;
if(isset($_POST['name'])){
    // Set connection variables
    $server = "localhost";
    $username = "root";
    $password = "";

    // Create a database connection
    $con = mysqli_connect($server, $username, $password);

    // Check for connection success
    if(!$con){
        die("connection to this database failed due to" . mysqli_connect_error());
    }
    // echo "Success connecting to the db";

    // Collect post variables
    $name = $_POST['name'];
    $amount = $_POST['amount'];

    $sql = "INSERT INTO `test`.`crowd` (`name`,`amount`) VALUES ('$name', '$amount');";
    // echo $sql;

    // Execute the query
    if($con->query($sql) == true){
        // echo "Successfully inserted";

        // Flag for successful insertion
        $insert = true;
    }
    else{
        echo "ERROR: $sql <br> $con->error";
    }

    // Close the database connection
    $con->close();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Data</title>
</head>
<body>
    <?php
        if($insert == true){
        echo "<p class='submitMsg'>Thanks for submitting your form. We are happy that you help the poor</p>";
        }
    ?>
    <form action="index.php" method="post">
        <input type="text" name="name" id ="name" placeholder="enter name" >
        <input type="text" name = "amount" id = "amount" placeholder="enter amount">
        <button class="btn">Submit</button>
    </form>

</body>
</html>

