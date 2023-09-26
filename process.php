<?php
session_start(); // Bắt đầu phiên

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST["test"])) {
        $name = $_POST["test"];

        // Lưu dữ liệu vào biến phiên
        $_SESSION["test_data"] = $name;

        // Chuyển hướng người dùng về trang "test1.html"
        header("Location: test1.php");
        exit();
    }
}
?>
