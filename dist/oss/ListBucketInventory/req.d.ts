export interface ListBucketInventoryRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 指定List操作需要从此token开始。您可从ListBucketInventory结果中的NextContinuationToken获取此token。
     * @example `first`
     */
    "continuation-token"?: string;
}
