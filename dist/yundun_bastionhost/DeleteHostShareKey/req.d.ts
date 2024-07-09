export interface DeleteHostShareKeyRequest {
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
     * > 此参数为必传参数。您可以调用[ListHostShareKeys](~~462973~~)接口获取该参数。
     * @example `11206`
     */
    "HostShareKeyId"?: string;
}
