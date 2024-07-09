export interface DescribeEnumItemsRequest {
    /**
     * 枚举值的类型，支持的取值：
     * - **process**：表示处置场景枚举
     * @example `process`
     */
    "EnumType": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh_cn**：默认值，中文（简体）。
     * - **en_us**：英文（美国）。
     * @example `zh`
     */
    "Lang"?: string;
}
