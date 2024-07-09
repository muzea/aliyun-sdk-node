export interface UninstallBackupClientRequest {
    /**
     * 要卸载防勒索客户端的服务器的UUID。
     * > UuidList.N和UUID不能同时为空。
     * @example `D0D6E6E4-CB8C-4897-B852-46AEFDA0****`
     */
    "Uuid"?: string;
    /**
     * 防护策略的版本。可调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口查询。取值：
     * - **1.0.0**：表示防护策略的版本为1.0.0
     * - **2.0.0**：表示防护策略的版本为2.0.0
     * @example `2.0.0`
     */
    "PolicyVersion": string;
    /**
     * 要卸载防勒索客户端的服务器UUID列表。
     * > UuidList和UUID不能同时为空。
     * @example `["D0D6E6E4-CB8C-4897-B852-46AEFDA0****", "3bb30859-b3b5-4f28-868f-b0892c98****"]`
     */
    "UuidList"?: string[];
}
