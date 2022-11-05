<?php
	require_once('database_login.php');

	if (isset ($_POST["submit"])) {
        $valid = TRUE;
		$nim = test_input ($_POST['nim']);
		if ($nim == '') {
			$error_nim = "NIM harus diisi.";
            $valid = FALSE;
        }
        $nama = test_input ($_POST['nama']);
        if ($nama == '') {
            $error_nama = "Nama harus diisi.";
            $valid = FALSE;
        }
        else if (!preg_match("/^[a-zA-Z ]*$/", $nama)) {
            $error_nama = "Nama hanya dapat terdiri dari huruf dan spasi.";
            $valid = FALSE;
        }
        $alamat = test_input ($_POST['alamat']);
        if ($alamat == '') {
            $error_alamat = "Alamat harus diisi.";
            $valid = FALSE;
        }
        $angkatan = $_POST['angkatan'];
        if ($angkatan == ''){
            $error_angkatan = "Angkatan harus diisi.";
            $valid = FALSE;

        }
		$jalurmasuk = $_POST['jalurmasuk'];
        if ($jalurmasuk == ''){
            $error_jalurmasuk = "Jalur masuk harus diisi.";
            $valid = FALSE;

        }
		$email = $_POST['email'];
        if ($email == ''){
            $error_email = "Email harus diisi.";
            $valid = FALSE;

        }
		$telepon = $_POST['telepon'];
        if ($telepon == ''){
            $error_telepon = "Nomor ponsel harus diisi.";
            $valid = FALSE;

        }
		$status = $_POST['status'];
        if ($status == ''){
            $error_status = "Status harus diisi.";
            $valid = FALSE;

        }
		if ($valid) {
            $query = "UPDATE mahasiswa SET nama='".$nama."', nim='".$nim."', alamat='".$alamat."', angkatan='".$angkatan."', jalur_masuk='".$jalurmasuk."', email='".$email."', nomor_hp='".$telepon."', status='".$status."' WHERE nim='".$nim."'";
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
    <title> Siram Ubah Data </title>
    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity ="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin = "anonymous">
</head>

<body>	
	<br>
	<div class = "card" style = "width: 790px; margin: 0 auto;">
		<br> <br>
		<div class = "col-sm-12 text-center">
			<label style = "font-size:20px;"> <strong> UBAH DATA </strong> </label>
		</div>
		
		<br>
		<div class = "card border-0" style = "width: 770px; margin: 0 auto;">
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
					<input type = "text" class = "form-control" id = "nim" name = "nim"> </input> <br>
					<strong> Nama </strong> <br>
					<input type = "text" class = "form-control" id = "nama" name = "nama"> </input> <br>
					<strong> Angkatan </strong> <br>
					<input type = "text" class = "form-control" id = "angkatan" name = "angkatan"> </input> <br>
					<strong> Jalur Masuk </strong> <br>
					<select class="form-select" name = "jalurmasuk" id = "jalurmasuk">
						<option value="SNMPTN">SNMPTN</option>
						<option value="SBMPTN">SBMPTN</option>
						<option value="Mandiri">Mandiri</option>
						<option value="Lainnya">Lainnya</option>
					</select>
				</div>
			</div>
		
		
			<div class = "card border-0" style = "width: 300px;">
			<div class = "card-body">
				<strong> Email </strong> <br> 
				<input type = "email" class = "form-control" name = "email" value = ""> </input> <br>
				<strong> No. Telepon </strong> <br>
				<input type = "text" class = "form-control" name = "telepon" value = ""> </input> <br>
				<strong> Status </strong>
				<select class="form-select" name = "status" id = "status">
					<option value="aktif">AKTIF</option>
					<option value="cuti">CUTI</option>
					<option value="mangkir">MANGKIR</option>
					<option value="do">DROPPED OUT</option>
					<option value="lulus">LULUS</option>
				</select>
			</div>
			</div>
		</div>	
		</div>
			
		<div class = "card border-0" style = "width: 770px; margin: 0 auto;">
		<div class = "row">
			<div class = "card border-0" style = "width: 185px;"> </div>
			<div class = "card border-0" style = "width: 485px;">
				<strong> Alamat </strong>
				<textarea class = "form-control" style = "resize: none;" name = "alamat" rows = "4"> 
				</textarea> <br>
			</div>
			<div class = "card border-0" style = "width: 90px;">
				<br> <br> <br>
				<div style = "text-align:right;"> 
					<button type = "submit" class="btn btn-primary" name = "submit"> Update </button>
				</div>
			</div>
			</form>
		</div>
		</div>
	</div>
	<br>
	<br>
</body>
</html>

















