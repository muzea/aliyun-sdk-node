export interface PutBucketLoggingRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 存储访问日志状态信息的请求体。
     */
    "body"?: {
        /**
         * 存储访问日志状态信息的容器。
         */
        BucketLoggingStatus: any;
    };
}
