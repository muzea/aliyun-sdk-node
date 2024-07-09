export interface ListBasicEndpointsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 如果**NextToken**为空表示没有下一次查询。
     * - 如果**NextToken**有返回值，该取值表示下一次查询开始的令牌。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    NextToken: string;
    /**
     * 分批次查询时每次显示的条目数。
     * @example `10`
     */
    MaxResults: string;
    /**
     * 基础型全球加速实例终端节点列表。
     */
    Endpoints: {
        /**
         * 基础型全球加速实例ID。
         * @example `ga-bp17frjjh0udz4qz****`
         */
        AcceleratorId: string;
        /**
         * 基础型全球加速实例终端节点所属的终端节点组ID。
         * @example `epg-bp1dmlohjjz4kqaun****`
         */
        EndpointGroupId: string;
        /**
         * 基础型全球加速实例终端节点ID。
         * @example `ep-bp14sz7ftcwwjgrdm****`
         */
        EndpointId: string;
        /**
         * 基础型全球加速实例终端节点的名称。
         * @example `ep01`
         */
        Name: string;
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
        /**
         * 终端节点的辅助地址类型。
         * - **primary**：终端节点辅助地址的类型为主私网IP。
         * - **secondary**：终端节点辅助地址的类型为辅助私网IP。
         * 当终端节点类型为**ECS**、**ENI**或**NLB**时，返回该参数。其中，终端节点类型为**NLB**时，仅返回**primary**类型。
         * @example `primary`
         */
        EndpointSubAddressType: string;
        /**
         * 终端节点的可用区ID。
         * 目前，仅当终端节点类型为**NLB**时，返回该参数。
         * @example `cn-hangzhou-g`
         */
        EndpointZoneId: string;
        /**
         * 终端节点状态。
         * - **init**：初始化。
         * - **active**：可用。
         * - **updating**：配置中。
         * - **binding**：绑定中。
         * - **unbinding**：解绑中。
         * - **deleting**：删除中。
         * - **bound**：已绑定。
         * @example `active`
         */
        State: string;
    }[];
}
