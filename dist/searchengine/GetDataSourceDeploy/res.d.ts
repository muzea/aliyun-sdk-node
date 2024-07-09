export interface GetDataSourceDeployResponse {
    /**
     * requestId
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * Deploy
     */
    result: {
        /**
         * 数据源信息
         */
        storage: {
            /**
             * odps数据源的endpoint
             * @example `http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api`
             */
            endpoint: string;
            /**
             * odps数据源ak
             * @example `L***p`
             */
            accessKey: string;
            /**
             * odps数据源ak secret
             * @example `5**9a6`
             */
            accessSecret: string;
            /**
             * odps数据源项目名称
             * @example `wireless_1688_personal_rec`
             */
            project: string;
            /**
             * odps数据源分区。例如：ds=20180102
             * @example `ds=20220926`
             */
            partition: string;
            /**
             * saro、odps数据源表名
             * @example `behavior`
             */
            table: string;
            /**
             * saro相关
             * @example `lazada-campaign-flink`
             */
            namespace: string;
            /**
             * hdfs相关
             * @example `/beiming_xobject/dwd_xobjectsandbox__list_create_action_by_new/`
             */
            path: string;
            /**
             * oss数据源相关
             * @example `/opensearch/test.json`
             */
            ossPath: string;
            /**
             * oss bucket
             * @example `test-oss-bucket`
             */
            bucket: string;
        };
        /**
         * 是否开启自动全量
         * @example `true`
         */
        autoBuildIndex: boolean;
        /**
         * 进程参数
         */
        processor: {
            /**
             * 进程启动参数
             * @example `{
                "processInfos": [],
                "groupId": "opensearch",
                "containerConfigs": [],
                "priority": {
                    "minor_priority": 0,
                    "major_priority": 64
                }
            }`
             */
            args: string;
            /**
             * 资源信息
             * @example `[{
                "_bs_role": "processor.*.inc",
                "priority": {
                    "major_priority": 32,
                    "minor_priority": 0
                },
                "slotResources": [{
                    "slotResources": [{
                        "amount": 200,
                        "name": "cpu"
                    }, {
                        "amount": 8192,
                        "name": "mem"
                    }, {
                        "amount": 0,
                        "name": "T4"
                    }, {
                        "amount": 10,
                        "type": "SCALAR",
                        "name": "disk_ratio_9999"
                    }, {
                        "amount": 20480,
                        "type": "SCALAR",
                        "name": "disk_size_9999"
                    }]
                }]
            }]`
             */
            resource: string;
        };
        /**
         * 字段配置的扩展的内容
         * key: 向量字段(vector)、
         * 需embeding字段(embeding)
         */
        extend: {
            /**
             * saro数据源信息
             */
            saro: {
                /**
                 * hdfs数据源路径
                 * @example `dist-dmj-job/src/main/java`
                 */
                path: string;
                /**
                 * 版本号
                 * @example `0.6.0`
                 */
                version: string;
            };
            /**
             * hdfs信息
             */
            hdfs: {
                /**
                 * hdfs数据源路径
                 * @example `dist-dmj-job/src/main/java`
                 */
                path: string;
            };
            /**
             * odps数据源信息
             */
            odps: {
                /**
                 * 数据源的分区信息
                 */
                partitions: any;
            };
            /**
             * oss信息
             */
            oss: {
                /**
                 * oss数据源路径
                 * @example `oss://opensearch`
                 */
                path: string;
            };
        };
        /**
         * 增量swift信息
         */
        swift: {
            /**
             * zk
             * @example `test-zk`
             */
            zk: string;
            /**
             * topic
             * @example `ha-cn-pl32rf0****_test_api`
             */
            topic: string;
        };
    };
}
