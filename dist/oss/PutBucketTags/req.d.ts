export interface PutBucketTagsRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 设置Bucket TagSet的请求体。
     */
    "body"?: {
        /**
         * 设置Bucket TagSet的容器。
         */
        Tagging: any;
    };
}
