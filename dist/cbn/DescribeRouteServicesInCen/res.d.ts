export interface DescribeRouteServicesInCenResponse {
    /**
     * 分页查询时每页显示的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `196C99CA-6997-5951-9721-AE89720DF856`
     */
    RequestId: string;
    /**
     * 查询页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总条目数。
     * @example `2`
     */
    TotalCount: number;
    RouteServiceEntries: {
        /**
         * 云服务信息列表。
         */
        RouteServiceEntry: {
            /**
             * 云服务的状态。
             * - **Creating**：创建中。
             * - **Active**：可用。
             * - **Deleting**：删除中。
             * @example `Active`
             */
            Status: string;
            /**
             * 云服务的服务地址。
             * @example `100.118.28.0/24`
             */
            Host: string;
            /**
             * 云服务的描述信息。
             * @example `descname`
             */
            Description: string;
            /**
             * 云服务关联的VPC实例ID。
             * @example `vpc-bp1h8vbrbcgohcju5****`
             */
            HostVpcId: string;
            /**
             * 云企业网实例ID。
             * @example `cen-pfa6ugf3xl0qsd****`
             */
            CenId: string;
            /**
             * 访问云服务的地域ID。
             * @example `cn-hangzhou`
             */
            AccessRegionId: string;
            /**
             * 云服务所在的地域ID。
             * @example `cn-hangzhou`
             */
            HostRegionId: string;
            Cidrs: {
                /**
                 * 云服务的服务地址列表。
                 */
                Cidr: string[];
            };
        }[];
    };
}
