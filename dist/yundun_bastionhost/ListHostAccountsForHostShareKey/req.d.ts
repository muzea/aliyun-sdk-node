export interface ListHostAccountsForHostShareKeyRequest {
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
     * @example `1124`
     */
    "HostShareKeyId": string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 设置分页查询时，每页显示的主机共享密钥关联的主机账号的数量。默认值为**10**，表示每页显示10条主机共享密钥关联的主机账号。
     * @example `10`
     */
    "PageSize"?: string;
}
