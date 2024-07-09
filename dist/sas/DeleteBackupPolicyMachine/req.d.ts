export interface DeleteBackupPolicyMachineRequest {
    /**
     * 防勒索备份策略防护的服务器的UUID。
     * > `UuidList`和`UUID`不能同时为空。
     * @example `083036e9-8411-4a9d-83af-9acbd****`
     */
    "Uuid"?: string;
    /**
     * 防勒索备份策略的ID。
     * >调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口可以获取该参数。
     * @example `11`
     */
    "PolicyId": number;
    /**
     * 策略的版本。取值：
     * - **1.0.0**
     * - **2.0.0**
     * >调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口可以获取该参数。
     * @example `2.0.0`
     */
    "PolicyVersion": string;
    /**
     * 防勒索备份策略防护的服务器的UUID列表。
     * > `UuidList`和`UUID`不能同时为空。
     */
    "UuidList"?: string[];
}
