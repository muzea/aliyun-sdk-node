export interface ListCalcEnginesResponse {
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 请求是否成功，取值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 分页查询结果。
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
         * @example `1`
         */
        TotalCount: number;
        /**
         * 数据源列表。
         */
        CalcEngines: {
            /**
             * 数据源关联的工作空间名称。
             * @example `test_project`
             */
            BindingProjectName: string;
            /**
             * 是否为当前类型的默认数据源。
             * @example `true`
             */
            IsDefault: boolean;
            /**
             * 数据源ID。
             * @example `35`
             */
            EngineId: number;
            /**
             * 数据源关联的DataWorks工作空间所在的地域。
             * @example `cn-zhangjiakou`
             */
            DwRegion: string;
            /**
             * 数据源的访问身份。
             * - **USER**：当前用户。
             * - **PROJECT**：项目执行用户。
             * - **SUBACCOUNT**：子账号。
             * - **STS_ROLE**：STS角色。
             * @example `PROJECT`
             */
            TaskAuthType: string;
            /**
             * 数据源类型。
             * @example `ODPS`
             */
            CalcEngineType: string;
            /**
             * 数据源的详细信息。
             * - ODPS
             *   ```
             *   {
             *     "pubEndpoint": "service.cn.maxcompute.aliyun.com/api",
             *     "endpoint": "service.cn.maxcompute.aliyun-inc.com/api",
             *     "initProperties": "
             *     {\"odpsTypeMode\":\"STANDARD\",\"openPai\":false,\"openPaiGpu\":false}",
             *     "resourceGroupType": "ODPS",
             *     "resourceGroupId": "361826516****",
             *     "vpcEndpoint": "service.cn.maxcompute.aliyun-inc.com/api",
             *     "projectName": "onefall_test_zjk",
             *     "taskSameAsOwner": "true"
             *   }
             *   ```
             * - EMR
             *   ```
             *   {
             *     "emrClusterId": "C-xxx",
             *     "specs": "{\"emrClusterId\":\"C-xxx\",\"emrAccessMode\":\"simple\",\"emrResourceQueueName\":\"default\",\"emrProjectId\":\"FP-xxx\"}",
             *     "endpoint": "emr.aliyuncs.com",
             *     "emrResourceQueueName": "default",
             *     "emrAccessMode": "simple",
             *     "resourceGroupType": "DW",
             *     "projectName": "xx-xxxx",
             *     "emrProjectId": "FP-xxxx",
             *     "taskSameAsOwner": "false"
             *   }
             *   ```
             * - BLINK
             *   ```
             *   {
             *     "bayesProjectId": "xxxx",
             *     "bayesProjectName": "xc_blxxixxxnk_1",
             *     "cluster": "xxxssxsx",
             *     "endpoint": "https://stream.console.aliyun.com",
             *     "engineType": "BLINK",
             *     "name": "xsxsxxxxx",
             *     "projectName": "xc_blxxxsxink_1",
             *     "queue": "root.xc_blxsxxxxxxink_1",
             *     "resourceGroupType": "DW",
             *     "specs": "{\"cluster\":\"xxxxxx\",\"bayesProjectName\":\"xc_blxxixxxnk_1\",\"bayesProjectId\":\"ssxxxsa\",\"name\":\"sxsxsxxx\",\"queue\":\"root.sxxsxxsx\"}",
             *     "taskSameAsOwner": false
             *   }
             *   ```
             * - HOLO
             *   ```
             *   {
             *     "endpoint": "hgprecn-cn-xsxssxsx-cn-shanghai-internal.hologres.aliyuncs.com:80",
             *     "engineType": "ODPS",
             *     "odpsEndpoint": "hgprecn-cn-xsxssxxs-cn-shanghai-internal.hologres.aliyuncs.com:80",
             *     "odpsProjectName": "xsxssxsxsx",
             *     "projectName": "xsxssxsxsx",
             *     "resourceGroupType": "DW",
             *     "specs": "{\"pubEndpoint\":\"hgprecn-cn-xsxssxsxs-cn-shanghai.hologres.aliyuncs.com:80\",\"commonBuyInstanceId\":\"hgprecn-cn-xsxsxsxs\",\"project\":\"holo_upxsxgrade1\",\"common_buy_instance_id\":\"hgprecn-cn-xsxsxs\",\"endpoint\":\"hgprecn-cn-xsxxsxs-cn-shanghai-internal.hologres.aliyuncs.com:80\",\"port\":\"80\",\"host\":\"hgprecn-cn-xsxsxsxs-cn-shanghai-internal.hologres.aliyuncs.com\",\"vpcEndpoint\":\"hgprecn-cn-xsxsxsxs-cn-shanghai-vpc.hologres.aliyuncs.com:80\",\"authType\":2,\"region\":\"cn-shanghai\"}",
             *     "taskSameAsOwner": false
             *   }
             *   ```
             * - MaxGraph
             *   ```
             *   {
             *     "endpoint": "http://pre-graphcompute.aliyuncs.com",
             *     "engineType": "ODPS",
             *     "odpsEndpoint": "http://pre-graphcompute.aliyuncs.com",
             *     "odpsProjectName": "xsxsxsxs",
             *     "projectName": "xsxsxsxs",
             *     "resourceGroupType": "DW",
             *     "taskSameAsOwner": false
             *   }
             *   ```
             * - HYBRIDDB_FOR_POSTGRESQL
             *   ```
             *   {
             *     "endpoint": "hybriddb_for_postgresql_mo12121ck_endpoint",
             *     "engineType": "ODPS",
             *     "odpsEndpoint": "hybriddb_for_postgresql_m121212ock_endpoint",
             *     "odpsProjectName": "sxasaxsaxaxas",
             *     "projectName": "sxasaxsaxaxas",
             *     "resourceGroupType": "DW",
             *     "specs": "{\"connectionString\":\"gp-xsxsxsxxs.gpdb.rds.aliyuncs.com\",\"database\":\"xsxsxxsxs\",\"password\":\"xxxxxxx\",\"instanceId\":\"gp-cdcdacdacda\",\"port\":\"3432\",\"ownerId\":\"12121212\",\"username\":\"sdasaddsa\"}",
             *     "taskSameAsOwner": false
             *   }
             *   ```
             * - ADB_MYSQL
             *   ```
             *   {
             *     "endpoint": "adb_mysql_mock_endpoint",
             *     "engineType": "ODPS",
             *     "odpsEndpoint": "adb_mysql_mock_endpoint",
             *     "odpsProjectName": "am-xsaxaxa",
             *     "projectName": "am-xsxsaxa",
             *     "resourceGroupType": "DW",
             *     "specs": "{\"connectionString\":\"am-xsaxsa.ads.aliyuncs.com:3306\",\"database\":\"xsaxsaxa\",\"password\":\"xsaxsaxassxsa\",\"instanceId\":\"am-xsaxsasx\",\"username\":\"xsaxsadsd\"}",
             *     "taskSameAsOwner": false
             *   }
             *   ```
             * - HADOOP_CDH
             *   ```
             *   {
             *     "bindingBaseId": "xsaxsaxs",
             *     "endpoint": "xsaaaaa",
             *     "engineType": "ODPS",
             *     "odpsEndpoint": "axsxaxssxs",
             *     "odpsProjectName": "ssxxax",
             *     "projectName": "xsaxsaxsa",
             *     "resourceGroupId": 45208xxxxxx,
             *     "resourceGroupType": "GATEWAY",
             *     "specs": "{\"cluster\":{\"hive\":{\"hiveServer2Url\":\"jdbc:hive2://xxxxxxer-1-cn-shanghai-pre-kerberos-1:10000\",\"hiveMetastore\":\"thrift://xxxxxxxr-1-cn-shanghai-pre-kerberos-1:9083\",\"version\":\"2.1.1\"},\"configFiles\":{\"coreSite\":\"4534574xxxxxx\",\"hdfsSite\":\"453457919xxxxxxx\",\"mapredSite\":\"45345750xxxxxx\",\"yarnSite\":\"4534575xxxxx\",\"krb5Conf\":\"4534576xxxxx1\",\"hiveSite\":\"453457xxxxx20\"},\"spark\":{\"version\":\"2.4.0\"},\"cdh\":{\"version\":\"6.3.2\"},\"hdfs\":{\"version\":\"3.0.0\"},\"impala\":{\"impalaUrl\":\"jdbc:impala://cdh-xsxssxxsx-1-cn-shanghai-pre-kerberos-1:21050\",\"version\":\"3.2.0\"},\"yarn\":{\"YarnUrl\":\"http://cdh-xsxsxsxsxs-1-cn-shanghai-pre-kerberos-1:8032\",\"webUrl\":\"http://cdh-xsxsxssxxssx-1-cn-shanghai-pre-kerberos-1:8088\",\"version\":\"3.0.0\"},\"presto\":{\"prestoUrl\":\"jdbc:presto://cdh-xssxsxxsxsxs-1-cn-shanghai-pre-kerberos-1:8080/hive/default\",\"version\":\"0.244.1\"}},\"instanceId\":161sdads733,\"authDetail\":{\"principal\":\"hive@HADOOP.COM\",\"keytabFileId\":\"45345815xsxsxs3\",\"type\":\"kerberos\",\"username\":\"xsxsxsxsa@HADOOP.COM\"},\"resGroupStatus\":\"\",\"hadoopAuthType\":\"kerberos\",\"clusterIdentifier\":\"xssxsxsxsx\",\"clusterId\":xsxsx,\"resGroupId\":4520870619xsxssxxs,\"accessMode\":\"security\",\"authType\":2}",
             *     "taskSameAsOwner": false
             *   }
             *   ```
             * @example `{
                "pubEndpoint": "service.cn.maxcompute.aliyun.com/api",
                "endpoint": "service.cn.maxcompute.aliyun-inc.com/api",
                "initProperties": " {\"odpsTypeMode\":\"STANDARD\",\"openPai\":false,\"openPaiGpu\":false}",
                "resourceGroupType": "ODPS",
                "resourceGroupId": "361826516****",
                "vpcEndpoint": "service.cn.maxcompute.aliyun-inc.com/api",
                "projectName": "onefall_test_zjk",
                "taskSameAsOwner": "true"
            }`
             */
            EngineInfo: any;
            /**
             * 数据源所在的环境。
             * - **DEV**：开发环境。
             * - **PRD**：生产环境。
             * @example `PRD`
             */
            EnvType: string;
            /**
             * 数据源所在的地域。
             * @example `cn-zhangjiakou`
             */
            Region: string;
            /**
             * 数据源的创建时间。
             * @example `Oct 10, 2019 3:42:44 PM`
             */
            GmtCreate: string;
            /**
             * 数据源所在的工作空间ID。
             * @example `466230`
             */
            BindingProjectId: number;
            /**
             * 数据源的显示名称。
             * @example `test_mc`
             */
            Name: string;
            /**
             * 租户ID。
             * @example `1234567`
             */
            TenantId: number;
        }[];
    };
}
