export interface ModifyDataSourceDeployRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 机房
     * @example `vpc_hz_domain_1`
     */
    "deployName": string;
    /**
     * 数据源名称
     * @example `ha-cn-pl32rf0****_test_api`
     */
    "dataSourceName": string;
    /**
     * 索引全量版本
     * @example `1708674867`
     */
    "generationId"?: number;
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：-true 是 -false 否
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 数据源信息
         */
        storage: {
            /**
             * odps endpoint
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
             * @example `kubenest`
             */
            project: string;
            /**
             * 分区信息
             * @example `ds=20220713`
             */
            partition: string;
            /**
             * saro、odps相关
             * @example `item`
             */
            table: string;
            /**
             * saro相关
             * @example `dp-dev`
             */
            namespace: string;
            /**
             * hdfs相关
             * @example `/ude_jobs/iflow_offline_data_access`
             */
            path: string;
            /**
             * oss数据源相关
             * @example `/opensearch`
             */
            ossPath: string;
            /**
             * Bucket名称。
             * @example `test-bucket`
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
         * 扩展信息。
         */
        extend: {
            /**
             * saro数据源信息
             */
            saro: {
                /**
                 * 路径
                 * @example `/`
                 */
                path: string;
                /**
                 * 版本号
                 * @example `1`
                 */
                version: string;
            };
            /**
             * hdfs信息
             */
            hdfs: {
                /**
                 * hdfs数据源路径。
                 * @example `ymsh-service/src/main/java/cn/ymsh/util/jd`
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
                 * @example `oss://test`
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
             * @example `zk`
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
