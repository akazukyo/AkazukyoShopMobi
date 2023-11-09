<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test</title>
</head>

<body>
  <form action="testXXS.php" method="POST">
    <input type="text" name="test" />
    <input type="submit" value="Submit" />
  </form>

  <?php 
    $name = $_POST["test"];
    echo $name;
    ?>
</body>

</html>