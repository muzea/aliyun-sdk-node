export interface UpdateDataSourceRequest {
    /**
     * 数据源的描述信息。
     * @example `xxx`
     */
    "Description"?: string;
    /**
     * 数据源所在的环境。取值如下：
     * - 0：开发环境。
     * - 1：生产环境。
     * @example `1`
     */
    "EnvType"?: number;
    /**
     * 需要修改的目标数据源的详细信息。
     * 不支持修改数据源的类型，例如，您不可以修改odps类型的数据源为MySQL类型。
     * 部分常用数据源的信息样例如下：
     * - odps
     *   ```
     *   {
     *     "accessId": "xssssss",
     *     "accessKey": "xsaxsaxsa",
     *     "authType": 2,
     *     "endpoint": "http://service.odps.aliyun.com/api",
     *     "project": "xsaxsax",
     *     "tag": "public"
     *   }
     *   ```
     * - mysql
     *   ```
     *   {
     *     "database": "xsaxsa",
     *     "instanceName": "rm-xsaxsa",
     *     "password": "xsaxsa",
     *     "rdsOwnerId": "xasxsa",
     *     "regionId": "cn-shanghai",
     *     "tag": "rds",
     *     "username": "xsaxsa"
     *   }
     *   ```
     * - rds
     *   ```
     *   {
     *     "configType": 1,
     *     "tag": "rds",
     *     "database": "xsaxsa",
     *     "username": "xsaxsa",
     *     "password": "xssaxsa$32050",
     *     "instanceName": "rm-xsaxs",
     *     "rdsOwnerId": "11111111"
     *   }
     *   ```
     * - oss
     *   ```
     *   {
     *     "accessId": "sssssxx",
     *     "accessKey": "xsaxaxsaxs",
     *     "bucket": "xsa-xs-xs",
     *     "endpoint": "http://oss-cn-shanghai.aliyuncs.com",
     *     "tag": "public"
     *   }
     *   ```
     * - sqlserver
     *   ```
     *   {
     *     "jdbcUrl": "jdbc:sqlserver://xsaxsa-xsaxsa.database.xxx.cn:123;DatabaseName=xsxs-xsxs",
     *     "password": "sdasda$fs",
     *     "tag": "public",
     *     "username": "sxaxacdacdd"
     *   }
     *   ```
     * - polardb
     *   ```
     *   {
     *     "clusterId": "pc-sdadsadsa",
     *     "database": "dsadsadsa",
     *     "ownerId": "121212122",
     *     "password": "sdasdafssa",
     *     "region": "cn-shanghai",
     *     "tag": "polardb",
     *     "username": "asdadsads"
     *   }
     *   ```
     * - oracle
     *   ```
     *   {
     *     "jdbcUrl": "jdbc:oracle:saaa:@xxxxx:1521:PROD",
     *     "password": "sxasaxsa",
     *     "tag": "public",
     *     "username": "sasfadfa"
     *   }
     *   ```
     * - mongodb
     *   ```
     *   {
     *     "address": "[\"xsaxxsa.mongodb.rds.aliyuncs.com:3717\"]",
     *     "database": "admin",
     *     "password": "sadsda@",
     *     "tag": "public",
     *     "username": "dsadsadas"
     *   }
     *   ```
     * - emr
     *   ```
     *   {
     *     "accessId": "xsaxsa",
     *     "emrClusterId": "C-dsads",
     *     "emrResourceQueueName": "default",
     *     "emrEndpoint": "emr.aliyuncs.com",
     *     "accessKey": "dsadsad",
     *     "emrUserId": "224833315798889783",
     *     "name": "sasdsadsa",
     *     "emrAccessMode": "simple",
     *     "region": "cn-shanghai",
     *     "authType": "2",
     *     "emrProjectId": "FP-sdadsad"
     *   }
     *   ```
     * - postgresql
     *   ```
     *   {
     *     "jdbcUrl": "jdbc:postgresql://xxxx:1921/ssss",
     *     "password": "sdadsads",
     *     "tag": "public",
     *     "username": "sdsasda"
     *   }
     *   ```
     * - analyticdb_for_mysql
     *   ```
     *   {
     *     "instanceId": "am-sadsada",
     *     "database": "xsxsx",
     *     "username": "xsxsa",
     *     "password": "asdadsa",
     *     "connectionString": "am-xssxsxs.ads.aliyuncs.com:3306"
     *   }
     *   ```
     * - hybriddb_for_postgresql
     *   ```
     *   {
     *     "connectionString": "gp-xsaxsaxa-master.gpdbmaster.rds.aliyuncs.com",
     *     "database": "xsaxsaxas",
     *     "password": "xsaxsaxsa@11",
     *     "instanceId": "gp-xsaxsaxsa",
     *     "port": "541132",
     *     "ownerId": "xsaxsaxsas",
     *     "username": "sadsad"
     *   }
     *   ```
     * - holo
     *   ```
     *   {
     *     "accessId": "xsaxsaxs",
     *     "accessKey": "xsaxsaxsa",
     *     "database": "xsaxsaxsa",
     *     "instanceId": "xsaxa",
     *     "tag": "aliyun"
     *   }
     *   ```
     * - kafka
     *   ```
     *   {
     *     "instanceId": "xsax-cn-xsaxsa",
     *     "regionId": "cn-shanghai",
     *     "tag": "aliyun",
     *     "ownerId": "1212121212112"
     *   }
     *   ```
     * @example `{"accessId":"xssssss","accessKey":"xsaxsaxsa","authType":2,"endpoint":"http://service.odps.aliyun.com/api","project":"xsaxsax","tag":"public"}`
     */
    "Content"?: string;
    /**
     * 数据源的状态。该字段已废弃，请勿使用。
     * @example `ENABLED`
     */
    "Status"?: string;
    /**
     * 需要更新的数据源ID，您可以调用[ListDataSources](~~2780072~~)获取数据源的ID。
     * @example `1`
     */
    "DataSourceId": number;
}
