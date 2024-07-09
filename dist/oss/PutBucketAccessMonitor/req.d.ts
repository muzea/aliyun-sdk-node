export interface PutBucketAccessMonitorRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 修改访问跟踪状态配置的请求体。
     */
    "body"?: {
        /**
         * 保存Bucket的访问跟踪状态配置信息的容器。
         */
        AccessMonitorConfiguration: any;
    };
}
