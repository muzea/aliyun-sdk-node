export interface DescribeAvailableResourceResponse {
    /**
     * Request id。
     * @example `XXX-XXX`
     */
    RequestId: string;
    /**
     * AvailableResources
     */
    AvailableResources: {
        /**
         * 集群类型。
         * @example `gws.s1.stardard`
         */
        ClusterType: string;
        /**
         * 可用区。
         * @example `cn-hangzhou-i`
         */
        Zone: string;
    }[];
}
