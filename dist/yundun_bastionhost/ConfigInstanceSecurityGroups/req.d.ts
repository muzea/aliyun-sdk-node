export interface ConfigInstanceSecurityGroupsRequest {
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 堡垒机的实例ID。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1gh****`
     */
    "InstanceId": string;
    /**
     * 堡垒机实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 已授权的安全组ID列表。
     * @example `sg-bp14u00sh39jvw5****`
     */
    "AuthorizedSecurityGroups": string[];
}
