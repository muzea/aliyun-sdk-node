export interface PutBucketHttpsConfigRequest {
    /**
     * 存储空间名称
     * @example `test-bucket`
     */
    "bucket": string;
    /**
     * 保存HTTPS配置的请求体。
     */
    "body"?: {
        /**
         * 保存HTTPS配置的容器。
         */
        HttpsConfiguration: any;
    };
}
