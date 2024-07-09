export interface ExtendBucketWormRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 合规保留策略的ID。
     * > 如果指定用于延长Object保留天数对应的合规保留策略ID不存在，则返回404。
     * @example `1666E2CFB2B3418****`
     */
    "wormId": string;
    /**
     * 保存合规保留策略的容器。
     */
    "body"?: {
        /**
         * 保存合规保留策略的容器。
         */
        ExtendWormConfiguration: any;
    };
}
