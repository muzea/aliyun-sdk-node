export interface InstallUniBackupAgentRequest {
    /**
     * 数据库防勒索备份策略的ID。
     * >调用[DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~)接口可以获取该参数。
     * @example `123`
     */
    "PolicyId": number;
}
