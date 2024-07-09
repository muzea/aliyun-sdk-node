export interface PutBucketRefererRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 保存Referer配置内容的请求体。
     */
    "body"?: {
        /**
         * 保存Referer配置内容的容器。
         */
        RefererConfiguration: any;
    };
}
