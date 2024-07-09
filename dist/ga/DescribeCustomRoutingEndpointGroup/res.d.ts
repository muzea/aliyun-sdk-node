export interface DescribeCustomRoutingEndpointGroupResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    AcceleratorId: string;
    /**
     * 自定义路由类型监听ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp1dmlohjjz4kqaua****`
     */
    EndpointGroupId: string;
    /**
     * 终端节点组名称。
     * @example `group1`
     */
    Name: string;
    /**
     * 终端节点组的描述信息。
     * @example `EndpointGroup`
     */
    Description: string;
    /**
     * 终端节点组出公网IP列表。
     */
    EndpointGroupIpList: string[];
    /**
     * 全球加速实例升级后新增待确认的终端节点组出公网IP列表。
     */
    EndpointGroupUnconfirmedIpList: string[];
    /**
     * 终端节点组所属的地域ID。
     * @example `cn-hangzhou`
     */
    EndpointGroupRegion: string;
    /**
     * 终端节点组的状态。
     * - **init**：初始化。
     * - **active**：正常。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `active`
     */
    State: string;
    /**
     * 在日志服务中创建的日志信息所属地域。
     * @example `cn-hangzhou`
     */
    SlsRegion: string;
    /**
     * 日志项目（Project）名称。
     * @example `pn-01`
     */
    SlsProjectName: string;
    /**
     * 日志库（Logstore）名称。
     * @example `lsn-01`
     */
    SlsLogStoreName: string;
    /**
     * 日志绑定状态。
     * - **on**：已绑定。
     * - **off**：未绑定。
     * - **binding**：绑定中。
     * - **unbinding**：解绑中。
     * @example `on`
     */
    AccessLogSwitch: string;
    /**
     * 是否开启了访问日志。
     * - **true**：已开启访问日志。
     * - **false**：未开启访问日志。
     * @example `true`
     */
    EnableAccessLog: boolean;
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
     * >- 仅在**ServiceManaged**参数为**True**时有效。
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
         * > 仅在**Action**参数为**CreateChild**时有效
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
}
