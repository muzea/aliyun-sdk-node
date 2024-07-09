export interface GetResourceInventoryResponse {
    /**
     * 请求ID。
     * @example `89E2F38F-4EE4-545A-BD56-92E007ECFEE9`
     */
    RequestId: string;
    /**
     * 全局资源下载清单信息。
     */
    ResourceInventory: {
        /**
         * 全局资源清单下载地址。
         * @example `https://cloud-config-compliance-report.oss-cn-shanghai.aliyuncs.com/RESOURCE_INVENTORY/100931896542****​/100931896542****-RESOURCE_INVENTORY-202306251435.csv?Expires=1687678394&OSSAccessKeyId=STS.MNQ2xAAne86aVWG7WGx5f***&Signature=scdEN29shaKLcCOguj5%2FgrWIw%2FM%3D&security-token=BIASiQM1q3Ft5B2yfSjIr5bkedL7r****`
         */
        DownloadUrl: string;
        /**
         * 下载清单生成状态，取值：
         * - CREATING：生成中
         *
         * - COMPLETE：生成完成
         * @example `COMPLETE`
         */
        Status: string;
        /**
         * 下载清单开始生成时的时间戳。
         * @example `1687674634220`
         */
        ResourceInventoryGenerateTime: number;
    };
}
