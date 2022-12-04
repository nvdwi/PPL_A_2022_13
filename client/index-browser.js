
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.3.1
 * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
 */
Prisma.prismaVersion = {
  client: "4.3.1",
  engine: "c875e43600dfe042452e0b868f7a48b817b9640b"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AdminScalarFieldEnum = makeEnum({
  id_adm: 'id_adm',
  nama: 'nama',
  noInduk: 'noInduk',
  password: 'password',
  kode_departement: 'kode_departement',
  role: 'role',
  createdAt: 'createdAt'
});

exports.Prisma.Bio_mahasiswaScalarFieldEnum = makeEnum({
  id_bio: 'id_bio',
  no_telp: 'no_telp',
  provinsi: 'provinsi',
  email: 'email',
  kota: 'kota',
  alamat: 'alamat'
});

exports.Prisma.DosenScalarFieldEnum = makeEnum({
  id_dsn: 'id_dsn',
  nama: 'nama',
  noInduk: 'noInduk',
  password: 'password',
  kode_departement: 'kode_departement',
  role: 'role',
  createdAt: 'createdAt'
});

exports.Prisma.IrsScalarFieldEnum = makeEnum({
  id_Irs: 'id_Irs',
  semester: 'semester',
  jumlahSks: 'jumlahSks',
  berkas: 'berkas',
  url: 'url'
});

exports.Prisma.KhsScalarFieldEnum = makeEnum({
  id_khs: 'id_khs',
  semester: 'semester',
  ip_semester: 'ip_semester',
  ip_kumulatif: 'ip_kumulatif',
  jumlah_sks: 'jumlah_sks',
  berkas_khs: 'berkas_khs',
  url: 'url'
});

exports.Prisma.MahasiswaScalarFieldEnum = makeEnum({
  id_mhs: 'id_mhs',
  nama: 'nama',
  noInduk: 'noInduk',
  angkatan: 'angkatan',
  password: 'password',
  status: 'status',
  image: 'image',
  url: 'url',
  role: 'role',
  createdAt: 'createdAt'
});

exports.Prisma.NilaiPklScalarFieldEnum = makeEnum({
  id_nilai: 'id_nilai',
  nilaiPkl: 'nilaiPkl'
});

exports.Prisma.PklScalarFieldEnum = makeEnum({
  id_pkl: 'id_pkl',
  status_pkl: 'status_pkl',
  dospem: 'dospem',
  nama_instantsi: 'nama_instantsi',
  berkas_pkl: 'berkas_pkl',
  url: 'url'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sid: 'sid',
  data: 'data',
  expiresAt: 'expiresAt'
});

exports.Prisma.SkripsiScalarFieldEnum = makeEnum({
  id_skripsi: 'id_skripsi',
  status_skripsi: 'status_skripsi',
  tgl_sidang: 'tgl_sidang',
  dospem: 'dospem',
  berkas_skripsi: 'berkas_skripsi',
  url: 'url'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.VerifikasiScalarFieldEnum = makeEnum({
  id_verif: 'id_verif',
  verif: 'verif'
});


exports.Prisma.ModelName = makeEnum({
  Session: 'Session',
  Mahasiswa: 'Mahasiswa',
  Verifikasi: 'Verifikasi',
  Bio_mahasiswa: 'Bio_mahasiswa',
  Irs: 'Irs',
  Pkl: 'Pkl',
  nilaiPkl: 'nilaiPkl',
  Khs: 'Khs',
  Skripsi: 'Skripsi',
  Dosen: 'Dosen',
  Admin: 'Admin'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
