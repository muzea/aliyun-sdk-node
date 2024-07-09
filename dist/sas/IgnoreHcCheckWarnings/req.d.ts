export interface IgnoreHcCheckWarningsRequest {
    /**
     * 访问源的IP地址。
     * @example `192.168.XX.XX`
     */
    "SourceIp"?: string;
    /**
     * 检查项告警ID ，有多个检查项告警ID时使用英文逗号（,）分隔。
     * > 检查项告警ID可调用[DescribeCheckWarnings](~~DescribeCheckWarnings~~)接口获取。
     * @example `98146905,98146907`
     */
    "CheckWarningIds"?: string;
    /**
     * 基线检查项ID。
     * > 基线检查项ID可调用[DescribeCheckWarnings](~~DescribeCheckWarnings~~)接口获取。
     * @example `21313`
     */
    "CheckIds"?: string;
    /**
     * 指定要执行忽略或取消忽略操作的风险项ID。
     * > 风险项ID可调用[DescribeCheckWarningSummary](~~DescribeCheckWarningSummary~~)接口获取。
     * @example `51`
     */
    "RiskId"?: string;
    /**
     * 指定需要执行的操作类型。取值：
     * - **1**：忽略
     * - **2**：取消忽略
     * @example `1`
     */
    "Type": number;
    /**
     * 执行当前操作的原因。
     * @example `ignore`
     */
    "Reason"?: string;
    /**
     * 数据来源，为空时默认查询主机基线结果。取值：
     * - **default**：主机
     * - **agentless**：agentless
     * @example `agentless`
     */
    "Source"?: string;
}
