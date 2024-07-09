export interface PutBucketInventoryRequest {
    /**
     * Bucket名称。
     * @example `examplebucket`
     */
    "bucket": string;
    /**
     * 配置的清单规则Id。
     * @example `report1`
     */
    "inventoryId": string;
    /**
     * 存储清单配置信息的请求体。
     */
    "body"?: {
        /**
         * 存储清单配置信息的容器。
         */
        InventoryConfiguration: any;
    };
}
