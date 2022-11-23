<?php
	session_start();
	require_once('database_login.php');

	if (isset($_POST["submit"])){
		$valid = TRUE;
		
		$username = test_input($_POST['username']);
		if ($username== ''){
			$error_username = "Username is required";
			$valid = FALSE;
		} 
		
		$password = test_input($_POST['pass']);
		if ($password == ''){
			$error_password = "Password is required";
			$valid = FALSE;
		}

		$user = $_POST['user'];
        if ($user == ''){
            $valid = FALSE;
        }
		
		if ($valid){
			if ($user == 'mahasiswa'){
				$query = " SELECT * FROM mahasiswa WHERE username='".$username."' AND password='".$password."' ";
			}
			if ($user == 'dosen'){
				$query = " SELECT * FROM dosen WHERE username='".$username."' AND password='".$password."' ";
			}
			if ($user == 'departemen'){
				$query = " SELECT * FROM departemen WHERE username='".$username."' AND password='".$password."' ";
			}
			if ($user == 'operator'){
				$query = " SELECT * FROM staf WHERE username='".$username."' AND password='".$password."' ";
			}
			
			$result = $db->query($query);
			if (!$result){
				die ("Could not query the database: <br />". $db->error);
			} 
			else{
				if ($result->num_rows>0){ 
					if ($user == 'mahasiswa'){
						$_SESSION['username'] = $username;
						header("Location: 10_profilmahasiswa.php"); //ganti ini kalo mau redirect ke halaman lain\
						exit;
					}
					if ($user == 'departemen'){
						$_SESSION['username'] = $username;
						header("Location: 12_profildepartemen.php"); //ganti ini kalo mau redirect ke halaman lain\
						exit;
					}
					if ($user == 'operator'){
						$_SESSION['username'] = $username;
						header("Location: 09_profiloperator.php"); //ganti ini kalo mau redirect ke halaman lain\
						exit;
					}
					if ($user == 'dosen'){
						$_SESSION['username'] = $username;
						header("Location: 11_profildosen.php"); //ganti ini kalo mau redirect ke halaman lain\
						exit;
					}				} 
				else{
					echo '<span class="error">Combination of username and password are not correct.</span>';
				}
			}
			
			$db->close();
		}
	}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name = "viewport" content = "width=device-width, initial-scale = 1">
    <title> Login </title>
    <link href='https://fonts.googleapis.com/css?family=Nunito' rel = 'stylesheet'>
    <link href = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity ="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin = "anonymous">
    <link rel = "stylesheet" href = "./style.css">
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
</head>

<body style = "background-color:#F7F7F7;"> <!-- warnain baground abu-abu -->
	<br>
	<div class = "jumbotron text-center"> <!-- Buat nengahin tulisan TITIPIN -->
		<a class = "nav-link d-inline-block me-auto" style = "font-size:50px;"> 
			<strong> SIRAM </strong> 
		</a>
	</div>
	
	<div class = "container">
		<div class = "card" style = "width: 350px; margin: 0 auto;"> <!-- biar kotak putih gak melebar pas dibesarin -->
		<div class = "card-body">
		<form method = "POST" autocomplete = "on" action = "<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
			<div style = "margin: 15px">
				<label style = "color:#AFAFAF;"> Username </label> <br>
				<input type = "text" class = "form-control" id = "username" name = "username" value="<?php if(isset($username)) echo $username;?>"> </input>
				<div class = "text-danger"> <?php if (isset($error_username)) echo $error_username;?> </div>

				<label style = "color:#AFAFAF;"> Password </label> <br>
				<input type = "password" class = "form-control" id = "pass" name = "pass" value="<?php if(isset($password)) echo $password;?>"> </input>
				<div class = "text-danger"> <?php if(isset($error_password)) echo $error_password;?> </div>

				<br>
				
				<select class="form-select" name = "user" id = "user">
					<option value="operator">Operator</option>
					<option value="mahasiswa">Mahasiswa</option>
					<option value="dosen">Dosen</option>
					<option value="departemen">Departemen</option>
				</select>
				
				<br>
				<div class="col-md-12 text-center"> <!-- Buat nengahin tombol -->
					<button class="btn btn-primary" type = "submit" name = "submit" value = "submit"> Login </button>
				</div>
			</div>
		</form>
		</div>
		</div>
	</div>
	<script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity ="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossorigin = "anonymous"> </script>
</body>
</html>