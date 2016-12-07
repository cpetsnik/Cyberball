<?php
phpinfo();
$userId = $_POST['userId'];
$ts = date('Ymd His');
try
{
    $handle = fopen('logs/' . $userId . '_' . $ts . '.csv', "w+");
    echo $handle;
    fwrite($handle, $_POST['log']);
    fclose($handle);
    echo 'Success';
}
catch (Exception $e)
{
    echo $e->getMessage();
}
?>