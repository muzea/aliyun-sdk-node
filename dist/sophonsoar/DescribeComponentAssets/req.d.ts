export interface DescribeComponentAssetsRequest {
    /**
     * 组件的名称。
     * @example `python3`
     */
    "ComponentName": string;
    /**
     * 请求和接收消息的语言类型。
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
