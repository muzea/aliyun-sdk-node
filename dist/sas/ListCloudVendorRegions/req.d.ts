export interface ListCloudVendorRegionsRequest {
    /**
     * 云资产厂商。取值：
     * - **Tencent**、**HUAWEICLOUD**、**Azure**、**AWS**：其它云资产。
     * @example `Tencent`
     */
    "Vendor"?: string;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `en`
     */
    "Lang"?: string;
}
