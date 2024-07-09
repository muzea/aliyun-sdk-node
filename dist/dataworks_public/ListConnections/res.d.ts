export interface ListConnectionsResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `0bc14115159376359****`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 连接串的分页查询结果。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数，默认为10条，最大100条。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据源的总数。
         * @example `3`
         */
        TotalCount: number;
        /**
         * 连接串列表。
         */
        Connections: {
            /**
             * 数据源的状态。
             * - 1 正常
             * - 2 禁用
             * @example `1`
             */
            Status: number;
            /**
             * 数据源的类型。常用类型枚举如下：
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
             * @example `mysql`
             */
            ConnectionType: string;
            /**
             * 数据源关联的工作空间ID。
             * @example `123`
             */
            ProjectId: number;
            /**
             * 数据源的子类型。针对某些父类型type中包含子类型的场景。目前有以下组合：
             * - 父类型：`rds`
             * - 子类型：`mysql`、`sqlserver`或`postgresql`。
             * @example `mysql`
             */
            SubType: string;
            /**
             * 修改数据源的时间。时间格式示例为Mar 17, 2021 4:09:32 PM。
             * @example `Mar 17, 2021 4:09:32 PM`
             */
            GmtModified: string;
            /**
             * 数据源所在的环境。
             * - 0  开发环境
             * - 1 生产环境
             * @example `1`
             */
            EnvType: number;
            /**
             * 数据源的状态。
             * - 1  正常
             * - 2 禁用
             * @example `1`
             */
            ConnectStatus: number;
            /**
             * 排序字段。数据源按此字段从大到小排序。
             * @example `300`
             */
            Sequence: number;
            /**
             * 描述数据源。
             * @example `a connection`
             */
            Description: string;
            /**
             * 创建数据源的时间。时间格式示例为Mar 17, 2021 4:09:32 PM。
             * @example `Mar 17, 2021 4:09:32 PM`
             */
            GmtCreate: string;
            /**
             * 数据源关联的引擎是否为同类型下的默认引擎。
             * @example `false`
             */
            DefaultEngine: boolean;
            /**
             * 是否为共享的数据源。
             * @example `false`
             */
            Shared: boolean;
            /**
             * 最近一次修改数据源的阿里云用户ID。
             * @example `193543050****`
             */
            Operator: string;
            /**
             * 数据源的名称。
             * @example `abc`
             */
            Name: string;
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
             * @example `{\"database\":\"xxx\",\"instanceName\":\"xxx\",\"password\":\"xxx\",\"rdsOwnerId\":\"xxx\",\"tag\":\"rds\",\"username\":\"xxx\"}`
             */
            Content: string;
            /**
             * 数据源ID。
             * @example `1`
             */
            Id: number;
            /**
             * 数据源关联的计算引擎ID。
             * @example `123`
             */
            BindingCalcEngineId: number;
            /**
             * 租户ID。
             * @example `1234567`
             */
            TenantId: number;
        }[];
    };
}
