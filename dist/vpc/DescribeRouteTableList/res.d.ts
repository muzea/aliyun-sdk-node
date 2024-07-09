export interface DescribeRouteTableListResponse {
    /**
     * 请求ID。
     * @example `DC668356-BCB4-42FD-9BC3-FA2B2E04B634`
     */
    RequestId: string;
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    RouterTableList: {
        /**
         * 路由表列表详细信息。
         */
        RouterTableListType: {
            /**
             * 路由表所属的VPC的ID。
             * @example `vpc-bp15zckdt37pq72****`
             */
            VpcId: string;
            /**
             * 路由表的创建时间。
             * @example `2021-08-22T10:40:25Z`
             */
            CreationTime: string;
            /**
             * 路由表的状态。取值：
             * - **Pending**：创建中。
             * - **Available**：可用。
             * - **Deleting**：删除中。
             * @example `Available`
             */
            Status: string;
            /**
             * 路由表所属的路由器ID。
             * @example `vrt-bp1lhl0taikrteen8****`
             */
            RouterId: string;
            /**
             * 路由表绑定的云资源类型。取值：
             * - **VSwitch**：交换机。
             * - **Gateway**：IPv4网关。
             * @example `VSwitch`
             */
            AssociateType: string;
            /**
             * 路由表的ID。
             * @example `vtb-bp145q7glnuzdvzu2****`
             */
            RouteTableId: string;
            /**
             * 路由表所属阿里云账号ID。
             * @example `253460731706911258`
             */
            OwnerId: number;
            /**
             * 路由表的描述。
             * @example `This is Route Table.`
             */
            Description: string;
            /**
             * 路由表的类型。取值：
             * - **Custom**：自定义路由表。
             * - **System**：系统路由表。
             * @example `System`
             */
            RouteTableType: string;
            /**
             * 路由表所属资源组的ID。
             * @example `rg-acfmxazb4ph****`
             */
            ResourceGroupId: string;
            /**
             * 路由表所属路由器的类型。取值：
             * - **VRouter**：VPC路由器。
             * - **VBR**：边界路由器。
             * @example `VRouter`
             */
            RouterType: string;
            /**
             * 路由表的名称。
             * @example `doctest`
             */
            RouteTableName: string;
            Tags: {
                /**
                 * 路由表的标签。
                 */
                Tag: {
                    /**
                     * 路由表绑定的标签键。
                     * @example `type`
                     */
                    Key: string;
                    /**
                     * 路由表绑定的标签键对应的值。
                     * @example `ingress`
                     */
                    Value: string;
                }[];
            };
            VSwitchIds: {
                /**
                 * 交换机列表信息。
                 */
                VSwitchId: string[];
            };
            GatewayIds: {
                /**
                 * IPv4网关详细信息。
                 */
                GatewayIds: string[];
            };
            /**
             * 路由表是否接收传播路由。取值：
             * - **true**：路由表接收。
             * - **false**：路由表不接收。
             * @example `true`
             */
            RoutePropagationEnable: boolean;
        }[];
    };
}
