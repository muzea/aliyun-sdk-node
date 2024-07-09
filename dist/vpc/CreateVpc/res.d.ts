export interface CreateVpcResponse {
    /**
     * 创建的VPC的ID。
     * @example `vpc-bp15zckdt37pq72zv****`
     */
    VpcId: string;
    /**
     * 创建VPC后，系统自动创建的路由器的ID。
     * @example `vrt-bp1lhl0taikrteen8****`
     */
    VRouterId: string;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
    /**
     * 创建VPC后，系统自动创建的路由表的ID。
     * @example `vtb-bp145q7glnuzdv****`
     */
    RouteTableId: string;
    /**
     * 资源组ID。
     * @example `rg-acfmxazb4ph6aiy****`
     */
    ResourceGroupId: string;
}
