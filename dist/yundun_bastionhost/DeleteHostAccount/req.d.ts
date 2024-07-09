export interface DeleteHostAccountRequest {
    /**
     * 要删除的主机账户所在堡垒机实例的ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 要查询的主机账户所在堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 要删除的主机账户的ID。
     * > 您可以调用[ListHostAccounts](~~204372~~)接口获取该参数。
     * @example `1`
     */
    "HostAccountId": string;
}
