export interface PutBucketRequestPaymentRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 配置请求者付费的请求体。
     */
    "body"?: {
        /**
         * 保存请求者付费配置的容器。
         */
        RequestPaymentConfiguration: any;
    };
}
