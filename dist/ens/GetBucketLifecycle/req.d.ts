export interface GetBucketLifecycleRequest {
    /**
     * Bucket名称。
     * @example `tese`
     */
    "BucketName": string;
    /**
     * 需要获取的规则ID。不设置时，获取所有规则信息。
     * @example `1`
     */
    "RuleId"?: string;
}
