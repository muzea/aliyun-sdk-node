export interface PutObjectTaggingRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * Object的完整路径。
     * @example `exampledir/exampleobject.txt`
     */
    "key": string;
    /**
     * 版本对应的ID。
     * @example `CAEQNRiBgMClj7qD0BYiIDQ5Y2QyMjc3NGZkODRlMTU5M2VkY2U3MWRiNGRh****`
     */
    "versionId"?: string;
    /**
     * 保存标签集合的请求体。
     */
    "body"?: {
        /**
         * 标签集合。
         */
        Tagging: any;
    };
}
