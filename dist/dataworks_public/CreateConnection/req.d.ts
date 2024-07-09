export interface CreateConnectionRequest {
    /**
     * 数据源关联的工作空间ID。您可以通过[ListProjects](~~178393~~)接口获取工作空间ID。
     * @example `1`
     */
    "ProjectId": number;
    /**
     * 数据源的名称。
     * @example `abc`
     */
    "Name": string;
    /**
     * 连接串的描述。
     * @example `abc`
     */
    "Description"?: string;
    /**
     * 连接串的类型。常用类型枚举如下：
     * - odps
     * - mysql
     * - rds
     * - oss
     * - sqlserver
     * - polardb
     * - oracle
     * - mongodb
     * - emr
     * - postgresql
     * - analyticdb_for_mysql
     * - hybriddb_for_postgresql
     * - holo
     * @example `rds`
     */
    "ConnectionType": string;
    /**
     * 连接串的子类型，针对某些父类型type下包含子类型的场景。目前有以下组合：
     * - 父类型：`rds`
     * - 子类型：`mysql`、`sqlserver`或`postgresql`。
     * @example `mysql`
     */
    "SubType"?: string;
    /**
     * 数据源所属的环境，包括0（开发环境）和1（生产环境）。
     * @example `1`
     */
    "EnvType": number;
    /**
     * 数据源的详细信息。部分常用数据源样例如下：
     * - odps
     * ```
     * {
     *   "accessId": "xssssss",
     *   "accessKey": "xsaxsaxsa",
     *   "authType": 2,
     *   "endpoint": "http://service.odps.aliyun.com/api",
     *   "project": "xsaxsax",
     *   "tag": "public"
     * }
     * ```
     * - mysql
     * ```
     * {
     *   "database": "xsaxsa",
     *   "instanceName": "rm-xsaxsa",
     *   "password": "xsaxsa",
     *   "rdsOwnerId": "xasxsa",
     *   "regionId": "cn-shanghai",
     *   "tag": "rds",
     *   "username": "xsaxsa"
     * }
     * ```
     * - rds
     * ```
     * {
     *   "configType": 1,
     *   "tag": "rds",
     *   "database": "xsaxsa",
     *   "username": "xsaxsa",
     *   "password": "xssaxsa$32050",
     *   "instanceName": "rm-xsaxs",
     *   "rdsOwnerId": "11111111"
     * }
     * ```
     * - oss
     * ```
     * {
     *   "accessId": "sssssxx",
     *   "accessKey": "xsaxaxsaxs",
     *   "bucket": "xsa-xs-xs",
     *   "endpoint": "http://oss-cn-shanghai.aliyuncs.com",
     *   "tag": "public"
     * }
     * ```
     * - sqlserver
     * ```
     * {
     *   "jdbcUrl": "jdbc:sqlserver://xsaxsa-xsaxsa.database.xxx.cn:123;DatabaseName=xsxs-xsxs",
     *   "password": "sdasda$fs",
     *   "tag": "public",
     *   "username": "sxaxacdacdd"
     * }
     * ```
     * - polardb
     * ```
     * {
     *   "clusterId": "pc-sdadsadsa",
     *   "database": "dsadsadsa",
     *   "ownerId": "121212122",
     *   "password": "sdasdafssa",
     *   "region": "cn-shanghai",
     *   "tag": "polardb",
     *   "username": "asdadsads"
     * }
     * ```
     * - oracle
     * ```
     * {
     *   "jdbcUrl": "jdbc:oracle:saaa:@xxxxx:1521:PROD",
     *   "password": "sxasaxsa",
     *   "tag": "public",
     *   "username": "sasfadfa"
     * }
     * ```
     * - mongodb
     * ```
     * {
     *   "address": "[\"xsaxxsa.mongodb.rds.aliyuncs.com:3717\"]",
     *   "database": "admin",
     *   "password": "sadsda@",
     *   "tag": "public",
     *   "username": "dsadsadas"
     * }
     * ```
     * - emr
     * ```
     * {
     *   "accessId": "xsaxsa",
     *   "emrClusterId": "C-dsads",
     *   "emrResourceQueueName": "default",
     *   "emrEndpoint": "emr.aliyuncs.com",
     *   "accessKey": "dsadsad",
     *   "emrUserId": "224833315798889783",
     *   "name": "sasdsadsa",
     *   "emrAccessMode": "simple",
     *   "region": "cn-shanghai",
     *   "authType": "2",
     *   "emrProjectId": "FP-sdadsad"
     * }
     * ```
     * - postgresql
     * ```
     * {
     *   "jdbcUrl": "jdbc:postgresql://xxxx:1921/ssss",
     *   "password": "sdadsads",
     *   "tag": "public",
     *   "username": "sdsasda"
     * }
     * ```
     * - analyticdb_for_mysql
     * ```
     * {
     *   "instanceId": "am-sadsada",
     *   "database": "xsxsx",
     *   "username": "xsxsa",
     *   "password": "asdadsa",
     *   "connectionString": "am-xssxsxs.ads.aliyuncs.com:3306"
     * }
     * ```
     * - hybriddb_for_postgresql
     * ```
     * {
     *   "connectionString": "gp-xsaxsaxa-master.gpdbmaster.rds.aliyuncs.com",
     *   "database": "xsaxsaxas",
     *   "password": "xsaxsaxsa@11",
     *   "instanceId": "gp-xsaxsaxsa",
     *   "port": "541132",
     *   "ownerId": "xsaxsaxsas",
     *   "username": "sadsad"
     * }
     * ```
     * - holo
     * ```
     * {
     *   "accessId": "xsaxsaxs",
     *   "accessKey": "xsaxsaxsa",
     *   "database": "xsaxsaxsa",
     *   "instanceId": "xsaxa",
     *   "tag": "aliyun"
     * }
     * ```
     * - kafka
     * ```
     * {
     *   "instanceId": "xsax-cn-xsaxsa",
     *   "regionId": "cn-shanghai",
     *   "tag": "aliyun",
     *   "ownerId": "1212121212112"
     * }
     * ```
     * @example `{"database":"dbname","instanceName":"instancename","password":"password","rdsOwnerId":"123","username":"username"}`
     */
    "Content": string;
}
