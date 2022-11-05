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
    <meta name = "viewport" content = "width=device-width, initial-scale = 1">
    <title> Siram Entry PKL </title>
    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity ="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin = "anonymous">
</head>

<body>	
	<br>
	<div class = "card" style = "width: 900px; margin: 0 auto;">
		<br> <br>
		<div class = "col-sm-12 text-center">
			<label style = "font-size:20px;"> <strong> ENTRY PROGRESS PKL </strong> </label>
		</div>
		
		<br>
		<div class = "card border-0" style = "width: 850px; margin: 0 auto;">
			<!-- dua kotak atas-->
			<div class = "row">
				<div class = "col-5">
					<div class = "card" style = "background-color: #BF5D21">
					<div class = "card-body">
						<strong> Semester </strong> <br>
						<label id = "semester"> 5 </label>
					</div>
					</div>
				</div>
				
				<div class = "col-2">
					
				</div>
				
				<div class = "col-5">
					<div class = "card" style = "background-color: #E73C35">
					<div class = "card-body">
						<strong> SKS Terambil </strong> <br>
						<label id = "sks"> 89 </label>
					</div>
					</div>				
				</div>
				
			</div>
			
			<br>
			
			<!-- dua kotak bawah-->
			<div class = "row">
				<div class = "col-5">
					<div class = "card" style = "background-color: #CCACDB">
					<div class = "card-body">
						<strong> Status PKL </strong> <br>
						<label id = "statuspkl"> Belum Ambil </label>
					</div>
					</div>
				</div>
				
				<div class = "col-2">
					
				</div>
				
				<div class = "col-5">
					<div class = "card" style = "background-color: #F46D75">
					<div class = "card-body">
						<strong> Dosen Pembimbing </strong> <br>
						<label id = "dosbing"> - </label>
					</div>
					</div>				
				</div>
				
			</div>
		</div>
		
		<br>
		<div class = "card" style = "width: 850px; margin: 0 auto;">
		<div class ="row">
			<div class = "col-5">
				<form method = "POST">
				<div class = "card-body">
				<br>
				<strong> Status </strong> <br>
				<select class="form-select" name = "statuspkl" id = "statuspkl">
					<option value="status1">Semester 1</option>
					<option value="status2">Semester 2</option>
					<option value="status3">Semester 3</option>
					<option value="status4">Semester 4</option>
				</select>
				
				<br>
				<strong> Dosen Pembimbing </strong> <br>
				<select class="form-select" name = "statuspkl" id = "statuspkl">
					<option value="dosen1">Dosen 1</option>
					<option value="dosen2">Dosen 2</option>
					<option value="dosen3">Dosen 3</option>
					<option value="dosen4">Dosen 4</option>
				</select>
				
				<br>
				<strong> Nama Instansi </strong> <br>
				<input type = "text" class = "form-control" name = "instansi" value = ""> </input>
				<br>
				</div>
			</div>

			<div class = "col-1"> </div>

			<div class = "col-6">
				<div class = "card-body">
				<br> <br>
				<input type = "file" class = "form-control" name = "hasilKHS" value = ""> </input>
				</div>
			</div>
		</div>	
		</div>

		<div class = "card border-0" style = "width: 850px; margin: 0 auto;">
			<br>
			<div class = "col" style = "text-align:right;"> 
			<button type = "submit" class="btn btn-primary" style = "width: 150px;"> Update Progress PKL </button>
			</form>
			</div>
		<br>
		</div>
	</div>
	<br>
	<br>
</body>
</html>

















