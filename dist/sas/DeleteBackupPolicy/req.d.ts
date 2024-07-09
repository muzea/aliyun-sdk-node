export interface DeleteBackupPolicyRequest {
    /**
     * 要删除的防护策略的ID。
     * >调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口可以获取该参数。
     * @example `12`
     */
    "Id": number;
    /**
     * 要删除的防护策略的版本。您可调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口查询。取值：
     * - **1.0.0**：表示防护策略的版本为1.0.0
     * - **2.0.0**：表示防护策略的版本为2.0.0
     * @example `2.0.0`
     */
    "PolicyVersion"?: string;
}
