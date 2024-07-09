export interface DescribeEndpointGroupResponse {
    /**
     * 健康检查的时间间隔，单位为秒。
     * @example `3`
     */
    HealthCheckIntervalSeconds: number;
    /**
     * 监听实例有多个终端节点组时，配置到不同终端节点组的流量比例。
     * @example `100`
     */
    TrafficPercentage: number;
    /**
     * 终端节点组ID。
     * @example `epg-bp14sz7ftcwwjgrdm****`
     */
    EndpointGroupId: string;
    /**
     * 终端节点组的描述信息。
     * @example `group1`
     */
    Description: string;
    /**
     * 终端节点组活跃的终端节点IP列表。
     */
    EndpointGroupIpList: string[];
    /**
     * 全球加速实例升级后新增待确认的终端节点组IP列表。
     */
    EndpointGroupUnconfirmedIpList: string[];
    /**
     * 请求ID。
     * @example `6FEA0CF3-D3B9-43E5-A304-D217037876A8	`
     */
    RequestId: string;
    /**
     * 健康检查路径。
     * @example `/healthcheck`
     */
    HealthCheckPath: string;
    /**
     * 健康检查判定终端节点为不健康的次数。
     * @example `3`
     */
    ThresholdCount: number;
    /**
     * 终端节点组的名称。
     * @example `group1`
     */
    Name: string;
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
     * 健康检查的协议。
     * - **tcp**或**TCP**：TCP协议。
     * - **http**或**HTTP**：HTTP协议。
     * - **https**或**HTTPS**：HTTPS协议。
     * @example `tcp`
     */
    HealthCheckProtocol: string;
    /**
     * 健康检查的端口。
     * @example `20`
     */
    HealthCheckPort: number;
    /**
     * 终端节点配置信息。
     */
    EndpointConfigurations: {
        /**
         * 终端节点类型。
         * - **Domain**：自定义域名。
         * - **Ip**：自定义IP。
         * - **PublicIp**：阿里云公网IP。
         * - **ECS**：阿里云ECS实例。
         * - **SLB**：阿里云SLB实例。
         * - **ALB**：阿里云ALB实例。
         * - **OSS**：阿里云OSS实例。
         * - **ENI**：阿里云弹性网卡。
         * - **NLB**：阿里云NLB实例。
         * @example `Ip`
         */
        Type: string;
        /**
         * 是否开启了保持客户端源IP功能。
         * - **true**：开启了保持客户端源IP功能。
         * - **false**：未开启保持客户端源IP功能。
         * @example `false`
         */
        EnableClientIPPreservation: boolean;
        /**
         * 终端节点的权重。
         * @example `255`
         */
        Weight: number;
        /**
         * 时延探测协议。
         * - **tcp**：TCP协议。
         * - **icmp**：ICMP协议。
         * @example `tcp`
         */
        ProbeProtocol: string;
        /**
         * 终端节点的IP、域名或实例ID。
         * @example `120.XX.XX.21`
         */
        Endpoint: string;
        /**
         * 是否使用ProxyProtocol方式保留客户端源IP。
         * @example `false`
         */
        EnableProxyProtocol: boolean;
        /**
         * 延时监控的探测端口。
         * @example `80`
         */
        ProbePort: number;
        /**
         * 弹性网卡的私网IP地址。
         * @example `172.168.XX.XX`
         */
        SubAddress: string;
    }[];
    /**
     * 端口映射关系。
     */
    PortOverrides: {
        /**
         * 监听端口。
         * @example `443`
         */
        ListenerPort: number;
        /**
         * 终端节点端口。
         * @example `80`
         */
        EndpointPort: number;
    }[];
    /**
     * 后端服务协议。
     * - **HTTP**
     * - **HTTPS**
     * @example `HTTP`
     */
    EndpointRequestProtocol: string;
    /**
     * 终端节点组类型。
     * - **default**：默认终端节点组。
     * - **virtual**：虚拟终端节点组。
     * @example `default`
     */
    EndpointGroupType: string;
    /**
     * 终端节点组关联的转发策略ID。
     */
    ForwardingRuleIds: string[];
    /**
     * 全球加速实例ID。
     * @example `ga-bp1odcab8tmno0hdq****`
     */
    AcceleratorId: string;
    /**
     * 监听实例ID。
     * @example `lsr-bp1bpn0kn908w4nbw****`
     */
    ListenerId: string;
    /**
     * SLS地域。
     * @example `cn-hangzhou`
     */
    SlsRegion: string;
    /**
     * SLS项目名称。
     * @example `pn-01`
     */
    SlsProjectName: string;
    /**
     * SLS日志库名称。
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
     * - **true**：开启访问日志。
     * - **false**：关闭访问日志。
     * @example `true`
     */
    EnableAccessLog: boolean;
    /**
     * 是否开启了健康检查。
     * - **true**：开启健康检查。
     * - **false**：关闭健康检查。
     * @example `true`
     */
    HealthCheckEnabled: boolean;
    /**
     * 托管实例所属的服务方ID。
     * > 仅在**ServiceManaged**参数为**True**时有效。
     * @example `ALB`
     */
    ServiceId: string;
    /**
     * 是否为托管实例。
     * - **true**：是托管实例。
     * - **false**：不是托管实例。
     * @example `true`
     */
    ServiceManaged: boolean;
    /**
     * 用户在此托管实例下可执行的动作策略列表。
     * > - 仅在**ServiceManaged**参数为**True**时有效。
     * > - 当实例处于托管状态时，用户对实例的操作会受到限制，某些操作行为会被禁止。
     */
    ServiceManagedInfos: {
        /**
         * 托管策略动作名称。
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
         * 子资源类型。
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
         * 托管策略动作是否被托管。
         * - **true**：托管策略动作被托管，用户无权在托管实例下执行**Action**指定的操作。
         * - **false**：托管策略动作未被托管，用户可在托管实例下执行**Action**指定的操作。
         * @example `false`
         */
        IsManaged: boolean;
    }[];
    /**
     * 终端节点组的标签。
     */
    Tags: {
        /**
         * 终端节点组的标签键。
         * @example `test-key`
         */
        Key: string;
        /**
         * 终端节点组的标签值。
         * @example `test-value`
         */
        Value: string;
    }[];
}
