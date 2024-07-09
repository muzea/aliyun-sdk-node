export interface GetBucketInventoryRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 查询的清单规则Id。
     * @example `list1`
     */
    "inventoryId": string;
}
