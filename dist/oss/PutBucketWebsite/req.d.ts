export interface PutBucketWebsiteRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 保存静态网站配置的容器。
     */
    "body"?: {
        /**
         * 保存静态网站配置的容器。
         */
        WebsiteConfiguration: any;
    };
}
