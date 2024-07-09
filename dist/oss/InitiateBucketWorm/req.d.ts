export interface InitiateBucketWormRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 请求体。
     */
    "body"?: {
        /**
         * 初始化合规保留策略的配置。
         */
        InitiateWormConfiguration: any;
    };
}
