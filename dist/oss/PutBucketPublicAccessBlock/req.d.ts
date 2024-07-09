export interface PutBucketPublicAccessBlockRequest {
    /**
     * Bucket名称。
     * @example `exmaplebucket`
     */
    "bucket"?: string;
    /**
     * 接口请求体参数。
     */
    "body"?: {
        /**
         * 保存阻止公共访问配置信息的容器。
         */
        PublicAccessBlockConfiguration: any;
    };
}
