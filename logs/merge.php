<?php

$header = '"userid","timestamp","behavior type","v1","v2"';
$fileNum = 0;
$lineNum = 0;
$files = scandir(".");
$finalContent = "";

$finalContent .= $header . "\n";

foreach ($files as $file)
{
    if (!is_dir($file) && (strrpos($file, ".csv") == strlen($file) - strlen(".csv"))) {
        $lineNum = 0;
        $fileHandle = fopen($file, "r");
        while (!feof($fileHandle))
        {
            $csvLine = fgets($fileHandle);
            if ($lineNum++ > 0) {
                $finalContent .= $csvLine;
            }
        }
        fclose($fileHandle);
    }
}

header("Content-Type: text/csv");
header("Content-Disposition: filename=Merged_Log_" . time() . ".csv");
echo @$finalContent;
?>