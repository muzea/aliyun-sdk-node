export interface PutBucketCorsRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 设置跨域资源共享规则的请求体。
     */
    "body"?: {
        /**
         * 保存Bucket的CORS规则容器。
         */
        CORSConfiguration: any;
    };
}
