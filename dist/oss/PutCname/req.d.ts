export interface PutCnameRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 保存Cname配置的请求体。
     */
    "body"?: {
        /**
         * 保存Cname配置的容器。
         */
        BucketCnameConfiguration: any;
    };
}
