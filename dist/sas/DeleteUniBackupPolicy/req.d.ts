export interface DeleteUniBackupPolicyRequest {
    /**
     * 数据库防勒索备份策略的ID。
     * >调用[DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~)接口可以获取该参数，与**PolicyIds**参数不能同时为空。
     * @example `123`
     */
    "PolicyId"?: number;
    /**
     * 数据库防勒索备份策略的ID集合。
     * >调用[DescribeUniBackupPolicies](~~DescribeUniBackupPolicies~~)接口可以获取该参数，与**PolicyId**参数不能同时为空。
     * @example `123,124`
     */
    "PolicyIds"?: string;
}
