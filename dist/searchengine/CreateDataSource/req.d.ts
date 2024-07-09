export interface CreateDataSourceRequest {
    /**
     * 实例ID
     * @example `ha-cn-pl32rf0****`
     */
    "instanceId": string;
    /**
     * 是否dryRun创建（仅校验数据源是否合法）。取值：-true 是 -false 否
     * @example `true`
     */
    "dryRun"?: boolean;
    /**
     * 请求结构。
     * @example `{}`
     */
    "body"?: {
        /**
         * 数据源名称
         * @example `ha-cn-pl32rf0****_test_api`
         */
        name: string;
        /**
         * 数据源类型：odps、oss、swift
         * @example `odps`
         */
        type: string;
        /**
         * 数据源机房
         * @example `vpc_hz_domain_1`
         */
        domain: string;
        /**
         * 配置信息
         */
        config: {
            /**
             * odps数据源的endpoint 或者 oss数据源的endpoint
             * @example `http://service.cn-hangzhou.maxcompute.aliyun-inc.com/api`
             */
            endpoint: string;
            /**
             * odps数据源ak
             * @example `L***p`
             */
            accessKey: string;
            /**
             * odps数据源as
             * @example `5**9a6`
             */
            accessSecret: string;
            /**
             * odps数据源项目名称
             * @example `kubenest`
             */
            project: string;
            /**
             * odps分区
             * @example `ds=20220713`
             */
            partition: string;
            /**
             * odps表名称
             * @example `item`
             */
            table: string;
            /**
             * 命名空间
             * @example `aegis-ops`
             */
            namespace: string;
            /**
             * hdfs文件路径
             * @example `test-hdfs-path
            `
             */
            path: string;
            /**
             * oss文件路径
             * @example `/opensearch/search`
             */
            ossPath: string;
            /**
             * oss bucket
             * @example `opensearch`
             */
            bucket: string;
        };
        /**
         * saro数据源配置
         */
        saroConfig: {
            /**
             * saro数据源的namespace
             * @example `igraph-cn-x0r3e3abe02`
             */
            namespace: string;
            /**
             * saro数据表名称
             * @example `index_hdfs`
             */
            tableName: string;
        };
        /**
         * 自动重建索引
         * @example `true`
         */
        autoBuildIndex: boolean;
    };
}
