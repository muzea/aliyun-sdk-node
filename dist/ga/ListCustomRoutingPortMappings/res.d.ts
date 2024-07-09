export interface ListCustomRoutingPortMappingsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 端口映射表信息。
     */
    PortMappings: {
        /**
         * 端口映射表所属全球加速实例ID。
         * @example `ga-bp1odcab8tmno0hdq****`
         */
        AcceleratorId: string;
        /**
         * 端口映射表所属自定义路由类型监听ID。
         * @example `lsr-bp1bpn0kn908w4nbw****`
         */
        ListenerId: string;
        /**
         * 终端节点组ID。
         * @example `epg-bp14sz7ftcwwjgrdm****`
         */
        EndpointGroupId: string;
        /**
         * 终端节点ID。
         * @example `ep-bp14sz7ftcwwjgrdm****`
         */
        EndpointId: string;
        /**
         * 终端节点组所属地域ID。
         * @example `us-west-1`
         */
        EndpointGroupRegion: string;
        /**
         * 终端节点交换机（vSwitch）实例名称。
         * @example `vsw-test01`
         */
        Vswitch: string;
        /**
         * 加速端口。
         * @example `3000`
         */
        AcceleratorPort: number;
        /**
         * 后端服务协议类型。
         * - **TCP**：TCP协议。
         * - **UDP**：UDP协议。
         */
        Protocols: string[];
        /**
         * 后端实例流量通行策略。
         * - **allow**：允许后端实例接收流量。
         * - **deny**：不允许后端实例接收流量。
         * @example `allow`
         */
        DestinationTrafficState: string;
        /**
         * 后端实例服务IP地址与端口信息。
         */
        DestinationSocketAddress: {
            /**
             * 后端实例服务IP地址。
             * @example `10.0.XX.XX`
             */
            IpAddress: string;
            /**
             * 后端实例服务端口。
             * @example `443`
             */
            Port: number;
        };
    }[];
}
