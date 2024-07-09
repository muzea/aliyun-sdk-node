export interface ListErRouteEntriesRequest {
    /**
     * 下一跳实例类型
     * @example `VCC`
     */
    "NextHopType"?: string;
    /**
     * 下一跳实例
     * @example `vcc-cn-209300qha01`
     */
    "NextHopId"?: string;
    /**
     * 路由类型
     * @example `VCC`
     */
    "RouteType"?: string;
    /**
     * 状态
     * @example `Available`
     */
    "Status"?: string;
    /**
     * 目的网段
     * @example `0.0.0.0/0`
     */
    "DestinationCidrBlock"?: string;
    /**
     * 网络实例ID
     * @example `vcc-cn-209300qha01
    `
     */
    "InstanceId"?: string;
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
     * 地域ID
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 灵骏HUB ID
     * @example `er-kkopgtne`
     */
    "ErId": string;
    /**
     * 当前页码。起始值：1默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回值的个数。默认值：20
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 是否开启分页查询
     * @example `false`
     */
    "EnablePage"?: boolean;
}
