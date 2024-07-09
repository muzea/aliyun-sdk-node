export interface DescribeCustomRoutingEndpointGroupDestinationsResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 终端节点组映射信息配置所属的全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    AcceleratorId: string;
    /**
     * 终端节点组映射信息配置所属监听的ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
    /**
     * 终端节点组ID。
     * @example `epg-bp14sz7ftcwwjgrdm****`
     */
    EndpointGroupId: string;
    /**
     * 终端节点组映射信息配置ID。
     * @example `dst-123abc****`
     */
    DestinationId: string;
    /**
     * 终端节点组后端服务协议类型。
     * - **TCP**：TCP协议。
     * - **UDP**：UDP协议。
     * - **TCP,UDP**：TCP和UDP协议。
     */
    Protocols: string[];
    /**
     * 终端节点组后端服务起始端口。
     * @example `80`
     */
    FromPort: number;
    /**
     * 终端节点组后端服务结束端口。
     * @example `80`
     */
    ToPort: number;
    /**
     * 终端节点组映射信息配置的状态。
     * - **init**：初始化。
     * - **active**：正常。
     * - **updating**：更新中。
     * - **deleting**：删除中。
     * @example `active`
     */
    State: string;
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
     * 用户可在该托管实例执行的动作策略列表。
     * > 仅在**ServiceManaged**参数为**True**时有效。
     * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
     */
    ServiceManagedInfos: {
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
