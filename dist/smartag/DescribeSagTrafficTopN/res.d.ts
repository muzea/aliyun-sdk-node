export interface DescribeSagTrafficTopNResponse {
    /**
     * 请求ID。
     * @example `AFF7E5A6-6897-4FDC-A5A8-1978B5B3E545`
     */
    RequestId: string;
    /**
     * 智能接入网关实例流量速率信息列表。
     */
    TrafficTopN: {
        /**
         * 智能接入网关实例流量速率。单位：bps。
         * @example `3866.6666666666665`
         */
        TrafficRate: string;
        /**
         * 智能接入网关实例ID。
         * @example `sag-whfn****`
         */
        InstanceId: string;
        /**
         * 智能接入网关实例名称。
         * @example `test`
         */
        Name: string;
        /**
         * 智能接入网关实例地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
    }[];
}
