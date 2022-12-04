
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sid: string
  data: string
  expiresAt: Date
}

/**
 * Model Mahasiswa
 * 
 */
export type Mahasiswa = {
  id_mhs: string
  nama: string
  noInduk: string
  angkatan: number
  password: string
  status: string
  image: string
  url: string
  role: string
  createdAt: Date
}

/**
 * Model Verifikasi
 * 
 */
export type Verifikasi = {
  id_verif: string
  verif: string
}

/**
 * Model Bio_mahasiswa
 * 
 */
export type Bio_mahasiswa = {
  id_bio: string
  no_telp: string
  provinsi: string
  email: string
  kota: string
  alamat: string
}

/**
 * Model Irs
 * 
 */
export type Irs = {
  id_Irs: string
  semester: string
  jumlahSks: number
  berkas: string
  url: string
}

/**
 * Model Pkl
 * 
 */
export type Pkl = {
  id_pkl: string
  status_pkl: string
  dospem: string
  nama_instantsi: string
  berkas_pkl: string
  url: string
}

/**
 * Model nilaiPkl
 * 
 */
export type nilaiPkl = {
  id_nilai: string
  nilaiPkl: string
}

/**
 * Model Khs
 * 
 */
export type Khs = {
  id_khs: string
  semester: string
  ip_semester: string
  ip_kumulatif: string
  jumlah_sks: number
  berkas_khs: string
  url: string
}

/**
 * Model Skripsi
 * 
 */
export type Skripsi = {
  id_skripsi: string
  status_skripsi: string
  tgl_sidang: string
  dospem: string
  berkas_skripsi: string
  url: string
}

/**
 * Model Dosen
 * 
 */
export type Dosen = {
  id_dsn: string
  nama: string
  noInduk: string
  password: string
  kode_departement: string
  role: string
  createdAt: Date
}

/**
 * Model Admin
 * 
 */
export type Admin = {
  id_adm: string
  nama: string
  noInduk: string
  password: string
  kode_departement: string
  role: string
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Sessions
 * const sessions = await prisma.session.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Sessions
   * const sessions = await prisma.session.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.mahasiswa`: Exposes CRUD operations for the **Mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mahasiswas
    * const mahasiswas = await prisma.mahasiswa.findMany()
    * ```
    */
  get mahasiswa(): Prisma.MahasiswaDelegate<GlobalReject>;

  /**
   * `prisma.verifikasi`: Exposes CRUD operations for the **Verifikasi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Verifikasis
    * const verifikasis = await prisma.verifikasi.findMany()
    * ```
    */
  get verifikasi(): Prisma.VerifikasiDelegate<GlobalReject>;

  /**
   * `prisma.bio_mahasiswa`: Exposes CRUD operations for the **Bio_mahasiswa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bio_mahasiswas
    * const bio_mahasiswas = await prisma.bio_mahasiswa.findMany()
    * ```
    */
  get bio_mahasiswa(): Prisma.Bio_mahasiswaDelegate<GlobalReject>;

  /**
   * `prisma.irs`: Exposes CRUD operations for the **Irs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Irs
    * const irs = await prisma.irs.findMany()
    * ```
    */
  get irs(): Prisma.IrsDelegate<GlobalReject>;

  /**
   * `prisma.pkl`: Exposes CRUD operations for the **Pkl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pkls
    * const pkls = await prisma.pkl.findMany()
    * ```
    */
  get pkl(): Prisma.PklDelegate<GlobalReject>;

  /**
   * `prisma.nilaiPkl`: Exposes CRUD operations for the **nilaiPkl** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NilaiPkls
    * const nilaiPkls = await prisma.nilaiPkl.findMany()
    * ```
    */
  get nilaiPkl(): Prisma.nilaiPklDelegate<GlobalReject>;

  /**
   * `prisma.khs`: Exposes CRUD operations for the **Khs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Khs
    * const khs = await prisma.khs.findMany()
    * ```
    */
  get khs(): Prisma.KhsDelegate<GlobalReject>;

  /**
   * `prisma.skripsi`: Exposes CRUD operations for the **Skripsi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skripsis
    * const skripsis = await prisma.skripsi.findMany()
    * ```
    */
  get skripsi(): Prisma.SkripsiDelegate<GlobalReject>;

  /**
   * `prisma.dosen`: Exposes CRUD operations for the **Dosen** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dosens
    * const dosens = await prisma.dosen.findMany()
    * ```
    */
  get dosen(): Prisma.DosenDelegate<GlobalReject>;

  /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.3.1
   * Query Engine version: c875e43600dfe042452e0b868f7a48b817b9640b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MahasiswaCountOutputType
   */


  export type MahasiswaCountOutputType = {
    biodata: number
    dataIrs: number
    dataKhs: number
    dataPkl: number
    dataSkripsi: number
  }

  export type MahasiswaCountOutputTypeSelect = {
    biodata?: boolean
    dataIrs?: boolean
    dataKhs?: boolean
    dataPkl?: boolean
    dataSkripsi?: boolean
  }

  export type MahasiswaCountOutputTypeGetPayload<
    S extends boolean | null | undefined | MahasiswaCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? MahasiswaCountOutputType
    : S extends undefined
    ? never
    : S extends MahasiswaCountOutputTypeArgs
    ?'include' extends U
    ? MahasiswaCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof MahasiswaCountOutputType ? MahasiswaCountOutputType[P] : never
  } 
    : MahasiswaCountOutputType
  : MahasiswaCountOutputType




  // Custom InputTypes

  /**
   * MahasiswaCountOutputType without action
   */
  export type MahasiswaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the MahasiswaCountOutputType
     * 
    **/
    select?: MahasiswaCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: Array<SessionScalarFieldEnum>
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }

  export type SessionGetPayload<
    S extends boolean | null | undefined | SessionArgs,
    U = keyof S
      > = S extends true
        ? Session
    : S extends undefined
    ? never
    : S extends SessionArgs | SessionFindManyArgs
    ?'include' extends U
    ? Session 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Session ? Session[P] : never
  } 
    : Session
  : Session


  type SessionCountArgs = Merge<
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }
  >

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>> : CheckSelect<T, Prisma__SessionClient<Session | null >, Prisma__SessionClient<SessionGetPayload<T> | null >>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Session>>, PrismaPromise<Array<SessionGetPayload<T>>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find one Session that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SessionClient<Session>, Prisma__SessionClient<SessionGetPayload<T>>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where: SessionWhereUniqueInput
  }

  /**
   * Session: findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     * 
    **/
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session: findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter, which Sessions to fetch.
     * 
    **/
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     * 
    **/
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     * 
    **/
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to create a Session.
     * 
    **/
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     * 
    **/
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The data needed to update a Session.
     * 
    **/
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     * 
    **/
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * The filter to search for the Session to update in case it exists.
     * 
    **/
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     * 
    **/
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
    /**
     * Filter which Session to delete.
     * 
    **/
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     * 
    **/
    where?: SessionWhereInput
  }


  /**
   * Session: findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = SessionFindUniqueArgsBase
      

  /**
   * Session: findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = SessionFindFirstArgsBase
      

  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     * 
    **/
    select?: SessionSelect | null
  }



  /**
   * Model Mahasiswa
   */


  export type AggregateMahasiswa = {
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  export type MahasiswaAvgAggregateOutputType = {
    angkatan: number | null
  }

  export type MahasiswaSumAggregateOutputType = {
    angkatan: number | null
  }

  export type MahasiswaMinAggregateOutputType = {
    id_mhs: string | null
    nama: string | null
    noInduk: string | null
    angkatan: number | null
    password: string | null
    status: string | null
    image: string | null
    url: string | null
    role: string | null
    createdAt: Date | null
  }

  export type MahasiswaMaxAggregateOutputType = {
    id_mhs: string | null
    nama: string | null
    noInduk: string | null
    angkatan: number | null
    password: string | null
    status: string | null
    image: string | null
    url: string | null
    role: string | null
    createdAt: Date | null
  }

  export type MahasiswaCountAggregateOutputType = {
    id_mhs: number
    nama: number
    noInduk: number
    angkatan: number
    password: number
    status: number
    image: number
    url: number
    role: number
    createdAt: number
    _all: number
  }


  export type MahasiswaAvgAggregateInputType = {
    angkatan?: true
  }

  export type MahasiswaSumAggregateInputType = {
    angkatan?: true
  }

  export type MahasiswaMinAggregateInputType = {
    id_mhs?: true
    nama?: true
    noInduk?: true
    angkatan?: true
    password?: true
    status?: true
    image?: true
    url?: true
    role?: true
    createdAt?: true
  }

  export type MahasiswaMaxAggregateInputType = {
    id_mhs?: true
    nama?: true
    noInduk?: true
    angkatan?: true
    password?: true
    status?: true
    image?: true
    url?: true
    role?: true
    createdAt?: true
  }

  export type MahasiswaCountAggregateInputType = {
    id_mhs?: true
    nama?: true
    noInduk?: true
    angkatan?: true
    password?: true
    status?: true
    image?: true
    url?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type MahasiswaAggregateArgs = {
    /**
     * Filter which Mahasiswa to aggregate.
     * 
    **/
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     * 
    **/
    orderBy?: Enumerable<MahasiswaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mahasiswas
    **/
    _count?: true | MahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MahasiswaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MahasiswaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MahasiswaMaxAggregateInputType
  }

  export type GetMahasiswaAggregateType<T extends MahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateMahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMahasiswa[P]>
      : GetScalarType<T[P], AggregateMahasiswa[P]>
  }




  export type MahasiswaGroupByArgs = {
    where?: MahasiswaWhereInput
    orderBy?: Enumerable<MahasiswaOrderByWithAggregationInput>
    by: Array<MahasiswaScalarFieldEnum>
    having?: MahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MahasiswaCountAggregateInputType | true
    _avg?: MahasiswaAvgAggregateInputType
    _sum?: MahasiswaSumAggregateInputType
    _min?: MahasiswaMinAggregateInputType
    _max?: MahasiswaMaxAggregateInputType
  }


  export type MahasiswaGroupByOutputType = {
    id_mhs: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt: Date
    _count: MahasiswaCountAggregateOutputType | null
    _avg: MahasiswaAvgAggregateOutputType | null
    _sum: MahasiswaSumAggregateOutputType | null
    _min: MahasiswaMinAggregateOutputType | null
    _max: MahasiswaMaxAggregateOutputType | null
  }

  type GetMahasiswaGroupByPayload<T extends MahasiswaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], MahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type MahasiswaSelect = {
    id_mhs?: boolean
    nama?: boolean
    noInduk?: boolean
    angkatan?: boolean
    password?: boolean
    status?: boolean
    image?: boolean
    url?: boolean
    role?: boolean
    createdAt?: boolean
    biodata?: boolean | Bio_mahasiswaFindManyArgs
    dataIrs?: boolean | IrsFindManyArgs
    dataKhs?: boolean | KhsFindManyArgs
    dataPkl?: boolean | PklFindManyArgs
    dataSkripsi?: boolean | SkripsiFindManyArgs
    verifikasi?: boolean | VerifikasiArgs
    _count?: boolean | MahasiswaCountOutputTypeArgs
  }

  export type MahasiswaInclude = {
    biodata?: boolean | Bio_mahasiswaFindManyArgs
    dataIrs?: boolean | IrsFindManyArgs
    dataKhs?: boolean | KhsFindManyArgs
    dataPkl?: boolean | PklFindManyArgs
    dataSkripsi?: boolean | SkripsiFindManyArgs
    verifikasi?: boolean | VerifikasiArgs
    _count?: boolean | MahasiswaCountOutputTypeArgs
  }

  export type MahasiswaGetPayload<
    S extends boolean | null | undefined | MahasiswaArgs,
    U = keyof S
      > = S extends true
        ? Mahasiswa
    : S extends undefined
    ? never
    : S extends MahasiswaArgs | MahasiswaFindManyArgs
    ?'include' extends U
    ? Mahasiswa  & {
    [P in TrueKeys<S['include']>]:
        P extends 'biodata' ? Array < Bio_mahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'dataIrs' ? Array < IrsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'dataKhs' ? Array < KhsGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'dataPkl' ? Array < PklGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'dataSkripsi' ? Array < SkripsiGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'verifikasi' ? VerifikasiGetPayload<Exclude<S['include'], undefined | null>[P]> | null :
        P extends '_count' ? MahasiswaCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'biodata' ? Array < Bio_mahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'dataIrs' ? Array < IrsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'dataKhs' ? Array < KhsGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'dataPkl' ? Array < PklGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'dataSkripsi' ? Array < SkripsiGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'verifikasi' ? VerifikasiGetPayload<Exclude<S['select'], undefined | null>[P]> | null :
        P extends '_count' ? MahasiswaCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Mahasiswa ? Mahasiswa[P] : never
  } 
    : Mahasiswa
  : Mahasiswa


  type MahasiswaCountArgs = Merge<
    Omit<MahasiswaFindManyArgs, 'select' | 'include'> & {
      select?: MahasiswaCountAggregateInputType | true
    }
  >

  export interface MahasiswaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Mahasiswa that matches the filter.
     * @param {MahasiswaFindUniqueArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MahasiswaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MahasiswaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mahasiswa'> extends True ? CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>> : CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>

    /**
     * Find the first Mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MahasiswaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MahasiswaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mahasiswa'> extends True ? CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>> : CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>

    /**
     * Find zero or more Mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany()
     * 
     * // Get first 10 Mahasiswas
     * const mahasiswas = await prisma.mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id_mhs`
     * const mahasiswaWithId_mhsOnly = await prisma.mahasiswa.findMany({ select: { id_mhs: true } })
     * 
    **/
    findMany<T extends MahasiswaFindManyArgs>(
      args?: SelectSubset<T, MahasiswaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mahasiswa>>, PrismaPromise<Array<MahasiswaGetPayload<T>>>>

    /**
     * Create a Mahasiswa.
     * @param {MahasiswaCreateArgs} args - Arguments to create a Mahasiswa.
     * @example
     * // Create one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.create({
     *   data: {
     *     // ... data to create a Mahasiswa
     *   }
     * })
     * 
    **/
    create<T extends MahasiswaCreateArgs>(
      args: SelectSubset<T, MahasiswaCreateArgs>
    ): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>>

    /**
     * Create many Mahasiswas.
     *     @param {MahasiswaCreateManyArgs} args - Arguments to create many Mahasiswas.
     *     @example
     *     // Create many Mahasiswas
     *     const mahasiswa = await prisma.mahasiswa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MahasiswaCreateManyArgs>(
      args?: SelectSubset<T, MahasiswaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mahasiswa.
     * @param {MahasiswaDeleteArgs} args - Arguments to delete one Mahasiswa.
     * @example
     * // Delete one Mahasiswa
     * const Mahasiswa = await prisma.mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Mahasiswa
     *   }
     * })
     * 
    **/
    delete<T extends MahasiswaDeleteArgs>(
      args: SelectSubset<T, MahasiswaDeleteArgs>
    ): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>>

    /**
     * Update one Mahasiswa.
     * @param {MahasiswaUpdateArgs} args - Arguments to update one Mahasiswa.
     * @example
     * // Update one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MahasiswaUpdateArgs>(
      args: SelectSubset<T, MahasiswaUpdateArgs>
    ): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>>

    /**
     * Delete zero or more Mahasiswas.
     * @param {MahasiswaDeleteManyArgs} args - Arguments to filter Mahasiswas to delete.
     * @example
     * // Delete a few Mahasiswas
     * const { count } = await prisma.mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MahasiswaDeleteManyArgs>(
      args?: SelectSubset<T, MahasiswaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mahasiswas
     * const mahasiswa = await prisma.mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MahasiswaUpdateManyArgs>(
      args: SelectSubset<T, MahasiswaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mahasiswa.
     * @param {MahasiswaUpsertArgs} args - Arguments to update or create a Mahasiswa.
     * @example
     * // Update or create a Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mahasiswa we want to update
     *   }
     * })
    **/
    upsert<T extends MahasiswaUpsertArgs>(
      args: SelectSubset<T, MahasiswaUpsertArgs>
    ): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>>

    /**
     * Find one Mahasiswa that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {MahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MahasiswaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, MahasiswaFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>>

    /**
     * Find the first Mahasiswa that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaFindFirstOrThrowArgs} args - Arguments to find a Mahasiswa
     * @example
     * // Get one Mahasiswa
     * const mahasiswa = await prisma.mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MahasiswaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, MahasiswaFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa>, Prisma__MahasiswaClient<MahasiswaGetPayload<T>>>

    /**
     * Count the number of Mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaCountArgs} args - Arguments to filter Mahasiswas to count.
     * @example
     * // Count the number of Mahasiswas
     * const count = await prisma.mahasiswa.count({
     *   where: {
     *     // ... the filter for the Mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends MahasiswaCountArgs>(
      args?: Subset<T, MahasiswaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MahasiswaAggregateArgs>(args: Subset<T, MahasiswaAggregateArgs>): PrismaPromise<GetMahasiswaAggregateType<T>>

    /**
     * Group by Mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: MahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMahasiswaGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MahasiswaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    biodata<T extends Bio_mahasiswaFindManyArgs = {}>(args?: Subset<T, Bio_mahasiswaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Bio_mahasiswa>>, PrismaPromise<Array<Bio_mahasiswaGetPayload<T>>>>;

    dataIrs<T extends IrsFindManyArgs = {}>(args?: Subset<T, IrsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Irs>>, PrismaPromise<Array<IrsGetPayload<T>>>>;

    dataKhs<T extends KhsFindManyArgs = {}>(args?: Subset<T, KhsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Khs>>, PrismaPromise<Array<KhsGetPayload<T>>>>;

    dataPkl<T extends PklFindManyArgs = {}>(args?: Subset<T, PklFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Pkl>>, PrismaPromise<Array<PklGetPayload<T>>>>;

    dataSkripsi<T extends SkripsiFindManyArgs = {}>(args?: Subset<T, SkripsiFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Skripsi>>, PrismaPromise<Array<SkripsiGetPayload<T>>>>;

    verifikasi<T extends VerifikasiArgs = {}>(args?: Subset<T, VerifikasiArgs>): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi | null >, Prisma__VerifikasiClient<VerifikasiGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Mahasiswa base type for findUnique actions
   */
  export type MahasiswaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * Filter, which Mahasiswa to fetch.
     * 
    **/
    where: MahasiswaWhereUniqueInput
  }

  /**
   * Mahasiswa: findUnique
   */
  export interface MahasiswaFindUniqueArgs extends MahasiswaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mahasiswa base type for findFirst actions
   */
  export type MahasiswaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * Filter, which Mahasiswa to fetch.
     * 
    **/
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     * 
    **/
    orderBy?: Enumerable<MahasiswaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mahasiswas.
     * 
    **/
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mahasiswas.
     * 
    **/
    distinct?: Enumerable<MahasiswaScalarFieldEnum>
  }

  /**
   * Mahasiswa: findFirst
   */
  export interface MahasiswaFindFirstArgs extends MahasiswaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Mahasiswa findMany
   */
  export type MahasiswaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * Filter, which Mahasiswas to fetch.
     * 
    **/
    where?: MahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mahasiswas to fetch.
     * 
    **/
    orderBy?: Enumerable<MahasiswaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mahasiswas.
     * 
    **/
    cursor?: MahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mahasiswas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mahasiswas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MahasiswaScalarFieldEnum>
  }


  /**
   * Mahasiswa create
   */
  export type MahasiswaCreateArgs = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * The data needed to create a Mahasiswa.
     * 
    **/
    data: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
  }


  /**
   * Mahasiswa createMany
   */
  export type MahasiswaCreateManyArgs = {
    /**
     * The data used to create many Mahasiswas.
     * 
    **/
    data: Enumerable<MahasiswaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mahasiswa update
   */
  export type MahasiswaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * The data needed to update a Mahasiswa.
     * 
    **/
    data: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Mahasiswa to update.
     * 
    **/
    where: MahasiswaWhereUniqueInput
  }


  /**
   * Mahasiswa updateMany
   */
  export type MahasiswaUpdateManyArgs = {
    /**
     * The data used to update Mahasiswas.
     * 
    **/
    data: XOR<MahasiswaUpdateManyMutationInput, MahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Mahasiswas to update
     * 
    **/
    where?: MahasiswaWhereInput
  }


  /**
   * Mahasiswa upsert
   */
  export type MahasiswaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * The filter to search for the Mahasiswa to update in case it exists.
     * 
    **/
    where: MahasiswaWhereUniqueInput
    /**
     * In case the Mahasiswa found by the `where` argument doesn't exist, create a new Mahasiswa with this data.
     * 
    **/
    create: XOR<MahasiswaCreateInput, MahasiswaUncheckedCreateInput>
    /**
     * In case the Mahasiswa was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MahasiswaUpdateInput, MahasiswaUncheckedUpdateInput>
  }


  /**
   * Mahasiswa delete
   */
  export type MahasiswaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
    /**
     * Filter which Mahasiswa to delete.
     * 
    **/
    where: MahasiswaWhereUniqueInput
  }


  /**
   * Mahasiswa deleteMany
   */
  export type MahasiswaDeleteManyArgs = {
    /**
     * Filter which Mahasiswas to delete
     * 
    **/
    where?: MahasiswaWhereInput
  }


  /**
   * Mahasiswa: findUniqueOrThrow
   */
  export type MahasiswaFindUniqueOrThrowArgs = MahasiswaFindUniqueArgsBase
      

  /**
   * Mahasiswa: findFirstOrThrow
   */
  export type MahasiswaFindFirstOrThrowArgs = MahasiswaFindFirstArgsBase
      

  /**
   * Mahasiswa without action
   */
  export type MahasiswaArgs = {
    /**
     * Select specific fields to fetch from the Mahasiswa
     * 
    **/
    select?: MahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MahasiswaInclude | null
  }



  /**
   * Model Verifikasi
   */


  export type AggregateVerifikasi = {
    _count: VerifikasiCountAggregateOutputType | null
    _min: VerifikasiMinAggregateOutputType | null
    _max: VerifikasiMaxAggregateOutputType | null
  }

  export type VerifikasiMinAggregateOutputType = {
    id_verif: string | null
    verif: string | null
  }

  export type VerifikasiMaxAggregateOutputType = {
    id_verif: string | null
    verif: string | null
  }

  export type VerifikasiCountAggregateOutputType = {
    id_verif: number
    verif: number
    _all: number
  }


  export type VerifikasiMinAggregateInputType = {
    id_verif?: true
    verif?: true
  }

  export type VerifikasiMaxAggregateInputType = {
    id_verif?: true
    verif?: true
  }

  export type VerifikasiCountAggregateInputType = {
    id_verif?: true
    verif?: true
    _all?: true
  }

  export type VerifikasiAggregateArgs = {
    /**
     * Filter which Verifikasi to aggregate.
     * 
    **/
    where?: VerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifikasis to fetch.
     * 
    **/
    orderBy?: Enumerable<VerifikasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: VerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifikasis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifikasis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Verifikasis
    **/
    _count?: true | VerifikasiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerifikasiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerifikasiMaxAggregateInputType
  }

  export type GetVerifikasiAggregateType<T extends VerifikasiAggregateArgs> = {
        [P in keyof T & keyof AggregateVerifikasi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerifikasi[P]>
      : GetScalarType<T[P], AggregateVerifikasi[P]>
  }




  export type VerifikasiGroupByArgs = {
    where?: VerifikasiWhereInput
    orderBy?: Enumerable<VerifikasiOrderByWithAggregationInput>
    by: Array<VerifikasiScalarFieldEnum>
    having?: VerifikasiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerifikasiCountAggregateInputType | true
    _min?: VerifikasiMinAggregateInputType
    _max?: VerifikasiMaxAggregateInputType
  }


  export type VerifikasiGroupByOutputType = {
    id_verif: string
    verif: string
    _count: VerifikasiCountAggregateOutputType | null
    _min: VerifikasiMinAggregateOutputType | null
    _max: VerifikasiMaxAggregateOutputType | null
  }

  type GetVerifikasiGroupByPayload<T extends VerifikasiGroupByArgs> = PrismaPromise<
    Array<
      PickArray<VerifikasiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerifikasiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerifikasiGroupByOutputType[P]>
            : GetScalarType<T[P], VerifikasiGroupByOutputType[P]>
        }
      >
    >


  export type VerifikasiSelect = {
    id_verif?: boolean
    verif?: boolean
    author?: boolean | MahasiswaArgs
  }

  export type VerifikasiInclude = {
    author?: boolean | MahasiswaArgs
  }

  export type VerifikasiGetPayload<
    S extends boolean | null | undefined | VerifikasiArgs,
    U = keyof S
      > = S extends true
        ? Verifikasi
    : S extends undefined
    ? never
    : S extends VerifikasiArgs | VerifikasiFindManyArgs
    ?'include' extends U
    ? Verifikasi  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Verifikasi ? Verifikasi[P] : never
  } 
    : Verifikasi
  : Verifikasi


  type VerifikasiCountArgs = Merge<
    Omit<VerifikasiFindManyArgs, 'select' | 'include'> & {
      select?: VerifikasiCountAggregateInputType | true
    }
  >

  export interface VerifikasiDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Verifikasi that matches the filter.
     * @param {VerifikasiFindUniqueArgs} args - Arguments to find a Verifikasi
     * @example
     * // Get one Verifikasi
     * const verifikasi = await prisma.verifikasi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerifikasiFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, VerifikasiFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Verifikasi'> extends True ? CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>> : CheckSelect<T, Prisma__VerifikasiClient<Verifikasi | null >, Prisma__VerifikasiClient<VerifikasiGetPayload<T> | null >>

    /**
     * Find the first Verifikasi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiFindFirstArgs} args - Arguments to find a Verifikasi
     * @example
     * // Get one Verifikasi
     * const verifikasi = await prisma.verifikasi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerifikasiFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, VerifikasiFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Verifikasi'> extends True ? CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>> : CheckSelect<T, Prisma__VerifikasiClient<Verifikasi | null >, Prisma__VerifikasiClient<VerifikasiGetPayload<T> | null >>

    /**
     * Find zero or more Verifikasis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Verifikasis
     * const verifikasis = await prisma.verifikasi.findMany()
     * 
     * // Get first 10 Verifikasis
     * const verifikasis = await prisma.verifikasi.findMany({ take: 10 })
     * 
     * // Only select the `id_verif`
     * const verifikasiWithId_verifOnly = await prisma.verifikasi.findMany({ select: { id_verif: true } })
     * 
    **/
    findMany<T extends VerifikasiFindManyArgs>(
      args?: SelectSubset<T, VerifikasiFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Verifikasi>>, PrismaPromise<Array<VerifikasiGetPayload<T>>>>

    /**
     * Create a Verifikasi.
     * @param {VerifikasiCreateArgs} args - Arguments to create a Verifikasi.
     * @example
     * // Create one Verifikasi
     * const Verifikasi = await prisma.verifikasi.create({
     *   data: {
     *     // ... data to create a Verifikasi
     *   }
     * })
     * 
    **/
    create<T extends VerifikasiCreateArgs>(
      args: SelectSubset<T, VerifikasiCreateArgs>
    ): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>>

    /**
     * Create many Verifikasis.
     *     @param {VerifikasiCreateManyArgs} args - Arguments to create many Verifikasis.
     *     @example
     *     // Create many Verifikasis
     *     const verifikasi = await prisma.verifikasi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerifikasiCreateManyArgs>(
      args?: SelectSubset<T, VerifikasiCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Verifikasi.
     * @param {VerifikasiDeleteArgs} args - Arguments to delete one Verifikasi.
     * @example
     * // Delete one Verifikasi
     * const Verifikasi = await prisma.verifikasi.delete({
     *   where: {
     *     // ... filter to delete one Verifikasi
     *   }
     * })
     * 
    **/
    delete<T extends VerifikasiDeleteArgs>(
      args: SelectSubset<T, VerifikasiDeleteArgs>
    ): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>>

    /**
     * Update one Verifikasi.
     * @param {VerifikasiUpdateArgs} args - Arguments to update one Verifikasi.
     * @example
     * // Update one Verifikasi
     * const verifikasi = await prisma.verifikasi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerifikasiUpdateArgs>(
      args: SelectSubset<T, VerifikasiUpdateArgs>
    ): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>>

    /**
     * Delete zero or more Verifikasis.
     * @param {VerifikasiDeleteManyArgs} args - Arguments to filter Verifikasis to delete.
     * @example
     * // Delete a few Verifikasis
     * const { count } = await prisma.verifikasi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerifikasiDeleteManyArgs>(
      args?: SelectSubset<T, VerifikasiDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Verifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Verifikasis
     * const verifikasi = await prisma.verifikasi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerifikasiUpdateManyArgs>(
      args: SelectSubset<T, VerifikasiUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Verifikasi.
     * @param {VerifikasiUpsertArgs} args - Arguments to update or create a Verifikasi.
     * @example
     * // Update or create a Verifikasi
     * const verifikasi = await prisma.verifikasi.upsert({
     *   create: {
     *     // ... data to create a Verifikasi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Verifikasi we want to update
     *   }
     * })
    **/
    upsert<T extends VerifikasiUpsertArgs>(
      args: SelectSubset<T, VerifikasiUpsertArgs>
    ): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>>

    /**
     * Find one Verifikasi that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {VerifikasiFindUniqueOrThrowArgs} args - Arguments to find a Verifikasi
     * @example
     * // Get one Verifikasi
     * const verifikasi = await prisma.verifikasi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerifikasiFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, VerifikasiFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>>

    /**
     * Find the first Verifikasi that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiFindFirstOrThrowArgs} args - Arguments to find a Verifikasi
     * @example
     * // Get one Verifikasi
     * const verifikasi = await prisma.verifikasi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerifikasiFindFirstOrThrowArgs>(
      args?: SelectSubset<T, VerifikasiFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__VerifikasiClient<Verifikasi>, Prisma__VerifikasiClient<VerifikasiGetPayload<T>>>

    /**
     * Count the number of Verifikasis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiCountArgs} args - Arguments to filter Verifikasis to count.
     * @example
     * // Count the number of Verifikasis
     * const count = await prisma.verifikasi.count({
     *   where: {
     *     // ... the filter for the Verifikasis we want to count
     *   }
     * })
    **/
    count<T extends VerifikasiCountArgs>(
      args?: Subset<T, VerifikasiCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerifikasiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Verifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerifikasiAggregateArgs>(args: Subset<T, VerifikasiAggregateArgs>): PrismaPromise<GetVerifikasiAggregateType<T>>

    /**
     * Group by Verifikasi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerifikasiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerifikasiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerifikasiGroupByArgs['orderBy'] }
        : { orderBy?: VerifikasiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerifikasiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerifikasiGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Verifikasi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__VerifikasiClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends MahasiswaArgs = {}>(args?: Subset<T, MahasiswaArgs>): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Verifikasi base type for findUnique actions
   */
  export type VerifikasiFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * Filter, which Verifikasi to fetch.
     * 
    **/
    where: VerifikasiWhereUniqueInput
  }

  /**
   * Verifikasi: findUnique
   */
  export interface VerifikasiFindUniqueArgs extends VerifikasiFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Verifikasi base type for findFirst actions
   */
  export type VerifikasiFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * Filter, which Verifikasi to fetch.
     * 
    **/
    where?: VerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifikasis to fetch.
     * 
    **/
    orderBy?: Enumerable<VerifikasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Verifikasis.
     * 
    **/
    cursor?: VerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifikasis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifikasis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Verifikasis.
     * 
    **/
    distinct?: Enumerable<VerifikasiScalarFieldEnum>
  }

  /**
   * Verifikasi: findFirst
   */
  export interface VerifikasiFindFirstArgs extends VerifikasiFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Verifikasi findMany
   */
  export type VerifikasiFindManyArgs = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * Filter, which Verifikasis to fetch.
     * 
    **/
    where?: VerifikasiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Verifikasis to fetch.
     * 
    **/
    orderBy?: Enumerable<VerifikasiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Verifikasis.
     * 
    **/
    cursor?: VerifikasiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Verifikasis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Verifikasis.
     * 
    **/
    skip?: number
    distinct?: Enumerable<VerifikasiScalarFieldEnum>
  }


  /**
   * Verifikasi create
   */
  export type VerifikasiCreateArgs = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * The data needed to create a Verifikasi.
     * 
    **/
    data: XOR<VerifikasiCreateInput, VerifikasiUncheckedCreateInput>
  }


  /**
   * Verifikasi createMany
   */
  export type VerifikasiCreateManyArgs = {
    /**
     * The data used to create many Verifikasis.
     * 
    **/
    data: Enumerable<VerifikasiCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Verifikasi update
   */
  export type VerifikasiUpdateArgs = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * The data needed to update a Verifikasi.
     * 
    **/
    data: XOR<VerifikasiUpdateInput, VerifikasiUncheckedUpdateInput>
    /**
     * Choose, which Verifikasi to update.
     * 
    **/
    where: VerifikasiWhereUniqueInput
  }


  /**
   * Verifikasi updateMany
   */
  export type VerifikasiUpdateManyArgs = {
    /**
     * The data used to update Verifikasis.
     * 
    **/
    data: XOR<VerifikasiUpdateManyMutationInput, VerifikasiUncheckedUpdateManyInput>
    /**
     * Filter which Verifikasis to update
     * 
    **/
    where?: VerifikasiWhereInput
  }


  /**
   * Verifikasi upsert
   */
  export type VerifikasiUpsertArgs = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * The filter to search for the Verifikasi to update in case it exists.
     * 
    **/
    where: VerifikasiWhereUniqueInput
    /**
     * In case the Verifikasi found by the `where` argument doesn't exist, create a new Verifikasi with this data.
     * 
    **/
    create: XOR<VerifikasiCreateInput, VerifikasiUncheckedCreateInput>
    /**
     * In case the Verifikasi was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<VerifikasiUpdateInput, VerifikasiUncheckedUpdateInput>
  }


  /**
   * Verifikasi delete
   */
  export type VerifikasiDeleteArgs = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
    /**
     * Filter which Verifikasi to delete.
     * 
    **/
    where: VerifikasiWhereUniqueInput
  }


  /**
   * Verifikasi deleteMany
   */
  export type VerifikasiDeleteManyArgs = {
    /**
     * Filter which Verifikasis to delete
     * 
    **/
    where?: VerifikasiWhereInput
  }


  /**
   * Verifikasi: findUniqueOrThrow
   */
  export type VerifikasiFindUniqueOrThrowArgs = VerifikasiFindUniqueArgsBase
      

  /**
   * Verifikasi: findFirstOrThrow
   */
  export type VerifikasiFindFirstOrThrowArgs = VerifikasiFindFirstArgsBase
      

  /**
   * Verifikasi without action
   */
  export type VerifikasiArgs = {
    /**
     * Select specific fields to fetch from the Verifikasi
     * 
    **/
    select?: VerifikasiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: VerifikasiInclude | null
  }



  /**
   * Model Bio_mahasiswa
   */


  export type AggregateBio_mahasiswa = {
    _count: Bio_mahasiswaCountAggregateOutputType | null
    _min: Bio_mahasiswaMinAggregateOutputType | null
    _max: Bio_mahasiswaMaxAggregateOutputType | null
  }

  export type Bio_mahasiswaMinAggregateOutputType = {
    id_bio: string | null
    no_telp: string | null
    provinsi: string | null
    email: string | null
    kota: string | null
    alamat: string | null
  }

  export type Bio_mahasiswaMaxAggregateOutputType = {
    id_bio: string | null
    no_telp: string | null
    provinsi: string | null
    email: string | null
    kota: string | null
    alamat: string | null
  }

  export type Bio_mahasiswaCountAggregateOutputType = {
    id_bio: number
    no_telp: number
    provinsi: number
    email: number
    kota: number
    alamat: number
    _all: number
  }


  export type Bio_mahasiswaMinAggregateInputType = {
    id_bio?: true
    no_telp?: true
    provinsi?: true
    email?: true
    kota?: true
    alamat?: true
  }

  export type Bio_mahasiswaMaxAggregateInputType = {
    id_bio?: true
    no_telp?: true
    provinsi?: true
    email?: true
    kota?: true
    alamat?: true
  }

  export type Bio_mahasiswaCountAggregateInputType = {
    id_bio?: true
    no_telp?: true
    provinsi?: true
    email?: true
    kota?: true
    alamat?: true
    _all?: true
  }

  export type Bio_mahasiswaAggregateArgs = {
    /**
     * Filter which Bio_mahasiswa to aggregate.
     * 
    **/
    where?: Bio_mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bio_mahasiswas to fetch.
     * 
    **/
    orderBy?: Enumerable<Bio_mahasiswaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: Bio_mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bio_mahasiswas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bio_mahasiswas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bio_mahasiswas
    **/
    _count?: true | Bio_mahasiswaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Bio_mahasiswaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Bio_mahasiswaMaxAggregateInputType
  }

  export type GetBio_mahasiswaAggregateType<T extends Bio_mahasiswaAggregateArgs> = {
        [P in keyof T & keyof AggregateBio_mahasiswa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBio_mahasiswa[P]>
      : GetScalarType<T[P], AggregateBio_mahasiswa[P]>
  }




  export type Bio_mahasiswaGroupByArgs = {
    where?: Bio_mahasiswaWhereInput
    orderBy?: Enumerable<Bio_mahasiswaOrderByWithAggregationInput>
    by: Array<Bio_mahasiswaScalarFieldEnum>
    having?: Bio_mahasiswaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Bio_mahasiswaCountAggregateInputType | true
    _min?: Bio_mahasiswaMinAggregateInputType
    _max?: Bio_mahasiswaMaxAggregateInputType
  }


  export type Bio_mahasiswaGroupByOutputType = {
    id_bio: string
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
    _count: Bio_mahasiswaCountAggregateOutputType | null
    _min: Bio_mahasiswaMinAggregateOutputType | null
    _max: Bio_mahasiswaMaxAggregateOutputType | null
  }

  type GetBio_mahasiswaGroupByPayload<T extends Bio_mahasiswaGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Bio_mahasiswaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Bio_mahasiswaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Bio_mahasiswaGroupByOutputType[P]>
            : GetScalarType<T[P], Bio_mahasiswaGroupByOutputType[P]>
        }
      >
    >


  export type Bio_mahasiswaSelect = {
    id_bio?: boolean
    no_telp?: boolean
    provinsi?: boolean
    email?: boolean
    kota?: boolean
    alamat?: boolean
    author?: boolean | MahasiswaArgs
  }

  export type Bio_mahasiswaInclude = {
    author?: boolean | MahasiswaArgs
  }

  export type Bio_mahasiswaGetPayload<
    S extends boolean | null | undefined | Bio_mahasiswaArgs,
    U = keyof S
      > = S extends true
        ? Bio_mahasiswa
    : S extends undefined
    ? never
    : S extends Bio_mahasiswaArgs | Bio_mahasiswaFindManyArgs
    ?'include' extends U
    ? Bio_mahasiswa  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Bio_mahasiswa ? Bio_mahasiswa[P] : never
  } 
    : Bio_mahasiswa
  : Bio_mahasiswa


  type Bio_mahasiswaCountArgs = Merge<
    Omit<Bio_mahasiswaFindManyArgs, 'select' | 'include'> & {
      select?: Bio_mahasiswaCountAggregateInputType | true
    }
  >

  export interface Bio_mahasiswaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Bio_mahasiswa that matches the filter.
     * @param {Bio_mahasiswaFindUniqueArgs} args - Arguments to find a Bio_mahasiswa
     * @example
     * // Get one Bio_mahasiswa
     * const bio_mahasiswa = await prisma.bio_mahasiswa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends Bio_mahasiswaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, Bio_mahasiswaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Bio_mahasiswa'> extends True ? CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>> : CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa | null >, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T> | null >>

    /**
     * Find the first Bio_mahasiswa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaFindFirstArgs} args - Arguments to find a Bio_mahasiswa
     * @example
     * // Get one Bio_mahasiswa
     * const bio_mahasiswa = await prisma.bio_mahasiswa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends Bio_mahasiswaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, Bio_mahasiswaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Bio_mahasiswa'> extends True ? CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>> : CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa | null >, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T> | null >>

    /**
     * Find zero or more Bio_mahasiswas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bio_mahasiswas
     * const bio_mahasiswas = await prisma.bio_mahasiswa.findMany()
     * 
     * // Get first 10 Bio_mahasiswas
     * const bio_mahasiswas = await prisma.bio_mahasiswa.findMany({ take: 10 })
     * 
     * // Only select the `id_bio`
     * const bio_mahasiswaWithId_bioOnly = await prisma.bio_mahasiswa.findMany({ select: { id_bio: true } })
     * 
    **/
    findMany<T extends Bio_mahasiswaFindManyArgs>(
      args?: SelectSubset<T, Bio_mahasiswaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Bio_mahasiswa>>, PrismaPromise<Array<Bio_mahasiswaGetPayload<T>>>>

    /**
     * Create a Bio_mahasiswa.
     * @param {Bio_mahasiswaCreateArgs} args - Arguments to create a Bio_mahasiswa.
     * @example
     * // Create one Bio_mahasiswa
     * const Bio_mahasiswa = await prisma.bio_mahasiswa.create({
     *   data: {
     *     // ... data to create a Bio_mahasiswa
     *   }
     * })
     * 
    **/
    create<T extends Bio_mahasiswaCreateArgs>(
      args: SelectSubset<T, Bio_mahasiswaCreateArgs>
    ): CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>>

    /**
     * Create many Bio_mahasiswas.
     *     @param {Bio_mahasiswaCreateManyArgs} args - Arguments to create many Bio_mahasiswas.
     *     @example
     *     // Create many Bio_mahasiswas
     *     const bio_mahasiswa = await prisma.bio_mahasiswa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends Bio_mahasiswaCreateManyArgs>(
      args?: SelectSubset<T, Bio_mahasiswaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Bio_mahasiswa.
     * @param {Bio_mahasiswaDeleteArgs} args - Arguments to delete one Bio_mahasiswa.
     * @example
     * // Delete one Bio_mahasiswa
     * const Bio_mahasiswa = await prisma.bio_mahasiswa.delete({
     *   where: {
     *     // ... filter to delete one Bio_mahasiswa
     *   }
     * })
     * 
    **/
    delete<T extends Bio_mahasiswaDeleteArgs>(
      args: SelectSubset<T, Bio_mahasiswaDeleteArgs>
    ): CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>>

    /**
     * Update one Bio_mahasiswa.
     * @param {Bio_mahasiswaUpdateArgs} args - Arguments to update one Bio_mahasiswa.
     * @example
     * // Update one Bio_mahasiswa
     * const bio_mahasiswa = await prisma.bio_mahasiswa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends Bio_mahasiswaUpdateArgs>(
      args: SelectSubset<T, Bio_mahasiswaUpdateArgs>
    ): CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>>

    /**
     * Delete zero or more Bio_mahasiswas.
     * @param {Bio_mahasiswaDeleteManyArgs} args - Arguments to filter Bio_mahasiswas to delete.
     * @example
     * // Delete a few Bio_mahasiswas
     * const { count } = await prisma.bio_mahasiswa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends Bio_mahasiswaDeleteManyArgs>(
      args?: SelectSubset<T, Bio_mahasiswaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bio_mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bio_mahasiswas
     * const bio_mahasiswa = await prisma.bio_mahasiswa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends Bio_mahasiswaUpdateManyArgs>(
      args: SelectSubset<T, Bio_mahasiswaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Bio_mahasiswa.
     * @param {Bio_mahasiswaUpsertArgs} args - Arguments to update or create a Bio_mahasiswa.
     * @example
     * // Update or create a Bio_mahasiswa
     * const bio_mahasiswa = await prisma.bio_mahasiswa.upsert({
     *   create: {
     *     // ... data to create a Bio_mahasiswa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bio_mahasiswa we want to update
     *   }
     * })
    **/
    upsert<T extends Bio_mahasiswaUpsertArgs>(
      args: SelectSubset<T, Bio_mahasiswaUpsertArgs>
    ): CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>>

    /**
     * Find one Bio_mahasiswa that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {Bio_mahasiswaFindUniqueOrThrowArgs} args - Arguments to find a Bio_mahasiswa
     * @example
     * // Get one Bio_mahasiswa
     * const bio_mahasiswa = await prisma.bio_mahasiswa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends Bio_mahasiswaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, Bio_mahasiswaFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>>

    /**
     * Find the first Bio_mahasiswa that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaFindFirstOrThrowArgs} args - Arguments to find a Bio_mahasiswa
     * @example
     * // Get one Bio_mahasiswa
     * const bio_mahasiswa = await prisma.bio_mahasiswa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends Bio_mahasiswaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, Bio_mahasiswaFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__Bio_mahasiswaClient<Bio_mahasiswa>, Prisma__Bio_mahasiswaClient<Bio_mahasiswaGetPayload<T>>>

    /**
     * Count the number of Bio_mahasiswas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaCountArgs} args - Arguments to filter Bio_mahasiswas to count.
     * @example
     * // Count the number of Bio_mahasiswas
     * const count = await prisma.bio_mahasiswa.count({
     *   where: {
     *     // ... the filter for the Bio_mahasiswas we want to count
     *   }
     * })
    **/
    count<T extends Bio_mahasiswaCountArgs>(
      args?: Subset<T, Bio_mahasiswaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Bio_mahasiswaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bio_mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Bio_mahasiswaAggregateArgs>(args: Subset<T, Bio_mahasiswaAggregateArgs>): PrismaPromise<GetBio_mahasiswaAggregateType<T>>

    /**
     * Group by Bio_mahasiswa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Bio_mahasiswaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Bio_mahasiswaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Bio_mahasiswaGroupByArgs['orderBy'] }
        : { orderBy?: Bio_mahasiswaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Bio_mahasiswaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBio_mahasiswaGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Bio_mahasiswa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__Bio_mahasiswaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends MahasiswaArgs = {}>(args?: Subset<T, MahasiswaArgs>): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Bio_mahasiswa base type for findUnique actions
   */
  export type Bio_mahasiswaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * Filter, which Bio_mahasiswa to fetch.
     * 
    **/
    where: Bio_mahasiswaWhereUniqueInput
  }

  /**
   * Bio_mahasiswa: findUnique
   */
  export interface Bio_mahasiswaFindUniqueArgs extends Bio_mahasiswaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Bio_mahasiswa base type for findFirst actions
   */
  export type Bio_mahasiswaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * Filter, which Bio_mahasiswa to fetch.
     * 
    **/
    where?: Bio_mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bio_mahasiswas to fetch.
     * 
    **/
    orderBy?: Enumerable<Bio_mahasiswaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bio_mahasiswas.
     * 
    **/
    cursor?: Bio_mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bio_mahasiswas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bio_mahasiswas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bio_mahasiswas.
     * 
    **/
    distinct?: Enumerable<Bio_mahasiswaScalarFieldEnum>
  }

  /**
   * Bio_mahasiswa: findFirst
   */
  export interface Bio_mahasiswaFindFirstArgs extends Bio_mahasiswaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Bio_mahasiswa findMany
   */
  export type Bio_mahasiswaFindManyArgs = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * Filter, which Bio_mahasiswas to fetch.
     * 
    **/
    where?: Bio_mahasiswaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bio_mahasiswas to fetch.
     * 
    **/
    orderBy?: Enumerable<Bio_mahasiswaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bio_mahasiswas.
     * 
    **/
    cursor?: Bio_mahasiswaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bio_mahasiswas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bio_mahasiswas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Bio_mahasiswaScalarFieldEnum>
  }


  /**
   * Bio_mahasiswa create
   */
  export type Bio_mahasiswaCreateArgs = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * The data needed to create a Bio_mahasiswa.
     * 
    **/
    data: XOR<Bio_mahasiswaCreateInput, Bio_mahasiswaUncheckedCreateInput>
  }


  /**
   * Bio_mahasiswa createMany
   */
  export type Bio_mahasiswaCreateManyArgs = {
    /**
     * The data used to create many Bio_mahasiswas.
     * 
    **/
    data: Enumerable<Bio_mahasiswaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Bio_mahasiswa update
   */
  export type Bio_mahasiswaUpdateArgs = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * The data needed to update a Bio_mahasiswa.
     * 
    **/
    data: XOR<Bio_mahasiswaUpdateInput, Bio_mahasiswaUncheckedUpdateInput>
    /**
     * Choose, which Bio_mahasiswa to update.
     * 
    **/
    where: Bio_mahasiswaWhereUniqueInput
  }


  /**
   * Bio_mahasiswa updateMany
   */
  export type Bio_mahasiswaUpdateManyArgs = {
    /**
     * The data used to update Bio_mahasiswas.
     * 
    **/
    data: XOR<Bio_mahasiswaUpdateManyMutationInput, Bio_mahasiswaUncheckedUpdateManyInput>
    /**
     * Filter which Bio_mahasiswas to update
     * 
    **/
    where?: Bio_mahasiswaWhereInput
  }


  /**
   * Bio_mahasiswa upsert
   */
  export type Bio_mahasiswaUpsertArgs = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * The filter to search for the Bio_mahasiswa to update in case it exists.
     * 
    **/
    where: Bio_mahasiswaWhereUniqueInput
    /**
     * In case the Bio_mahasiswa found by the `where` argument doesn't exist, create a new Bio_mahasiswa with this data.
     * 
    **/
    create: XOR<Bio_mahasiswaCreateInput, Bio_mahasiswaUncheckedCreateInput>
    /**
     * In case the Bio_mahasiswa was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<Bio_mahasiswaUpdateInput, Bio_mahasiswaUncheckedUpdateInput>
  }


  /**
   * Bio_mahasiswa delete
   */
  export type Bio_mahasiswaDeleteArgs = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
    /**
     * Filter which Bio_mahasiswa to delete.
     * 
    **/
    where: Bio_mahasiswaWhereUniqueInput
  }


  /**
   * Bio_mahasiswa deleteMany
   */
  export type Bio_mahasiswaDeleteManyArgs = {
    /**
     * Filter which Bio_mahasiswas to delete
     * 
    **/
    where?: Bio_mahasiswaWhereInput
  }


  /**
   * Bio_mahasiswa: findUniqueOrThrow
   */
  export type Bio_mahasiswaFindUniqueOrThrowArgs = Bio_mahasiswaFindUniqueArgsBase
      

  /**
   * Bio_mahasiswa: findFirstOrThrow
   */
  export type Bio_mahasiswaFindFirstOrThrowArgs = Bio_mahasiswaFindFirstArgsBase
      

  /**
   * Bio_mahasiswa without action
   */
  export type Bio_mahasiswaArgs = {
    /**
     * Select specific fields to fetch from the Bio_mahasiswa
     * 
    **/
    select?: Bio_mahasiswaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: Bio_mahasiswaInclude | null
  }



  /**
   * Model Irs
   */


  export type AggregateIrs = {
    _count: IrsCountAggregateOutputType | null
    _avg: IrsAvgAggregateOutputType | null
    _sum: IrsSumAggregateOutputType | null
    _min: IrsMinAggregateOutputType | null
    _max: IrsMaxAggregateOutputType | null
  }

  export type IrsAvgAggregateOutputType = {
    jumlahSks: number | null
  }

  export type IrsSumAggregateOutputType = {
    jumlahSks: number | null
  }

  export type IrsMinAggregateOutputType = {
    id_Irs: string | null
    semester: string | null
    jumlahSks: number | null
    berkas: string | null
    url: string | null
  }

  export type IrsMaxAggregateOutputType = {
    id_Irs: string | null
    semester: string | null
    jumlahSks: number | null
    berkas: string | null
    url: string | null
  }

  export type IrsCountAggregateOutputType = {
    id_Irs: number
    semester: number
    jumlahSks: number
    berkas: number
    url: number
    _all: number
  }


  export type IrsAvgAggregateInputType = {
    jumlahSks?: true
  }

  export type IrsSumAggregateInputType = {
    jumlahSks?: true
  }

  export type IrsMinAggregateInputType = {
    id_Irs?: true
    semester?: true
    jumlahSks?: true
    berkas?: true
    url?: true
  }

  export type IrsMaxAggregateInputType = {
    id_Irs?: true
    semester?: true
    jumlahSks?: true
    berkas?: true
    url?: true
  }

  export type IrsCountAggregateInputType = {
    id_Irs?: true
    semester?: true
    jumlahSks?: true
    berkas?: true
    url?: true
    _all?: true
  }

  export type IrsAggregateArgs = {
    /**
     * Filter which Irs to aggregate.
     * 
    **/
    where?: IrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Irs to fetch.
     * 
    **/
    orderBy?: Enumerable<IrsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: IrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Irs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Irs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Irs
    **/
    _count?: true | IrsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IrsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IrsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IrsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IrsMaxAggregateInputType
  }

  export type GetIrsAggregateType<T extends IrsAggregateArgs> = {
        [P in keyof T & keyof AggregateIrs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIrs[P]>
      : GetScalarType<T[P], AggregateIrs[P]>
  }




  export type IrsGroupByArgs = {
    where?: IrsWhereInput
    orderBy?: Enumerable<IrsOrderByWithAggregationInput>
    by: Array<IrsScalarFieldEnum>
    having?: IrsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IrsCountAggregateInputType | true
    _avg?: IrsAvgAggregateInputType
    _sum?: IrsSumAggregateInputType
    _min?: IrsMinAggregateInputType
    _max?: IrsMaxAggregateInputType
  }


  export type IrsGroupByOutputType = {
    id_Irs: string
    semester: string
    jumlahSks: number
    berkas: string
    url: string
    _count: IrsCountAggregateOutputType | null
    _avg: IrsAvgAggregateOutputType | null
    _sum: IrsSumAggregateOutputType | null
    _min: IrsMinAggregateOutputType | null
    _max: IrsMaxAggregateOutputType | null
  }

  type GetIrsGroupByPayload<T extends IrsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<IrsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IrsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IrsGroupByOutputType[P]>
            : GetScalarType<T[P], IrsGroupByOutputType[P]>
        }
      >
    >


  export type IrsSelect = {
    id_Irs?: boolean
    semester?: boolean
    jumlahSks?: boolean
    berkas?: boolean
    url?: boolean
    author?: boolean | MahasiswaArgs
  }

  export type IrsInclude = {
    author?: boolean | MahasiswaArgs
  }

  export type IrsGetPayload<
    S extends boolean | null | undefined | IrsArgs,
    U = keyof S
      > = S extends true
        ? Irs
    : S extends undefined
    ? never
    : S extends IrsArgs | IrsFindManyArgs
    ?'include' extends U
    ? Irs  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Irs ? Irs[P] : never
  } 
    : Irs
  : Irs


  type IrsCountArgs = Merge<
    Omit<IrsFindManyArgs, 'select' | 'include'> & {
      select?: IrsCountAggregateInputType | true
    }
  >

  export interface IrsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Irs that matches the filter.
     * @param {IrsFindUniqueArgs} args - Arguments to find a Irs
     * @example
     * // Get one Irs
     * const irs = await prisma.irs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IrsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, IrsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Irs'> extends True ? CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>> : CheckSelect<T, Prisma__IrsClient<Irs | null >, Prisma__IrsClient<IrsGetPayload<T> | null >>

    /**
     * Find the first Irs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsFindFirstArgs} args - Arguments to find a Irs
     * @example
     * // Get one Irs
     * const irs = await prisma.irs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IrsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, IrsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Irs'> extends True ? CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>> : CheckSelect<T, Prisma__IrsClient<Irs | null >, Prisma__IrsClient<IrsGetPayload<T> | null >>

    /**
     * Find zero or more Irs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Irs
     * const irs = await prisma.irs.findMany()
     * 
     * // Get first 10 Irs
     * const irs = await prisma.irs.findMany({ take: 10 })
     * 
     * // Only select the `id_Irs`
     * const irsWithId_IrsOnly = await prisma.irs.findMany({ select: { id_Irs: true } })
     * 
    **/
    findMany<T extends IrsFindManyArgs>(
      args?: SelectSubset<T, IrsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Irs>>, PrismaPromise<Array<IrsGetPayload<T>>>>

    /**
     * Create a Irs.
     * @param {IrsCreateArgs} args - Arguments to create a Irs.
     * @example
     * // Create one Irs
     * const Irs = await prisma.irs.create({
     *   data: {
     *     // ... data to create a Irs
     *   }
     * })
     * 
    **/
    create<T extends IrsCreateArgs>(
      args: SelectSubset<T, IrsCreateArgs>
    ): CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>>

    /**
     * Create many Irs.
     *     @param {IrsCreateManyArgs} args - Arguments to create many Irs.
     *     @example
     *     // Create many Irs
     *     const irs = await prisma.irs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IrsCreateManyArgs>(
      args?: SelectSubset<T, IrsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Irs.
     * @param {IrsDeleteArgs} args - Arguments to delete one Irs.
     * @example
     * // Delete one Irs
     * const Irs = await prisma.irs.delete({
     *   where: {
     *     // ... filter to delete one Irs
     *   }
     * })
     * 
    **/
    delete<T extends IrsDeleteArgs>(
      args: SelectSubset<T, IrsDeleteArgs>
    ): CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>>

    /**
     * Update one Irs.
     * @param {IrsUpdateArgs} args - Arguments to update one Irs.
     * @example
     * // Update one Irs
     * const irs = await prisma.irs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IrsUpdateArgs>(
      args: SelectSubset<T, IrsUpdateArgs>
    ): CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>>

    /**
     * Delete zero or more Irs.
     * @param {IrsDeleteManyArgs} args - Arguments to filter Irs to delete.
     * @example
     * // Delete a few Irs
     * const { count } = await prisma.irs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IrsDeleteManyArgs>(
      args?: SelectSubset<T, IrsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Irs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Irs
     * const irs = await prisma.irs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IrsUpdateManyArgs>(
      args: SelectSubset<T, IrsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Irs.
     * @param {IrsUpsertArgs} args - Arguments to update or create a Irs.
     * @example
     * // Update or create a Irs
     * const irs = await prisma.irs.upsert({
     *   create: {
     *     // ... data to create a Irs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Irs we want to update
     *   }
     * })
    **/
    upsert<T extends IrsUpsertArgs>(
      args: SelectSubset<T, IrsUpsertArgs>
    ): CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>>

    /**
     * Find one Irs that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {IrsFindUniqueOrThrowArgs} args - Arguments to find a Irs
     * @example
     * // Get one Irs
     * const irs = await prisma.irs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IrsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, IrsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>>

    /**
     * Find the first Irs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsFindFirstOrThrowArgs} args - Arguments to find a Irs
     * @example
     * // Get one Irs
     * const irs = await prisma.irs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IrsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, IrsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__IrsClient<Irs>, Prisma__IrsClient<IrsGetPayload<T>>>

    /**
     * Count the number of Irs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsCountArgs} args - Arguments to filter Irs to count.
     * @example
     * // Count the number of Irs
     * const count = await prisma.irs.count({
     *   where: {
     *     // ... the filter for the Irs we want to count
     *   }
     * })
    **/
    count<T extends IrsCountArgs>(
      args?: Subset<T, IrsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IrsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Irs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IrsAggregateArgs>(args: Subset<T, IrsAggregateArgs>): PrismaPromise<GetIrsAggregateType<T>>

    /**
     * Group by Irs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IrsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IrsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IrsGroupByArgs['orderBy'] }
        : { orderBy?: IrsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IrsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIrsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Irs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__IrsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends MahasiswaArgs = {}>(args?: Subset<T, MahasiswaArgs>): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Irs base type for findUnique actions
   */
  export type IrsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * Filter, which Irs to fetch.
     * 
    **/
    where: IrsWhereUniqueInput
  }

  /**
   * Irs: findUnique
   */
  export interface IrsFindUniqueArgs extends IrsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Irs base type for findFirst actions
   */
  export type IrsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * Filter, which Irs to fetch.
     * 
    **/
    where?: IrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Irs to fetch.
     * 
    **/
    orderBy?: Enumerable<IrsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Irs.
     * 
    **/
    cursor?: IrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Irs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Irs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Irs.
     * 
    **/
    distinct?: Enumerable<IrsScalarFieldEnum>
  }

  /**
   * Irs: findFirst
   */
  export interface IrsFindFirstArgs extends IrsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Irs findMany
   */
  export type IrsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * Filter, which Irs to fetch.
     * 
    **/
    where?: IrsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Irs to fetch.
     * 
    **/
    orderBy?: Enumerable<IrsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Irs.
     * 
    **/
    cursor?: IrsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Irs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Irs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<IrsScalarFieldEnum>
  }


  /**
   * Irs create
   */
  export type IrsCreateArgs = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * The data needed to create a Irs.
     * 
    **/
    data: XOR<IrsCreateInput, IrsUncheckedCreateInput>
  }


  /**
   * Irs createMany
   */
  export type IrsCreateManyArgs = {
    /**
     * The data used to create many Irs.
     * 
    **/
    data: Enumerable<IrsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Irs update
   */
  export type IrsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * The data needed to update a Irs.
     * 
    **/
    data: XOR<IrsUpdateInput, IrsUncheckedUpdateInput>
    /**
     * Choose, which Irs to update.
     * 
    **/
    where: IrsWhereUniqueInput
  }


  /**
   * Irs updateMany
   */
  export type IrsUpdateManyArgs = {
    /**
     * The data used to update Irs.
     * 
    **/
    data: XOR<IrsUpdateManyMutationInput, IrsUncheckedUpdateManyInput>
    /**
     * Filter which Irs to update
     * 
    **/
    where?: IrsWhereInput
  }


  /**
   * Irs upsert
   */
  export type IrsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * The filter to search for the Irs to update in case it exists.
     * 
    **/
    where: IrsWhereUniqueInput
    /**
     * In case the Irs found by the `where` argument doesn't exist, create a new Irs with this data.
     * 
    **/
    create: XOR<IrsCreateInput, IrsUncheckedCreateInput>
    /**
     * In case the Irs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<IrsUpdateInput, IrsUncheckedUpdateInput>
  }


  /**
   * Irs delete
   */
  export type IrsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
    /**
     * Filter which Irs to delete.
     * 
    **/
    where: IrsWhereUniqueInput
  }


  /**
   * Irs deleteMany
   */
  export type IrsDeleteManyArgs = {
    /**
     * Filter which Irs to delete
     * 
    **/
    where?: IrsWhereInput
  }


  /**
   * Irs: findUniqueOrThrow
   */
  export type IrsFindUniqueOrThrowArgs = IrsFindUniqueArgsBase
      

  /**
   * Irs: findFirstOrThrow
   */
  export type IrsFindFirstOrThrowArgs = IrsFindFirstArgsBase
      

  /**
   * Irs without action
   */
  export type IrsArgs = {
    /**
     * Select specific fields to fetch from the Irs
     * 
    **/
    select?: IrsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: IrsInclude | null
  }



  /**
   * Model Pkl
   */


  export type AggregatePkl = {
    _count: PklCountAggregateOutputType | null
    _min: PklMinAggregateOutputType | null
    _max: PklMaxAggregateOutputType | null
  }

  export type PklMinAggregateOutputType = {
    id_pkl: string | null
    status_pkl: string | null
    dospem: string | null
    nama_instantsi: string | null
    berkas_pkl: string | null
    url: string | null
  }

  export type PklMaxAggregateOutputType = {
    id_pkl: string | null
    status_pkl: string | null
    dospem: string | null
    nama_instantsi: string | null
    berkas_pkl: string | null
    url: string | null
  }

  export type PklCountAggregateOutputType = {
    id_pkl: number
    status_pkl: number
    dospem: number
    nama_instantsi: number
    berkas_pkl: number
    url: number
    _all: number
  }


  export type PklMinAggregateInputType = {
    id_pkl?: true
    status_pkl?: true
    dospem?: true
    nama_instantsi?: true
    berkas_pkl?: true
    url?: true
  }

  export type PklMaxAggregateInputType = {
    id_pkl?: true
    status_pkl?: true
    dospem?: true
    nama_instantsi?: true
    berkas_pkl?: true
    url?: true
  }

  export type PklCountAggregateInputType = {
    id_pkl?: true
    status_pkl?: true
    dospem?: true
    nama_instantsi?: true
    berkas_pkl?: true
    url?: true
    _all?: true
  }

  export type PklAggregateArgs = {
    /**
     * Filter which Pkl to aggregate.
     * 
    **/
    where?: PklWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pkls to fetch.
     * 
    **/
    orderBy?: Enumerable<PklOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PklWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pkls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pkls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pkls
    **/
    _count?: true | PklCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PklMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PklMaxAggregateInputType
  }

  export type GetPklAggregateType<T extends PklAggregateArgs> = {
        [P in keyof T & keyof AggregatePkl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePkl[P]>
      : GetScalarType<T[P], AggregatePkl[P]>
  }




  export type PklGroupByArgs = {
    where?: PklWhereInput
    orderBy?: Enumerable<PklOrderByWithAggregationInput>
    by: Array<PklScalarFieldEnum>
    having?: PklScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PklCountAggregateInputType | true
    _min?: PklMinAggregateInputType
    _max?: PklMaxAggregateInputType
  }


  export type PklGroupByOutputType = {
    id_pkl: string
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
    _count: PklCountAggregateOutputType | null
    _min: PklMinAggregateOutputType | null
    _max: PklMaxAggregateOutputType | null
  }

  type GetPklGroupByPayload<T extends PklGroupByArgs> = PrismaPromise<
    Array<
      PickArray<PklGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PklGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PklGroupByOutputType[P]>
            : GetScalarType<T[P], PklGroupByOutputType[P]>
        }
      >
    >


  export type PklSelect = {
    id_pkl?: boolean
    status_pkl?: boolean
    dospem?: boolean
    nama_instantsi?: boolean
    berkas_pkl?: boolean
    url?: boolean
    author?: boolean | MahasiswaArgs
    nilai?: boolean | nilaiPklArgs
  }

  export type PklInclude = {
    author?: boolean | MahasiswaArgs
    nilai?: boolean | nilaiPklArgs
  }

  export type PklGetPayload<
    S extends boolean | null | undefined | PklArgs,
    U = keyof S
      > = S extends true
        ? Pkl
    : S extends undefined
    ? never
    : S extends PklArgs | PklFindManyArgs
    ?'include' extends U
    ? Pkl  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'nilai' ? nilaiPklGetPayload<Exclude<S['include'], undefined | null>[P]> | null :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'nilai' ? nilaiPklGetPayload<Exclude<S['select'], undefined | null>[P]> | null :  P extends keyof Pkl ? Pkl[P] : never
  } 
    : Pkl
  : Pkl


  type PklCountArgs = Merge<
    Omit<PklFindManyArgs, 'select' | 'include'> & {
      select?: PklCountAggregateInputType | true
    }
  >

  export interface PklDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Pkl that matches the filter.
     * @param {PklFindUniqueArgs} args - Arguments to find a Pkl
     * @example
     * // Get one Pkl
     * const pkl = await prisma.pkl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PklFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PklFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Pkl'> extends True ? CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>> : CheckSelect<T, Prisma__PklClient<Pkl | null >, Prisma__PklClient<PklGetPayload<T> | null >>

    /**
     * Find the first Pkl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklFindFirstArgs} args - Arguments to find a Pkl
     * @example
     * // Get one Pkl
     * const pkl = await prisma.pkl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PklFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PklFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Pkl'> extends True ? CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>> : CheckSelect<T, Prisma__PklClient<Pkl | null >, Prisma__PklClient<PklGetPayload<T> | null >>

    /**
     * Find zero or more Pkls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pkls
     * const pkls = await prisma.pkl.findMany()
     * 
     * // Get first 10 Pkls
     * const pkls = await prisma.pkl.findMany({ take: 10 })
     * 
     * // Only select the `id_pkl`
     * const pklWithId_pklOnly = await prisma.pkl.findMany({ select: { id_pkl: true } })
     * 
    **/
    findMany<T extends PklFindManyArgs>(
      args?: SelectSubset<T, PklFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Pkl>>, PrismaPromise<Array<PklGetPayload<T>>>>

    /**
     * Create a Pkl.
     * @param {PklCreateArgs} args - Arguments to create a Pkl.
     * @example
     * // Create one Pkl
     * const Pkl = await prisma.pkl.create({
     *   data: {
     *     // ... data to create a Pkl
     *   }
     * })
     * 
    **/
    create<T extends PklCreateArgs>(
      args: SelectSubset<T, PklCreateArgs>
    ): CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>>

    /**
     * Create many Pkls.
     *     @param {PklCreateManyArgs} args - Arguments to create many Pkls.
     *     @example
     *     // Create many Pkls
     *     const pkl = await prisma.pkl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PklCreateManyArgs>(
      args?: SelectSubset<T, PklCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Pkl.
     * @param {PklDeleteArgs} args - Arguments to delete one Pkl.
     * @example
     * // Delete one Pkl
     * const Pkl = await prisma.pkl.delete({
     *   where: {
     *     // ... filter to delete one Pkl
     *   }
     * })
     * 
    **/
    delete<T extends PklDeleteArgs>(
      args: SelectSubset<T, PklDeleteArgs>
    ): CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>>

    /**
     * Update one Pkl.
     * @param {PklUpdateArgs} args - Arguments to update one Pkl.
     * @example
     * // Update one Pkl
     * const pkl = await prisma.pkl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PklUpdateArgs>(
      args: SelectSubset<T, PklUpdateArgs>
    ): CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>>

    /**
     * Delete zero or more Pkls.
     * @param {PklDeleteManyArgs} args - Arguments to filter Pkls to delete.
     * @example
     * // Delete a few Pkls
     * const { count } = await prisma.pkl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PklDeleteManyArgs>(
      args?: SelectSubset<T, PklDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pkls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pkls
     * const pkl = await prisma.pkl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PklUpdateManyArgs>(
      args: SelectSubset<T, PklUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Pkl.
     * @param {PklUpsertArgs} args - Arguments to update or create a Pkl.
     * @example
     * // Update or create a Pkl
     * const pkl = await prisma.pkl.upsert({
     *   create: {
     *     // ... data to create a Pkl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pkl we want to update
     *   }
     * })
    **/
    upsert<T extends PklUpsertArgs>(
      args: SelectSubset<T, PklUpsertArgs>
    ): CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>>

    /**
     * Find one Pkl that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {PklFindUniqueOrThrowArgs} args - Arguments to find a Pkl
     * @example
     * // Get one Pkl
     * const pkl = await prisma.pkl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PklFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PklFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>>

    /**
     * Find the first Pkl that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklFindFirstOrThrowArgs} args - Arguments to find a Pkl
     * @example
     * // Get one Pkl
     * const pkl = await prisma.pkl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PklFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PklFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__PklClient<Pkl>, Prisma__PklClient<PklGetPayload<T>>>

    /**
     * Count the number of Pkls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklCountArgs} args - Arguments to filter Pkls to count.
     * @example
     * // Count the number of Pkls
     * const count = await prisma.pkl.count({
     *   where: {
     *     // ... the filter for the Pkls we want to count
     *   }
     * })
    **/
    count<T extends PklCountArgs>(
      args?: Subset<T, PklCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PklCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pkl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PklAggregateArgs>(args: Subset<T, PklAggregateArgs>): PrismaPromise<GetPklAggregateType<T>>

    /**
     * Group by Pkl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PklGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PklGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PklGroupByArgs['orderBy'] }
        : { orderBy?: PklGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PklGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPklGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Pkl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PklClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends MahasiswaArgs = {}>(args?: Subset<T, MahasiswaArgs>): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>;

    nilai<T extends nilaiPklArgs = {}>(args?: Subset<T, nilaiPklArgs>): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl | null >, Prisma__nilaiPklClient<nilaiPklGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Pkl base type for findUnique actions
   */
  export type PklFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * Filter, which Pkl to fetch.
     * 
    **/
    where: PklWhereUniqueInput
  }

  /**
   * Pkl: findUnique
   */
  export interface PklFindUniqueArgs extends PklFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pkl base type for findFirst actions
   */
  export type PklFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * Filter, which Pkl to fetch.
     * 
    **/
    where?: PklWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pkls to fetch.
     * 
    **/
    orderBy?: Enumerable<PklOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pkls.
     * 
    **/
    cursor?: PklWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pkls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pkls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pkls.
     * 
    **/
    distinct?: Enumerable<PklScalarFieldEnum>
  }

  /**
   * Pkl: findFirst
   */
  export interface PklFindFirstArgs extends PklFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Pkl findMany
   */
  export type PklFindManyArgs = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * Filter, which Pkls to fetch.
     * 
    **/
    where?: PklWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pkls to fetch.
     * 
    **/
    orderBy?: Enumerable<PklOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pkls.
     * 
    **/
    cursor?: PklWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pkls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pkls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PklScalarFieldEnum>
  }


  /**
   * Pkl create
   */
  export type PklCreateArgs = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * The data needed to create a Pkl.
     * 
    **/
    data: XOR<PklCreateInput, PklUncheckedCreateInput>
  }


  /**
   * Pkl createMany
   */
  export type PklCreateManyArgs = {
    /**
     * The data used to create many Pkls.
     * 
    **/
    data: Enumerable<PklCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Pkl update
   */
  export type PklUpdateArgs = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * The data needed to update a Pkl.
     * 
    **/
    data: XOR<PklUpdateInput, PklUncheckedUpdateInput>
    /**
     * Choose, which Pkl to update.
     * 
    **/
    where: PklWhereUniqueInput
  }


  /**
   * Pkl updateMany
   */
  export type PklUpdateManyArgs = {
    /**
     * The data used to update Pkls.
     * 
    **/
    data: XOR<PklUpdateManyMutationInput, PklUncheckedUpdateManyInput>
    /**
     * Filter which Pkls to update
     * 
    **/
    where?: PklWhereInput
  }


  /**
   * Pkl upsert
   */
  export type PklUpsertArgs = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * The filter to search for the Pkl to update in case it exists.
     * 
    **/
    where: PklWhereUniqueInput
    /**
     * In case the Pkl found by the `where` argument doesn't exist, create a new Pkl with this data.
     * 
    **/
    create: XOR<PklCreateInput, PklUncheckedCreateInput>
    /**
     * In case the Pkl was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PklUpdateInput, PklUncheckedUpdateInput>
  }


  /**
   * Pkl delete
   */
  export type PklDeleteArgs = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
    /**
     * Filter which Pkl to delete.
     * 
    **/
    where: PklWhereUniqueInput
  }


  /**
   * Pkl deleteMany
   */
  export type PklDeleteManyArgs = {
    /**
     * Filter which Pkls to delete
     * 
    **/
    where?: PklWhereInput
  }


  /**
   * Pkl: findUniqueOrThrow
   */
  export type PklFindUniqueOrThrowArgs = PklFindUniqueArgsBase
      

  /**
   * Pkl: findFirstOrThrow
   */
  export type PklFindFirstOrThrowArgs = PklFindFirstArgsBase
      

  /**
   * Pkl without action
   */
  export type PklArgs = {
    /**
     * Select specific fields to fetch from the Pkl
     * 
    **/
    select?: PklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PklInclude | null
  }



  /**
   * Model nilaiPkl
   */


  export type AggregateNilaiPkl = {
    _count: NilaiPklCountAggregateOutputType | null
    _min: NilaiPklMinAggregateOutputType | null
    _max: NilaiPklMaxAggregateOutputType | null
  }

  export type NilaiPklMinAggregateOutputType = {
    id_nilai: string | null
    nilaiPkl: string | null
  }

  export type NilaiPklMaxAggregateOutputType = {
    id_nilai: string | null
    nilaiPkl: string | null
  }

  export type NilaiPklCountAggregateOutputType = {
    id_nilai: number
    nilaiPkl: number
    _all: number
  }


  export type NilaiPklMinAggregateInputType = {
    id_nilai?: true
    nilaiPkl?: true
  }

  export type NilaiPklMaxAggregateInputType = {
    id_nilai?: true
    nilaiPkl?: true
  }

  export type NilaiPklCountAggregateInputType = {
    id_nilai?: true
    nilaiPkl?: true
    _all?: true
  }

  export type NilaiPklAggregateArgs = {
    /**
     * Filter which nilaiPkl to aggregate.
     * 
    **/
    where?: nilaiPklWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilaiPkls to fetch.
     * 
    **/
    orderBy?: Enumerable<nilaiPklOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: nilaiPklWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilaiPkls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilaiPkls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nilaiPkls
    **/
    _count?: true | NilaiPklCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NilaiPklMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NilaiPklMaxAggregateInputType
  }

  export type GetNilaiPklAggregateType<T extends NilaiPklAggregateArgs> = {
        [P in keyof T & keyof AggregateNilaiPkl]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNilaiPkl[P]>
      : GetScalarType<T[P], AggregateNilaiPkl[P]>
  }




  export type NilaiPklGroupByArgs = {
    where?: nilaiPklWhereInput
    orderBy?: Enumerable<nilaiPklOrderByWithAggregationInput>
    by: Array<NilaiPklScalarFieldEnum>
    having?: nilaiPklScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NilaiPklCountAggregateInputType | true
    _min?: NilaiPklMinAggregateInputType
    _max?: NilaiPklMaxAggregateInputType
  }


  export type NilaiPklGroupByOutputType = {
    id_nilai: string
    nilaiPkl: string
    _count: NilaiPklCountAggregateOutputType | null
    _min: NilaiPklMinAggregateOutputType | null
    _max: NilaiPklMaxAggregateOutputType | null
  }

  type GetNilaiPklGroupByPayload<T extends NilaiPklGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NilaiPklGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NilaiPklGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NilaiPklGroupByOutputType[P]>
            : GetScalarType<T[P], NilaiPklGroupByOutputType[P]>
        }
      >
    >


  export type nilaiPklSelect = {
    id_nilai?: boolean
    nilaiPkl?: boolean
    author?: boolean | PklArgs
  }

  export type nilaiPklInclude = {
    author?: boolean | PklArgs
  }

  export type nilaiPklGetPayload<
    S extends boolean | null | undefined | nilaiPklArgs,
    U = keyof S
      > = S extends true
        ? nilaiPkl
    : S extends undefined
    ? never
    : S extends nilaiPklArgs | nilaiPklFindManyArgs
    ?'include' extends U
    ? nilaiPkl  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? PklGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? PklGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof nilaiPkl ? nilaiPkl[P] : never
  } 
    : nilaiPkl
  : nilaiPkl


  type nilaiPklCountArgs = Merge<
    Omit<nilaiPklFindManyArgs, 'select' | 'include'> & {
      select?: NilaiPklCountAggregateInputType | true
    }
  >

  export interface nilaiPklDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one NilaiPkl that matches the filter.
     * @param {nilaiPklFindUniqueArgs} args - Arguments to find a NilaiPkl
     * @example
     * // Get one NilaiPkl
     * const nilaiPkl = await prisma.nilaiPkl.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends nilaiPklFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, nilaiPklFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'nilaiPkl'> extends True ? CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>> : CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl | null >, Prisma__nilaiPklClient<nilaiPklGetPayload<T> | null >>

    /**
     * Find the first NilaiPkl that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiPklFindFirstArgs} args - Arguments to find a NilaiPkl
     * @example
     * // Get one NilaiPkl
     * const nilaiPkl = await prisma.nilaiPkl.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends nilaiPklFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, nilaiPklFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'nilaiPkl'> extends True ? CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>> : CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl | null >, Prisma__nilaiPklClient<nilaiPklGetPayload<T> | null >>

    /**
     * Find zero or more NilaiPkls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiPklFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NilaiPkls
     * const nilaiPkls = await prisma.nilaiPkl.findMany()
     * 
     * // Get first 10 NilaiPkls
     * const nilaiPkls = await prisma.nilaiPkl.findMany({ take: 10 })
     * 
     * // Only select the `id_nilai`
     * const nilaiPklWithId_nilaiOnly = await prisma.nilaiPkl.findMany({ select: { id_nilai: true } })
     * 
    **/
    findMany<T extends nilaiPklFindManyArgs>(
      args?: SelectSubset<T, nilaiPklFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<nilaiPkl>>, PrismaPromise<Array<nilaiPklGetPayload<T>>>>

    /**
     * Create a NilaiPkl.
     * @param {nilaiPklCreateArgs} args - Arguments to create a NilaiPkl.
     * @example
     * // Create one NilaiPkl
     * const NilaiPkl = await prisma.nilaiPkl.create({
     *   data: {
     *     // ... data to create a NilaiPkl
     *   }
     * })
     * 
    **/
    create<T extends nilaiPklCreateArgs>(
      args: SelectSubset<T, nilaiPklCreateArgs>
    ): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>>

    /**
     * Create many NilaiPkls.
     *     @param {nilaiPklCreateManyArgs} args - Arguments to create many NilaiPkls.
     *     @example
     *     // Create many NilaiPkls
     *     const nilaiPkl = await prisma.nilaiPkl.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends nilaiPklCreateManyArgs>(
      args?: SelectSubset<T, nilaiPklCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a NilaiPkl.
     * @param {nilaiPklDeleteArgs} args - Arguments to delete one NilaiPkl.
     * @example
     * // Delete one NilaiPkl
     * const NilaiPkl = await prisma.nilaiPkl.delete({
     *   where: {
     *     // ... filter to delete one NilaiPkl
     *   }
     * })
     * 
    **/
    delete<T extends nilaiPklDeleteArgs>(
      args: SelectSubset<T, nilaiPklDeleteArgs>
    ): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>>

    /**
     * Update one NilaiPkl.
     * @param {nilaiPklUpdateArgs} args - Arguments to update one NilaiPkl.
     * @example
     * // Update one NilaiPkl
     * const nilaiPkl = await prisma.nilaiPkl.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends nilaiPklUpdateArgs>(
      args: SelectSubset<T, nilaiPklUpdateArgs>
    ): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>>

    /**
     * Delete zero or more NilaiPkls.
     * @param {nilaiPklDeleteManyArgs} args - Arguments to filter NilaiPkls to delete.
     * @example
     * // Delete a few NilaiPkls
     * const { count } = await prisma.nilaiPkl.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends nilaiPklDeleteManyArgs>(
      args?: SelectSubset<T, nilaiPklDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more NilaiPkls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiPklUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NilaiPkls
     * const nilaiPkl = await prisma.nilaiPkl.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends nilaiPklUpdateManyArgs>(
      args: SelectSubset<T, nilaiPklUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one NilaiPkl.
     * @param {nilaiPklUpsertArgs} args - Arguments to update or create a NilaiPkl.
     * @example
     * // Update or create a NilaiPkl
     * const nilaiPkl = await prisma.nilaiPkl.upsert({
     *   create: {
     *     // ... data to create a NilaiPkl
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NilaiPkl we want to update
     *   }
     * })
    **/
    upsert<T extends nilaiPklUpsertArgs>(
      args: SelectSubset<T, nilaiPklUpsertArgs>
    ): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>>

    /**
     * Find one NilaiPkl that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {nilaiPklFindUniqueOrThrowArgs} args - Arguments to find a NilaiPkl
     * @example
     * // Get one NilaiPkl
     * const nilaiPkl = await prisma.nilaiPkl.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends nilaiPklFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, nilaiPklFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>>

    /**
     * Find the first NilaiPkl that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiPklFindFirstOrThrowArgs} args - Arguments to find a NilaiPkl
     * @example
     * // Get one NilaiPkl
     * const nilaiPkl = await prisma.nilaiPkl.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends nilaiPklFindFirstOrThrowArgs>(
      args?: SelectSubset<T, nilaiPklFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__nilaiPklClient<nilaiPkl>, Prisma__nilaiPklClient<nilaiPklGetPayload<T>>>

    /**
     * Count the number of NilaiPkls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nilaiPklCountArgs} args - Arguments to filter NilaiPkls to count.
     * @example
     * // Count the number of NilaiPkls
     * const count = await prisma.nilaiPkl.count({
     *   where: {
     *     // ... the filter for the NilaiPkls we want to count
     *   }
     * })
    **/
    count<T extends nilaiPklCountArgs>(
      args?: Subset<T, nilaiPklCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NilaiPklCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NilaiPkl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiPklAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NilaiPklAggregateArgs>(args: Subset<T, NilaiPklAggregateArgs>): PrismaPromise<GetNilaiPklAggregateType<T>>

    /**
     * Group by NilaiPkl.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NilaiPklGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NilaiPklGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NilaiPklGroupByArgs['orderBy'] }
        : { orderBy?: NilaiPklGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NilaiPklGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNilaiPklGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for nilaiPkl.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__nilaiPklClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends PklArgs = {}>(args?: Subset<T, PklArgs>): CheckSelect<T, Prisma__PklClient<Pkl | null >, Prisma__PklClient<PklGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * nilaiPkl base type for findUnique actions
   */
  export type nilaiPklFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * Filter, which nilaiPkl to fetch.
     * 
    **/
    where: nilaiPklWhereUniqueInput
  }

  /**
   * nilaiPkl: findUnique
   */
  export interface nilaiPklFindUniqueArgs extends nilaiPklFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * nilaiPkl base type for findFirst actions
   */
  export type nilaiPklFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * Filter, which nilaiPkl to fetch.
     * 
    **/
    where?: nilaiPklWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilaiPkls to fetch.
     * 
    **/
    orderBy?: Enumerable<nilaiPklOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nilaiPkls.
     * 
    **/
    cursor?: nilaiPklWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilaiPkls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilaiPkls.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nilaiPkls.
     * 
    **/
    distinct?: Enumerable<NilaiPklScalarFieldEnum>
  }

  /**
   * nilaiPkl: findFirst
   */
  export interface nilaiPklFindFirstArgs extends nilaiPklFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * nilaiPkl findMany
   */
  export type nilaiPklFindManyArgs = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * Filter, which nilaiPkls to fetch.
     * 
    **/
    where?: nilaiPklWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nilaiPkls to fetch.
     * 
    **/
    orderBy?: Enumerable<nilaiPklOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nilaiPkls.
     * 
    **/
    cursor?: nilaiPklWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nilaiPkls from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nilaiPkls.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NilaiPklScalarFieldEnum>
  }


  /**
   * nilaiPkl create
   */
  export type nilaiPklCreateArgs = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * The data needed to create a nilaiPkl.
     * 
    **/
    data: XOR<nilaiPklCreateInput, nilaiPklUncheckedCreateInput>
  }


  /**
   * nilaiPkl createMany
   */
  export type nilaiPklCreateManyArgs = {
    /**
     * The data used to create many nilaiPkls.
     * 
    **/
    data: Enumerable<nilaiPklCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * nilaiPkl update
   */
  export type nilaiPklUpdateArgs = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * The data needed to update a nilaiPkl.
     * 
    **/
    data: XOR<nilaiPklUpdateInput, nilaiPklUncheckedUpdateInput>
    /**
     * Choose, which nilaiPkl to update.
     * 
    **/
    where: nilaiPklWhereUniqueInput
  }


  /**
   * nilaiPkl updateMany
   */
  export type nilaiPklUpdateManyArgs = {
    /**
     * The data used to update nilaiPkls.
     * 
    **/
    data: XOR<nilaiPklUpdateManyMutationInput, nilaiPklUncheckedUpdateManyInput>
    /**
     * Filter which nilaiPkls to update
     * 
    **/
    where?: nilaiPklWhereInput
  }


  /**
   * nilaiPkl upsert
   */
  export type nilaiPklUpsertArgs = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * The filter to search for the nilaiPkl to update in case it exists.
     * 
    **/
    where: nilaiPklWhereUniqueInput
    /**
     * In case the nilaiPkl found by the `where` argument doesn't exist, create a new nilaiPkl with this data.
     * 
    **/
    create: XOR<nilaiPklCreateInput, nilaiPklUncheckedCreateInput>
    /**
     * In case the nilaiPkl was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<nilaiPklUpdateInput, nilaiPklUncheckedUpdateInput>
  }


  /**
   * nilaiPkl delete
   */
  export type nilaiPklDeleteArgs = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
    /**
     * Filter which nilaiPkl to delete.
     * 
    **/
    where: nilaiPklWhereUniqueInput
  }


  /**
   * nilaiPkl deleteMany
   */
  export type nilaiPklDeleteManyArgs = {
    /**
     * Filter which nilaiPkls to delete
     * 
    **/
    where?: nilaiPklWhereInput
  }


  /**
   * nilaiPkl: findUniqueOrThrow
   */
  export type nilaiPklFindUniqueOrThrowArgs = nilaiPklFindUniqueArgsBase
      

  /**
   * nilaiPkl: findFirstOrThrow
   */
  export type nilaiPklFindFirstOrThrowArgs = nilaiPklFindFirstArgsBase
      

  /**
   * nilaiPkl without action
   */
  export type nilaiPklArgs = {
    /**
     * Select specific fields to fetch from the nilaiPkl
     * 
    **/
    select?: nilaiPklSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: nilaiPklInclude | null
  }



  /**
   * Model Khs
   */


  export type AggregateKhs = {
    _count: KhsCountAggregateOutputType | null
    _avg: KhsAvgAggregateOutputType | null
    _sum: KhsSumAggregateOutputType | null
    _min: KhsMinAggregateOutputType | null
    _max: KhsMaxAggregateOutputType | null
  }

  export type KhsAvgAggregateOutputType = {
    jumlah_sks: number | null
  }

  export type KhsSumAggregateOutputType = {
    jumlah_sks: number | null
  }

  export type KhsMinAggregateOutputType = {
    id_khs: string | null
    semester: string | null
    ip_semester: string | null
    ip_kumulatif: string | null
    jumlah_sks: number | null
    berkas_khs: string | null
    url: string | null
  }

  export type KhsMaxAggregateOutputType = {
    id_khs: string | null
    semester: string | null
    ip_semester: string | null
    ip_kumulatif: string | null
    jumlah_sks: number | null
    berkas_khs: string | null
    url: string | null
  }

  export type KhsCountAggregateOutputType = {
    id_khs: number
    semester: number
    ip_semester: number
    ip_kumulatif: number
    jumlah_sks: number
    berkas_khs: number
    url: number
    _all: number
  }


  export type KhsAvgAggregateInputType = {
    jumlah_sks?: true
  }

  export type KhsSumAggregateInputType = {
    jumlah_sks?: true
  }

  export type KhsMinAggregateInputType = {
    id_khs?: true
    semester?: true
    ip_semester?: true
    ip_kumulatif?: true
    jumlah_sks?: true
    berkas_khs?: true
    url?: true
  }

  export type KhsMaxAggregateInputType = {
    id_khs?: true
    semester?: true
    ip_semester?: true
    ip_kumulatif?: true
    jumlah_sks?: true
    berkas_khs?: true
    url?: true
  }

  export type KhsCountAggregateInputType = {
    id_khs?: true
    semester?: true
    ip_semester?: true
    ip_kumulatif?: true
    jumlah_sks?: true
    berkas_khs?: true
    url?: true
    _all?: true
  }

  export type KhsAggregateArgs = {
    /**
     * Filter which Khs to aggregate.
     * 
    **/
    where?: KhsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Khs to fetch.
     * 
    **/
    orderBy?: Enumerable<KhsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: KhsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Khs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Khs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Khs
    **/
    _count?: true | KhsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KhsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KhsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KhsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KhsMaxAggregateInputType
  }

  export type GetKhsAggregateType<T extends KhsAggregateArgs> = {
        [P in keyof T & keyof AggregateKhs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKhs[P]>
      : GetScalarType<T[P], AggregateKhs[P]>
  }




  export type KhsGroupByArgs = {
    where?: KhsWhereInput
    orderBy?: Enumerable<KhsOrderByWithAggregationInput>
    by: Array<KhsScalarFieldEnum>
    having?: KhsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KhsCountAggregateInputType | true
    _avg?: KhsAvgAggregateInputType
    _sum?: KhsSumAggregateInputType
    _min?: KhsMinAggregateInputType
    _max?: KhsMaxAggregateInputType
  }


  export type KhsGroupByOutputType = {
    id_khs: string
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
    _count: KhsCountAggregateOutputType | null
    _avg: KhsAvgAggregateOutputType | null
    _sum: KhsSumAggregateOutputType | null
    _min: KhsMinAggregateOutputType | null
    _max: KhsMaxAggregateOutputType | null
  }

  type GetKhsGroupByPayload<T extends KhsGroupByArgs> = PrismaPromise<
    Array<
      PickArray<KhsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KhsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KhsGroupByOutputType[P]>
            : GetScalarType<T[P], KhsGroupByOutputType[P]>
        }
      >
    >


  export type KhsSelect = {
    id_khs?: boolean
    semester?: boolean
    ip_semester?: boolean
    ip_kumulatif?: boolean
    jumlah_sks?: boolean
    berkas_khs?: boolean
    url?: boolean
    author?: boolean | MahasiswaArgs
  }

  export type KhsInclude = {
    author?: boolean | MahasiswaArgs
  }

  export type KhsGetPayload<
    S extends boolean | null | undefined | KhsArgs,
    U = keyof S
      > = S extends true
        ? Khs
    : S extends undefined
    ? never
    : S extends KhsArgs | KhsFindManyArgs
    ?'include' extends U
    ? Khs  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Khs ? Khs[P] : never
  } 
    : Khs
  : Khs


  type KhsCountArgs = Merge<
    Omit<KhsFindManyArgs, 'select' | 'include'> & {
      select?: KhsCountAggregateInputType | true
    }
  >

  export interface KhsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Khs that matches the filter.
     * @param {KhsFindUniqueArgs} args - Arguments to find a Khs
     * @example
     * // Get one Khs
     * const khs = await prisma.khs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KhsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KhsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Khs'> extends True ? CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>> : CheckSelect<T, Prisma__KhsClient<Khs | null >, Prisma__KhsClient<KhsGetPayload<T> | null >>

    /**
     * Find the first Khs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsFindFirstArgs} args - Arguments to find a Khs
     * @example
     * // Get one Khs
     * const khs = await prisma.khs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KhsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KhsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Khs'> extends True ? CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>> : CheckSelect<T, Prisma__KhsClient<Khs | null >, Prisma__KhsClient<KhsGetPayload<T> | null >>

    /**
     * Find zero or more Khs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Khs
     * const khs = await prisma.khs.findMany()
     * 
     * // Get first 10 Khs
     * const khs = await prisma.khs.findMany({ take: 10 })
     * 
     * // Only select the `id_khs`
     * const khsWithId_khsOnly = await prisma.khs.findMany({ select: { id_khs: true } })
     * 
    **/
    findMany<T extends KhsFindManyArgs>(
      args?: SelectSubset<T, KhsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Khs>>, PrismaPromise<Array<KhsGetPayload<T>>>>

    /**
     * Create a Khs.
     * @param {KhsCreateArgs} args - Arguments to create a Khs.
     * @example
     * // Create one Khs
     * const Khs = await prisma.khs.create({
     *   data: {
     *     // ... data to create a Khs
     *   }
     * })
     * 
    **/
    create<T extends KhsCreateArgs>(
      args: SelectSubset<T, KhsCreateArgs>
    ): CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>>

    /**
     * Create many Khs.
     *     @param {KhsCreateManyArgs} args - Arguments to create many Khs.
     *     @example
     *     // Create many Khs
     *     const khs = await prisma.khs.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KhsCreateManyArgs>(
      args?: SelectSubset<T, KhsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Khs.
     * @param {KhsDeleteArgs} args - Arguments to delete one Khs.
     * @example
     * // Delete one Khs
     * const Khs = await prisma.khs.delete({
     *   where: {
     *     // ... filter to delete one Khs
     *   }
     * })
     * 
    **/
    delete<T extends KhsDeleteArgs>(
      args: SelectSubset<T, KhsDeleteArgs>
    ): CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>>

    /**
     * Update one Khs.
     * @param {KhsUpdateArgs} args - Arguments to update one Khs.
     * @example
     * // Update one Khs
     * const khs = await prisma.khs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KhsUpdateArgs>(
      args: SelectSubset<T, KhsUpdateArgs>
    ): CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>>

    /**
     * Delete zero or more Khs.
     * @param {KhsDeleteManyArgs} args - Arguments to filter Khs to delete.
     * @example
     * // Delete a few Khs
     * const { count } = await prisma.khs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KhsDeleteManyArgs>(
      args?: SelectSubset<T, KhsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Khs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Khs
     * const khs = await prisma.khs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KhsUpdateManyArgs>(
      args: SelectSubset<T, KhsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Khs.
     * @param {KhsUpsertArgs} args - Arguments to update or create a Khs.
     * @example
     * // Update or create a Khs
     * const khs = await prisma.khs.upsert({
     *   create: {
     *     // ... data to create a Khs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Khs we want to update
     *   }
     * })
    **/
    upsert<T extends KhsUpsertArgs>(
      args: SelectSubset<T, KhsUpsertArgs>
    ): CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>>

    /**
     * Find one Khs that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {KhsFindUniqueOrThrowArgs} args - Arguments to find a Khs
     * @example
     * // Get one Khs
     * const khs = await prisma.khs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KhsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, KhsFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>>

    /**
     * Find the first Khs that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsFindFirstOrThrowArgs} args - Arguments to find a Khs
     * @example
     * // Get one Khs
     * const khs = await prisma.khs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KhsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, KhsFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__KhsClient<Khs>, Prisma__KhsClient<KhsGetPayload<T>>>

    /**
     * Count the number of Khs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsCountArgs} args - Arguments to filter Khs to count.
     * @example
     * // Count the number of Khs
     * const count = await prisma.khs.count({
     *   where: {
     *     // ... the filter for the Khs we want to count
     *   }
     * })
    **/
    count<T extends KhsCountArgs>(
      args?: Subset<T, KhsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KhsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Khs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KhsAggregateArgs>(args: Subset<T, KhsAggregateArgs>): PrismaPromise<GetKhsAggregateType<T>>

    /**
     * Group by Khs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KhsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KhsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KhsGroupByArgs['orderBy'] }
        : { orderBy?: KhsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KhsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKhsGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Khs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KhsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends MahasiswaArgs = {}>(args?: Subset<T, MahasiswaArgs>): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Khs base type for findUnique actions
   */
  export type KhsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * Filter, which Khs to fetch.
     * 
    **/
    where: KhsWhereUniqueInput
  }

  /**
   * Khs: findUnique
   */
  export interface KhsFindUniqueArgs extends KhsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Khs base type for findFirst actions
   */
  export type KhsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * Filter, which Khs to fetch.
     * 
    **/
    where?: KhsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Khs to fetch.
     * 
    **/
    orderBy?: Enumerable<KhsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Khs.
     * 
    **/
    cursor?: KhsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Khs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Khs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Khs.
     * 
    **/
    distinct?: Enumerable<KhsScalarFieldEnum>
  }

  /**
   * Khs: findFirst
   */
  export interface KhsFindFirstArgs extends KhsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Khs findMany
   */
  export type KhsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * Filter, which Khs to fetch.
     * 
    **/
    where?: KhsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Khs to fetch.
     * 
    **/
    orderBy?: Enumerable<KhsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Khs.
     * 
    **/
    cursor?: KhsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Khs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Khs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<KhsScalarFieldEnum>
  }


  /**
   * Khs create
   */
  export type KhsCreateArgs = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * The data needed to create a Khs.
     * 
    **/
    data: XOR<KhsCreateInput, KhsUncheckedCreateInput>
  }


  /**
   * Khs createMany
   */
  export type KhsCreateManyArgs = {
    /**
     * The data used to create many Khs.
     * 
    **/
    data: Enumerable<KhsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Khs update
   */
  export type KhsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * The data needed to update a Khs.
     * 
    **/
    data: XOR<KhsUpdateInput, KhsUncheckedUpdateInput>
    /**
     * Choose, which Khs to update.
     * 
    **/
    where: KhsWhereUniqueInput
  }


  /**
   * Khs updateMany
   */
  export type KhsUpdateManyArgs = {
    /**
     * The data used to update Khs.
     * 
    **/
    data: XOR<KhsUpdateManyMutationInput, KhsUncheckedUpdateManyInput>
    /**
     * Filter which Khs to update
     * 
    **/
    where?: KhsWhereInput
  }


  /**
   * Khs upsert
   */
  export type KhsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * The filter to search for the Khs to update in case it exists.
     * 
    **/
    where: KhsWhereUniqueInput
    /**
     * In case the Khs found by the `where` argument doesn't exist, create a new Khs with this data.
     * 
    **/
    create: XOR<KhsCreateInput, KhsUncheckedCreateInput>
    /**
     * In case the Khs was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<KhsUpdateInput, KhsUncheckedUpdateInput>
  }


  /**
   * Khs delete
   */
  export type KhsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
    /**
     * Filter which Khs to delete.
     * 
    **/
    where: KhsWhereUniqueInput
  }


  /**
   * Khs deleteMany
   */
  export type KhsDeleteManyArgs = {
    /**
     * Filter which Khs to delete
     * 
    **/
    where?: KhsWhereInput
  }


  /**
   * Khs: findUniqueOrThrow
   */
  export type KhsFindUniqueOrThrowArgs = KhsFindUniqueArgsBase
      

  /**
   * Khs: findFirstOrThrow
   */
  export type KhsFindFirstOrThrowArgs = KhsFindFirstArgsBase
      

  /**
   * Khs without action
   */
  export type KhsArgs = {
    /**
     * Select specific fields to fetch from the Khs
     * 
    **/
    select?: KhsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: KhsInclude | null
  }



  /**
   * Model Skripsi
   */


  export type AggregateSkripsi = {
    _count: SkripsiCountAggregateOutputType | null
    _min: SkripsiMinAggregateOutputType | null
    _max: SkripsiMaxAggregateOutputType | null
  }

  export type SkripsiMinAggregateOutputType = {
    id_skripsi: string | null
    status_skripsi: string | null
    tgl_sidang: string | null
    dospem: string | null
    berkas_skripsi: string | null
    url: string | null
  }

  export type SkripsiMaxAggregateOutputType = {
    id_skripsi: string | null
    status_skripsi: string | null
    tgl_sidang: string | null
    dospem: string | null
    berkas_skripsi: string | null
    url: string | null
  }

  export type SkripsiCountAggregateOutputType = {
    id_skripsi: number
    status_skripsi: number
    tgl_sidang: number
    dospem: number
    berkas_skripsi: number
    url: number
    _all: number
  }


  export type SkripsiMinAggregateInputType = {
    id_skripsi?: true
    status_skripsi?: true
    tgl_sidang?: true
    dospem?: true
    berkas_skripsi?: true
    url?: true
  }

  export type SkripsiMaxAggregateInputType = {
    id_skripsi?: true
    status_skripsi?: true
    tgl_sidang?: true
    dospem?: true
    berkas_skripsi?: true
    url?: true
  }

  export type SkripsiCountAggregateInputType = {
    id_skripsi?: true
    status_skripsi?: true
    tgl_sidang?: true
    dospem?: true
    berkas_skripsi?: true
    url?: true
    _all?: true
  }

  export type SkripsiAggregateArgs = {
    /**
     * Filter which Skripsi to aggregate.
     * 
    **/
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     * 
    **/
    orderBy?: Enumerable<SkripsiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skripsis
    **/
    _count?: true | SkripsiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkripsiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkripsiMaxAggregateInputType
  }

  export type GetSkripsiAggregateType<T extends SkripsiAggregateArgs> = {
        [P in keyof T & keyof AggregateSkripsi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkripsi[P]>
      : GetScalarType<T[P], AggregateSkripsi[P]>
  }




  export type SkripsiGroupByArgs = {
    where?: SkripsiWhereInput
    orderBy?: Enumerable<SkripsiOrderByWithAggregationInput>
    by: Array<SkripsiScalarFieldEnum>
    having?: SkripsiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkripsiCountAggregateInputType | true
    _min?: SkripsiMinAggregateInputType
    _max?: SkripsiMaxAggregateInputType
  }


  export type SkripsiGroupByOutputType = {
    id_skripsi: string
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
    _count: SkripsiCountAggregateOutputType | null
    _min: SkripsiMinAggregateOutputType | null
    _max: SkripsiMaxAggregateOutputType | null
  }

  type GetSkripsiGroupByPayload<T extends SkripsiGroupByArgs> = PrismaPromise<
    Array<
      PickArray<SkripsiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkripsiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkripsiGroupByOutputType[P]>
            : GetScalarType<T[P], SkripsiGroupByOutputType[P]>
        }
      >
    >


  export type SkripsiSelect = {
    id_skripsi?: boolean
    status_skripsi?: boolean
    tgl_sidang?: boolean
    dospem?: boolean
    berkas_skripsi?: boolean
    url?: boolean
    author?: boolean | MahasiswaArgs
  }

  export type SkripsiInclude = {
    author?: boolean | MahasiswaArgs
  }

  export type SkripsiGetPayload<
    S extends boolean | null | undefined | SkripsiArgs,
    U = keyof S
      > = S extends true
        ? Skripsi
    : S extends undefined
    ? never
    : S extends SkripsiArgs | SkripsiFindManyArgs
    ?'include' extends U
    ? Skripsi  & {
    [P in TrueKeys<S['include']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'author' ? MahasiswaGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof Skripsi ? Skripsi[P] : never
  } 
    : Skripsi
  : Skripsi


  type SkripsiCountArgs = Merge<
    Omit<SkripsiFindManyArgs, 'select' | 'include'> & {
      select?: SkripsiCountAggregateInputType | true
    }
  >

  export interface SkripsiDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Skripsi that matches the filter.
     * @param {SkripsiFindUniqueArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkripsiFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkripsiFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Skripsi'> extends True ? CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>> : CheckSelect<T, Prisma__SkripsiClient<Skripsi | null >, Prisma__SkripsiClient<SkripsiGetPayload<T> | null >>

    /**
     * Find the first Skripsi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiFindFirstArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkripsiFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkripsiFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Skripsi'> extends True ? CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>> : CheckSelect<T, Prisma__SkripsiClient<Skripsi | null >, Prisma__SkripsiClient<SkripsiGetPayload<T> | null >>

    /**
     * Find zero or more Skripsis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skripsis
     * const skripsis = await prisma.skripsi.findMany()
     * 
     * // Get first 10 Skripsis
     * const skripsis = await prisma.skripsi.findMany({ take: 10 })
     * 
     * // Only select the `id_skripsi`
     * const skripsiWithId_skripsiOnly = await prisma.skripsi.findMany({ select: { id_skripsi: true } })
     * 
    **/
    findMany<T extends SkripsiFindManyArgs>(
      args?: SelectSubset<T, SkripsiFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Skripsi>>, PrismaPromise<Array<SkripsiGetPayload<T>>>>

    /**
     * Create a Skripsi.
     * @param {SkripsiCreateArgs} args - Arguments to create a Skripsi.
     * @example
     * // Create one Skripsi
     * const Skripsi = await prisma.skripsi.create({
     *   data: {
     *     // ... data to create a Skripsi
     *   }
     * })
     * 
    **/
    create<T extends SkripsiCreateArgs>(
      args: SelectSubset<T, SkripsiCreateArgs>
    ): CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>>

    /**
     * Create many Skripsis.
     *     @param {SkripsiCreateManyArgs} args - Arguments to create many Skripsis.
     *     @example
     *     // Create many Skripsis
     *     const skripsi = await prisma.skripsi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkripsiCreateManyArgs>(
      args?: SelectSubset<T, SkripsiCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Skripsi.
     * @param {SkripsiDeleteArgs} args - Arguments to delete one Skripsi.
     * @example
     * // Delete one Skripsi
     * const Skripsi = await prisma.skripsi.delete({
     *   where: {
     *     // ... filter to delete one Skripsi
     *   }
     * })
     * 
    **/
    delete<T extends SkripsiDeleteArgs>(
      args: SelectSubset<T, SkripsiDeleteArgs>
    ): CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>>

    /**
     * Update one Skripsi.
     * @param {SkripsiUpdateArgs} args - Arguments to update one Skripsi.
     * @example
     * // Update one Skripsi
     * const skripsi = await prisma.skripsi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkripsiUpdateArgs>(
      args: SelectSubset<T, SkripsiUpdateArgs>
    ): CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>>

    /**
     * Delete zero or more Skripsis.
     * @param {SkripsiDeleteManyArgs} args - Arguments to filter Skripsis to delete.
     * @example
     * // Delete a few Skripsis
     * const { count } = await prisma.skripsi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkripsiDeleteManyArgs>(
      args?: SelectSubset<T, SkripsiDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skripsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skripsis
     * const skripsi = await prisma.skripsi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkripsiUpdateManyArgs>(
      args: SelectSubset<T, SkripsiUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Skripsi.
     * @param {SkripsiUpsertArgs} args - Arguments to update or create a Skripsi.
     * @example
     * // Update or create a Skripsi
     * const skripsi = await prisma.skripsi.upsert({
     *   create: {
     *     // ... data to create a Skripsi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skripsi we want to update
     *   }
     * })
    **/
    upsert<T extends SkripsiUpsertArgs>(
      args: SelectSubset<T, SkripsiUpsertArgs>
    ): CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>>

    /**
     * Find one Skripsi that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {SkripsiFindUniqueOrThrowArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkripsiFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SkripsiFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>>

    /**
     * Find the first Skripsi that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiFindFirstOrThrowArgs} args - Arguments to find a Skripsi
     * @example
     * // Get one Skripsi
     * const skripsi = await prisma.skripsi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkripsiFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SkripsiFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__SkripsiClient<Skripsi>, Prisma__SkripsiClient<SkripsiGetPayload<T>>>

    /**
     * Count the number of Skripsis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiCountArgs} args - Arguments to filter Skripsis to count.
     * @example
     * // Count the number of Skripsis
     * const count = await prisma.skripsi.count({
     *   where: {
     *     // ... the filter for the Skripsis we want to count
     *   }
     * })
    **/
    count<T extends SkripsiCountArgs>(
      args?: Subset<T, SkripsiCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkripsiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skripsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkripsiAggregateArgs>(args: Subset<T, SkripsiAggregateArgs>): PrismaPromise<GetSkripsiAggregateType<T>>

    /**
     * Group by Skripsi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkripsiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkripsiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkripsiGroupByArgs['orderBy'] }
        : { orderBy?: SkripsiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkripsiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkripsiGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Skripsi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkripsiClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends MahasiswaArgs = {}>(args?: Subset<T, MahasiswaArgs>): CheckSelect<T, Prisma__MahasiswaClient<Mahasiswa | null >, Prisma__MahasiswaClient<MahasiswaGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Skripsi base type for findUnique actions
   */
  export type SkripsiFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * Filter, which Skripsi to fetch.
     * 
    **/
    where: SkripsiWhereUniqueInput
  }

  /**
   * Skripsi: findUnique
   */
  export interface SkripsiFindUniqueArgs extends SkripsiFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Skripsi base type for findFirst actions
   */
  export type SkripsiFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * Filter, which Skripsi to fetch.
     * 
    **/
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     * 
    **/
    orderBy?: Enumerable<SkripsiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skripsis.
     * 
    **/
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skripsis.
     * 
    **/
    distinct?: Enumerable<SkripsiScalarFieldEnum>
  }

  /**
   * Skripsi: findFirst
   */
  export interface SkripsiFindFirstArgs extends SkripsiFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Skripsi findMany
   */
  export type SkripsiFindManyArgs = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * Filter, which Skripsis to fetch.
     * 
    **/
    where?: SkripsiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skripsis to fetch.
     * 
    **/
    orderBy?: Enumerable<SkripsiOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skripsis.
     * 
    **/
    cursor?: SkripsiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skripsis from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skripsis.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SkripsiScalarFieldEnum>
  }


  /**
   * Skripsi create
   */
  export type SkripsiCreateArgs = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * The data needed to create a Skripsi.
     * 
    **/
    data: XOR<SkripsiCreateInput, SkripsiUncheckedCreateInput>
  }


  /**
   * Skripsi createMany
   */
  export type SkripsiCreateManyArgs = {
    /**
     * The data used to create many Skripsis.
     * 
    **/
    data: Enumerable<SkripsiCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Skripsi update
   */
  export type SkripsiUpdateArgs = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * The data needed to update a Skripsi.
     * 
    **/
    data: XOR<SkripsiUpdateInput, SkripsiUncheckedUpdateInput>
    /**
     * Choose, which Skripsi to update.
     * 
    **/
    where: SkripsiWhereUniqueInput
  }


  /**
   * Skripsi updateMany
   */
  export type SkripsiUpdateManyArgs = {
    /**
     * The data used to update Skripsis.
     * 
    **/
    data: XOR<SkripsiUpdateManyMutationInput, SkripsiUncheckedUpdateManyInput>
    /**
     * Filter which Skripsis to update
     * 
    **/
    where?: SkripsiWhereInput
  }


  /**
   * Skripsi upsert
   */
  export type SkripsiUpsertArgs = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * The filter to search for the Skripsi to update in case it exists.
     * 
    **/
    where: SkripsiWhereUniqueInput
    /**
     * In case the Skripsi found by the `where` argument doesn't exist, create a new Skripsi with this data.
     * 
    **/
    create: XOR<SkripsiCreateInput, SkripsiUncheckedCreateInput>
    /**
     * In case the Skripsi was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SkripsiUpdateInput, SkripsiUncheckedUpdateInput>
  }


  /**
   * Skripsi delete
   */
  export type SkripsiDeleteArgs = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
    /**
     * Filter which Skripsi to delete.
     * 
    **/
    where: SkripsiWhereUniqueInput
  }


  /**
   * Skripsi deleteMany
   */
  export type SkripsiDeleteManyArgs = {
    /**
     * Filter which Skripsis to delete
     * 
    **/
    where?: SkripsiWhereInput
  }


  /**
   * Skripsi: findUniqueOrThrow
   */
  export type SkripsiFindUniqueOrThrowArgs = SkripsiFindUniqueArgsBase
      

  /**
   * Skripsi: findFirstOrThrow
   */
  export type SkripsiFindFirstOrThrowArgs = SkripsiFindFirstArgsBase
      

  /**
   * Skripsi without action
   */
  export type SkripsiArgs = {
    /**
     * Select specific fields to fetch from the Skripsi
     * 
    **/
    select?: SkripsiSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SkripsiInclude | null
  }



  /**
   * Model Dosen
   */


  export type AggregateDosen = {
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  export type DosenMinAggregateOutputType = {
    id_dsn: string | null
    nama: string | null
    noInduk: string | null
    password: string | null
    kode_departement: string | null
    role: string | null
    createdAt: Date | null
  }

  export type DosenMaxAggregateOutputType = {
    id_dsn: string | null
    nama: string | null
    noInduk: string | null
    password: string | null
    kode_departement: string | null
    role: string | null
    createdAt: Date | null
  }

  export type DosenCountAggregateOutputType = {
    id_dsn: number
    nama: number
    noInduk: number
    password: number
    kode_departement: number
    role: number
    createdAt: number
    _all: number
  }


  export type DosenMinAggregateInputType = {
    id_dsn?: true
    nama?: true
    noInduk?: true
    password?: true
    kode_departement?: true
    role?: true
    createdAt?: true
  }

  export type DosenMaxAggregateInputType = {
    id_dsn?: true
    nama?: true
    noInduk?: true
    password?: true
    kode_departement?: true
    role?: true
    createdAt?: true
  }

  export type DosenCountAggregateInputType = {
    id_dsn?: true
    nama?: true
    noInduk?: true
    password?: true
    kode_departement?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type DosenAggregateArgs = {
    /**
     * Filter which Dosen to aggregate.
     * 
    **/
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     * 
    **/
    orderBy?: Enumerable<DosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dosens
    **/
    _count?: true | DosenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DosenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DosenMaxAggregateInputType
  }

  export type GetDosenAggregateType<T extends DosenAggregateArgs> = {
        [P in keyof T & keyof AggregateDosen]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDosen[P]>
      : GetScalarType<T[P], AggregateDosen[P]>
  }




  export type DosenGroupByArgs = {
    where?: DosenWhereInput
    orderBy?: Enumerable<DosenOrderByWithAggregationInput>
    by: Array<DosenScalarFieldEnum>
    having?: DosenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DosenCountAggregateInputType | true
    _min?: DosenMinAggregateInputType
    _max?: DosenMaxAggregateInputType
  }


  export type DosenGroupByOutputType = {
    id_dsn: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt: Date
    _count: DosenCountAggregateOutputType | null
    _min: DosenMinAggregateOutputType | null
    _max: DosenMaxAggregateOutputType | null
  }

  type GetDosenGroupByPayload<T extends DosenGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DosenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DosenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DosenGroupByOutputType[P]>
            : GetScalarType<T[P], DosenGroupByOutputType[P]>
        }
      >
    >


  export type DosenSelect = {
    id_dsn?: boolean
    nama?: boolean
    noInduk?: boolean
    password?: boolean
    kode_departement?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type DosenGetPayload<
    S extends boolean | null | undefined | DosenArgs,
    U = keyof S
      > = S extends true
        ? Dosen
    : S extends undefined
    ? never
    : S extends DosenArgs | DosenFindManyArgs
    ?'include' extends U
    ? Dosen 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Dosen ? Dosen[P] : never
  } 
    : Dosen
  : Dosen


  type DosenCountArgs = Merge<
    Omit<DosenFindManyArgs, 'select' | 'include'> & {
      select?: DosenCountAggregateInputType | true
    }
  >

  export interface DosenDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Dosen that matches the filter.
     * @param {DosenFindUniqueArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DosenFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DosenFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Dosen'> extends True ? CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>> : CheckSelect<T, Prisma__DosenClient<Dosen | null >, Prisma__DosenClient<DosenGetPayload<T> | null >>

    /**
     * Find the first Dosen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DosenFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DosenFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Dosen'> extends True ? CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>> : CheckSelect<T, Prisma__DosenClient<Dosen | null >, Prisma__DosenClient<DosenGetPayload<T> | null >>

    /**
     * Find zero or more Dosens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dosens
     * const dosens = await prisma.dosen.findMany()
     * 
     * // Get first 10 Dosens
     * const dosens = await prisma.dosen.findMany({ take: 10 })
     * 
     * // Only select the `id_dsn`
     * const dosenWithId_dsnOnly = await prisma.dosen.findMany({ select: { id_dsn: true } })
     * 
    **/
    findMany<T extends DosenFindManyArgs>(
      args?: SelectSubset<T, DosenFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Dosen>>, PrismaPromise<Array<DosenGetPayload<T>>>>

    /**
     * Create a Dosen.
     * @param {DosenCreateArgs} args - Arguments to create a Dosen.
     * @example
     * // Create one Dosen
     * const Dosen = await prisma.dosen.create({
     *   data: {
     *     // ... data to create a Dosen
     *   }
     * })
     * 
    **/
    create<T extends DosenCreateArgs>(
      args: SelectSubset<T, DosenCreateArgs>
    ): CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>>

    /**
     * Create many Dosens.
     *     @param {DosenCreateManyArgs} args - Arguments to create many Dosens.
     *     @example
     *     // Create many Dosens
     *     const dosen = await prisma.dosen.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DosenCreateManyArgs>(
      args?: SelectSubset<T, DosenCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Dosen.
     * @param {DosenDeleteArgs} args - Arguments to delete one Dosen.
     * @example
     * // Delete one Dosen
     * const Dosen = await prisma.dosen.delete({
     *   where: {
     *     // ... filter to delete one Dosen
     *   }
     * })
     * 
    **/
    delete<T extends DosenDeleteArgs>(
      args: SelectSubset<T, DosenDeleteArgs>
    ): CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>>

    /**
     * Update one Dosen.
     * @param {DosenUpdateArgs} args - Arguments to update one Dosen.
     * @example
     * // Update one Dosen
     * const dosen = await prisma.dosen.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DosenUpdateArgs>(
      args: SelectSubset<T, DosenUpdateArgs>
    ): CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>>

    /**
     * Delete zero or more Dosens.
     * @param {DosenDeleteManyArgs} args - Arguments to filter Dosens to delete.
     * @example
     * // Delete a few Dosens
     * const { count } = await prisma.dosen.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DosenDeleteManyArgs>(
      args?: SelectSubset<T, DosenDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dosens
     * const dosen = await prisma.dosen.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DosenUpdateManyArgs>(
      args: SelectSubset<T, DosenUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Dosen.
     * @param {DosenUpsertArgs} args - Arguments to update or create a Dosen.
     * @example
     * // Update or create a Dosen
     * const dosen = await prisma.dosen.upsert({
     *   create: {
     *     // ... data to create a Dosen
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dosen we want to update
     *   }
     * })
    **/
    upsert<T extends DosenUpsertArgs>(
      args: SelectSubset<T, DosenUpsertArgs>
    ): CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>>

    /**
     * Find one Dosen that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {DosenFindUniqueOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DosenFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DosenFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>>

    /**
     * Find the first Dosen that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenFindFirstOrThrowArgs} args - Arguments to find a Dosen
     * @example
     * // Get one Dosen
     * const dosen = await prisma.dosen.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DosenFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DosenFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__DosenClient<Dosen>, Prisma__DosenClient<DosenGetPayload<T>>>

    /**
     * Count the number of Dosens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenCountArgs} args - Arguments to filter Dosens to count.
     * @example
     * // Count the number of Dosens
     * const count = await prisma.dosen.count({
     *   where: {
     *     // ... the filter for the Dosens we want to count
     *   }
     * })
    **/
    count<T extends DosenCountArgs>(
      args?: Subset<T, DosenCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DosenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DosenAggregateArgs>(args: Subset<T, DosenAggregateArgs>): PrismaPromise<GetDosenAggregateType<T>>

    /**
     * Group by Dosen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DosenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DosenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DosenGroupByArgs['orderBy'] }
        : { orderBy?: DosenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DosenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDosenGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Dosen.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DosenClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Dosen base type for findUnique actions
   */
  export type DosenFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * Filter, which Dosen to fetch.
     * 
    **/
    where: DosenWhereUniqueInput
  }

  /**
   * Dosen: findUnique
   */
  export interface DosenFindUniqueArgs extends DosenFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dosen base type for findFirst actions
   */
  export type DosenFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * Filter, which Dosen to fetch.
     * 
    **/
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     * 
    **/
    orderBy?: Enumerable<DosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dosens.
     * 
    **/
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dosens.
     * 
    **/
    distinct?: Enumerable<DosenScalarFieldEnum>
  }

  /**
   * Dosen: findFirst
   */
  export interface DosenFindFirstArgs extends DosenFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Dosen findMany
   */
  export type DosenFindManyArgs = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * Filter, which Dosens to fetch.
     * 
    **/
    where?: DosenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dosens to fetch.
     * 
    **/
    orderBy?: Enumerable<DosenOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dosens.
     * 
    **/
    cursor?: DosenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dosens from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dosens.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DosenScalarFieldEnum>
  }


  /**
   * Dosen create
   */
  export type DosenCreateArgs = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * The data needed to create a Dosen.
     * 
    **/
    data: XOR<DosenCreateInput, DosenUncheckedCreateInput>
  }


  /**
   * Dosen createMany
   */
  export type DosenCreateManyArgs = {
    /**
     * The data used to create many Dosens.
     * 
    **/
    data: Enumerable<DosenCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Dosen update
   */
  export type DosenUpdateArgs = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * The data needed to update a Dosen.
     * 
    **/
    data: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
    /**
     * Choose, which Dosen to update.
     * 
    **/
    where: DosenWhereUniqueInput
  }


  /**
   * Dosen updateMany
   */
  export type DosenUpdateManyArgs = {
    /**
     * The data used to update Dosens.
     * 
    **/
    data: XOR<DosenUpdateManyMutationInput, DosenUncheckedUpdateManyInput>
    /**
     * Filter which Dosens to update
     * 
    **/
    where?: DosenWhereInput
  }


  /**
   * Dosen upsert
   */
  export type DosenUpsertArgs = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * The filter to search for the Dosen to update in case it exists.
     * 
    **/
    where: DosenWhereUniqueInput
    /**
     * In case the Dosen found by the `where` argument doesn't exist, create a new Dosen with this data.
     * 
    **/
    create: XOR<DosenCreateInput, DosenUncheckedCreateInput>
    /**
     * In case the Dosen was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DosenUpdateInput, DosenUncheckedUpdateInput>
  }


  /**
   * Dosen delete
   */
  export type DosenDeleteArgs = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
    /**
     * Filter which Dosen to delete.
     * 
    **/
    where: DosenWhereUniqueInput
  }


  /**
   * Dosen deleteMany
   */
  export type DosenDeleteManyArgs = {
    /**
     * Filter which Dosens to delete
     * 
    **/
    where?: DosenWhereInput
  }


  /**
   * Dosen: findUniqueOrThrow
   */
  export type DosenFindUniqueOrThrowArgs = DosenFindUniqueArgsBase
      

  /**
   * Dosen: findFirstOrThrow
   */
  export type DosenFindFirstOrThrowArgs = DosenFindFirstArgsBase
      

  /**
   * Dosen without action
   */
  export type DosenArgs = {
    /**
     * Select specific fields to fetch from the Dosen
     * 
    **/
    select?: DosenSelect | null
  }



  /**
   * Model Admin
   */


  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id_adm: string | null
    nama: string | null
    noInduk: string | null
    password: string | null
    kode_departement: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id_adm: string | null
    nama: string | null
    noInduk: string | null
    password: string | null
    kode_departement: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id_adm: number
    nama: number
    noInduk: number
    password: number
    kode_departement: number
    role: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id_adm?: true
    nama?: true
    noInduk?: true
    password?: true
    kode_departement?: true
    role?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id_adm?: true
    nama?: true
    noInduk?: true
    password?: true
    kode_departement?: true
    role?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id_adm?: true
    nama?: true
    noInduk?: true
    password?: true
    kode_departement?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs = {
    /**
     * Filter which Admin to aggregate.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs = {
    where?: AdminWhereInput
    orderBy?: Enumerable<AdminOrderByWithAggregationInput>
    by: Array<AdminScalarFieldEnum>
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }


  export type AdminGroupByOutputType = {
    id_adm: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect = {
    id_adm?: boolean
    nama?: boolean
    noInduk?: boolean
    password?: boolean
    kode_departement?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type AdminGetPayload<
    S extends boolean | null | undefined | AdminArgs,
    U = keyof S
      > = S extends true
        ? Admin
    : S extends undefined
    ? never
    : S extends AdminArgs | AdminFindManyArgs
    ?'include' extends U
    ? Admin 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof Admin ? Admin[P] : never
  } 
    : Admin
  : Admin


  type AdminCountArgs = Merge<
    Omit<AdminFindManyArgs, 'select' | 'include'> & {
      select?: AdminCountAggregateInputType | true
    }
  >

  export interface AdminDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AdminFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AdminFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AdminFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AdminFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Admin'> extends True ? CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>> : CheckSelect<T, Prisma__AdminClient<Admin | null >, Prisma__AdminClient<AdminGetPayload<T> | null >>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id_adm`
     * const adminWithId_admOnly = await prisma.admin.findMany({ select: { id_adm: true } })
     * 
    **/
    findMany<T extends AdminFindManyArgs>(
      args?: SelectSubset<T, AdminFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Admin>>, PrismaPromise<Array<AdminGetPayload<T>>>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
    **/
    create<T extends AdminCreateArgs>(
      args: SelectSubset<T, AdminCreateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Create many Admins.
     *     @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     *     @example
     *     // Create many Admins
     *     const admin = await prisma.admin.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AdminCreateManyArgs>(
      args?: SelectSubset<T, AdminCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
    **/
    delete<T extends AdminDeleteArgs>(
      args: SelectSubset<T, AdminDeleteArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AdminUpdateArgs>(
      args: SelectSubset<T, AdminUpdateArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AdminDeleteManyArgs>(
      args?: SelectSubset<T, AdminDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AdminUpdateManyArgs>(
      args: SelectSubset<T, AdminUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
    **/
    upsert<T extends AdminUpsertArgs>(
      args: SelectSubset<T, AdminUpsertArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find one Admin that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AdminFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Find the first Admin that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AdminFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__AdminClient<Admin>, Prisma__AdminClient<AdminGetPayload<T>>>

    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AdminClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Admin base type for findUnique actions
   */
  export type AdminFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where: AdminWhereUniqueInput
  }

  /**
   * Admin: findUnique
   */
  export interface AdminFindUniqueArgs extends AdminFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin base type for findFirst actions
   */
  export type AdminFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admin to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     * 
    **/
    distinct?: Enumerable<AdminScalarFieldEnum>
  }

  /**
   * Admin: findFirst
   */
  export interface AdminFindFirstArgs extends AdminFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter, which Admins to fetch.
     * 
    **/
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     * 
    **/
    orderBy?: Enumerable<AdminOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     * 
    **/
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AdminScalarFieldEnum>
  }


  /**
   * Admin create
   */
  export type AdminCreateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to create a Admin.
     * 
    **/
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }


  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs = {
    /**
     * The data used to create many Admins.
     * 
    **/
    data: Enumerable<AdminCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Admin update
   */
  export type AdminUpdateArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The data needed to update a Admin.
     * 
    **/
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs = {
    /**
     * The data used to update Admins.
     * 
    **/
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin upsert
   */
  export type AdminUpsertArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * The filter to search for the Admin to update in case it exists.
     * 
    **/
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     * 
    **/
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }


  /**
   * Admin delete
   */
  export type AdminDeleteArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
    /**
     * Filter which Admin to delete.
     * 
    **/
    where: AdminWhereUniqueInput
  }


  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs = {
    /**
     * Filter which Admins to delete
     * 
    **/
    where?: AdminWhereInput
  }


  /**
   * Admin: findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs = AdminFindUniqueArgsBase
      

  /**
   * Admin: findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs = AdminFindFirstArgsBase
      

  /**
   * Admin without action
   */
  export type AdminArgs = {
    /**
     * Select specific fields to fetch from the Admin
     * 
    **/
    select?: AdminSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AdminScalarFieldEnum: {
    id_adm: 'id_adm',
    nama: 'nama',
    noInduk: 'noInduk',
    password: 'password',
    kode_departement: 'kode_departement',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const Bio_mahasiswaScalarFieldEnum: {
    id_bio: 'id_bio',
    no_telp: 'no_telp',
    provinsi: 'provinsi',
    email: 'email',
    kota: 'kota',
    alamat: 'alamat'
  };

  export type Bio_mahasiswaScalarFieldEnum = (typeof Bio_mahasiswaScalarFieldEnum)[keyof typeof Bio_mahasiswaScalarFieldEnum]


  export const DosenScalarFieldEnum: {
    id_dsn: 'id_dsn',
    nama: 'nama',
    noInduk: 'noInduk',
    password: 'password',
    kode_departement: 'kode_departement',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type DosenScalarFieldEnum = (typeof DosenScalarFieldEnum)[keyof typeof DosenScalarFieldEnum]


  export const IrsScalarFieldEnum: {
    id_Irs: 'id_Irs',
    semester: 'semester',
    jumlahSks: 'jumlahSks',
    berkas: 'berkas',
    url: 'url'
  };

  export type IrsScalarFieldEnum = (typeof IrsScalarFieldEnum)[keyof typeof IrsScalarFieldEnum]


  export const KhsScalarFieldEnum: {
    id_khs: 'id_khs',
    semester: 'semester',
    ip_semester: 'ip_semester',
    ip_kumulatif: 'ip_kumulatif',
    jumlah_sks: 'jumlah_sks',
    berkas_khs: 'berkas_khs',
    url: 'url'
  };

  export type KhsScalarFieldEnum = (typeof KhsScalarFieldEnum)[keyof typeof KhsScalarFieldEnum]


  export const MahasiswaScalarFieldEnum: {
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
  };

  export type MahasiswaScalarFieldEnum = (typeof MahasiswaScalarFieldEnum)[keyof typeof MahasiswaScalarFieldEnum]


  export const NilaiPklScalarFieldEnum: {
    id_nilai: 'id_nilai',
    nilaiPkl: 'nilaiPkl'
  };

  export type NilaiPklScalarFieldEnum = (typeof NilaiPklScalarFieldEnum)[keyof typeof NilaiPklScalarFieldEnum]


  export const PklScalarFieldEnum: {
    id_pkl: 'id_pkl',
    status_pkl: 'status_pkl',
    dospem: 'dospem',
    nama_instantsi: 'nama_instantsi',
    berkas_pkl: 'berkas_pkl',
    url: 'url'
  };

  export type PklScalarFieldEnum = (typeof PklScalarFieldEnum)[keyof typeof PklScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SkripsiScalarFieldEnum: {
    id_skripsi: 'id_skripsi',
    status_skripsi: 'status_skripsi',
    tgl_sidang: 'tgl_sidang',
    dospem: 'dospem',
    berkas_skripsi: 'berkas_skripsi',
    url: 'url'
  };

  export type SkripsiScalarFieldEnum = (typeof SkripsiScalarFieldEnum)[keyof typeof SkripsiScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const VerifikasiScalarFieldEnum: {
    id_verif: 'id_verif',
    verif: 'verif'
  };

  export type VerifikasiScalarFieldEnum = (typeof VerifikasiScalarFieldEnum)[keyof typeof VerifikasiScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sid?: StringFilter | string
    data?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sid?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sid?: StringWithAggregatesFilter | string
    data?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MahasiswaWhereInput = {
    AND?: Enumerable<MahasiswaWhereInput>
    OR?: Enumerable<MahasiswaWhereInput>
    NOT?: Enumerable<MahasiswaWhereInput>
    id_mhs?: StringFilter | string
    nama?: StringFilter | string
    noInduk?: StringFilter | string
    angkatan?: IntFilter | number
    password?: StringFilter | string
    status?: StringFilter | string
    image?: StringFilter | string
    url?: StringFilter | string
    role?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
    biodata?: Bio_mahasiswaListRelationFilter
    dataIrs?: IrsListRelationFilter
    dataKhs?: KhsListRelationFilter
    dataPkl?: PklListRelationFilter
    dataSkripsi?: SkripsiListRelationFilter
    verifikasi?: XOR<VerifikasiRelationFilter, VerifikasiWhereInput> | null
  }

  export type MahasiswaOrderByWithRelationInput = {
    id_mhs?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    angkatan?: SortOrder
    password?: SortOrder
    status?: SortOrder
    image?: SortOrder
    url?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    biodata?: Bio_mahasiswaOrderByRelationAggregateInput
    dataIrs?: IrsOrderByRelationAggregateInput
    dataKhs?: KhsOrderByRelationAggregateInput
    dataPkl?: PklOrderByRelationAggregateInput
    dataSkripsi?: SkripsiOrderByRelationAggregateInput
    verifikasi?: VerifikasiOrderByWithRelationInput
  }

  export type MahasiswaWhereUniqueInput = {
    id_mhs?: string
    noInduk?: string
  }

  export type MahasiswaOrderByWithAggregationInput = {
    id_mhs?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    angkatan?: SortOrder
    password?: SortOrder
    status?: SortOrder
    image?: SortOrder
    url?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: MahasiswaCountOrderByAggregateInput
    _avg?: MahasiswaAvgOrderByAggregateInput
    _max?: MahasiswaMaxOrderByAggregateInput
    _min?: MahasiswaMinOrderByAggregateInput
    _sum?: MahasiswaSumOrderByAggregateInput
  }

  export type MahasiswaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MahasiswaScalarWhereWithAggregatesInput>
    OR?: Enumerable<MahasiswaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MahasiswaScalarWhereWithAggregatesInput>
    id_mhs?: StringWithAggregatesFilter | string
    nama?: StringWithAggregatesFilter | string
    noInduk?: StringWithAggregatesFilter | string
    angkatan?: IntWithAggregatesFilter | number
    password?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    image?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type VerifikasiWhereInput = {
    AND?: Enumerable<VerifikasiWhereInput>
    OR?: Enumerable<VerifikasiWhereInput>
    NOT?: Enumerable<VerifikasiWhereInput>
    id_verif?: StringFilter | string
    verif?: StringFilter | string
    author?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
  }

  export type VerifikasiOrderByWithRelationInput = {
    id_verif?: SortOrder
    verif?: SortOrder
    author?: MahasiswaOrderByWithRelationInput
  }

  export type VerifikasiWhereUniqueInput = {
    id_verif?: string
  }

  export type VerifikasiOrderByWithAggregationInput = {
    id_verif?: SortOrder
    verif?: SortOrder
    _count?: VerifikasiCountOrderByAggregateInput
    _max?: VerifikasiMaxOrderByAggregateInput
    _min?: VerifikasiMinOrderByAggregateInput
  }

  export type VerifikasiScalarWhereWithAggregatesInput = {
    AND?: Enumerable<VerifikasiScalarWhereWithAggregatesInput>
    OR?: Enumerable<VerifikasiScalarWhereWithAggregatesInput>
    NOT?: Enumerable<VerifikasiScalarWhereWithAggregatesInput>
    id_verif?: StringWithAggregatesFilter | string
    verif?: StringWithAggregatesFilter | string
  }

  export type Bio_mahasiswaWhereInput = {
    AND?: Enumerable<Bio_mahasiswaWhereInput>
    OR?: Enumerable<Bio_mahasiswaWhereInput>
    NOT?: Enumerable<Bio_mahasiswaWhereInput>
    id_bio?: StringFilter | string
    no_telp?: StringFilter | string
    provinsi?: StringFilter | string
    email?: StringFilter | string
    kota?: StringFilter | string
    alamat?: StringFilter | string
    author?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
  }

  export type Bio_mahasiswaOrderByWithRelationInput = {
    id_bio?: SortOrder
    no_telp?: SortOrder
    provinsi?: SortOrder
    email?: SortOrder
    kota?: SortOrder
    alamat?: SortOrder
    author?: MahasiswaOrderByWithRelationInput
  }

  export type Bio_mahasiswaWhereUniqueInput = {
    id_bio?: string
  }

  export type Bio_mahasiswaOrderByWithAggregationInput = {
    id_bio?: SortOrder
    no_telp?: SortOrder
    provinsi?: SortOrder
    email?: SortOrder
    kota?: SortOrder
    alamat?: SortOrder
    _count?: Bio_mahasiswaCountOrderByAggregateInput
    _max?: Bio_mahasiswaMaxOrderByAggregateInput
    _min?: Bio_mahasiswaMinOrderByAggregateInput
  }

  export type Bio_mahasiswaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<Bio_mahasiswaScalarWhereWithAggregatesInput>
    OR?: Enumerable<Bio_mahasiswaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<Bio_mahasiswaScalarWhereWithAggregatesInput>
    id_bio?: StringWithAggregatesFilter | string
    no_telp?: StringWithAggregatesFilter | string
    provinsi?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    kota?: StringWithAggregatesFilter | string
    alamat?: StringWithAggregatesFilter | string
  }

  export type IrsWhereInput = {
    AND?: Enumerable<IrsWhereInput>
    OR?: Enumerable<IrsWhereInput>
    NOT?: Enumerable<IrsWhereInput>
    id_Irs?: StringFilter | string
    semester?: StringFilter | string
    jumlahSks?: IntFilter | number
    berkas?: StringFilter | string
    url?: StringFilter | string
    author?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
  }

  export type IrsOrderByWithRelationInput = {
    id_Irs?: SortOrder
    semester?: SortOrder
    jumlahSks?: SortOrder
    berkas?: SortOrder
    url?: SortOrder
    author?: MahasiswaOrderByWithRelationInput
  }

  export type IrsWhereUniqueInput = {
    id_Irs?: string
  }

  export type IrsOrderByWithAggregationInput = {
    id_Irs?: SortOrder
    semester?: SortOrder
    jumlahSks?: SortOrder
    berkas?: SortOrder
    url?: SortOrder
    _count?: IrsCountOrderByAggregateInput
    _avg?: IrsAvgOrderByAggregateInput
    _max?: IrsMaxOrderByAggregateInput
    _min?: IrsMinOrderByAggregateInput
    _sum?: IrsSumOrderByAggregateInput
  }

  export type IrsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<IrsScalarWhereWithAggregatesInput>
    OR?: Enumerable<IrsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<IrsScalarWhereWithAggregatesInput>
    id_Irs?: StringWithAggregatesFilter | string
    semester?: StringWithAggregatesFilter | string
    jumlahSks?: IntWithAggregatesFilter | number
    berkas?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type PklWhereInput = {
    AND?: Enumerable<PklWhereInput>
    OR?: Enumerable<PklWhereInput>
    NOT?: Enumerable<PklWhereInput>
    id_pkl?: StringFilter | string
    status_pkl?: StringFilter | string
    dospem?: StringFilter | string
    nama_instantsi?: StringFilter | string
    berkas_pkl?: StringFilter | string
    url?: StringFilter | string
    author?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
    nilai?: XOR<NilaiPklRelationFilter, nilaiPklWhereInput> | null
  }

  export type PklOrderByWithRelationInput = {
    id_pkl?: SortOrder
    status_pkl?: SortOrder
    dospem?: SortOrder
    nama_instantsi?: SortOrder
    berkas_pkl?: SortOrder
    url?: SortOrder
    author?: MahasiswaOrderByWithRelationInput
    nilai?: nilaiPklOrderByWithRelationInput
  }

  export type PklWhereUniqueInput = {
    id_pkl?: string
  }

  export type PklOrderByWithAggregationInput = {
    id_pkl?: SortOrder
    status_pkl?: SortOrder
    dospem?: SortOrder
    nama_instantsi?: SortOrder
    berkas_pkl?: SortOrder
    url?: SortOrder
    _count?: PklCountOrderByAggregateInput
    _max?: PklMaxOrderByAggregateInput
    _min?: PklMinOrderByAggregateInput
  }

  export type PklScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PklScalarWhereWithAggregatesInput>
    OR?: Enumerable<PklScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PklScalarWhereWithAggregatesInput>
    id_pkl?: StringWithAggregatesFilter | string
    status_pkl?: StringWithAggregatesFilter | string
    dospem?: StringWithAggregatesFilter | string
    nama_instantsi?: StringWithAggregatesFilter | string
    berkas_pkl?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type nilaiPklWhereInput = {
    AND?: Enumerable<nilaiPklWhereInput>
    OR?: Enumerable<nilaiPklWhereInput>
    NOT?: Enumerable<nilaiPklWhereInput>
    id_nilai?: StringFilter | string
    nilaiPkl?: StringFilter | string
    author?: XOR<PklRelationFilter, PklWhereInput>
  }

  export type nilaiPklOrderByWithRelationInput = {
    id_nilai?: SortOrder
    nilaiPkl?: SortOrder
    author?: PklOrderByWithRelationInput
  }

  export type nilaiPklWhereUniqueInput = {
    id_nilai?: string
  }

  export type nilaiPklOrderByWithAggregationInput = {
    id_nilai?: SortOrder
    nilaiPkl?: SortOrder
    _count?: nilaiPklCountOrderByAggregateInput
    _max?: nilaiPklMaxOrderByAggregateInput
    _min?: nilaiPklMinOrderByAggregateInput
  }

  export type nilaiPklScalarWhereWithAggregatesInput = {
    AND?: Enumerable<nilaiPklScalarWhereWithAggregatesInput>
    OR?: Enumerable<nilaiPklScalarWhereWithAggregatesInput>
    NOT?: Enumerable<nilaiPklScalarWhereWithAggregatesInput>
    id_nilai?: StringWithAggregatesFilter | string
    nilaiPkl?: StringWithAggregatesFilter | string
  }

  export type KhsWhereInput = {
    AND?: Enumerable<KhsWhereInput>
    OR?: Enumerable<KhsWhereInput>
    NOT?: Enumerable<KhsWhereInput>
    id_khs?: StringFilter | string
    semester?: StringFilter | string
    ip_semester?: StringFilter | string
    ip_kumulatif?: StringFilter | string
    jumlah_sks?: IntFilter | number
    berkas_khs?: StringFilter | string
    url?: StringFilter | string
    author?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
  }

  export type KhsOrderByWithRelationInput = {
    id_khs?: SortOrder
    semester?: SortOrder
    ip_semester?: SortOrder
    ip_kumulatif?: SortOrder
    jumlah_sks?: SortOrder
    berkas_khs?: SortOrder
    url?: SortOrder
    author?: MahasiswaOrderByWithRelationInput
  }

  export type KhsWhereUniqueInput = {
    id_khs?: string
  }

  export type KhsOrderByWithAggregationInput = {
    id_khs?: SortOrder
    semester?: SortOrder
    ip_semester?: SortOrder
    ip_kumulatif?: SortOrder
    jumlah_sks?: SortOrder
    berkas_khs?: SortOrder
    url?: SortOrder
    _count?: KhsCountOrderByAggregateInput
    _avg?: KhsAvgOrderByAggregateInput
    _max?: KhsMaxOrderByAggregateInput
    _min?: KhsMinOrderByAggregateInput
    _sum?: KhsSumOrderByAggregateInput
  }

  export type KhsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KhsScalarWhereWithAggregatesInput>
    OR?: Enumerable<KhsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KhsScalarWhereWithAggregatesInput>
    id_khs?: StringWithAggregatesFilter | string
    semester?: StringWithAggregatesFilter | string
    ip_semester?: StringWithAggregatesFilter | string
    ip_kumulatif?: StringWithAggregatesFilter | string
    jumlah_sks?: IntWithAggregatesFilter | number
    berkas_khs?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type SkripsiWhereInput = {
    AND?: Enumerable<SkripsiWhereInput>
    OR?: Enumerable<SkripsiWhereInput>
    NOT?: Enumerable<SkripsiWhereInput>
    id_skripsi?: StringFilter | string
    status_skripsi?: StringFilter | string
    tgl_sidang?: StringFilter | string
    dospem?: StringFilter | string
    berkas_skripsi?: StringFilter | string
    url?: StringFilter | string
    author?: XOR<MahasiswaRelationFilter, MahasiswaWhereInput>
  }

  export type SkripsiOrderByWithRelationInput = {
    id_skripsi?: SortOrder
    status_skripsi?: SortOrder
    tgl_sidang?: SortOrder
    dospem?: SortOrder
    berkas_skripsi?: SortOrder
    url?: SortOrder
    author?: MahasiswaOrderByWithRelationInput
  }

  export type SkripsiWhereUniqueInput = {
    id_skripsi?: string
  }

  export type SkripsiOrderByWithAggregationInput = {
    id_skripsi?: SortOrder
    status_skripsi?: SortOrder
    tgl_sidang?: SortOrder
    dospem?: SortOrder
    berkas_skripsi?: SortOrder
    url?: SortOrder
    _count?: SkripsiCountOrderByAggregateInput
    _max?: SkripsiMaxOrderByAggregateInput
    _min?: SkripsiMinOrderByAggregateInput
  }

  export type SkripsiScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkripsiScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkripsiScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkripsiScalarWhereWithAggregatesInput>
    id_skripsi?: StringWithAggregatesFilter | string
    status_skripsi?: StringWithAggregatesFilter | string
    tgl_sidang?: StringWithAggregatesFilter | string
    dospem?: StringWithAggregatesFilter | string
    berkas_skripsi?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
  }

  export type DosenWhereInput = {
    AND?: Enumerable<DosenWhereInput>
    OR?: Enumerable<DosenWhereInput>
    NOT?: Enumerable<DosenWhereInput>
    id_dsn?: StringFilter | string
    nama?: StringFilter | string
    noInduk?: StringFilter | string
    password?: StringFilter | string
    kode_departement?: StringFilter | string
    role?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type DosenOrderByWithRelationInput = {
    id_dsn?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type DosenWhereUniqueInput = {
    id_dsn?: string
    noInduk?: string
  }

  export type DosenOrderByWithAggregationInput = {
    id_dsn?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: DosenCountOrderByAggregateInput
    _max?: DosenMaxOrderByAggregateInput
    _min?: DosenMinOrderByAggregateInput
  }

  export type DosenScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DosenScalarWhereWithAggregatesInput>
    OR?: Enumerable<DosenScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DosenScalarWhereWithAggregatesInput>
    id_dsn?: StringWithAggregatesFilter | string
    nama?: StringWithAggregatesFilter | string
    noInduk?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    kode_departement?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type AdminWhereInput = {
    AND?: Enumerable<AdminWhereInput>
    OR?: Enumerable<AdminWhereInput>
    NOT?: Enumerable<AdminWhereInput>
    id_adm?: StringFilter | string
    nama?: StringFilter | string
    noInduk?: StringFilter | string
    password?: StringFilter | string
    kode_departement?: StringFilter | string
    role?: StringFilter | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id_adm?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminWhereUniqueInput = {
    id_adm?: string
    noInduk?: string
  }

  export type AdminOrderByWithAggregationInput = {
    id_adm?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AdminScalarWhereWithAggregatesInput>
    OR?: Enumerable<AdminScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AdminScalarWhereWithAggregatesInput>
    id_adm?: StringWithAggregatesFilter | string
    nama?: StringWithAggregatesFilter | string
    noInduk?: StringWithAggregatesFilter | string
    password?: StringWithAggregatesFilter | string
    kode_departement?: StringWithAggregatesFilter | string
    role?: StringWithAggregatesFilter | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaCreateInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsCreateNestedManyWithoutAuthorInput
    dataPkl?: PklCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsUncheckedCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsUncheckedCreateNestedManyWithoutAuthorInput
    dataPkl?: PklUncheckedCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiUncheckedCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUpdateInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUncheckedUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUncheckedUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUncheckedUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUncheckedUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaCreateManyInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
  }

  export type MahasiswaUpdateManyMutationInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MahasiswaUncheckedUpdateManyInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerifikasiCreateInput = {
    verif: string
    author?: MahasiswaCreateNestedOneWithoutVerifikasiInput
  }

  export type VerifikasiUncheckedCreateInput = {
    id_verif?: string
    verif: string
  }

  export type VerifikasiUpdateInput = {
    verif?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutVerifikasiNestedInput
  }

  export type VerifikasiUncheckedUpdateInput = {
    id_verif?: StringFieldUpdateOperationsInput | string
    verif?: StringFieldUpdateOperationsInput | string
  }

  export type VerifikasiCreateManyInput = {
    id_verif?: string
    verif: string
  }

  export type VerifikasiUpdateManyMutationInput = {
    verif?: StringFieldUpdateOperationsInput | string
  }

  export type VerifikasiUncheckedUpdateManyInput = {
    id_verif?: StringFieldUpdateOperationsInput | string
    verif?: StringFieldUpdateOperationsInput | string
  }

  export type Bio_mahasiswaCreateInput = {
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
    author?: MahasiswaCreateNestedOneWithoutBiodataInput
  }

  export type Bio_mahasiswaUncheckedCreateInput = {
    id_bio?: string
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
  }

  export type Bio_mahasiswaUpdateInput = {
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutBiodataNestedInput
  }

  export type Bio_mahasiswaUncheckedUpdateInput = {
    id_bio?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type Bio_mahasiswaCreateManyInput = {
    id_bio?: string
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
  }

  export type Bio_mahasiswaUpdateManyMutationInput = {
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type Bio_mahasiswaUncheckedUpdateManyInput = {
    id_bio?: StringFieldUpdateOperationsInput | string
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type IrsCreateInput = {
    semester: string
    jumlahSks: number
    berkas: string
    url: string
    author?: MahasiswaCreateNestedOneWithoutDataIrsInput
  }

  export type IrsUncheckedCreateInput = {
    id_Irs?: string
    semester: string
    jumlahSks: number
    berkas: string
    url: string
  }

  export type IrsUpdateInput = {
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutDataIrsNestedInput
  }

  export type IrsUncheckedUpdateInput = {
    id_Irs?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IrsCreateManyInput = {
    id_Irs?: string
    semester: string
    jumlahSks: number
    berkas: string
    url: string
  }

  export type IrsUpdateManyMutationInput = {
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IrsUncheckedUpdateManyInput = {
    id_Irs?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PklCreateInput = {
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
    author?: MahasiswaCreateNestedOneWithoutDataPklInput
    nilai?: nilaiPklCreateNestedOneWithoutAuthorInput
  }

  export type PklUncheckedCreateInput = {
    id_pkl?: string
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
    nilai?: nilaiPklUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type PklUpdateInput = {
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutDataPklNestedInput
    nilai?: nilaiPklUpdateOneWithoutAuthorNestedInput
  }

  export type PklUncheckedUpdateInput = {
    id_pkl?: StringFieldUpdateOperationsInput | string
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nilai?: nilaiPklUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type PklCreateManyInput = {
    id_pkl?: string
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
  }

  export type PklUpdateManyMutationInput = {
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PklUncheckedUpdateManyInput = {
    id_pkl?: StringFieldUpdateOperationsInput | string
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type nilaiPklCreateInput = {
    nilaiPkl: string
    author?: PklCreateNestedOneWithoutNilaiInput
  }

  export type nilaiPklUncheckedCreateInput = {
    id_nilai?: string
    nilaiPkl: string
  }

  export type nilaiPklUpdateInput = {
    nilaiPkl?: StringFieldUpdateOperationsInput | string
    author?: PklUpdateOneRequiredWithoutNilaiNestedInput
  }

  export type nilaiPklUncheckedUpdateInput = {
    id_nilai?: StringFieldUpdateOperationsInput | string
    nilaiPkl?: StringFieldUpdateOperationsInput | string
  }

  export type nilaiPklCreateManyInput = {
    id_nilai?: string
    nilaiPkl: string
  }

  export type nilaiPklUpdateManyMutationInput = {
    nilaiPkl?: StringFieldUpdateOperationsInput | string
  }

  export type nilaiPklUncheckedUpdateManyInput = {
    id_nilai?: StringFieldUpdateOperationsInput | string
    nilaiPkl?: StringFieldUpdateOperationsInput | string
  }

  export type KhsCreateInput = {
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
    author?: MahasiswaCreateNestedOneWithoutDataKhsInput
  }

  export type KhsUncheckedCreateInput = {
    id_khs?: string
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
  }

  export type KhsUpdateInput = {
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutDataKhsNestedInput
  }

  export type KhsUncheckedUpdateInput = {
    id_khs?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type KhsCreateManyInput = {
    id_khs?: string
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
  }

  export type KhsUpdateManyMutationInput = {
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type KhsUncheckedUpdateManyInput = {
    id_khs?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiCreateInput = {
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
    author?: MahasiswaCreateNestedOneWithoutDataSkripsiInput
  }

  export type SkripsiUncheckedCreateInput = {
    id_skripsi?: string
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
  }

  export type SkripsiUpdateInput = {
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutDataSkripsiNestedInput
  }

  export type SkripsiUncheckedUpdateInput = {
    id_skripsi?: StringFieldUpdateOperationsInput | string
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiCreateManyInput = {
    id_skripsi?: string
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
  }

  export type SkripsiUpdateManyMutationInput = {
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiUncheckedUpdateManyInput = {
    id_skripsi?: StringFieldUpdateOperationsInput | string
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type DosenCreateInput = {
    id_dsn?: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt?: Date | string
  }

  export type DosenUncheckedCreateInput = {
    id_dsn?: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt?: Date | string
  }

  export type DosenUpdateInput = {
    id_dsn?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenUncheckedUpdateInput = {
    id_dsn?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenCreateManyInput = {
    id_dsn?: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt?: Date | string
  }

  export type DosenUpdateManyMutationInput = {
    id_dsn?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DosenUncheckedUpdateManyInput = {
    id_dsn?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateInput = {
    id_adm?: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id_adm?: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt?: Date | string
  }

  export type AdminUpdateInput = {
    id_adm?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id_adm?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id_adm?: string
    nama: string
    noInduk: string
    password: string
    kode_departement: string
    role: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id_adm?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id_adm?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    kode_departement?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type Bio_mahasiswaListRelationFilter = {
    every?: Bio_mahasiswaWhereInput
    some?: Bio_mahasiswaWhereInput
    none?: Bio_mahasiswaWhereInput
  }

  export type IrsListRelationFilter = {
    every?: IrsWhereInput
    some?: IrsWhereInput
    none?: IrsWhereInput
  }

  export type KhsListRelationFilter = {
    every?: KhsWhereInput
    some?: KhsWhereInput
    none?: KhsWhereInput
  }

  export type PklListRelationFilter = {
    every?: PklWhereInput
    some?: PklWhereInput
    none?: PklWhereInput
  }

  export type SkripsiListRelationFilter = {
    every?: SkripsiWhereInput
    some?: SkripsiWhereInput
    none?: SkripsiWhereInput
  }

  export type VerifikasiRelationFilter = {
    is?: VerifikasiWhereInput | null
    isNot?: VerifikasiWhereInput | null
  }

  export type Bio_mahasiswaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IrsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KhsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PklOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkripsiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MahasiswaCountOrderByAggregateInput = {
    id_mhs?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    angkatan?: SortOrder
    password?: SortOrder
    status?: SortOrder
    image?: SortOrder
    url?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MahasiswaAvgOrderByAggregateInput = {
    angkatan?: SortOrder
  }

  export type MahasiswaMaxOrderByAggregateInput = {
    id_mhs?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    angkatan?: SortOrder
    password?: SortOrder
    status?: SortOrder
    image?: SortOrder
    url?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MahasiswaMinOrderByAggregateInput = {
    id_mhs?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    angkatan?: SortOrder
    password?: SortOrder
    status?: SortOrder
    image?: SortOrder
    url?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type MahasiswaSumOrderByAggregateInput = {
    angkatan?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type MahasiswaRelationFilter = {
    is?: MahasiswaWhereInput
    isNot?: MahasiswaWhereInput
  }

  export type VerifikasiCountOrderByAggregateInput = {
    id_verif?: SortOrder
    verif?: SortOrder
  }

  export type VerifikasiMaxOrderByAggregateInput = {
    id_verif?: SortOrder
    verif?: SortOrder
  }

  export type VerifikasiMinOrderByAggregateInput = {
    id_verif?: SortOrder
    verif?: SortOrder
  }

  export type Bio_mahasiswaCountOrderByAggregateInput = {
    id_bio?: SortOrder
    no_telp?: SortOrder
    provinsi?: SortOrder
    email?: SortOrder
    kota?: SortOrder
    alamat?: SortOrder
  }

  export type Bio_mahasiswaMaxOrderByAggregateInput = {
    id_bio?: SortOrder
    no_telp?: SortOrder
    provinsi?: SortOrder
    email?: SortOrder
    kota?: SortOrder
    alamat?: SortOrder
  }

  export type Bio_mahasiswaMinOrderByAggregateInput = {
    id_bio?: SortOrder
    no_telp?: SortOrder
    provinsi?: SortOrder
    email?: SortOrder
    kota?: SortOrder
    alamat?: SortOrder
  }

  export type IrsCountOrderByAggregateInput = {
    id_Irs?: SortOrder
    semester?: SortOrder
    jumlahSks?: SortOrder
    berkas?: SortOrder
    url?: SortOrder
  }

  export type IrsAvgOrderByAggregateInput = {
    jumlahSks?: SortOrder
  }

  export type IrsMaxOrderByAggregateInput = {
    id_Irs?: SortOrder
    semester?: SortOrder
    jumlahSks?: SortOrder
    berkas?: SortOrder
    url?: SortOrder
  }

  export type IrsMinOrderByAggregateInput = {
    id_Irs?: SortOrder
    semester?: SortOrder
    jumlahSks?: SortOrder
    berkas?: SortOrder
    url?: SortOrder
  }

  export type IrsSumOrderByAggregateInput = {
    jumlahSks?: SortOrder
  }

  export type NilaiPklRelationFilter = {
    is?: nilaiPklWhereInput | null
    isNot?: nilaiPklWhereInput | null
  }

  export type PklCountOrderByAggregateInput = {
    id_pkl?: SortOrder
    status_pkl?: SortOrder
    dospem?: SortOrder
    nama_instantsi?: SortOrder
    berkas_pkl?: SortOrder
    url?: SortOrder
  }

  export type PklMaxOrderByAggregateInput = {
    id_pkl?: SortOrder
    status_pkl?: SortOrder
    dospem?: SortOrder
    nama_instantsi?: SortOrder
    berkas_pkl?: SortOrder
    url?: SortOrder
  }

  export type PklMinOrderByAggregateInput = {
    id_pkl?: SortOrder
    status_pkl?: SortOrder
    dospem?: SortOrder
    nama_instantsi?: SortOrder
    berkas_pkl?: SortOrder
    url?: SortOrder
  }

  export type PklRelationFilter = {
    is?: PklWhereInput
    isNot?: PklWhereInput
  }

  export type nilaiPklCountOrderByAggregateInput = {
    id_nilai?: SortOrder
    nilaiPkl?: SortOrder
  }

  export type nilaiPklMaxOrderByAggregateInput = {
    id_nilai?: SortOrder
    nilaiPkl?: SortOrder
  }

  export type nilaiPklMinOrderByAggregateInput = {
    id_nilai?: SortOrder
    nilaiPkl?: SortOrder
  }

  export type KhsCountOrderByAggregateInput = {
    id_khs?: SortOrder
    semester?: SortOrder
    ip_semester?: SortOrder
    ip_kumulatif?: SortOrder
    jumlah_sks?: SortOrder
    berkas_khs?: SortOrder
    url?: SortOrder
  }

  export type KhsAvgOrderByAggregateInput = {
    jumlah_sks?: SortOrder
  }

  export type KhsMaxOrderByAggregateInput = {
    id_khs?: SortOrder
    semester?: SortOrder
    ip_semester?: SortOrder
    ip_kumulatif?: SortOrder
    jumlah_sks?: SortOrder
    berkas_khs?: SortOrder
    url?: SortOrder
  }

  export type KhsMinOrderByAggregateInput = {
    id_khs?: SortOrder
    semester?: SortOrder
    ip_semester?: SortOrder
    ip_kumulatif?: SortOrder
    jumlah_sks?: SortOrder
    berkas_khs?: SortOrder
    url?: SortOrder
  }

  export type KhsSumOrderByAggregateInput = {
    jumlah_sks?: SortOrder
  }

  export type SkripsiCountOrderByAggregateInput = {
    id_skripsi?: SortOrder
    status_skripsi?: SortOrder
    tgl_sidang?: SortOrder
    dospem?: SortOrder
    berkas_skripsi?: SortOrder
    url?: SortOrder
  }

  export type SkripsiMaxOrderByAggregateInput = {
    id_skripsi?: SortOrder
    status_skripsi?: SortOrder
    tgl_sidang?: SortOrder
    dospem?: SortOrder
    berkas_skripsi?: SortOrder
    url?: SortOrder
  }

  export type SkripsiMinOrderByAggregateInput = {
    id_skripsi?: SortOrder
    status_skripsi?: SortOrder
    tgl_sidang?: SortOrder
    dospem?: SortOrder
    berkas_skripsi?: SortOrder
    url?: SortOrder
  }

  export type DosenCountOrderByAggregateInput = {
    id_dsn?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type DosenMaxOrderByAggregateInput = {
    id_dsn?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type DosenMinOrderByAggregateInput = {
    id_dsn?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id_adm?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id_adm?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id_adm?: SortOrder
    nama?: SortOrder
    noInduk?: SortOrder
    password?: SortOrder
    kode_departement?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Bio_mahasiswaCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Bio_mahasiswaCreateWithoutAuthorInput>, Enumerable<Bio_mahasiswaUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Bio_mahasiswaCreateOrConnectWithoutAuthorInput>
    createMany?: Bio_mahasiswaCreateManyAuthorInputEnvelope
    connect?: Enumerable<Bio_mahasiswaWhereUniqueInput>
  }

  export type IrsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<IrsCreateWithoutAuthorInput>, Enumerable<IrsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<IrsCreateOrConnectWithoutAuthorInput>
    createMany?: IrsCreateManyAuthorInputEnvelope
    connect?: Enumerable<IrsWhereUniqueInput>
  }

  export type KhsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<KhsCreateWithoutAuthorInput>, Enumerable<KhsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<KhsCreateOrConnectWithoutAuthorInput>
    createMany?: KhsCreateManyAuthorInputEnvelope
    connect?: Enumerable<KhsWhereUniqueInput>
  }

  export type PklCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PklCreateWithoutAuthorInput>, Enumerable<PklUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PklCreateOrConnectWithoutAuthorInput>
    createMany?: PklCreateManyAuthorInputEnvelope
    connect?: Enumerable<PklWhereUniqueInput>
  }

  export type SkripsiCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<SkripsiCreateWithoutAuthorInput>, Enumerable<SkripsiUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SkripsiCreateOrConnectWithoutAuthorInput>
    createMany?: SkripsiCreateManyAuthorInputEnvelope
    connect?: Enumerable<SkripsiWhereUniqueInput>
  }

  export type VerifikasiCreateNestedOneWithoutAuthorInput = {
    create?: XOR<VerifikasiCreateWithoutAuthorInput, VerifikasiUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: VerifikasiCreateOrConnectWithoutAuthorInput
    connect?: VerifikasiWhereUniqueInput
  }

  export type Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<Bio_mahasiswaCreateWithoutAuthorInput>, Enumerable<Bio_mahasiswaUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Bio_mahasiswaCreateOrConnectWithoutAuthorInput>
    createMany?: Bio_mahasiswaCreateManyAuthorInputEnvelope
    connect?: Enumerable<Bio_mahasiswaWhereUniqueInput>
  }

  export type IrsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<IrsCreateWithoutAuthorInput>, Enumerable<IrsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<IrsCreateOrConnectWithoutAuthorInput>
    createMany?: IrsCreateManyAuthorInputEnvelope
    connect?: Enumerable<IrsWhereUniqueInput>
  }

  export type KhsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<KhsCreateWithoutAuthorInput>, Enumerable<KhsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<KhsCreateOrConnectWithoutAuthorInput>
    createMany?: KhsCreateManyAuthorInputEnvelope
    connect?: Enumerable<KhsWhereUniqueInput>
  }

  export type PklUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PklCreateWithoutAuthorInput>, Enumerable<PklUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PklCreateOrConnectWithoutAuthorInput>
    createMany?: PklCreateManyAuthorInputEnvelope
    connect?: Enumerable<PklWhereUniqueInput>
  }

  export type SkripsiUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<SkripsiCreateWithoutAuthorInput>, Enumerable<SkripsiUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SkripsiCreateOrConnectWithoutAuthorInput>
    createMany?: SkripsiCreateManyAuthorInputEnvelope
    connect?: Enumerable<SkripsiWhereUniqueInput>
  }

  export type VerifikasiUncheckedCreateNestedOneWithoutAuthorInput = {
    create?: XOR<VerifikasiCreateWithoutAuthorInput, VerifikasiUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: VerifikasiCreateOrConnectWithoutAuthorInput
    connect?: VerifikasiWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Bio_mahasiswaUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<Bio_mahasiswaCreateWithoutAuthorInput>, Enumerable<Bio_mahasiswaUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Bio_mahasiswaCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Bio_mahasiswaUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Bio_mahasiswaCreateManyAuthorInputEnvelope
    set?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    disconnect?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    delete?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    connect?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    update?: Enumerable<Bio_mahasiswaUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Bio_mahasiswaUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Bio_mahasiswaScalarWhereInput>
  }

  export type IrsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<IrsCreateWithoutAuthorInput>, Enumerable<IrsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<IrsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<IrsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: IrsCreateManyAuthorInputEnvelope
    set?: Enumerable<IrsWhereUniqueInput>
    disconnect?: Enumerable<IrsWhereUniqueInput>
    delete?: Enumerable<IrsWhereUniqueInput>
    connect?: Enumerable<IrsWhereUniqueInput>
    update?: Enumerable<IrsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<IrsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<IrsScalarWhereInput>
  }

  export type KhsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<KhsCreateWithoutAuthorInput>, Enumerable<KhsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<KhsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<KhsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: KhsCreateManyAuthorInputEnvelope
    set?: Enumerable<KhsWhereUniqueInput>
    disconnect?: Enumerable<KhsWhereUniqueInput>
    delete?: Enumerable<KhsWhereUniqueInput>
    connect?: Enumerable<KhsWhereUniqueInput>
    update?: Enumerable<KhsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<KhsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<KhsScalarWhereInput>
  }

  export type PklUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PklCreateWithoutAuthorInput>, Enumerable<PklUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PklCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PklUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PklCreateManyAuthorInputEnvelope
    set?: Enumerable<PklWhereUniqueInput>
    disconnect?: Enumerable<PklWhereUniqueInput>
    delete?: Enumerable<PklWhereUniqueInput>
    connect?: Enumerable<PklWhereUniqueInput>
    update?: Enumerable<PklUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PklUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PklScalarWhereInput>
  }

  export type SkripsiUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<SkripsiCreateWithoutAuthorInput>, Enumerable<SkripsiUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SkripsiCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<SkripsiUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: SkripsiCreateManyAuthorInputEnvelope
    set?: Enumerable<SkripsiWhereUniqueInput>
    disconnect?: Enumerable<SkripsiWhereUniqueInput>
    delete?: Enumerable<SkripsiWhereUniqueInput>
    connect?: Enumerable<SkripsiWhereUniqueInput>
    update?: Enumerable<SkripsiUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<SkripsiUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<SkripsiScalarWhereInput>
  }

  export type VerifikasiUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<VerifikasiCreateWithoutAuthorInput, VerifikasiUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: VerifikasiCreateOrConnectWithoutAuthorInput
    upsert?: VerifikasiUpsertWithoutAuthorInput
    disconnect?: boolean
    delete?: boolean
    connect?: VerifikasiWhereUniqueInput
    update?: XOR<VerifikasiUpdateWithoutAuthorInput, VerifikasiUncheckedUpdateWithoutAuthorInput>
  }

  export type Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<Bio_mahasiswaCreateWithoutAuthorInput>, Enumerable<Bio_mahasiswaUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<Bio_mahasiswaCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<Bio_mahasiswaUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: Bio_mahasiswaCreateManyAuthorInputEnvelope
    set?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    disconnect?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    delete?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    connect?: Enumerable<Bio_mahasiswaWhereUniqueInput>
    update?: Enumerable<Bio_mahasiswaUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<Bio_mahasiswaUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<Bio_mahasiswaScalarWhereInput>
  }

  export type IrsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<IrsCreateWithoutAuthorInput>, Enumerable<IrsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<IrsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<IrsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: IrsCreateManyAuthorInputEnvelope
    set?: Enumerable<IrsWhereUniqueInput>
    disconnect?: Enumerable<IrsWhereUniqueInput>
    delete?: Enumerable<IrsWhereUniqueInput>
    connect?: Enumerable<IrsWhereUniqueInput>
    update?: Enumerable<IrsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<IrsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<IrsScalarWhereInput>
  }

  export type KhsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<KhsCreateWithoutAuthorInput>, Enumerable<KhsUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<KhsCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<KhsUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: KhsCreateManyAuthorInputEnvelope
    set?: Enumerable<KhsWhereUniqueInput>
    disconnect?: Enumerable<KhsWhereUniqueInput>
    delete?: Enumerable<KhsWhereUniqueInput>
    connect?: Enumerable<KhsWhereUniqueInput>
    update?: Enumerable<KhsUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<KhsUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<KhsScalarWhereInput>
  }

  export type PklUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<PklCreateWithoutAuthorInput>, Enumerable<PklUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PklCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PklUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PklCreateManyAuthorInputEnvelope
    set?: Enumerable<PklWhereUniqueInput>
    disconnect?: Enumerable<PklWhereUniqueInput>
    delete?: Enumerable<PklWhereUniqueInput>
    connect?: Enumerable<PklWhereUniqueInput>
    update?: Enumerable<PklUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PklUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PklScalarWhereInput>
  }

  export type SkripsiUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<Enumerable<SkripsiCreateWithoutAuthorInput>, Enumerable<SkripsiUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<SkripsiCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<SkripsiUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: SkripsiCreateManyAuthorInputEnvelope
    set?: Enumerable<SkripsiWhereUniqueInput>
    disconnect?: Enumerable<SkripsiWhereUniqueInput>
    delete?: Enumerable<SkripsiWhereUniqueInput>
    connect?: Enumerable<SkripsiWhereUniqueInput>
    update?: Enumerable<SkripsiUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<SkripsiUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<SkripsiScalarWhereInput>
  }

  export type VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<VerifikasiCreateWithoutAuthorInput, VerifikasiUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: VerifikasiCreateOrConnectWithoutAuthorInput
    upsert?: VerifikasiUpsertWithoutAuthorInput
    disconnect?: boolean
    delete?: boolean
    connect?: VerifikasiWhereUniqueInput
    update?: XOR<VerifikasiUpdateWithoutAuthorInput, VerifikasiUncheckedUpdateWithoutAuthorInput>
  }

  export type MahasiswaCreateNestedOneWithoutVerifikasiInput = {
    create?: XOR<MahasiswaCreateWithoutVerifikasiInput, MahasiswaUncheckedCreateWithoutVerifikasiInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutVerifikasiInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutVerifikasiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutVerifikasiInput, MahasiswaUncheckedCreateWithoutVerifikasiInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutVerifikasiInput
    upsert?: MahasiswaUpsertWithoutVerifikasiInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<MahasiswaUpdateWithoutVerifikasiInput, MahasiswaUncheckedUpdateWithoutVerifikasiInput>
  }

  export type MahasiswaCreateNestedOneWithoutBiodataInput = {
    create?: XOR<MahasiswaCreateWithoutBiodataInput, MahasiswaUncheckedCreateWithoutBiodataInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutBiodataInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutBiodataNestedInput = {
    create?: XOR<MahasiswaCreateWithoutBiodataInput, MahasiswaUncheckedCreateWithoutBiodataInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutBiodataInput
    upsert?: MahasiswaUpsertWithoutBiodataInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<MahasiswaUpdateWithoutBiodataInput, MahasiswaUncheckedUpdateWithoutBiodataInput>
  }

  export type MahasiswaCreateNestedOneWithoutDataIrsInput = {
    create?: XOR<MahasiswaCreateWithoutDataIrsInput, MahasiswaUncheckedCreateWithoutDataIrsInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataIrsInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutDataIrsNestedInput = {
    create?: XOR<MahasiswaCreateWithoutDataIrsInput, MahasiswaUncheckedCreateWithoutDataIrsInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataIrsInput
    upsert?: MahasiswaUpsertWithoutDataIrsInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<MahasiswaUpdateWithoutDataIrsInput, MahasiswaUncheckedUpdateWithoutDataIrsInput>
  }

  export type MahasiswaCreateNestedOneWithoutDataPklInput = {
    create?: XOR<MahasiswaCreateWithoutDataPklInput, MahasiswaUncheckedCreateWithoutDataPklInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataPklInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type nilaiPklCreateNestedOneWithoutAuthorInput = {
    create?: XOR<nilaiPklCreateWithoutAuthorInput, nilaiPklUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: nilaiPklCreateOrConnectWithoutAuthorInput
    connect?: nilaiPklWhereUniqueInput
  }

  export type nilaiPklUncheckedCreateNestedOneWithoutAuthorInput = {
    create?: XOR<nilaiPklCreateWithoutAuthorInput, nilaiPklUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: nilaiPklCreateOrConnectWithoutAuthorInput
    connect?: nilaiPklWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutDataPklNestedInput = {
    create?: XOR<MahasiswaCreateWithoutDataPklInput, MahasiswaUncheckedCreateWithoutDataPklInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataPklInput
    upsert?: MahasiswaUpsertWithoutDataPklInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<MahasiswaUpdateWithoutDataPklInput, MahasiswaUncheckedUpdateWithoutDataPklInput>
  }

  export type nilaiPklUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<nilaiPklCreateWithoutAuthorInput, nilaiPklUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: nilaiPklCreateOrConnectWithoutAuthorInput
    upsert?: nilaiPklUpsertWithoutAuthorInput
    disconnect?: boolean
    delete?: boolean
    connect?: nilaiPklWhereUniqueInput
    update?: XOR<nilaiPklUpdateWithoutAuthorInput, nilaiPklUncheckedUpdateWithoutAuthorInput>
  }

  export type nilaiPklUncheckedUpdateOneWithoutAuthorNestedInput = {
    create?: XOR<nilaiPklCreateWithoutAuthorInput, nilaiPklUncheckedCreateWithoutAuthorInput>
    connectOrCreate?: nilaiPklCreateOrConnectWithoutAuthorInput
    upsert?: nilaiPklUpsertWithoutAuthorInput
    disconnect?: boolean
    delete?: boolean
    connect?: nilaiPklWhereUniqueInput
    update?: XOR<nilaiPklUpdateWithoutAuthorInput, nilaiPklUncheckedUpdateWithoutAuthorInput>
  }

  export type PklCreateNestedOneWithoutNilaiInput = {
    create?: XOR<PklCreateWithoutNilaiInput, PklUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: PklCreateOrConnectWithoutNilaiInput
    connect?: PklWhereUniqueInput
  }

  export type PklUpdateOneRequiredWithoutNilaiNestedInput = {
    create?: XOR<PklCreateWithoutNilaiInput, PklUncheckedCreateWithoutNilaiInput>
    connectOrCreate?: PklCreateOrConnectWithoutNilaiInput
    upsert?: PklUpsertWithoutNilaiInput
    connect?: PklWhereUniqueInput
    update?: XOR<PklUpdateWithoutNilaiInput, PklUncheckedUpdateWithoutNilaiInput>
  }

  export type MahasiswaCreateNestedOneWithoutDataKhsInput = {
    create?: XOR<MahasiswaCreateWithoutDataKhsInput, MahasiswaUncheckedCreateWithoutDataKhsInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataKhsInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutDataKhsNestedInput = {
    create?: XOR<MahasiswaCreateWithoutDataKhsInput, MahasiswaUncheckedCreateWithoutDataKhsInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataKhsInput
    upsert?: MahasiswaUpsertWithoutDataKhsInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<MahasiswaUpdateWithoutDataKhsInput, MahasiswaUncheckedUpdateWithoutDataKhsInput>
  }

  export type MahasiswaCreateNestedOneWithoutDataSkripsiInput = {
    create?: XOR<MahasiswaCreateWithoutDataSkripsiInput, MahasiswaUncheckedCreateWithoutDataSkripsiInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataSkripsiInput
    connect?: MahasiswaWhereUniqueInput
  }

  export type MahasiswaUpdateOneRequiredWithoutDataSkripsiNestedInput = {
    create?: XOR<MahasiswaCreateWithoutDataSkripsiInput, MahasiswaUncheckedCreateWithoutDataSkripsiInput>
    connectOrCreate?: MahasiswaCreateOrConnectWithoutDataSkripsiInput
    upsert?: MahasiswaUpsertWithoutDataSkripsiInput
    connect?: MahasiswaWhereUniqueInput
    update?: XOR<MahasiswaUpdateWithoutDataSkripsiInput, MahasiswaUncheckedUpdateWithoutDataSkripsiInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type Bio_mahasiswaCreateWithoutAuthorInput = {
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
  }

  export type Bio_mahasiswaUncheckedCreateWithoutAuthorInput = {
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
  }

  export type Bio_mahasiswaCreateOrConnectWithoutAuthorInput = {
    where: Bio_mahasiswaWhereUniqueInput
    create: XOR<Bio_mahasiswaCreateWithoutAuthorInput, Bio_mahasiswaUncheckedCreateWithoutAuthorInput>
  }

  export type Bio_mahasiswaCreateManyAuthorInputEnvelope = {
    data: Enumerable<Bio_mahasiswaCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type IrsCreateWithoutAuthorInput = {
    semester: string
    jumlahSks: number
    berkas: string
    url: string
  }

  export type IrsUncheckedCreateWithoutAuthorInput = {
    semester: string
    jumlahSks: number
    berkas: string
    url: string
  }

  export type IrsCreateOrConnectWithoutAuthorInput = {
    where: IrsWhereUniqueInput
    create: XOR<IrsCreateWithoutAuthorInput, IrsUncheckedCreateWithoutAuthorInput>
  }

  export type IrsCreateManyAuthorInputEnvelope = {
    data: Enumerable<IrsCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type KhsCreateWithoutAuthorInput = {
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
  }

  export type KhsUncheckedCreateWithoutAuthorInput = {
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
  }

  export type KhsCreateOrConnectWithoutAuthorInput = {
    where: KhsWhereUniqueInput
    create: XOR<KhsCreateWithoutAuthorInput, KhsUncheckedCreateWithoutAuthorInput>
  }

  export type KhsCreateManyAuthorInputEnvelope = {
    data: Enumerable<KhsCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type PklCreateWithoutAuthorInput = {
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
    nilai?: nilaiPklCreateNestedOneWithoutAuthorInput
  }

  export type PklUncheckedCreateWithoutAuthorInput = {
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
    nilai?: nilaiPklUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type PklCreateOrConnectWithoutAuthorInput = {
    where: PklWhereUniqueInput
    create: XOR<PklCreateWithoutAuthorInput, PklUncheckedCreateWithoutAuthorInput>
  }

  export type PklCreateManyAuthorInputEnvelope = {
    data: Enumerable<PklCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type SkripsiCreateWithoutAuthorInput = {
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
  }

  export type SkripsiUncheckedCreateWithoutAuthorInput = {
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
  }

  export type SkripsiCreateOrConnectWithoutAuthorInput = {
    where: SkripsiWhereUniqueInput
    create: XOR<SkripsiCreateWithoutAuthorInput, SkripsiUncheckedCreateWithoutAuthorInput>
  }

  export type SkripsiCreateManyAuthorInputEnvelope = {
    data: Enumerable<SkripsiCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type VerifikasiCreateWithoutAuthorInput = {
    verif: string
  }

  export type VerifikasiUncheckedCreateWithoutAuthorInput = {
    verif: string
  }

  export type VerifikasiCreateOrConnectWithoutAuthorInput = {
    where: VerifikasiWhereUniqueInput
    create: XOR<VerifikasiCreateWithoutAuthorInput, VerifikasiUncheckedCreateWithoutAuthorInput>
  }

  export type Bio_mahasiswaUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Bio_mahasiswaWhereUniqueInput
    update: XOR<Bio_mahasiswaUpdateWithoutAuthorInput, Bio_mahasiswaUncheckedUpdateWithoutAuthorInput>
    create: XOR<Bio_mahasiswaCreateWithoutAuthorInput, Bio_mahasiswaUncheckedCreateWithoutAuthorInput>
  }

  export type Bio_mahasiswaUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Bio_mahasiswaWhereUniqueInput
    data: XOR<Bio_mahasiswaUpdateWithoutAuthorInput, Bio_mahasiswaUncheckedUpdateWithoutAuthorInput>
  }

  export type Bio_mahasiswaUpdateManyWithWhereWithoutAuthorInput = {
    where: Bio_mahasiswaScalarWhereInput
    data: XOR<Bio_mahasiswaUpdateManyMutationInput, Bio_mahasiswaUncheckedUpdateManyWithoutBiodataInput>
  }

  export type Bio_mahasiswaScalarWhereInput = {
    AND?: Enumerable<Bio_mahasiswaScalarWhereInput>
    OR?: Enumerable<Bio_mahasiswaScalarWhereInput>
    NOT?: Enumerable<Bio_mahasiswaScalarWhereInput>
    id_bio?: StringFilter | string
    no_telp?: StringFilter | string
    provinsi?: StringFilter | string
    email?: StringFilter | string
    kota?: StringFilter | string
    alamat?: StringFilter | string
  }

  export type IrsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: IrsWhereUniqueInput
    update: XOR<IrsUpdateWithoutAuthorInput, IrsUncheckedUpdateWithoutAuthorInput>
    create: XOR<IrsCreateWithoutAuthorInput, IrsUncheckedCreateWithoutAuthorInput>
  }

  export type IrsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: IrsWhereUniqueInput
    data: XOR<IrsUpdateWithoutAuthorInput, IrsUncheckedUpdateWithoutAuthorInput>
  }

  export type IrsUpdateManyWithWhereWithoutAuthorInput = {
    where: IrsScalarWhereInput
    data: XOR<IrsUpdateManyMutationInput, IrsUncheckedUpdateManyWithoutDataIrsInput>
  }

  export type IrsScalarWhereInput = {
    AND?: Enumerable<IrsScalarWhereInput>
    OR?: Enumerable<IrsScalarWhereInput>
    NOT?: Enumerable<IrsScalarWhereInput>
    id_Irs?: StringFilter | string
    semester?: StringFilter | string
    jumlahSks?: IntFilter | number
    berkas?: StringFilter | string
    url?: StringFilter | string
  }

  export type KhsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: KhsWhereUniqueInput
    update: XOR<KhsUpdateWithoutAuthorInput, KhsUncheckedUpdateWithoutAuthorInput>
    create: XOR<KhsCreateWithoutAuthorInput, KhsUncheckedCreateWithoutAuthorInput>
  }

  export type KhsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: KhsWhereUniqueInput
    data: XOR<KhsUpdateWithoutAuthorInput, KhsUncheckedUpdateWithoutAuthorInput>
  }

  export type KhsUpdateManyWithWhereWithoutAuthorInput = {
    where: KhsScalarWhereInput
    data: XOR<KhsUpdateManyMutationInput, KhsUncheckedUpdateManyWithoutDataKhsInput>
  }

  export type KhsScalarWhereInput = {
    AND?: Enumerable<KhsScalarWhereInput>
    OR?: Enumerable<KhsScalarWhereInput>
    NOT?: Enumerable<KhsScalarWhereInput>
    id_khs?: StringFilter | string
    semester?: StringFilter | string
    ip_semester?: StringFilter | string
    ip_kumulatif?: StringFilter | string
    jumlah_sks?: IntFilter | number
    berkas_khs?: StringFilter | string
    url?: StringFilter | string
  }

  export type PklUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PklWhereUniqueInput
    update: XOR<PklUpdateWithoutAuthorInput, PklUncheckedUpdateWithoutAuthorInput>
    create: XOR<PklCreateWithoutAuthorInput, PklUncheckedCreateWithoutAuthorInput>
  }

  export type PklUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PklWhereUniqueInput
    data: XOR<PklUpdateWithoutAuthorInput, PklUncheckedUpdateWithoutAuthorInput>
  }

  export type PklUpdateManyWithWhereWithoutAuthorInput = {
    where: PklScalarWhereInput
    data: XOR<PklUpdateManyMutationInput, PklUncheckedUpdateManyWithoutDataPklInput>
  }

  export type PklScalarWhereInput = {
    AND?: Enumerable<PklScalarWhereInput>
    OR?: Enumerable<PklScalarWhereInput>
    NOT?: Enumerable<PklScalarWhereInput>
    id_pkl?: StringFilter | string
    status_pkl?: StringFilter | string
    dospem?: StringFilter | string
    nama_instantsi?: StringFilter | string
    berkas_pkl?: StringFilter | string
    url?: StringFilter | string
  }

  export type SkripsiUpsertWithWhereUniqueWithoutAuthorInput = {
    where: SkripsiWhereUniqueInput
    update: XOR<SkripsiUpdateWithoutAuthorInput, SkripsiUncheckedUpdateWithoutAuthorInput>
    create: XOR<SkripsiCreateWithoutAuthorInput, SkripsiUncheckedCreateWithoutAuthorInput>
  }

  export type SkripsiUpdateWithWhereUniqueWithoutAuthorInput = {
    where: SkripsiWhereUniqueInput
    data: XOR<SkripsiUpdateWithoutAuthorInput, SkripsiUncheckedUpdateWithoutAuthorInput>
  }

  export type SkripsiUpdateManyWithWhereWithoutAuthorInput = {
    where: SkripsiScalarWhereInput
    data: XOR<SkripsiUpdateManyMutationInput, SkripsiUncheckedUpdateManyWithoutDataSkripsiInput>
  }

  export type SkripsiScalarWhereInput = {
    AND?: Enumerable<SkripsiScalarWhereInput>
    OR?: Enumerable<SkripsiScalarWhereInput>
    NOT?: Enumerable<SkripsiScalarWhereInput>
    id_skripsi?: StringFilter | string
    status_skripsi?: StringFilter | string
    tgl_sidang?: StringFilter | string
    dospem?: StringFilter | string
    berkas_skripsi?: StringFilter | string
    url?: StringFilter | string
  }

  export type VerifikasiUpsertWithoutAuthorInput = {
    update: XOR<VerifikasiUpdateWithoutAuthorInput, VerifikasiUncheckedUpdateWithoutAuthorInput>
    create: XOR<VerifikasiCreateWithoutAuthorInput, VerifikasiUncheckedCreateWithoutAuthorInput>
  }

  export type VerifikasiUpdateWithoutAuthorInput = {
    verif?: StringFieldUpdateOperationsInput | string
  }

  export type VerifikasiUncheckedUpdateWithoutAuthorInput = {
    verif?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaCreateWithoutVerifikasiInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsCreateNestedManyWithoutAuthorInput
    dataPkl?: PklCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiCreateNestedManyWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateWithoutVerifikasiInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsUncheckedCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsUncheckedCreateNestedManyWithoutAuthorInput
    dataPkl?: PklUncheckedCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type MahasiswaCreateOrConnectWithoutVerifikasiInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutVerifikasiInput, MahasiswaUncheckedCreateWithoutVerifikasiInput>
  }

  export type MahasiswaUpsertWithoutVerifikasiInput = {
    update: XOR<MahasiswaUpdateWithoutVerifikasiInput, MahasiswaUncheckedUpdateWithoutVerifikasiInput>
    create: XOR<MahasiswaCreateWithoutVerifikasiInput, MahasiswaUncheckedCreateWithoutVerifikasiInput>
  }

  export type MahasiswaUpdateWithoutVerifikasiInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUpdateManyWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutVerifikasiInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUncheckedUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUncheckedUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUncheckedUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type MahasiswaCreateWithoutBiodataInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    dataIrs?: IrsCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsCreateNestedManyWithoutAuthorInput
    dataPkl?: PklCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateWithoutBiodataInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    dataIrs?: IrsUncheckedCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsUncheckedCreateNestedManyWithoutAuthorInput
    dataPkl?: PklUncheckedCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiUncheckedCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaCreateOrConnectWithoutBiodataInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutBiodataInput, MahasiswaUncheckedCreateWithoutBiodataInput>
  }

  export type MahasiswaUpsertWithoutBiodataInput = {
    update: XOR<MahasiswaUpdateWithoutBiodataInput, MahasiswaUncheckedUpdateWithoutBiodataInput>
    create: XOR<MahasiswaCreateWithoutBiodataInput, MahasiswaUncheckedCreateWithoutBiodataInput>
  }

  export type MahasiswaUpdateWithoutBiodataInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataIrs?: IrsUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutBiodataInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dataIrs?: IrsUncheckedUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUncheckedUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUncheckedUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUncheckedUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaCreateWithoutDataIrsInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsCreateNestedManyWithoutAuthorInput
    dataPkl?: PklCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateWithoutDataIrsInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsUncheckedCreateNestedManyWithoutAuthorInput
    dataPkl?: PklUncheckedCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiUncheckedCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaCreateOrConnectWithoutDataIrsInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutDataIrsInput, MahasiswaUncheckedCreateWithoutDataIrsInput>
  }

  export type MahasiswaUpsertWithoutDataIrsInput = {
    update: XOR<MahasiswaUpdateWithoutDataIrsInput, MahasiswaUncheckedUpdateWithoutDataIrsInput>
    create: XOR<MahasiswaCreateWithoutDataIrsInput, MahasiswaUncheckedCreateWithoutDataIrsInput>
  }

  export type MahasiswaUpdateWithoutDataIrsInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutDataIrsInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUncheckedUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUncheckedUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUncheckedUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaCreateWithoutDataPklInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateWithoutDataPklInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsUncheckedCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsUncheckedCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiUncheckedCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaCreateOrConnectWithoutDataPklInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutDataPklInput, MahasiswaUncheckedCreateWithoutDataPklInput>
  }

  export type nilaiPklCreateWithoutAuthorInput = {
    nilaiPkl: string
  }

  export type nilaiPklUncheckedCreateWithoutAuthorInput = {
    nilaiPkl: string
  }

  export type nilaiPklCreateOrConnectWithoutAuthorInput = {
    where: nilaiPklWhereUniqueInput
    create: XOR<nilaiPklCreateWithoutAuthorInput, nilaiPklUncheckedCreateWithoutAuthorInput>
  }

  export type MahasiswaUpsertWithoutDataPklInput = {
    update: XOR<MahasiswaUpdateWithoutDataPklInput, MahasiswaUncheckedUpdateWithoutDataPklInput>
    create: XOR<MahasiswaCreateWithoutDataPklInput, MahasiswaUncheckedCreateWithoutDataPklInput>
  }

  export type MahasiswaUpdateWithoutDataPklInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutDataPklInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUncheckedUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUncheckedUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUncheckedUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type nilaiPklUpsertWithoutAuthorInput = {
    update: XOR<nilaiPklUpdateWithoutAuthorInput, nilaiPklUncheckedUpdateWithoutAuthorInput>
    create: XOR<nilaiPklCreateWithoutAuthorInput, nilaiPklUncheckedCreateWithoutAuthorInput>
  }

  export type nilaiPklUpdateWithoutAuthorInput = {
    nilaiPkl?: StringFieldUpdateOperationsInput | string
  }

  export type nilaiPklUncheckedUpdateWithoutAuthorInput = {
    nilaiPkl?: StringFieldUpdateOperationsInput | string
  }

  export type PklCreateWithoutNilaiInput = {
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
    author?: MahasiswaCreateNestedOneWithoutDataPklInput
  }

  export type PklUncheckedCreateWithoutNilaiInput = {
    id_pkl?: string
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
  }

  export type PklCreateOrConnectWithoutNilaiInput = {
    where: PklWhereUniqueInput
    create: XOR<PklCreateWithoutNilaiInput, PklUncheckedCreateWithoutNilaiInput>
  }

  export type PklUpsertWithoutNilaiInput = {
    update: XOR<PklUpdateWithoutNilaiInput, PklUncheckedUpdateWithoutNilaiInput>
    create: XOR<PklCreateWithoutNilaiInput, PklUncheckedCreateWithoutNilaiInput>
  }

  export type PklUpdateWithoutNilaiInput = {
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: MahasiswaUpdateOneRequiredWithoutDataPklNestedInput
  }

  export type PklUncheckedUpdateWithoutNilaiInput = {
    id_pkl?: StringFieldUpdateOperationsInput | string
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type MahasiswaCreateWithoutDataKhsInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsCreateNestedManyWithoutAuthorInput
    dataPkl?: PklCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateWithoutDataKhsInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsUncheckedCreateNestedManyWithoutAuthorInput
    dataPkl?: PklUncheckedCreateNestedManyWithoutAuthorInput
    dataSkripsi?: SkripsiUncheckedCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaCreateOrConnectWithoutDataKhsInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutDataKhsInput, MahasiswaUncheckedCreateWithoutDataKhsInput>
  }

  export type MahasiswaUpsertWithoutDataKhsInput = {
    update: XOR<MahasiswaUpdateWithoutDataKhsInput, MahasiswaUncheckedUpdateWithoutDataKhsInput>
    create: XOR<MahasiswaCreateWithoutDataKhsInput, MahasiswaUncheckedCreateWithoutDataKhsInput>
  }

  export type MahasiswaUpdateWithoutDataKhsInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutDataKhsInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUncheckedUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUncheckedUpdateManyWithoutAuthorNestedInput
    dataSkripsi?: SkripsiUncheckedUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaCreateWithoutDataSkripsiInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsCreateNestedManyWithoutAuthorInput
    dataPkl?: PklCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaUncheckedCreateWithoutDataSkripsiInput = {
    id_mhs?: string
    nama: string
    noInduk: string
    angkatan: number
    password: string
    status: string
    image: string
    url: string
    role: string
    createdAt?: Date | string
    biodata?: Bio_mahasiswaUncheckedCreateNestedManyWithoutAuthorInput
    dataIrs?: IrsUncheckedCreateNestedManyWithoutAuthorInput
    dataKhs?: KhsUncheckedCreateNestedManyWithoutAuthorInput
    dataPkl?: PklUncheckedCreateNestedManyWithoutAuthorInput
    verifikasi?: VerifikasiUncheckedCreateNestedOneWithoutAuthorInput
  }

  export type MahasiswaCreateOrConnectWithoutDataSkripsiInput = {
    where: MahasiswaWhereUniqueInput
    create: XOR<MahasiswaCreateWithoutDataSkripsiInput, MahasiswaUncheckedCreateWithoutDataSkripsiInput>
  }

  export type MahasiswaUpsertWithoutDataSkripsiInput = {
    update: XOR<MahasiswaUpdateWithoutDataSkripsiInput, MahasiswaUncheckedUpdateWithoutDataSkripsiInput>
    create: XOR<MahasiswaCreateWithoutDataSkripsiInput, MahasiswaUncheckedCreateWithoutDataSkripsiInput>
  }

  export type MahasiswaUpdateWithoutDataSkripsiInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUpdateOneWithoutAuthorNestedInput
  }

  export type MahasiswaUncheckedUpdateWithoutDataSkripsiInput = {
    id_mhs?: StringFieldUpdateOperationsInput | string
    nama?: StringFieldUpdateOperationsInput | string
    noInduk?: StringFieldUpdateOperationsInput | string
    angkatan?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    biodata?: Bio_mahasiswaUncheckedUpdateManyWithoutAuthorNestedInput
    dataIrs?: IrsUncheckedUpdateManyWithoutAuthorNestedInput
    dataKhs?: KhsUncheckedUpdateManyWithoutAuthorNestedInput
    dataPkl?: PklUncheckedUpdateManyWithoutAuthorNestedInput
    verifikasi?: VerifikasiUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type Bio_mahasiswaCreateManyAuthorInput = {
    no_telp: string
    provinsi: string
    email: string
    kota: string
    alamat: string
  }

  export type IrsCreateManyAuthorInput = {
    semester: string
    jumlahSks: number
    berkas: string
    url: string
  }

  export type KhsCreateManyAuthorInput = {
    semester: string
    ip_semester: string
    ip_kumulatif: string
    jumlah_sks: number
    berkas_khs: string
    url: string
  }

  export type PklCreateManyAuthorInput = {
    status_pkl: string
    dospem: string
    nama_instantsi: string
    berkas_pkl: string
    url: string
  }

  export type SkripsiCreateManyAuthorInput = {
    status_skripsi: string
    tgl_sidang: string
    dospem: string
    berkas_skripsi: string
    url: string
  }

  export type Bio_mahasiswaUpdateWithoutAuthorInput = {
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type Bio_mahasiswaUncheckedUpdateWithoutAuthorInput = {
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type Bio_mahasiswaUncheckedUpdateManyWithoutBiodataInput = {
    no_telp?: StringFieldUpdateOperationsInput | string
    provinsi?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    kota?: StringFieldUpdateOperationsInput | string
    alamat?: StringFieldUpdateOperationsInput | string
  }

  export type IrsUpdateWithoutAuthorInput = {
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IrsUncheckedUpdateWithoutAuthorInput = {
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type IrsUncheckedUpdateManyWithoutDataIrsInput = {
    semester?: StringFieldUpdateOperationsInput | string
    jumlahSks?: IntFieldUpdateOperationsInput | number
    berkas?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type KhsUpdateWithoutAuthorInput = {
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type KhsUncheckedUpdateWithoutAuthorInput = {
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type KhsUncheckedUpdateManyWithoutDataKhsInput = {
    semester?: StringFieldUpdateOperationsInput | string
    ip_semester?: StringFieldUpdateOperationsInput | string
    ip_kumulatif?: StringFieldUpdateOperationsInput | string
    jumlah_sks?: IntFieldUpdateOperationsInput | number
    berkas_khs?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type PklUpdateWithoutAuthorInput = {
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nilai?: nilaiPklUpdateOneWithoutAuthorNestedInput
  }

  export type PklUncheckedUpdateWithoutAuthorInput = {
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    nilai?: nilaiPklUncheckedUpdateOneWithoutAuthorNestedInput
  }

  export type PklUncheckedUpdateManyWithoutDataPklInput = {
    status_pkl?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    nama_instantsi?: StringFieldUpdateOperationsInput | string
    berkas_pkl?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiUpdateWithoutAuthorInput = {
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiUncheckedUpdateWithoutAuthorInput = {
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type SkripsiUncheckedUpdateManyWithoutDataSkripsiInput = {
    status_skripsi?: StringFieldUpdateOperationsInput | string
    tgl_sidang?: StringFieldUpdateOperationsInput | string
    dospem?: StringFieldUpdateOperationsInput | string
    berkas_skripsi?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}