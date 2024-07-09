export interface ListHostGroupsRequest {
    /**
     * 指定要查询的堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~462953~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定分页查询时当前页的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时每页显示的数据最大条数。pagesize参数最大取值为100。每页默认显示的数据条数为20条，pagesize参数值为空时，将默认返回20条数据。
     * > 建议pagesize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的资产组名称，不支持模糊查询，只支持精确查询。
     * @example `主机组1`
     */
    "HostGroupName"?: string;
}
