export interface ListVccRouteEntriesRequest {
    /**
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏连接实例ID
     * @example `vcc-cn-zvp2w222001`
     */
    "VccId": string;
    /**
     * 下一跳实例类型
     * @example `VCC`
     */
    "NextHopType"?: string;
    /**
     * 下一跳实例
     * @example `vcc-cn-jaj34d75h01`
     */
    "NextHopId"?: string;
    /**
     * 路由类型
     * @example `BGP`
     */
    "RouteType"?: string;
    /**
     * 状态
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 目标网段
     * @example `0.0.0.0/0`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 灵骏网段路由条目实例ID
     * @example `vpd-rte-toekyqel`
     */
    "VpdRouteEntryId"?: string;
    /**
     * 过滤32明细网段。默认为true
     * @example `true`
     */
    "IgnoreDetailedRouteEntry"?: boolean;
    /**
     * 资源组实例ID
     */
    "ResourceGroupId"?: string;
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的行数。默认值：20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询
     * @example `false`
     */
    "EnablePage"?: boolean;
}
