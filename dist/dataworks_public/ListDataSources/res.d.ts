export interface ListDataSourcesResponse {
    /**
     * 请求返回码。
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
     * 数据源的查询结果。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页显示的条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据源的总数。
         * @example `233`
         */
        TotalCount: number;
        /**
         * 数据源列表。
         */
        DataSources: {
            /**
             * 数据源的状态。取值如下：
             * - 1：表示数据源正常使用。
             * - 2：表示数据源已禁用。
             * @example `1`
             */
            Status: number;
            /**
             * 数据源关联的工作空间ID。
             * @example `123`
             */
            ProjectId: number;
            /**
             * 数据源的子类型。仅当DataSourceType参数配置为RDS时，该参数生效。
             * @example `mysql`
             */
            SubType: string;
            /**
             * 修改数据源的时间。时间格式示例为Mar 17, 2021 4:09:32 PM。
             * @example `Mar 17, 2021 4:09:32 PM`
             */
            GmtModified: string;
            /**
             * 数据源所在的环境。取值如下：
             * - 0：开发环境。
             * - 1：生产环境。
             * @example `1`
             */
            EnvType: number;
            /**
             * 数据源的状态。取值如下：
             * - 1：表示数据源正常使用。
             * - 2：表示数据源已禁用。
             * @example `1`
             */
            ConnectStatus: number;
            /**
             * 排序字段。数据源按此字段从大到小排序。
             * @example `300`
             */
            Sequence: number;
            /**
             * 数据源的描述信息。
             * @example `a connection`
             */
            Description: string;
            /**
             * 数据源的类型。常用类型如下：
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
            DataSourceType: string;
            /**
             * 创建数据源的时间。时间格式示例为Mar 17, 2021 4:09:32 PM。
             * @example `Mar 17, 2021 4:09:32 PM`
             */
            GmtCreate: string;
            /**
             * 数据源关联的引擎是否为同类型数据源选用的默认引擎。
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
             * 数据连接串的相关信息。格式为JSON格式。常用的数据源对应的连接串样例如下：
             * - MaxCompute
             *   ```
             *   {
             *     "pubEndpoint": "http://service.cn.maxcompute.aliyun.com/api",
             *     "accessId": "xxxxxxx",
             *     "securityToken": null,
             *     "endpoint": "http://service.cn.maxcompute.aliyun-inc.com/api",
             *     "accessKey": "***",
             *     "name": "PRE_PROJECT_A_engine",
             *     "project": "PRE_PROJECT_A",
             *     "vpcEndpoint": "http://service.cn.maxcompute.aliyun-inc.com/api",
             *     "region": "cn-shanghai",
             *     "authType": "2"
             *   }
             *   ```
             * - mysql
             *   ```
             *   {
             *     "configType": "1",
             *     "database": "mysql_d111b",
             *     "instanceName": "rm-xxxxxx",
             *     "password": "***",
             *     "rdsOwnerId": "12133xxxxxx",
             *     "tag": "rds",
             *     "username": "mysql_db111"
             *   }
             *   ```
             * - sqlserver
             *   ```
             *   {
             *     "configType": "1",
             *     "jdbcUrl": "jdbc:sqlserver://rm-xxxxx.sqlserver.rds.aliyuncs.com:1433;DatabaseName=sqlserver_db1",
             *     "password": "***",
             *     "tag": "public",
             *     "username": "sqlserver_db111"
             *   }
             *   ```
             * - oss
             *   ```
             *   {
             *     "accessId": "LTAINbR9Uxxxx",
             *     "accessKey": "***",
             *     "bucket": "bigxxx1223",
             *     "configType": "1",
             *     "endpoint": "http://oss-cn-hangzhou.aliyuncs.com",
             *     "tag": "public"
             *   }
             *   ```
             * - postgresql
             *   ```
             *   {
             *     "configType": "1",
             *     "database": "cdp_xxx",
             *     "instanceName": "rm-xxxx",
             *     "password": "***",
             *     "rdsOwnerId": "121xxxxx",
             *     "tag": "rds",
             *     "username": "cdp_xxx"
             *   }
             *   ```
             * - ads
             *   ```
             *   {
             *     "configType": "1",
             *     "password": "***",
             *     "schema": "ads_demo",
             *     "tag": "public",
             *     "url": "ads-xxx-xxxx.cn-hangzhou-1.ads.aliyuncs.com:3029",
             *     "username": "lslslsls"
             *   }
             *   ```
             * @example `{"pubEndpoint":"http://service.cn.maxcompute.aliyun.com/api","accessId":"TMP.3KecGjvzy3i8MYfn2BGHgF7EHGyBFZcHm7GgngrABVRyvvKQrfF5kskR36xP361C3dqwbGo7SGYptAeGyiTwHXqLaBUvYC","securityToken":null,"endpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","accessKey":"***","name":"PRE_PROJECT_A_engine","project":"PRE_PROJECT_A","vpcEndpoint":"http://service.cn.maxcompute.aliyun-inc.com/api","region":"cn-shanghai","authType":"2"}`
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
