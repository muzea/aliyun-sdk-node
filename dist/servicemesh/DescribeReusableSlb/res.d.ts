export interface DescribeReusableSlbResponse {
    /**
     * 可复用的负载均衡实例列表。
     */
    ReusableSlbList: {
        /**
         * 负载均衡实例名称。
         * @example `ad6044b015ac54484a20c4724117****`
         */
        LoadBalancerName: string;
        /**
         * 负载均衡实例ID。
         * @example `lb-bp17xygzsxth0bwlz****`
         */
        LoadBalancerId: string;
    }[];
    /**
     * 请求ID。
     * @example `EDDC0D86-2FC3-56FB-9213-96EB0A3523F1`
     */
    RequestId: string;
}
