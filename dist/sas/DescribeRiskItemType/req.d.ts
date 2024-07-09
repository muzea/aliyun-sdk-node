export interface DescribeRiskItemTypeRequest {
    /**
     * 请求源IP。
     * @example `183.237.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
