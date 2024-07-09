export interface ListTransitRouterMulticastDomainsResponse {
    /**
     * 请求ID。
     * @example `8A0F93D1-FD6C-56FC-B6D2-668FC92D12D2`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 组播域信息列表。
     */
    TransitRouterMulticastDomains: {
        /**
         * 组播域ID。
         * @example `tr-mcast-domain-3r3bvbypxqheej****`
         */
        TransitRouterMulticastDomainId: string;
        /**
         * 组播域的名称。
         * @example `nametest`
         */
        TransitRouterMulticastDomainName: string;
        /**
         * 组播域的描述信息。
         * @example `desctest`
         */
        TransitRouterMulticastDomainDescription: string;
        /**
         * 组播域的状态。
         * 仅取值：**Active**，表示组播域当前可用。
         * @example `Active`
         */
        Status: string;
        /**
         * 标签列表。
         */
        Tags: {
            /**
             * 标签键。
             * @example `TagKey`
             */
            Key: string;
            /**
             * 标签值。
             * @example `TagValue`
             */
            Value: string;
        }[];
        /**
         * 转发路由器实例ID。
         * @example `tr-bp1c23ijrl6d6c226h***`
         */
        TransitRouterId: string;
        /**
         * 转发路由器实例所属的地域ID。
         * 您可以通过调用[DescribeChildInstanceRegions](~~132080~~)接口获取地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 云企业网实例ID。
         * @example `cen-h19xdb0qy2b3irka8z`
         */
        CenId: string;
    }[];
}
