export interface DescribeTagKeysRequest {
    /**
     * 资源类型。取值：
     * - **VPC**：专有网络实例。
     * - **VSWITCH**：交换机实例。
     * - **ROUTETABLE**：路由表实例。
     * - **EIP**：弹性公网IP实例。
     * - **VpnGateWay**：VPN网关实例。
     * - **NATGATEWAY**：NAT网关实例。
     * - **COMMONBANDWIDTHPACKAGE**：共享带宽实例。
     * @example `VPC`
     */
    "ResourceType"?: string;
    /**
     * 标签键。
     * @example `keyword`
     */
    "Keyword"?: string;
    /**
     * 资源所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分页大小，取值范围：1~50，默认值：50。
     * @example `50`
     */
    "MaxResult"?: number;
    /**
     * 资源ID。最多支持输入50个资源ID。
     */
    "ResourceId"?: string[];
}
