export interface InstallBackupClientRequest {
    /**
     * 要安装防勒索客户端的服务器的UUID。
     * > UuidList和UUID不能同时为空。
     * @example `inet-617eddab-7df4-4a51-b217-a3f59194****`
     */
    "Uuid"?: string;
    /**
     * 防护策略的版本。可调用[DescribeBackupPolicies](~~DescribeBackupPolicies~~)接口查询。取值：
     * - **1.0.0**：表示防护策略的版本为1.0.0版本
     * - **2.0.0**：表示防护策略的版本为2.0.0版本
     * @example `2.0.0`
     */
    "PolicyVersion": string;
    /**
     * 需要防护的服务器UUID列表。
     * > 调用[DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~)接口获取该参数。
     * @example `["3bb30859-b3b5-4f28-868f-b0892c98****", "3bb30859-b3b5-4f28-868f-b0892c98****"]`
     */
    "UuidList"?: string[];
}
