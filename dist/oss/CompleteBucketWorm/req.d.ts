export interface CompleteBucketWormRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 合规保留策略的ID。
     * @example `1666E2CFB2B3418****`
     */
    "wormId": string;
}
