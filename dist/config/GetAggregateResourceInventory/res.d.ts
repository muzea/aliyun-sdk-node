export interface GetAggregateResourceInventoryResponse {
    /**
     * 请求ID。
     * @example `1A6D3604-EF1A-5798-A576-2A5FB855493C`
     */
    RequestId: string;
    /**
     * 全局资源下载清单信息。
     */
    ResourceInventory: {
        /**
         * 全局资源清单下载地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/RESOURCE_INVENTORY/100931896542****​/100931896542****-RESOURCE_INVENTORY-202306251432.csv?Expires=1687678374&OSSAccessKeyId=STS.NUQ2xAAne87hVWG8WGx5f***&Signature=xudDN69simKLcCOguj5%2FgrWIw%2FM%3D&security-token=CAISiQJ1q6Ft5B2yfSjIr5bkecL1r****`
         */
        DownloadUrl: string;
        /**
         * 全局资源下载清单的生成状态。取值：
         * - CREATING：生成中。
         * - COMPLETE：生成完成。
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 生成全局资源下载清单的时间戳。
         * 单位：毫秒。
         * @example `1687674774123`
         */
        ResourceInventoryGenerateTime: number;
    };
}
