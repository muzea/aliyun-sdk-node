export interface PutBucketRtcRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 保存RTC配置规则的请求体。
     */
    "body"?: {
        /**
         * 保存RTC配置规则的容器。
         */
        ReplicationRule: any;
    };
}
