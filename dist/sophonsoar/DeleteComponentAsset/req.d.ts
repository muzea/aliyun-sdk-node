export interface DeleteComponentAssetRequest {
    /**
     * 组件的资产ID。
     * >调用[DescribeComponentAssets](~~DescribeComponentAssets~~)接口可以获取该参数。
     * @example `12x`
     */
    "AssetId": number;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
