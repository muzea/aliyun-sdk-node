export interface DescribeTrFirewallsV2RouteListResponse {
    /**
     * 云防火墙路由表列表。
     */
    FirewallRouteDetailList: {
        /**
         * 防火墙路由策略ID。
         * @example `policy-04ecbbc6720d4f90****`
         */
        TrFirewallRoutePolicyId: string;
        /**
         * 路由所属路由表的ID。
         * @example `vtb-2zeockxxxorv0mnhz****`
         */
        TrFirewallRouteTableId: string;
        /**
         * 路由目的地址。
         * @example `192.168.10.0/25`
         */
        TrFirewallRouteDestination: string;
        /**
         * 路由下一跳ID。
         * @example `tr-attach-hnxab1y0pxn16p****`
         */
        TrFirewallRouteNexthop: string;
    }[];
    /**
     * 返回结果的请求ID。
     * @example `ABF190A2-B4D0-53F6-995A-5690A721F91C`
     */
    RequestId: string;
}
