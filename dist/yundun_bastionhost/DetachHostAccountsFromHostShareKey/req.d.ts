export interface DetachHostAccountsFromHostShareKeyRequest {
    /**
     * 堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。
     * > Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 主机共享密钥的ID。
     * > 您可以调用[ListHostShareKeys](~~462973~~)接口获取该参数。
     * @example `11`
     */
    "HostShareKeyId": string;
    /**
     * 主机账号ID列表。
     * > 您可以调用[ListHostAccountsForHostShareKey](~~462975~~)接口获取该参数。
     * @example `["1","2","3"]`
     */
    "HostAccountIds": string;
}
