export interface ModifyUniBackupPolicyRequest {
    /**
     * 数据库防勒索备份策略的ID。
     * >调用[DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~)接口可以获取该参数。
     * @example `123`
     */
    "PolicyId": number;
    /**
     * 数据库防勒索备份策略的名称。
     * @example `databak`
     */
    "PolicyName"?: string;
    /**
     * 备份快照保留天数。
     * @example `7`
     */
    "Retention"?: number;
    /**
     * 备份网络带宽限制。单位为字节。
     * @example `1048576`
     */
    "SpeedLimiter"?: number;
    /**
     * 数据库账户名称。
     * @example `sa`
     */
    "AccountName"?: string;
    /**
     * 数据库账户密码。
     * @example `Sa@****`
     */
    "AccountPassword"?: string;
    /**
     * 全量备份策略。格式为JSON格式。包含以下字段：
     * - **start**：备份开始时间
     * - **interval**：间隔周期
     * - **type**：间隔周期单位
     * - **days**：周中执行日期
     * @example `{"days":[4],"interval":1,"planType":"weekly","startTime":"22:00:00"}`
     */
    "FullPlan"?: any;
    /**
     * 增量备份策略。格式为JSON格式。包含以下字段：
     * - **start**：备份开始时间
     * - **interval**：间隔周期
     * - **type**：间隔周期单位
     * - **days**：周中执行日期
     * @example `{"interval":1,"planType":"daily","startTime":"23:30:00"}`
     */
    "IncPlan"?: any;
    /**
     * 策略状态。取值：
     * - **enabled**：启用策略
     * - **disabled**：已禁用策略
     * @example `enabled`
     */
    "PolicyStatus"?: string;
}
