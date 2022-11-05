<?php
	require_once('database_login.php');

	if (isset ($_POST["submit"])) {
        $valid = TRUE;
		$nim = test_input ($_POST['nim']);
		if ($nim == '') {
			$error_nim = "NIM harus diisi.";
            $valid = FALSE;
        }
		$semester = test_input ($_POST['semester']);
		if ($semester == '') {
			$error_semester = "Semester harus dipilih.";
            $valid = FALSE;
        }
		$skss = test_input ($_POST['skss']);
		if ($skss == '') {
			$error_skss = "Jumlah SKS harus diisi.";
            $valid = FALSE;
        }
		else if (!preg_match("/^([0-9]*)$/", $skss)) {
			$error_skss = "Kolom ini hanya dapat diisi oleh angka.";
            $valid = FALSE;
		}
        $ipSemester = test_input ($_POST['ipSemester']);
		if ($ipSemester == '') {
			$error_ipSemester = "IP semester harus diisi.";
            $valid = FALSE;
        }
		else if (!preg_match("/^([0-9]*)$/", $ipSemester)) {
			$error_ipSemester = "Kolom ini hanya dapat diisi oleh angka.";
            $valid = FALSE;
		}
        $sksk = test_input ($_POST['sksk']);
		if ($sksk == '') {
			$error_sksk = "Jumlah SKS kumulatif harus diisi.";
            $valid = FALSE;
        }
		else if (!preg_match("/^([0-9]*)$/", $sksk)) {
			$error_sksk = "Kolom ini hanya dapat diisi oleh angka.";
            $valid = FALSE;
		}
        $ipKumulatif = test_input ($_POST['ipKumulatif']);
		if ($ipKumulatif == '') {
			$error_ipKumulatif = "IP kumulatif harus diisi.";
            $valid = FALSE;
        }
		else if (!preg_match("/^([0-9]*)$/", $ipKumulatif)) {
			$error_ipKumulatif = "Kolom ini hanya dapat diisi oleh angka.";
            $valid = FALSE;
		}
		$berkasKHS = test_input ($_POST['file']);
		if ($berkasKHS == '') {
			$error_berkasKHS = "File KHS harus di-upload.";
            $valid = FALSE;
        }
		if ($valid) {
            $query = "INSERT INTO khs (semester_aktif, SKSs, SKSk, ips, ipk, scan, nim) VALUES ('".$semester."', '".$skss."', '".$sksk."', '".$ipSemester."', '".$ipKumulatif."', '".$berkasKHS."', '".$nim."')";
            $result = $db->query($query);
            if (!$result) {
                die ("Could not the query the database: <br />".$db->error.'<br>Query:'.$query);
            }
            else {
                $db->close();
            }
        }
	}
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <style>
            h1 {text-align: center;} 

            .form-group {
                margin-bottom: 16px;
            }
            label {
                margin-bottom: 8px;
            }
            .update{
                background-color:blue;
                border-radius:5px;
                color:white;
                border:1px solid #4e6096;
                display:inline-block;
                font-size:17px;
                padding:13px 25px;
                text-decoration:none;
                text-align:center;
            }
        </style>
        <title>Entry KHS</title>
    </head>
    <body>
    <div class = "container">
        <h1>Entry KHS</h1>
        <div class = "card w-50 mx-auto mt-5">
            <div class = "card-body">
                <form method = "POST">
                <div class = "form-group">
                    <label for= "nim">NIM</label>
                    <input type="text" class="form-control" id="nim" name="nim">
                </div>
                <div class="form_group">
                    <label for="semester">Semester</label>
                    <select id="semester" name="semester" class="form-select">
                        <option value="1">Semester 1</option>
                        <option value="2">Semester 2</option>
                        <option value="3">Semester 3</option>
                        <option value="4">Semester 4</option>
                        <option value="5">Semester 5</option>
                        <option value="6">Semester 6</option>
                        <option value="7">Semester 7</option>
                        <option value="8">Semester 8</option>
                        <option value="9">Semester 9</option>
                        <option value="10">Semester 10</option>
					    <option value="11">Semester 11</option>
					    <option value="12">Semester 12</option>
                    </select>
                </div>
                <br>
                <div class = "form-group">
                    <label for= "skss">SKS Semester</label>
                    <input type="text" class="form-control" id="skss" name="skss">
                </div>
                <div class = "form-group">
                    <label for= "ipSemester">IP Semester</label>
                    <input type="text" class="form-control" id="ipSemester" name="ipSemester">
                </div>
                <div class = "form-group">
                    <label for= "sksk">SKS Kumulatif</label>
                    <input type="text" class="form-control" id="sksk" name="sksk">
                </div>
                <div class = "form-group">
                    <label for= "ipKumulatif">IP Kumulatif</label>
                    <input type="text" class="form-control" id="ipKumulatif" name="ipKumulatif">
                </div>
                <div action="entryKHS" method="post" enctype="multipart/form-data">
                    <input type="file" name="file">
                    <br>
                </div>
            </div>
            <div class = "col" style = "text-align:center;"> 
				<button type = "submit" name = "submit" style = "width: 90px;" class="btn btn-primary">Upload</button>
			</div>
            <br>
        </div>
    </div>
    <br>     
    </body>
</html>