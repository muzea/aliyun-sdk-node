export interface DeleteUserPublicKeyRequest {
    /**
     * 指定要删除公钥的用户所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 堡垒机的地域ID。Region ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 公钥ID。
     * > 您可以调用[ListUserPublicKeys](~~477555~~)接口获取该参数。
     * @example `11`
     */
    "PublicKeyId": string;
}
