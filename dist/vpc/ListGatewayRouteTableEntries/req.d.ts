export interface ListGatewayRouteTableEntriesRequest {
    /**
     * 要查询网关路由表列表信息的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `ap-southeast-6`
     */
    "RegionId": string;
    /**
     * 分批次查询时每次显示的条目数。取值范围：**1**~**100**，默认值为**10**。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 要查询的网关路由表ID。
     * @example `vtb-5ts0ohchwkp3dydt2****`
     */
    "GatewayRouteTableId": string;
    /**
     * 要查询的网关路由表中路由条目的目标网段。
     * @example `192.168.0.5`
     */
    "DestinationCidrBlock"?: string;
}
