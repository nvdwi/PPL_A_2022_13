
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('@prisma/client/runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('@prisma/client/runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "node_modules\\.prisma\\client",
    ".prisma\\client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Session\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"sid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"data\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"expiresAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Mahasiswa\",\"dbName\":null,\"fields\":[{\"name\":\"id_mhs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noInduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"angkatan\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"biodata\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bio_mahasiswa\",\"relationName\":\"Bio_mahasiswaToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataIrs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Irs\",\"relationName\":\"IrsToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataKhs\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Khs\",\"relationName\":\"KhsToMahasiswa\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataPkl\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pkl\",\"relationName\":\"MahasiswaToPkl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dataSkripsi\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Skripsi\",\"relationName\":\"MahasiswaToSkripsi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verifikasi\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Verifikasi\",\"relationName\":\"MahasiswaToVerifikasi\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Verifikasi\",\"dbName\":null,\"fields\":[{\"name\":\"id_verif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"relationName\":\"MahasiswaToVerifikasi\",\"relationFromFields\":[\"id_verif\"],\"relationToFields\":[\"id_mhs\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Bio_mahasiswa\",\"dbName\":null,\"fields\":[{\"name\":\"id_bio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"no_telp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"provinsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alamat\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"relationName\":\"Bio_mahasiswaToMahasiswa\",\"relationFromFields\":[\"id_bio\"],\"relationToFields\":[\"id_mhs\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Irs\",\"dbName\":null,\"fields\":[{\"name\":\"id_Irs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlahSks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"berkas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"relationName\":\"IrsToMahasiswa\",\"relationFromFields\":[\"id_Irs\"],\"relationToFields\":[\"id_mhs\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Pkl\",\"dbName\":null,\"fields\":[{\"name\":\"id_pkl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_pkl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dospem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama_instantsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"berkas_pkl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"relationName\":\"MahasiswaToPkl\",\"relationFromFields\":[\"id_pkl\"],\"relationToFields\":[\"id_mhs\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilai\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"nilaiPkl\",\"relationName\":\"PklTonilaiPkl\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"nilaiPkl\",\"dbName\":null,\"fields\":[{\"name\":\"id_nilai\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nilaiPkl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Pkl\",\"relationName\":\"PklTonilaiPkl\",\"relationFromFields\":[\"id_nilai\"],\"relationToFields\":[\"id_pkl\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Khs\",\"dbName\":null,\"fields\":[{\"name\":\"id_khs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"semester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip_semester\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ip_kumulatif\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"jumlah_sks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"berkas_khs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"relationName\":\"KhsToMahasiswa\",\"relationFromFields\":[\"id_khs\"],\"relationToFields\":[\"id_mhs\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Skripsi\",\"dbName\":null,\"fields\":[{\"name\":\"id_skripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":true,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status_skripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tgl_sidang\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dospem\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"berkas_skripsi\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Mahasiswa\",\"relationName\":\"MahasiswaToSkripsi\",\"relationFromFields\":[\"id_skripsi\"],\"relationToFields\":[\"id_mhs\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Dosen\",\"dbName\":null,\"fields\":[{\"name\":\"id_dsn\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noInduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_departement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Admin\",\"dbName\":null,\"fields\":[{\"name\":\"id_adm\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nama\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"noInduk\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"kode_departement\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Session\",\"plural\":\"sessions\",\"findUnique\":\"findUniqueSession\",\"findFirst\":\"findFirstSession\",\"findMany\":\"findManySession\",\"create\":\"createOneSession\",\"createMany\":\"createManySession\",\"delete\":\"deleteOneSession\",\"update\":\"updateOneSession\",\"deleteMany\":\"deleteManySession\",\"updateMany\":\"updateManySession\",\"upsert\":\"upsertOneSession\",\"aggregate\":\"aggregateSession\",\"groupBy\":\"groupBySession\"},{\"model\":\"Mahasiswa\",\"plural\":\"mahasiswas\",\"findUnique\":\"findUniqueMahasiswa\",\"findFirst\":\"findFirstMahasiswa\",\"findMany\":\"findManyMahasiswa\",\"create\":\"createOneMahasiswa\",\"createMany\":\"createManyMahasiswa\",\"delete\":\"deleteOneMahasiswa\",\"update\":\"updateOneMahasiswa\",\"deleteMany\":\"deleteManyMahasiswa\",\"updateMany\":\"updateManyMahasiswa\",\"upsert\":\"upsertOneMahasiswa\",\"aggregate\":\"aggregateMahasiswa\",\"groupBy\":\"groupByMahasiswa\"},{\"model\":\"Verifikasi\",\"plural\":\"verifikasis\",\"findUnique\":\"findUniqueVerifikasi\",\"findFirst\":\"findFirstVerifikasi\",\"findMany\":\"findManyVerifikasi\",\"create\":\"createOneVerifikasi\",\"createMany\":\"createManyVerifikasi\",\"delete\":\"deleteOneVerifikasi\",\"update\":\"updateOneVerifikasi\",\"deleteMany\":\"deleteManyVerifikasi\",\"updateMany\":\"updateManyVerifikasi\",\"upsert\":\"upsertOneVerifikasi\",\"aggregate\":\"aggregateVerifikasi\",\"groupBy\":\"groupByVerifikasi\"},{\"model\":\"Bio_mahasiswa\",\"plural\":\"bio_mahasiswas\",\"findUnique\":\"findUniqueBio_mahasiswa\",\"findFirst\":\"findFirstBio_mahasiswa\",\"findMany\":\"findManyBio_mahasiswa\",\"create\":\"createOneBio_mahasiswa\",\"createMany\":\"createManyBio_mahasiswa\",\"delete\":\"deleteOneBio_mahasiswa\",\"update\":\"updateOneBio_mahasiswa\",\"deleteMany\":\"deleteManyBio_mahasiswa\",\"updateMany\":\"updateManyBio_mahasiswa\",\"upsert\":\"upsertOneBio_mahasiswa\",\"aggregate\":\"aggregateBio_mahasiswa\",\"groupBy\":\"groupByBio_mahasiswa\"},{\"model\":\"Irs\",\"plural\":\"irs\",\"findUnique\":\"findUniqueIrs\",\"findFirst\":\"findFirstIrs\",\"findMany\":\"findManyIrs\",\"create\":\"createOneIrs\",\"createMany\":\"createManyIrs\",\"delete\":\"deleteOneIrs\",\"update\":\"updateOneIrs\",\"deleteMany\":\"deleteManyIrs\",\"updateMany\":\"updateManyIrs\",\"upsert\":\"upsertOneIrs\",\"aggregate\":\"aggregateIrs\",\"groupBy\":\"groupByIrs\"},{\"model\":\"Pkl\",\"plural\":\"pkls\",\"findUnique\":\"findUniquePkl\",\"findFirst\":\"findFirstPkl\",\"findMany\":\"findManyPkl\",\"create\":\"createOnePkl\",\"createMany\":\"createManyPkl\",\"delete\":\"deleteOnePkl\",\"update\":\"updateOnePkl\",\"deleteMany\":\"deleteManyPkl\",\"updateMany\":\"updateManyPkl\",\"upsert\":\"upsertOnePkl\",\"aggregate\":\"aggregatePkl\",\"groupBy\":\"groupByPkl\"},{\"model\":\"nilaiPkl\",\"plural\":\"nilaiPkls\",\"findUnique\":\"findUniquenilaiPkl\",\"findFirst\":\"findFirstnilaiPkl\",\"findMany\":\"findManynilaiPkl\",\"create\":\"createOnenilaiPkl\",\"createMany\":\"createManynilaiPkl\",\"delete\":\"deleteOnenilaiPkl\",\"update\":\"updateOnenilaiPkl\",\"deleteMany\":\"deleteManynilaiPkl\",\"updateMany\":\"updateManynilaiPkl\",\"upsert\":\"upsertOnenilaiPkl\",\"aggregate\":\"aggregatenilaiPkl\",\"groupBy\":\"groupBynilaiPkl\"},{\"model\":\"Khs\",\"plural\":\"khs\",\"findUnique\":\"findUniqueKhs\",\"findFirst\":\"findFirstKhs\",\"findMany\":\"findManyKhs\",\"create\":\"createOneKhs\",\"createMany\":\"createManyKhs\",\"delete\":\"deleteOneKhs\",\"update\":\"updateOneKhs\",\"deleteMany\":\"deleteManyKhs\",\"updateMany\":\"updateManyKhs\",\"upsert\":\"upsertOneKhs\",\"aggregate\":\"aggregateKhs\",\"groupBy\":\"groupByKhs\"},{\"model\":\"Skripsi\",\"plural\":\"skripsis\",\"findUnique\":\"findUniqueSkripsi\",\"findFirst\":\"findFirstSkripsi\",\"findMany\":\"findManySkripsi\",\"create\":\"createOneSkripsi\",\"createMany\":\"createManySkripsi\",\"delete\":\"deleteOneSkripsi\",\"update\":\"updateOneSkripsi\",\"deleteMany\":\"deleteManySkripsi\",\"updateMany\":\"updateManySkripsi\",\"upsert\":\"upsertOneSkripsi\",\"aggregate\":\"aggregateSkripsi\",\"groupBy\":\"groupBySkripsi\"},{\"model\":\"Dosen\",\"plural\":\"dosens\",\"findUnique\":\"findUniqueDosen\",\"findFirst\":\"findFirstDosen\",\"findMany\":\"findManyDosen\",\"create\":\"createOneDosen\",\"createMany\":\"createManyDosen\",\"delete\":\"deleteOneDosen\",\"update\":\"updateOneDosen\",\"deleteMany\":\"deleteManyDosen\",\"updateMany\":\"updateManyDosen\",\"upsert\":\"upsertOneDosen\",\"aggregate\":\"aggregateDosen\",\"groupBy\":\"groupByDosen\"},{\"model\":\"Admin\",\"plural\":\"admins\",\"findUnique\":\"findUniqueAdmin\",\"findFirst\":\"findFirstAdmin\",\"findMany\":\"findManyAdmin\",\"create\":\"createOneAdmin\",\"createMany\":\"createManyAdmin\",\"delete\":\"deleteOneAdmin\",\"update\":\"updateOneAdmin\",\"deleteMany\":\"deleteManyAdmin\",\"updateMany\":\"updateManyAdmin\",\"upsert\":\"upsertOneAdmin\",\"aggregate\":\"aggregateAdmin\",\"groupBy\":\"groupByAdmin\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\WEB_UNDIP\\backend\\node_modules\\@prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": []
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..\\..\\prisma",
  "clientVersion": "4.3.1",
  "engineVersion": "c875e43600dfe042452e0b868f7a48b817b9640b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "dataProxy": false
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('@prisma/client/runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "node_modules\\.prisma\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "node_modules\\.prisma\\client\\schema.prisma")
