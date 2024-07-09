export interface ListKibanaPvlNetworkResponse {
    /**
     * 请求ID。
     * @example `5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***`
     */
    RequestId: string;
    /**
     * 返回结果对象数组。
     */
    Result: {
        /**
         * 终端节点名称。
         * @example `es-cn-xxdjfia****-kibana`
         */
        endpointName: string;
        /**
         * VPC网络ID。
         * @example `vpc-bp16k1dvzxtma*****`
         */
        vpcId: string;
        /**
         * 交换机和可用区信息。
         */
        vSwitchIdsZone: {
            /**
             * 可用区ID。
             * @example `cn-hangzhou-e`
             */
            zoneId: string;
            /**
             * 虚拟交换机ID。
             * @example `vsw-xdefafns***`
             */
            vswitchId: string;
        }[];
        /**
         * 安全组列表。
         */
        securityGroups: string[];
        /**
         * 终端节点ID。
         * @example `ep-bp1tah7zbrwmkjef****`
         */
        endpointId: string;
        /**
         * 终端节点状态：
         * - Disconnected：未连接
         * - Connected：已连接
         * @example `Connected`
         */
        endpointStatus: string;
        /**
         * Kibana私网连接创建时间。
         * @example `2024-03-07T06:26:28Z`
         */
        createTime: string;
        /**
         * Kibana私网连接ID。
         * @example `es-cn-27a3mul6l***-kibana-internal`
         */
        pvlId: string;
    }[];
}
