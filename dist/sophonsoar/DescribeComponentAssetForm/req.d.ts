export interface DescribeComponentAssetFormRequest {
    /**
     * 组件的名称。
     * @example `python3`
     */
    "ComponentName": string;
    /**
     * 接收消息的语言类型。取值：
     * - **zh**（默认）：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
