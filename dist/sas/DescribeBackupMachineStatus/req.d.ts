export interface DescribeBackupMachineStatusRequest {
    /**
     * 防勒索备份策略的ID。
     * >调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口可以获取该参数。
     * @example `123`
     */
    "PolicyId": number;
    /**
     * 要查询的服务器的UUID。
     * >调用[DescribeBackupPolicy](~~DescribeBackupPolicy~~)接口可以获取该参数。
     * @example `eb2c782e-64f2-4590-a86c-d90164df****`
     */
    "Uuid": string;
    /**
     * 防护策略的版本。取值：
     * - **1.0.0**：表示防护策略的版本为1.0.0
     * - **2.0.0**：表示防护策略的版本为2.0.0
     * @example `2.0.0`
     */
    "PolicyVersion"?: string;
}
