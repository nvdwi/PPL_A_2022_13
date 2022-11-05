<style>
    h1 {text-align: center;}
    h2 {text-align: center;}

    table, th, td {
        margin-left : auto;
        margin-right: auto;
        padding: 10px;
        border: 1px solid;
        border-collapse: collapse;
    }
    table{
        width: 75%;
    }
    
    a:link, a:visited{
        text-decoration: none;
        /* color:blue; */
    }
    a:hover{
        text-decoration: underline;
    }
    .Cetak{
        background-color:blue;
	    border-radius:5px;
        color:white;
	    border:1px solid #4e6096;
	    display:inline-block;
	    font-size:17px;
	    padding:13px 25px;
	    text-decoration:none;
    }
</style>

<div class="card mt-5">
    <div class="card-header"></div>
    <h1>Rekap Progress PKL Mahasiswa S-1 Informatika</h1>
    <h2>2019</h2>
    <a class="btn btn-primary" href="14_sudah.php">SUDAH</a>
    <a class="btn btn-primary" href="14_sedang.php">SEDANG</a>
    <a class="btn btn-primary" href="14_belum.php">BELUM</a>
    <div class="card-body">
        <br>
        <table class="table table-striped">
            <tr>
                <th>No.</th>
                <th>Nama</th>
                <th>NIM</th>
                <th>Angkatan</th>
                <th>Nilai</th>
            </tr>
            <?php
                require_once('database_login.php');
                $query = "SELECT mahasiswa.nama, pkl.nim, mahasiswa.angkatan, pkl.nilai FROM pkl JOIN mahasiswa ON mahasiswa.nim = pkl.nim WHERE status_pkl='SUDAH LULUS' ORDER BY nim";
                $result = $db->query($query);
                if (!$result){
                    die ("Could not query the database: <br />".$db->error."<br>Query: ".$query);
                }

                $i = 1;
                while ($row = $result -> fetch_object()) {
                    echo '<tr>';
                    echo '<td>'.$i.'</td>';
                    echo '<td>'.$row->nama.'</td>';
                    echo '<td>'.$row->nim.'</td>';
                    echo '<td>'.$row->angkatan.'</td>';
                    echo '<td>'.$row->nilai.'</td>';
                    echo '</tr>';
                    $i++;
                }
                echo '</table>';
                echo '<br />';

                $result -> free();
                $db -> close();
            ?>
            </table>
            <br>
            <a class="Cetak" href="">CETAK</a>
    </div>
</div>

<?php include('./footer.php') ?>