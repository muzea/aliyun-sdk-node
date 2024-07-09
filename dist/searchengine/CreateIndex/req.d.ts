export interface CreateIndexRequest {
    /**
     * 实例ID。
     * @example `ha-cn-2r42ppr****`
     */
    "instanceId": string;
    /**
     * 请求体参数。
     * @example `{}`
     */
    "body"?: {
        /**
         * 索引名称。
         * @example `index_1`
         */
        name: string;
        /**
         * 数据源名称。
         * @example `ha-cn-35t3n1y****_index_1`
         */
        dataSource: string;
        /**
         * 数据源机房。
         * @example `vpc_hz_domain_1`
         */
        domain: string;
        /**
         * 索引结构。
         * @example `{\"summarys\":{\"summary_fields\":[\"id\"]},\"indexs\":[{\"index_name\":\"index_id\",\"index_type\":\"PRIMARYKEY64\",\"index_fields\":\"id\",\"has_primary_key_attribute\":true,\"is_primary_key_sorted\":false}],\"attributes\":[\"id\"],\"fields\":[{\"field_name\":\"id\",\"field_type\":\"UINT16\"}],\"table_name\":\"index_2\"}`
         */
        content: string;
        /**
         * 数据分片数。
         * @example `2`
         */
        partition: number;
        /**
         * 数据源相关信息 （向量检索版新版本必填）。
         */
        dataSourceInfo: {
            /**
             * 追增量时间戳。
             * @example `1709715164`
             */
            dataTimeSec: number;
            /**
             * 数据更新资源数。
             * @example `4`
             */
            processPartitionCount: number;
            /**
             * 数据源名称。
             * @example `ha-cn-35t3n1y****_index_1`
             */
            name: string;
            /**
             * 数据源类型。取值：
             * - odps
             * - swift
             * - saro
             * - oss
             * @example `odps`
             */
            type: string;
            /**
             * 离线机房。
             * @example `vpc_hz_domain_1
            `
             */
            domain: string;
            /**
             * odps相关。
             */
            config: {
                /**
                 * odps数据源的Endpoint, oss数据源的Endpoint。
                 * @example `https://oss-cn-hangzhou.aliyuncs.com`
                 */
                endpoint: string;
                /**
                 * odps数据源AK。
                 * @example `L***p`
                 */
                accessKey: string;
                /**
                 * odps数据源AK Secret。
                 * @example `5**9a6`
                 */
                accessSecret: string;
                /**
                 * odps数据源项目名称。
                 * @example `bbt_algo_pai`
                 */
                project: string;
                /**
                 * 数据源为odps时必填。
                 * @example `ds=20230114`
                 */
                partition: string;
                /**
                 * 表名称。
                 * @example `bbt_rec_swing_u2i2i_score_be_v1`
                 */
                table: string;
                /**
                 * 命名空间。
                 * @example `test-namespace`
                 */
                namespace: string;
                /**
                 * hdfs数据源路径。
                 * @example `test-hdfs-path`
                 */
                path: string;
                /**
                 * oss文件路径。
                 * @example `/opensearch/oss.json`
                 */
                ossPath: string;
                /**
                 * oss bucket。
                 * @example `test-bucket`
                 */
                bucket: string;
            };
            /**
             * saro数据源配置。
             */
            saroConfig: {
                /**
                 * saro数据源的namespace。
                 * @example `目前仅在内网支持`
                 */
                namespace: string;
                /**
                 * saro数据表名称。
                 * @example `目前仅在内网支持`
                 */
                tableName: string;
            };
            /**
             * 是否开启自动全量。
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
         * 字段配置的扩展内容。key: 向量字段(vector)、需embeding字段（embeding）。
         * @example `{
                "vector":
                [
                    "source_image_vector"
                ],
                "embeding":
                [
                    "source_image"
                ],
                "description":
                []
            }`
         */
        extend: any;
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
    };
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：
     * - true：是。
     * - false：否。
     * @example `true`
     */
    "dryRun"?: boolean;
}
