export interface ModifyBackupPolicyStatusRequest {
    /**
     * 要开启或关闭的防护策略的ID。
     * @example `30490`
     */
    "Id": number;
    /**
     * 设置要启用或停用防护策略。取值：
     * - **enabled**：启用防护策略。启用策略后，防勒索才能保护您的服务器数据，即根据您的防护策略，备份指定服务器上的数据。
     * - **disabled**：停用防护策略。停用策略后，正在运行的备份任务将停止。
     * > 执行备份任务会占用您的网络带宽，建议您在业务低峰期启用策略，执行数据备份任务。
     * @example `enabled`
     */
    "Status": string;
    /**
     * 要开启或关闭的策略版本。固定取值：**2.0.0**，表示要开启或关闭的策略的版本为2.0.0版本。
     * @example `2.0.0`
     */
    "PolicyVersion": string;
}
