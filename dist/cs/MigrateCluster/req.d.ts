export interface MigrateClusterRequest {
    /**
     * 集群ID。
     * @example `c21e0591548ba4c10bdb535d6572b****`
     */
    "cluster_id": string;
    /**
     * 请求体参数
     */
    "body"?: {
        /**
         * Bucket名称。
         * @example `bucket-****`
         */
        oss_bucket_name: string;
        /**
         * Bucket访问端点。
         * @example `*******.oss-cn-hangzhou.aliyuncs.com`
         */
        oss_bucket_endpoint: string;
    };
}
