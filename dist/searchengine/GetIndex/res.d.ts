export interface GetIndexResponse {
    /**
     * id of request
     * @example `4FB0325E-8C37-5525-96AC-0333523170A3`
     */
    requestId: string;
    /**
     * 索引信息
     */
    result: {
        /**
         * 索引名称
         * @example `test_api`
         */
        name: string;
        /**
         * 版本信息
         */
        versions: {
            /**
             * 描述信息
             * @example `索引备注`
             */
            desc: string;
            /**
             * 所在位置
             */
            files: {
                /**
                 * 完整路径
                 * @example `/qrs.json
                `
                 */
                fullPathName: string;
                /**
                 * 是文件夹
                 * @example `true`
                 */
                isDir: boolean;
                /**
                 * 是模板
                 * @example `true`
                 */
                isTemplate: boolean;
                /**
                 * 文件名称
                 * @example `qrs.json`
                 */
                name: string;
            }[];
            /**
             * 版本名称
             * @example `test`
             */
            name: string;
            /**
             * 状态
             * - NEW：创建。
             * - PUBLISH：正常。
             * - IN_USE：使用中。
             * - NOT_USE：未使用。
             * - STOP_USE：停止使用中。
             * - RESTORE_USE：恢复使用中。
             * - FAIL：失败。
             * @example `PUBLISH`
             */
            status: string;
            /**
             * 更新时间
             * @example `1718846192`
             */
            updateTime: number;
            /**
             * 版本ID
             * @example `1`
             */
            versionId: number;
        }[];
        /**
         * 数据源
         * @example `ha-cn-pl32rf0****_test_api
        `
         */
        dataSource: string;
        /**
         * 数据源的部署名
         * @example `sz_vpc_domain_1`
         */
        domain: string;
        /**
         * 状态
         * - NEW：创建。
         * - PUBLISH：正常。
         * - IN_USE：使用中。
         * - NOT_USE：未使用。
         * - STOP_USE：停止使用中。
         * - RESTORE_USE：恢复使用中。
         * - FAIL：失败。
         * @example `IN_USE`
         */
        indexStatus: string;
        /**
         * 文件内容
         * @example `{"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}`
         */
        content: string;
        /**
         * 数据分片
         * @example `2`
         */
        partition: number;
        /**
         * 数据版本
         * @example `1688523414`
         */
        fullVersion: number;
        /**
         * 全量切换时间
         * @example `2024-06-20 08:52:54`
         */
        fullUpdateTime: string;
        /**
         * 增量更新时间
         * @example `2024-06-20 08:52:54`
         */
        incUpdateTime: string;
        /**
         * 索引大小
         * @example `4689`
         */
        indexSize: number;
        /**
         * 备注
         * @example `备注`
         */
        description: string;
        /**
         * 数据源相关信息
         */
        dataSourceInfo: {
            /**
             * 数据更新资源数
             * @example `2`
             */
            processPartitionCount: number;
            /**
             * 数据源名
             * @example `ha-cn-pl32rf0****_test_api
            `
             */
            name: string;
            /**
             * 数据源类型 (odps, swift, saro, oss, unKnow)
             * @example `odps`
             */
            type: string;
            /**
             * 离线部署
             * @example `vpc_hz_domain_1`
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
                 * @example `tisplus_dev`
                 */
                project: string;
                /**
                 * ODPS Partition。例如：ds=20180102
                 * @example `ds=20220713`
                 */
                partition: string;
                /**
                 * saro、odps相关
                 * @example `dump_odps_demo`
                 */
                table: string;
                /**
                 * saro相关
                 * @example `TEST_dump_demo_sj_na61hunbu2_share_holo`
                 */
                namespace: string;
                /**
                 * hdfs相关
                 * @example `http://test_opensearch/sift_oss_test.data`
                 */
                path: string;
                /**
                 * oss数据源相关
                 * @example `/test_opensearch/sift_oss_test.data`
                 */
                ossPath: string;
                /**
                 * Bucket名称。
                 * @example `ha3test-oss`
                 */
                bucket: string;
            };
            /**
             * saro数据源配置
             */
            saroConfig: {
                /**
                 * saro数据源的namespace
                 * @example `TEST_dump_demo_sj_na61hunbu2_share_holo`
                 */
                namespace: string;
                /**
                 * saro数据表名称
                 * @example `llm`
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
         * 集群信息
         */
        cluster: any;
        /**
         * 配置信息
         */
        config: any;
        /**
         * 下次生效的配置
         */
        configWhenBuild: any;
    };
}
