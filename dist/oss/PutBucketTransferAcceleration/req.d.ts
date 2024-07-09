export interface PutBucketTransferAccelerationRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 传输加速配置的请求体。
     */
    "body"?: {
        /**
         * 传输加速配置的容器。
         */
        TransferAccelerationConfiguration: any;
    };
}
