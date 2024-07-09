export interface ListCustomRoutingEndpointsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 列表条目数。
     * @example `10`
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
     * 终端节点信息。
     */
    Endpoints: {
        /**
         * 终端节点所属全球加速实例ID。
         * @example `ga-bp1odcab8tmno0hdq****`
         */
        AcceleratorId: string;
        /**
         * 终端节点所属监听ID。
         * @example `lsr-bp1bpn0kn908w4nbw****`
         */
        ListenerId: string;
        /**
         * 终端节点所属终端节点组ID。
         * @example `epg-bp16jdc00bhe97sr5****`
         */
        EndpointGroupId: string;
        /**
         * 终端节点ID。
         * @example `ep-bp14sz7ftcwwjgrdm****`
         */
        EndpointId: string;
        /**
         * 终端节点后端服务类型。
         *  **PrivateSubNet**：私网CIDR。
         * @example `PrivateSubNet`
         */
        Type: string;
        /**
         * 终端节点交换机（vSwitch）实例名称。
         * @example `vsw-test01`
         */
        Endpoint: string;
        /**
         * 后端服务流量通行策略。
         * - **AllowAll**：允许所有访问流量访问指定后端服务。
         * - **DenyAll**：拒绝所有访问流量访问指定后端服务。
         * - **AllowCustom**：指定可以接收访问流量的通行目标。
         * @example `DenyAll`
         */
        TrafficToEndpointPolicy: string;
        /**
         * 托管实例所属的服务方ID。
         * > 仅在**ServiceManaged**参数为**True**时有效。
         * @example `ALB`
         */
        ServiceId: string;
        /**
         * 是否为托管实例。取值：
         * - **true**：是托管实例。
         * - **false**：不是托管实例。
         * @example `true`
         */
        ServiceManaged: boolean;
        /**
         * 用户在此托管实例下可执行的动作策略列表。
         * > 仅在**ServiceManaged**参数为**True**时有效。
         * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
         */
        ServiceManagedInfos: {
            /**
             * 托管策略动作名称，取值：
             * - **Create**：创建实例。
             * - **Update**：更新当前实例。
             * - **Delete**：删除当前实例。
             * - **Associate**：引用/被引用当前实例。
             * - **UserUnmanaged**：用户解托管实例。
             * - **CreateChild**：在当前实例下创建子资源。
             * @example `Update`
             */
            Action: string;
            /**
             * 子资源类型，取值：
             * - **Listener**：监听资源。
             * - **IpSet**：加速地域资源。
             * - **EndpointGroup**：终端节点组资源。
             * - **ForwardingRule**：转发策略资源。
             * - **Endpoint**：终端节点资源。
             * - **EndpointGroupDestination**：自定义路由监听下的终端节点组协议映射资源。
             * - **EndpointPolicy**：自定义路由监听下的终端节点通行策略资源。
             * > 仅在**Action**参数为**CreateChild**时有效。
             * @example `Listener`
             */
            ChildType: string;
            /**
             * 托管策略动作是否被托管，取值：
             * - **true**：托管策略动作被托管，用户无权在托管实例下执行Action指定的操作。
             * - **false**：托管策略动作未被托管，用户可在托管实例下执行Action指定的操作。
             * @example `false`
             */
            IsManaged: boolean;
        }[];
    }[];
}
