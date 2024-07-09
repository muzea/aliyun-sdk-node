export interface DescribeCheckWarningMachinesRequest {
    /**
     * 基线的ID。
     * > 您可调用[DescribeCheckWarningSummary](~~116179~~)接口获取基线ID。
     * @example `43`
     */
    "RiskId"?: number;
    /**
     * 检查项的ID。
     * > 您可调用[DescribeCheckWarningSummary](~~116179~~)接口获取检查项ID。
     * @example `58`
     */
    "CheckId"?: number;
    /**
     * 检查项风险状态。取值：
     *  - **1**：未通过
     *  - **3**：已通过
     * @example `1`
     */
    "Status"?: number;
    /**
     * 请求和接收消息的语言类型，默认值为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 资源目录成员账号主账号ID。
     * >调用[DescribeMonitorAccounts](~~DescribeMonitorAccounts~~)接口可以获取该参数。
     * @example `1232428423234****`
     */
    "ResourceDirectoryAccountId"?: number;
    "CurrentPage"?: number;
    "PageSize"?: number;
    "Remark"?: string;
    "InstanceId"?: string;
    "FilterUuid"?: string;
}
