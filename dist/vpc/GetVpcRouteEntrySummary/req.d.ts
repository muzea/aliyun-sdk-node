export interface GetVpcRouteEntrySummaryRequest {
    /**
     * 要查询的路由表所属的VPC的ID。
     * @example `vpc-bp15zckdt37pq72****`
     */
    "VpcId": string;
    /**
     * 要查询的路由表的ID。
     * @example `vtb-bp145q7glnuzdvzu2****`
     */
    "RouteTableId"?: string;
    /**
     * 路由的类型。取值：
     * - **all**：表示所有路由类型。
     * - **custom**：表示自定义路由。
     * - **system**：表示系统路由。
     * - **bgp**：表示BGP路由。
     * - **cen**：表示云企业网CEN（Cloud Enterprise Network）路由。
     * - **type_vpn_bgp_internal**：表示VPN的BGP路由。
     * - **ECR**：表示专线网关路由。
     * @example `custom`
     */
    "RouteEntryType": string;
    /**
     * 路由表所属地域的ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
