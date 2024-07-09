export interface DescribeVRoutersResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `0ED8D006-F706-4D23-88ED-E11ED28DCAC0`
     */
    RequestId: string;
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
    VRouters: {
        /**
         * 路由器的详细信息。
         */
        VRouter: {
            /**
             * 路由器所属VPC的ID。
             * @example `vpc-rj905wotv6y030t1****`
             */
            VpcId: string;
            /**
             * 路由器的创建时间。
             * @example `2018-03-22T07:46:20Z`
             */
            CreationTime: string;
            /**
             * 路由器的ID。
             * @example `vrt-rj98khsezfqpjrxmv****`
             */
            VRouterId: string;
            /**
             * 路由器的描述信息。
             * @example `abc`
             */
            Description: string;
            /**
             * 路由器的名称。
             * @example `doctest`
             */
            VRouterName: string;
            /**
             * 路由器所属的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            RouteTableIds: {
                RouteTableId: string[];
            };
        }[];
    };
}
