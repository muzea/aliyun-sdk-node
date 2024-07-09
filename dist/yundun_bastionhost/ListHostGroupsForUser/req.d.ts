export interface ListHostGroupsForUserRequest {
    /**
     * 指定要查询的用户所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的用户所在堡垒机的区域ID。
     * > 区域ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询的主机组列表的模式。取值：
     * - **Authorized**：已授权（默认）
     * - **Unauthorized**：未授权
     * @example `Authorized`
     */
    "Mode"?: string;
    /**
     * 指定要查询的用户ID。
     * > 您可以调用[ListUsers](~~204522~~)接口获取该参数。
     * @example `１`
     */
    "UserId": string;
    /**
     * 指定分页查询时，当前页的页码。默认值为**1**。
     * @example `１`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的主机组名称。最多支持128字符，仅支持精确查询。
     * @example `group`
     */
    "HostGroupName"?: string;
}
