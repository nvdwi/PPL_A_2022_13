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
        if ($valid) {
            $query = "INSERT INTO mahasiswa (nama, nim, alamat, angkatan, jalur_masuk, email, nomor_hp, status) VALUES ('". $nama. "', '". $nim. "', '". $alamat. "', '". $angkatan. "', '". $jalurmasuk. "', '". $email. "', '". $telepon. "', 'AKTIF')";
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
    <title> Siram Entry </title>
    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity ="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin = "anonymous">
</head>

<body>
	<br> <br>
	<div class = "text-center">
		<label style = "font-size:20px;" bgcolor = "black"> <strong> ENTRY DATA MAHASISWA BARU </strong> </label>
	</div>
		
	<br> <br>
	<div class = "card border-0" style = "width: 650px; margin: 0 auto;">
	<div class ="row">
		<div class = "card border-0" style = "width: 200px;">
			<br> <br> <br> <br> <br>
			<br> <br> <br> <br> <br>
			<!-- tambah gambar disini -->
			<img src="images/user1.jpg" width = "200" height = "200" />
			<br>
			<div class = "card border-0" style = "width: 200px;">
				<div class = "text-center"> <strong> Status Akademik </strong> </div>
				<div style = "text-align:center;"> <type = "button" id = "status" class = "btn btn-success" style = "width: 60px; font-size: 12px;"> <strong> AKTIF </strong> </button> </div>
			</div>
		</div>

		<div class = "card border-0" style = "width: 50px;"> </div> <!-- buat pemisah foto sama form -->
		
		<div class = "card" style = "width: 400px;">
			<div class = "card-body">
			<form method = "POST" autocomplete = "on" action = "">
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
				<br>
				<strong> No. Telepon </strong> <br>
				<input type = "text" class = "form-control" id = "telepon" name = "telepon"> </input> <br>
				<strong> Email </strong> <br>
				<input type = "email" class = "form-control" id = "email" name = "email"> </input> <br>
				<strong> Provinsi </strong> <br>
				<input type = "text" class = "form-control" id = "provinsi" name = "provinsi"> </input> <br>
				<strong> Kab/Kota </strong> <br>
				<input type = "text" class = "form-control" id = "kabkota" name = "kabkota"> </input> <br>
				<strong> Alamat </strong>
				<textarea class = "form-control" style = "resize: none;" name = "alamat" rows = "4"> </textarea> <br>
			</div>
		</div>
	</div>
	</div>

	<br> <br>
	
	<div class = "card border-0" style = "width: 650px; margin: 0 auto;">
	<div class = "row">
		<div class = "card border-0" style = "width: 250px;"> </div>
		<div class = "card border-0" style = "width: 400px;"> 
			<div style = "text-align:right;"> 
				<button type = "submit" name = "submit" value = "submit" class="btn btn-primary"> Tambahkan </button>
			</div>
			<br> <br> <br>
		</div>
		</form>
	</div>
	</div>

</body>
</html>