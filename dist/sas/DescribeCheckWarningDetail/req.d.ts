export interface DescribeCheckWarningDetailRequest {
    /**
     * 访问源IP地址。
     * @example `103.25.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 检查项告警ID。
     * > 查询指定检查项的详细信息，需要提供检查项告警ID，该ID可调用[DescribeCheckWarnings](~~DescribeCheckWarnings~~)接口获取。
     * @example `98675301`
     */
    "CheckWarningId"?: number;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `16670360956*****`
     */
    "ResourceDirectoryAccountId"?: number;
    /**
     * 要查询的服务器的UUID。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `06125d19-6a02-4451-9f65-2083996e****`
     */
    "Uuid"?: string;
    /**
     * 检查项的ID。
     * > 您可调用[ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~)接口获取检查项ID。
     * @example `1`
     */
    "CheckId"?: string;
}
