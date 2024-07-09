export interface DescribeIpv6EgressOnlyRulesRequest {
    /**
     * IPv6网关的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * IPv6网关的ID。
     * @example `ipv6gw-bp1rhhs9zjlxukc5e****`
     */
    "Ipv6GatewayId": string;
    /**
     * 要查看的仅主动出规则ID。
     * @example `ipv6py-bp1rr7fq1md8pbb3k****`
     */
    "Ipv6EgressOnlyRuleId"?: string;
    /**
     * 规则名称。
     * @example `rulename`
     */
    "Name"?: string;
    /**
     * 需要设置仅主动出规则的实例类型，取值：
     *  **Ipv6Address**：IPv6地址。
     * @example `Ipv6Address`
     */
    "InstanceType"?: string;
    /**
     * 设置了仅主动出规则的IPv6地址的ID。
     * @example `ipv6-bp12uzwhac8tv3xx6****`
     */
    "InstanceId"?: string;
    /**
     * 列表的页码，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**，默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
}
