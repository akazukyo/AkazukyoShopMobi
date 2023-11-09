<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test1</title>
</head>
<body>
    <h1>Data from Test:</h1>
    <?php
    session_start(); // Bắt đầu phiên

    // Kiểm tra xem dữ liệu có tồn tại trong biến phiên không
    if (isset($_SESSION["test_data"])) {
        $name = $_SESSION["test_data"];
        echo "<p>Data from Test: $name</p>";

        // Xóa dữ liệu khỏi biến phiên nếu cần
        unset($_SESSION["test_data"]);
    } else {
        echo "<p>No data from Test.</p>";
    }
    ?>
</body>
</html>
