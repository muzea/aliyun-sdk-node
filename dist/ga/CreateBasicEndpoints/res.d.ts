export interface CreateBasicEndpointsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 基础型全球加速实例的终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaun****`
     */
    EndpointGroupId: string;
    /**
     * 基础型全球加速实例的终端节点列表。
     */
    Endpoints: {
        /**
         * 基础型全球加速实例的终端节点ID。
         * @example `ep-bp14sz7ftcwwjgrdm****`
         */
        EndpointId: string;
        /**
         * 终端节点类型。
         * - **ENI**：阿里云弹性网卡。
         * - **SLB**：阿里云CLB实例。
         * - **ECS**：阿里云ECS实例。
         * - **NLB**：阿里云NLB实例。
         * @example `ENI`
         */
        EndpointType: string;
        /**
         * 终端节点的地址。
         * @example `eni-bp1a05txelswuj8g****`
         */
        EndpointAddress: string;
        /**
         * 终端节点辅助地址。
         * 当终端节点类型为**ECS**、**ENI**或**NLB**时，返回该参数。
         * - 当终端节点类型为**ECS**时，**EndpointSubAddress**为主网卡的辅助私网IP或主网卡的主私网IP。
         * - 当终端节点类型为**ENI**时，**EndpointSubAddress**为辅助网卡的辅助私网IP或辅助网卡的主私网IP。
         * - 当终端节点类型为**NLB**时，**EndpointSubAddress**为NLB后端服务器的主私网IP。
         * @example `172.16.XX.XX`
         */
        EndpointSubAddress: string;
    }[];
}
