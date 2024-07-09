export interface DescribeCheckFixDetailsRequest {
    /**
     * 基线的ID。
     * > 您可调用[DescribeCheckWarningSummary](~~116179~~)接口获取基线ID。
     * @example `51`
     */
    "RiskId"?: number;
    /**
     * 检查项的ID。
     * > 您可调用[DescribeRiskType](~~DescribeRiskType~~)接口获取检查项ID。
     * @example `58`
     */
    "CheckIds"?: string;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
