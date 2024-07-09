export interface DescribeRisksRequest {
    /**
     * 基线的ID。
     * > 您可调用[DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~)接口获取基线ID。
     * @example `75`
     */
    "RiskId"?: number;
    /**
     * 基线名称。
     * @example `docker`
     */
    "RiskName"?: string;
    /**
     * 限定此次返回基线的数量限制。如果不设置，默认为20。
     * @example `10`
     */
    "Limit"?: number;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `127608589417****`
     */
    "ResourceDirectoryAccountId"?: number;
}
