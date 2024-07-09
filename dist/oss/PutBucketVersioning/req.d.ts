export interface PutBucketVersioningRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 保存版本控制配置容器。
         */
        VersioningConfiguration: any;
    };
}
