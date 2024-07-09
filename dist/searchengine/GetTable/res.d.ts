export interface GetTableResponse {
    /**
     * requestId
     * @example `2AE63638-5420-56DC-BF59-37D8174039A0`
     */
    requestId: string;
    /**
     * 返回结果
     */
    result: {
        /**
         * 索引名
         * @example `test_oss`
         */
        name: string;
        /**
         * 索引表状态 (NEW, PUBLISH, IN_USE: 召回引擎版创建成功后为正常状态, NOT_USE, STOP_USE, RESTORE_USE, FAIL: 向量检索版新版本首次创建索引失败状态)
         * @example `IN_USE`
         */
        status: string;
        /**
         * 数据更新资源数
         * @example `1`
         */
        dataProcessorCount: number;
        /**
         * 数据分片数
         * @example `1`
         */
        partitionCount: number;
        /**
         * 数据源配置
         */
        dataSource: {
            /**
             * 数据源类型: 仅支持odps、swift、oss三种类型 (odps, swift, saro, oss, unKnow)
             * @example `odps`
             */
            type: string;
            /**
             * 追增量时间戳
             * @example `1715160176`
             */
            dataTimeSec: number;
            /**
             * 是否自动索引重建
             * @example `true`
             */
            autoBuildIndex: boolean;
            /**
             * 数据源配置
             */
            config: {
                /**
                 * odps相关
                 * @example `http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api`
                 */
                endpoint: string;
                /**
                 * AK
                 * @example `ak`
                 */
                accessKey: string;
                /**
                 * AS
                 * @example `as`
                 */
                accessSecret: string;
                /**
                 * odps数据源项目名称
                 * @example `dp_pdm_marketing_prod`
                 */
                project: string;
                /**
                 * 分区信息
                 * @example `ds=20220808`
                 */
                partition: string;
                /**
                 * saro、odps数据源表名
                 * @example `test_add`
                 */
                table: string;
                /**
                 * saro相关
                 * @example `namespace`
                 */
                namespace: string;
                /**
                 * hdfs相关
                 * @example `vendor/sebastian/comparator/src/exceptions`
                 */
                path: string;
                /**
                 * oss文件路径
                 * @example `/opensearch_index_data/sift_oss_test.data`
                 */
                ossPath: string;
                /**
                 * oss命名空间
                 * @example `heytea-ops-oss`
                 */
                bucket: string;
            };
        };
        /**
         * 如果用户传了rawSchema，则直接使用rawSchema作为ha3 schema结构，不用手动拼装
         * @example `{}`
         */
        rawSchema: string;
        /**
         * 主键字段
         * @example `id`
         */
        primaryKey: string;
        /**
         * 字段map集合, key: 字段名 value: 字段类型
         */
        fieldSchema: any;
        /**
         * 索引结构
         */
        vectorIndex: {
            /**
             * 索引结构名称
             * @example `test_odps`
             */
            indexName: string;
            /**
             * 向量字段
             * @example `source_image_vector`
             */
            vectorField: string;
            /**
             * 稀疏向量下标字段
             * @example `sparse_indices`
             */
            sparseIndexField: string;
            /**
             * 稀疏向量值字段
             * @example `sparse_values`
             */
            sparseValueField: string;
            /**
             * 向量维度
             * @example `128`
             */
            dimension: string;
            /**
             * 向量索引算法
             * @example `Qc`
             */
            vectorIndexType: string;
            /**
             * 距离类型
             * @example `SquaredEuclidean`
             */
            distanceType: string;
            /**
             * 命名空间字段
             * @example `namespace`
             */
            namespace: string;
            /**
             * 索引结构配置
             */
            advanceParams: {
                /**
                 * 索引构建参数
                 * @example `{
                  "proxima.qc.builder.quantizer_class": "Int8QuantizerConverter",
                  "proxima.qc.builder.quantize_by_centroid": true,
                  "proxima.qc.builder.optimizer_class": "BruteForceBuilder",
                  "proxima.qc.builder.thread_count": 10,
                  "proxima.qc.builder.optimizer_params": {
                    "proxima.linear.builder.column_major_order": true
                  },
                  "proxima.qc.builder.store_original_features": false,
                  "proxima.qc.builder.train_sample_count": 3000000,
                  "proxima.qc.builder.train_sample_ratio": 0.5
                }`
                 */
                buildIndexParams: string;
                /**
                 * 索引检索参数
                 * @example `{"proxima.qc.searcher.scan_ratio":0.01}`
                 */
                searchIndexParams: string;
                /**
                 * 召回候选集的个数最小值
                 * @example `20000`
                 */
                minScanDocCnt: string;
                /**
                 * 线性构建的阈值
                 * @example `5000`
                 */
                linearBuildThreshold: string;
            };
        }[];
        /**
         * 字段处理配置
         */
        dataProcessConfig: {
            /**
             * 字段处理方式 (copy: 将源字段拷贝至目标字段, vectorize: 使用模型对源字段进行向量化，向量存储在目标字段中)
             * @example `vectorize`
             */
            operator: string;
            /**
             * 目标字段
             * @example `source_image_vector`
             */
            dstField: string;
            /**
             * 源字段
             * @example `source_image`
             */
            srcField: string;
            /**
             * 配置模型信息
             */
            params: {
                /**
                 * 向量化模型
                 * @example `clip`
                 */
                vectorModel: string;
                /**
                 * 数据类型
                 * @example `image`
                 */
                vectorModal: string;
                /**
                 * 向量化信息来源
                 */
                srcFieldConfig: {
                    /**
                     * OSS区域地址。
                     * @example `oss-cn-hangzhou-internal.aliyuncs.com
                    `
                     */
                    ossEndpoint: string;
                    /**
                     * OSS Bucket
                     * @example `test`
                     */
                    ossBucket: string;
                    /**
                     * 云账号id
                     * @example `uid`
                     */
                    uid: string;
                };
            };
        }[];
    };
}
