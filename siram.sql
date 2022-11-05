-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 27, 2022 at 01:15 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `siram`
--

-- --------------------------------------------------------

--
-- Table structure for table `departemen`
--

CREATE TABLE `departemen` (
  `kode_departemen` char(6) NOT NULL,
  `nama` varchar(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dosen`
--

CREATE TABLE `dosen` (
  `nama` varchar(36) NOT NULL,
  `nip` int(11) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `email` varchar(36) NOT NULL,
  `nomor_hp` varchar(15) NOT NULL,
  `status` varchar(20) NOT NULL,
  `kode_departemen` char(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `dosen_wali`
--

CREATE TABLE `dosen_wali` (
  `nama` varchar(36) NOT NULL,
  `nip` int(11) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `email` varchar(36) NOT NULL,
  `nomor_hp` varchar(15) NOT NULL,
  `status` varchar(20) NOT NULL,
  `kode_departemen` char(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `irs`
--

CREATE TABLE `irs` (
  `semester_aktif` int(11) NOT NULL,
  `jumlah_sks` int(11) NOT NULL,
  `scan` varchar(150) NOT NULL,
  `nim` char(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `irs`
--

INSERT INTO `irs` (`semester_aktif`, `jumlah_sks`, `scan`, `nim`) VALUES
(2, 24, '5', '12'),
(1, 24, '02.php', '13241');

-- --------------------------------------------------------

--
-- Table structure for table `khs`
--

CREATE TABLE `khs` (
  `semester_aktif` int(11) NOT NULL,
  `SKSs` int(11) NOT NULL,
  `SKSk` int(11) NOT NULL,
  `ips` decimal(10,0) NOT NULL,
  `ipk` decimal(10,0) NOT NULL,
  `scan` varchar(150) NOT NULL,
  `nim` char(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `khs`
--

INSERT INTO `khs` (`semester_aktif`, `SKSs`, `SKSk`, `ips`, `ipk`, `scan`, `nim`) VALUES
(5, 89, 100, '4', '5', '01.php', '12'),
(1, 3, 22, '12', '22', '1', '13241231123131'),
(5, 89, 100, '4', '4', '1', '24060120130087'),
(6, 4, 4, '4', '4', '05.php', '24060120140079'),
(3, 121, 1212112121, '2121', '21212', '03.php', '240602013333'),
(7, 5, 55, '5', '5', '09_profiloperator.php', '787878');

-- --------------------------------------------------------

--
-- Table structure for table `mahasiswa`
--

CREATE TABLE `mahasiswa` (
  `nama` varchar(36) NOT NULL,
  `nim` char(14) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `angkatan` int(11) NOT NULL,
  `jalur_masuk` varchar(20) NOT NULL,
  `email` varchar(36) NOT NULL,
  `nomor_hp` varchar(15) NOT NULL,
  `status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `mahasiswa`
--

INSERT INTO `mahasiswa` (`nama`, `nim`, `alamat`, `angkatan`, `jalur_masuk`, `email`, `nomor_hp`, `status`) VALUES
('Kate Bishop', '24060119120006', 'Jalan Prof. Sudarto', 2019, 'SNMPTN', 'katebishop@gmail.com', '082134507132', 'SEDANG'),
('America Chavez', '24060119130013', 'Jalan Tirto Agung', 2019, 'SBMPTN', 'americachavez@gmail.com', '089611456753', 'AKTIF'),
('Peter Parker', '24060119140008', 'Jalan Jurang Belimbing', 2019, 'Mandiri', 'peterparker@gmail.com', '082134517132', 'AKTIF'),
('Shang-Chi', '24060119140105', 'Jalan Banjarsari Selatan', 2019, 'Mandiri', 'shangchi@gmail.com', '089611456764', 'AKTIF'),
('TEST', '56565656', 'LLLLL', 2020, 'SNMPTN', 'michelle@yahoo.com', '908080808', 'AKTIF');

-- --------------------------------------------------------

--
-- Table structure for table `pkl`
--

CREATE TABLE `pkl` (
  `status_pkl` varchar(20) NOT NULL,
  `nilai` char(1) DEFAULT NULL,
  `scan` varchar(150) DEFAULT NULL,
  `nim` char(14) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pkl`
--

INSERT INTO `pkl` (`status_pkl`, `nilai`, `scan`, `nim`) VALUES
('SEDANG AMBIL', NULL, NULL, '24060119120006'),
('BELUM AMBIL', NULL, NULL, '24060119130013'),
('SUDAH LULUS', 'A', '1', '24060119140008'),
('SUDAH LULUS', 'A', '1', '24060119140105');

-- --------------------------------------------------------

--
-- Table structure for table `skripsi`
--

CREATE TABLE `skripsi` (
  `status` varchar(20) NOT NULL,
  `nilai` char(1) NOT NULL,
  `scan` varchar(150) NOT NULL,
  `nim` char(14) NOT NULL,
  `dosbing` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `skripsi`
--

INSERT INTO `skripsi` (`status`, `nilai`, `scan`, `nim`, `dosbing`) VALUES
('LULUS', '3', '05.php', '13241231123131', 'pak fajar'),
('LULUS', '3', '04.php', '132412319999', 'pak fajar'),
('LULUS', '1', 'database_login.php', '45362812', 'pak fajar'),
('BELUM AMBIL', '3', 'siram.sql', '6291', 'pak fajar');

-- --------------------------------------------------------

--
-- Table structure for table `staf`
--

CREATE TABLE `staf` (
  `nama` varchar(36) NOT NULL,
  `id` char(6) NOT NULL,
  `alamat` varchar(100) NOT NULL,
  `email` varchar(36) NOT NULL,
  `nomor_hp` varchar(15) NOT NULL,
  `status` varchar(20) NOT NULL,
  `kode_departemen` char(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departemen`
--
ALTER TABLE `departemen`
  ADD PRIMARY KEY (`kode_departemen`);

--
-- Indexes for table `dosen`
--
ALTER TABLE `dosen`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `dosen_wali`
--
ALTER TABLE `dosen_wali`
  ADD PRIMARY KEY (`nip`);

--
-- Indexes for table `irs`
--
ALTER TABLE `irs`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `khs`
--
ALTER TABLE `khs`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `mahasiswa`
--
ALTER TABLE `mahasiswa`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `pkl`
--
ALTER TABLE `pkl`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `skripsi`
--
ALTER TABLE `skripsi`
  ADD PRIMARY KEY (`nim`);

--
-- Indexes for table `staf`
--
ALTER TABLE `staf`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
