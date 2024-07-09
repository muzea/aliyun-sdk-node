export interface PutBucketEncryptionRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 配置服务器端加密规则的请求体。
     */
    "body"?: {
        /**
         * 服务器端加密规则的容器。
         */
        ServerSideEncryptionRule: any;
    };
}
