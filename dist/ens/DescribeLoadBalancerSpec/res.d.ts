export interface DescribeLoadBalancerSpecResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 实例列表的页码。
     * @example `10`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数，最大值为100行。                              默认值：10。
     * @example `100`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `7`
     */
    TotalCount: number;
    /**
     * 规格
     */
    LoadBalancerSpecs: {
        /**
         * 实例规格显示名称。
         * @example `elb.s1.small`
         */
        DisplayName: string;
        /**
         * 负载均衡实例的规格。
         * @example `elb.s1.small`
         */
        LoadBalancerSpec: string;
    }[];
}
