export interface PutBucketArchiveDirectReadRequest {
    /**
     * 存储空间名称。
     * @example `example-bucket
    `
     */
    "bucket": string;
    /**
     * 接口请求体。
     */
    "body"?: {
        /**
         * Bucket归档直读配置。
         */
        ArchiveDirectReadConfiguration: any;
    };
}
