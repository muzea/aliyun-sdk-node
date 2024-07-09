export interface ModifyIndexRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 索引名称
     * @example `test_api`
     */
    "indexName": string;
    /**
     * 是否校验入参数据合法性，默认false。
     * 取值：
     * - **true**：只校验参数合法性。
     * - **false**：校验参数合法性，创建归因配置。
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * 数据源相关信息 （向量检索版新版本必填）
         */
        dataSourceInfo: {
            /**
             * 索引重建方式 (api: API方式推送数据源, indexRecover: 从索引中恢复数据源)
             * @example `api`
             */
            buildMode: string;
            /**
             * 从索引中恢复数据源，dump表的generation
             * @example `1718698593`
             */
            generation: number;
            /**
             * 追增量时间戳
             * @example `1709715164`
             */
            dataTimeSec: number;
            /**
             * 数据更新资源数
             * @example `4`
             */
            processPartitionCount: number;
            /**
             * 数据源名
             * @example `ha-cn-pl32rf0****_index_1`
             */
            name: string;
            /**
             * 数据源类型 (odps, swift, saro, oss, unKnow)
             * @example `odps`
             */
            type: string;
            /**
             * 离线部署
             * @example `vpc_hz_domain_1
            `
             */
            domain: string;
            /**
             * odps 数据源配置
             */
            config: {
                /**
                 * odps相关
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
                 * @example `bbt_algo_pai`
                 */
                project: string;
                /**
                 * ODPS Partition。例如：ds=20180102。
                 * @example `ds=20230114`
                 */
                partition: string;
                /**
                 * saro、odps相关
                 * @example `item`
                 */
                table: string;
                /**
                 * saro相关
                 * @example `test-namespace`
                 */
                namespace: string;
                /**
                 * hdfs相关
                 * @example `test-hdfs-path`
                 */
                path: string;
                /**
                 * oss数据源相关
                 * @example `/opensearch/oss.json`
                 */
                ossPath: string;
                /**
                 * OSS存储空间。
                 * @example `test-bucket`
                 */
                bucket: string;
            };
            /**
             * saro数据源配置
             */
            saroConfig: {
                /**
                 * saro数据源的namespace
                 * @example `flink-test-fjx-default`
                 */
                namespace: string;
                /**
                 * saro数据表名称
                 * @example `device_event_shy_summary_`
                 */
                tableName: string;
            };
            /**
             * 是否开启自动全量
             * @example `true`
             */
            autoBuildIndex: boolean;
            /**
             * 全量process并发数
             * @example `2`
             */
            processParallelNum: number;
        };
        /**
         * 描述信息。
         * @example `"测试"`
         */
        description: string;
        /**
         * 文件内容
         * @example `{\"summarys\":{\"summary_fields\":[\"id\"]},\"indexs\":[{\"index_name\":\"index_id\",\"index_type\":\"PRIMARYKEY64\",\"index_fields\":\"id\",\"has_primary_key_attribute\":true,\"is_primary_key_sorted\":false}],\"attributes\":[\"id\"],\"fields\":[{\"field_name\":\"id\",\"field_type\":\"UINT16\"}],\"table_name\":\"index_2\"}`
         */
        content: string;
        /**
         * 数据分片
         * @example `2`
         */
        partition: number;
        /**
         * 数据源
         * @example `ha-cn-pl32rf0****_index_1`
         */
        dataSource: string;
        /**
         * 数据源部署
         * @example `vpc_hz_domain_1`
         */
        domain: string;
        /**
         * 全量build并发数
         * @example `2`
         */
        buildParallelNum: number;
        /**
         * 全量merge并发数
         * @example `2`
         */
        mergeParallelNum: number;
        /**
         * 集群信息
         */
        cluster: any;
        /**
         * cluster.json文件名
         * @example `ha-cn-pl32rf0****@a-cn-pl32rf0****_test_api@hz_pre_vpc_domain_1@test_api@index_config_v1`
         */
        clusterConfigName: string;
        /**
         * 离线配置信息
         */
        config: any;
        /**
         * 推送配置方式: 默认仅推送配置
         * @example `PUSH_ONLY`
         */
        pushMode: string;
    };
}
