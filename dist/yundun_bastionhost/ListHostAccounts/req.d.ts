export interface ListHostAccountsRequest {
    /**
     * 指定要查询的主机所在堡垒机的实例ID。
     * > 您可以调用[DescribeInstances](~~153281~~)接口获取该参数。
     * @example `bastionhost-cn-st220aw****`
     */
    "InstanceId": string;
    /**
     * 指定要查询的主机所在堡垒机的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定要查询主机账户的主机ID。
     * > 您可以调用[ListHosts](~~200665~~)接口获取该参数。
     * @example `1`
     */
    "HostId": string;
    /**
     * 指定分页查询时，当前页的页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 指定分页查询时，每页显示的数据最大条数。
     * <br>PageSize参数最大取值为100。每页默认显示的数据条数为20条，PageSize参数值为空时，将默认返回20条数据。
     * > 建议PageSize取值不要为空。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 指定要查询的主机账户名称。最多支持128字符，仅支持精确查询。
     * @example `abc`
     */
    "HostAccountName"?: string;
    /**
     * 指定要查询的主机账户的协议名称。
     * <br>取值：
     * - SSH
     * - RDP
     * @example `SSH`
     */
    "ProtocolName"?: string;
}
