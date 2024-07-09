export interface DescribeClassicLinkInstancesResponse {
    /**
     * 分页查询的每页行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 分页查询的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 连接总数。
     * @example `2`
     */
    TotalCount: number;
    Links: {
        /**
         * 返回经典网络类型实例和VPC连接信息。
         */
        Link: {
            /**
             * VPC ID。
             * @example `vpc-test`
             */
            VpcId: string;
            /**
             * 实例ID。
             * @example `i-test`
             */
            InstanceId: string;
        }[];
    };
}
