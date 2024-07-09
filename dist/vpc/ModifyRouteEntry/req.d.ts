export interface ModifyRouteEntryRequest {
    /**
     * 路由条目所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 路由条目的名称。
     * 名称长度为1～128个字符，不能以`http://`或`https://`开头。
     * @example `EntryName`
     */
    "RouteEntryName"?: string;
    /**
     * 自定义路由条目ID。
     * @example `rte-acfvgfsghfdd****`
     */
    "RouteEntryId": string;
    /**
     * 路由条目的描述。
     * 描述长度为1～256个字符，不能以`http://`或`https://`开头。
     * @example `EntryDescription`
     */
    "Description"?: string;
    /**
     * 新路由条目下一跳类型。取值如下：
     * - **NetworkInterface**：弹性网卡。
     * - **NatGateway**：NAT网关。
     * @example `NetworkInterface`
     */
    "NewNextHopType"?: string;
    /**
     * 新路由条目下一跳实例ID。
     * @example `eni-bp17y37ytsenqyim****`
     */
    "NewNextHopId"?: string;
}
