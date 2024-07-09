export interface DescribeLoadBalancersResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页查询时设置的每页行数。默认值：10，取值：**10**~**100**。
     * @example `100`
     */
    PageSize: number;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    LoadBalancers: {
        /**
         * 数组格式，返回负载均衡实例列表。
         */
        LoadBalancer: {
            /**
             * 负载均衡实例的ID。
             * @example `lb-5snthcyu1x10g7tywj7iu****`
             */
            LoadBalancerId: string;
            /**
             * 负载均衡实例的名称。
             * @example `example`
             */
            LoadBalancerName: string;
            /**
             * 负载均衡实例监听状态。取值：
             * - **Active**：实例中的监听可以根据规则转发接收的流量。
             * - **InActive**：实例中的监听不会再转发接收的流量。
             * @example `InActive`
             */
            LoadBalancerStatus: string;
            /**
             * 负载均衡实例服务地址。
             * @example `10.10.XX.XX`
             */
            Address: string;
            /**
             * ENS节点ID。
             * @example `cn-wuhan-telecom`
             */
            EnsRegionId: string;
            /**
             * 网络ID。
             * @example `n-5rz0rj1caexauilpsjx0w****`
             */
            NetworkId: string;
            /**
             * 交换机ID。
             * @example `vsw-5rllcjb3ol6duzjdnbm1om****`
             */
            VSwitchId: string;
            /**
             * 负载均衡实例创建时间（UTC）。
             * @example `2021-05-06T11:13:41Z`
             */
            CreateTime: string;
            /**
             * IP版本。取值：ipv4或者ipv6。
             * @example `ipv4`
             */
            AddressIPVersion: string;
            /**
             * 付费类型。取值：
             * - **PrePaid**：预付费。
             * - **PostPaid**（目前仅支持该付费类型）：后付费。
             * @example `PostPaid`
             */
            PayType: string;
        }[];
    };
}
