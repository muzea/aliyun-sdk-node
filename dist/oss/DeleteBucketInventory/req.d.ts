export interface DeleteBucketInventoryRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 删除的清单任务Id。
     * @example `list1`
     */
    "inventoryId": string;
}
