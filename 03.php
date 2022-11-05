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
		$jumSKS = test_input ($_POST['jumSKS']);
		if ($jumSKS == '') {
			$error_jumSKS = "Jumlah SKS harus diisi.";
            $valid = FALSE;
        }
		else if (!preg_match("/^([0-9]*)$/", $jumSKS)) {
			$error_jumSKS = "Kolom ini hanya dapat diisi oleh angka.";
            $valid = FALSE;
		}
		$berkasIRS = test_input ($_POST['berkasIRS']);
		if ($berkasIRS == '') {
			$error_berkasIRS = "File IRS harus di-upload.";
            $valid = FALSE;
        }
		if ($valid) {
            $query = "INSERT INTO irs (semester_aktif, jumlah_sks, scan, nim) VALUES ('".$semester."', '".$jumSKS."', '".$berkasIRS."', '".$nim."')";
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
    <meta name = "viewport" content = "width=device-width, initial-scale = 1">
    <title> Entry IRS </title>
    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity ="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin = "anonymous">
</head>

<body>	
	<br>
	<div class = "card" style = "width: 490px; margin: 0 auto;">
		<br> <br>
		<div class = "col-sm-12 text-center">
			<label style = "font-size:20px;"> <strong> ENTRY IRS </strong> </label>
		</div>
		
		<br>
		<div class = "card border-0" style = "width: 470px; margin: 0 auto;">
		<div class ="row">
			<div class = "card border-0" style = "width: 150px;">
				<!-- tambah gambar disini -->
				<img src="images/user1.jpg" width = "150" height = "150" />
				<div class = "card border-0" style = "width: 150px;">
					<div style = "text-align:center;"> <type = "button" id = "status" class = "btn btn-success" style = "width: 60px; font-size: 12px;"> 
						<strong> AKTIF </strong> </button> 
					</div>
				</div>
			</div>

			<div class = "card border-0" style = "width: 20px;"> </div>
	
			<div class = "card border-0" style = "width: 300px;">
				<div class = "card-body">
				<form method = "POST">

				<strong> NIM </strong> <br>
				<input type = "text" class = "form-control" name = "nim" value = ""> </input>
				
				<strong> Semester </strong> <br>
				<select class="form-select" name = "semester" id = "semester">
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
				
				<br>
				<strong> Jumlah SKS yang Diambil </strong> <br>
				<input type = "text" class = "form-control" name = "jumSKS" value = "24"> </input>
				
				<br>
				<strong> Berkas IRS </strong> <br>
				<input type = "file" class = "form-control" name = "berkasIRS" value = ""> </input>
				
				<br>
				<br>
				<div class = "row">
					<div class = "col" style = "text-align:left;"> 
						<button type = "submit" name = "submit" style = "width: 90px;" class="btn btn-primary"> Simpan </button>
					</div>
	
					<br>
					<div class = "col" style = "text-align:right;"> 
						<button type = "submit" class="btn btn-danger" style = "width: 90px;"> Batal </button>
					</div>
				</div>
				</div>
				<br> <br>
				</form>
			</div>
		</div>	
		</div>
	</div>
	<br>
	<br>
</body>
</html>

















