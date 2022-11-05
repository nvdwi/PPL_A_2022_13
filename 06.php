<?php
    require_once('database_login.php');

	if (isset ($_POST["submit"])) {
        $valid = TRUE;
		$nim = test_input ($_POST['nim']);
		if ($nim == '') {
			$error_nim = "NIM harus diisi.";
            $valid = FALSE;
        }
		$statusSkripsi = test_input ($_POST['statusSkripsi']);
		if ($statusSkripsi == '') {
			$error_statusSkripsi = "Status pengambilan skripsi harus dipilih.";
            $valid = FALSE;
        }
		$nilai = test_input ($_POST['nilai']);
		if ($nilai == '') {
			$error_nilai = "Nilai harus diisi.";
            $valid = FALSE;
        }

        $dosbing = test_input ($_POST['dosbing']);
		if ($dosbing == '') {
			$error_dosbing = "Kolom dosen pembimbing harus diisi.";
            $valid = FALSE;
        }
		$berita = test_input ($_POST['berita']);
		if ($berita == '') {
			$error_berita = "File berita acara harus di-upload.";
            $valid = FALSE;
        }
		if ($valid) {
            $query = "INSERT INTO skripsi (status, nilai, scan, dosbing, nim) VALUES ('".$statusSkripsi."', '".$nilai."', '".$berita."', '".$dosbing."', '".$nim."')";
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
        <title>Entry Progress Skripsi</title>
    </head>
    <body>
    <div class = "container">
        <h1>Entry Progress Skripsi</h1>
        <div class = "card w-50 mx-auto mt-5">
            <div class = "card-body">
                <form method = "POST">
                <div class="form_group">
                    <label> NIM </label> <br>
				    <input type = "text" class = "form-control" name = "nim" value = ""> </input><br>
                    <label for="statusSkripsi">Status Skripsi</label>
                    <select id="statusSkripsi" name="statusSkripsi" class="form-select">
                        <option value="LULUS">LULUS</option>
                        <option value="SEDANG AMBIL">SEDANG AMBIL</option>
                        <option value="BELUM AMBIL">BELUM AMBIL</option>
                    </select>
                </div>
                <br>
                <div class = "form-group">
                    <label for= "nilai">Nilai</label>
                    <input type="text" class="form-control" id="nilai" name="nilai">
                </div>
                <div class="form-group">
                    <label for="dosbing">Dosen Pembimbing</label>
                    <input type="dosbing" class="form-control" id="dosbing" name="dosbing">
                </div>
                <div class="form-group">
                    <label for="berita">Berita Acara Sidang Skripsi</label>
                    <input type="file" class="form-control" id="berita" name="berita">
                </div>
                <div class = "col" style = "text-align:center;"> 
				    <button type = "submit" name = "submit" class="btn btn-primary">Upload</button>
			    </div>
                </form>
                <br>
            </div>
        </div>
    </div>      
    </body>
</html>