export interface DeleteBucketLifecycleRequest {
    /**
     * Bucket名称。
     * @example `test`
     */
    "BucketName": string;
    /**
     * 规则ID。不指定时，表示清空所有规则。
     * @example `1`
     */
    "RuleId"?: string;
}
