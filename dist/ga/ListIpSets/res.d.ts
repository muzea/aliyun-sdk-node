export interface ListIpSetsResponse {
    /**
     * 列表条目数。
     * @example `2`
     */
    TotalCount: number;
    /**
     * 分页查询时每页的行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `A9B4E54C-9CCD-4002-91A9-D38C6C209192`
     */
    RequestId: string;
    /**
     * 列表的页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 加速地域实例列表。
     */
    IpSets: {
        /**
         * 加速地域ID。
         * @example `cn-hangzhou`
         */
        AccelerateRegionId: string;
        /**
         * IP地址协议版本。取值：
         * - **IPv4**
         * - **IPv6**
         * - **DUAL_STACK**
         * @example `IPv4`
         */
        IpVersion: string;
        /**
         * 加速地域分配的带宽，单位：**Mbps**。
         * @example `2`
         */
        Bandwidth: number;
        /**
         * 加速地域公网线路类型。取值：
         * - **BGP**（默认值）：BGP（多线）线路。
         * - **BGP_PRO**：BGP（多线）\_精品线路。
         * @example `BGP`
         */
        IspType: string;
        /**
         * 加速地域状态。取值：
         * - **init**：初始化。
         * - **active**：运行中。
         * - **updating**：配置中。
         * - **deleting**：删除中。
         * @example `active`
         */
        State: string;
        /**
         * 加速地域实例ID。
         * @example `ips-bp11r5jb8ogp122xl****`
         */
        IpSetId: string;
        /**
         * 加速IP列表。
         */
        IpAddressList: string[];
        /**
         * 托管实例所属的服务方ID。
         * > 仅当**ServiceManaged**参数为**True**时有效。
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
         * >- 仅当**ServiceManaged**参数为**True**时有效。
         * >- 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
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
             * > 仅当**Action**参数为**CreateChild**时有效。
             * @example `Listener`
             */
            ChildType: string;
            /**
             * 托管策略动作是否被托管，取值：
             * - **true**：托管策略动作被托管，用户无权在托管实例下执行**Action**指定的操作。
             * - **false**：托管策略动作未被托管，用户可在托管实例下执行**Action**指定的操作。
             * @example `false`
             */
            IsManaged: boolean;
        }[];
    }[];
}
