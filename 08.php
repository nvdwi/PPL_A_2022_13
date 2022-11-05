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
            .Search{
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
        <title>Pencarian Progres Studi Mahasiswa</title>
    </head>
    <body>
    <div class = "container">
        <h1>Pencarian Progres Studi Mahasiswa</h1>
        <div class = "card w-50 mx-auto mt-5">
            <div class = "card-body">
                <form method = "POST">
                <div class="form_group">
                    <label for="nama">Nama</label>
                    <input type="text" class="form-control" id="nama" name="nama" maxlength="50">
                </div>
                <br>
                <div class = "form-group">
                    <label for= "nim">NIM</label>
                    <input type="text" class="form-control" id="nim" name="nim" maxlength="14">
                </div>
                </form>
                <a class="Search" href="">Search</a>
            </div>
        </div>
        <br>

    </div>      
    </body>
</html>