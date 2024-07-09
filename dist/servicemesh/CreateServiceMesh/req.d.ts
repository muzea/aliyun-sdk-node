export interface CreateServiceMeshRequest {
    /**
     * 服务网格所在地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * Istio版本号。
     * @example `v1.5.4.1-g5960ec40-aliyun`
     */
    "IstioVersion"?: string;
    /**
     * 专有网络ID。
     * @example `vpc-xzelac2tw4ic7wz31****`
     */
    "VpcId": string;
    /**
     * 是否使用公网地址暴露API Server。取值：
     * - `true`：使用公网地址暴露API Server。
     * - `false`：不使用公网地址暴露API Server。
     * 默认值：`false`。
     * > 若配置为`false`则无法通过外网访问集群API Server。
     * @example `false`
     */
    "ApiServerPublicEip"?: boolean;
    /**
     * 是否启用链路追踪。取值：
     * - `true`：启用链路追踪。
     * - `false`：不启用链路追踪。
     * 默认值：`false`。
     * @example `false`
     */
    "Tracing"?: boolean;
    /**
     * 服务网格名称。
     * @example `mesh1`
     */
    "Name"?: string;
    /**
     * 虚拟交换机ID。
     * @example `["vsw-xzegf5dndkbf4m6eg****"]`
     */
    "VSwitches": string;
    /**
     * 链路追踪采样百分比。
     * @example `100`
     */
    "TraceSampling"?: number;
    /**
     * 是否使用自建Zipkin。取值：
     * - `true`：使用自建Zipkin。
     * - `false`：使用阿里云链路追踪。
     * 默认值：`false`。
     * @example `false`
     */
    "CustomizedZipkin"?: boolean;
    /**
     * 是否启用服务就近访问。取值：
     * - `true`：启用服务就近访问。
     * - `false`：不启用服务就近访问。
     * 默认值：`false`。
     * @example `false`
     */
    "LocalityLoadBalancing"?: boolean;
    /**
     * 服务就近访问配置。
     * @example `{"failover":[{"from":"cn-hangzhou","to":"cn-shanghai"}]}`
     */
    "LocalityLBConf"?: string;
    /**
     * 是否开启采集Prometheus监控指标（建议使用[阿里云Prometheus监控](https://arms.console.aliyun.com/)）。取值：
     * - `true`：开启采集Prometheus监控指标。
     * - `false`：不开启采集Prometheus监控指标。
     * 默认值：`false`。
     * @example `false`
     */
    "Telemetry"?: boolean;
    /**
     * 是否集成开放策略代理（OPA）插件。取值：
     * - `true`：集成开放策略代理（OPA）插件。
     * - `false`：不集成开放策略代理（OPA）插件。
     * 默认值：`false`。
     * @example `false`
     */
    "OpenAgentPolicy"?: boolean;
    /**
     * OPA代理容器日志级别。
     * @example `info`
     */
    "OPALogLevel"?: string;
    /**
     * OPA代理容器的CPU资源请求，可以使用Kubernetes标准CPU表示形式。例如1为1核CPU。
     * @example `1`
     */
    "OPARequestCPU"?: string;
    /**
     * OPA代理容器的内存资源请求，可以使用Kubernetes标准内存表示形式。例如1 Mi为1024 KB。
     * @example `512Mi`
     */
    "OPARequestMemory"?: string;
    /**
     * OPA代理容器的CPU资源限制。
     * @example `2`
     */
    "OPALimitCPU"?: string;
    /**
     * OPA代理容器的内存资源限制，可以使用Kubernetes标准内存表示形式。例如1 Mi为1024 KB。
     * @example `1024Mi`
     */
    "OPALimitMemory"?: string;
    /**
     * 是否启用网格审计（需要开通[阿里云日志服务](https://sls.console.aliyun.com/)）。取值：
     * - `true`：启用网格审计。
     * - `false`：不启用网格审计。
     * 默认值：`false`。
     * @example `false`
     */
    "EnableAudit"?: boolean;
    /**
     * 网格审计对应的日志项目名称。
     * 默认值：mesh-log-{meshId}。
     * @example `mesh-log-xxxx`
     */
    "AuditProject"?: string;
    /**
     * 集群本地域名。
     * @example `cluster.local`
     */
    "ClusterDomain"?: string;
    /**
     * 代理容器的CPU请求资源。
     * @example `100m`
     */
    "ProxyRequestCPU"?: string;
    /**
     * 代理容器的内存请求资源。
     * @example `128Mi`
     */
    "ProxyRequestMemory"?: string;
    /**
     * 代理容器的CPU限制资源。
     * @example `2000m`
     */
    "ProxyLimitCPU"?: string;
    /**
     * 代理容器的内存限制资源。
     * @example `1024Mi`
     */
    "ProxyLimitMemory"?: string;
    /**
     * 拦截对外访问的地址范围。
     * @example `*`
     */
    "IncludeIPRanges"?: string;
    /**
     * 排除拦截对外访问的地址范围。
     * @example `100.100.10*.***`
     */
    "ExcludeIPRanges"?: string;
    /**
     * 以半角英文逗号（,）分隔的出站端口列表。
     * @example `80,81`
     */
    "ExcludeOutboundPorts"?: string;
    /**
     * 以半角英文逗号（,）分隔的入站端口列表。
     * @example `80,81`
     */
    "ExcludeInboundPorts"?: string;
    /**
     * 是否启用OPA。取值：
     * - `true`：启用OPA。
     * - `false`：不启用OPA。
     * 默认值：`false`。
     * @example `false`
     */
    "OpaEnabled"?: boolean;
    /**
     * 是否启用网格拓扑（需先开启采集Prometheus监控指标，当该项更新为`false`时，本项强制为`false`）。取值：
     * - `true`：启用网格拓扑。
     * - `false`：不启用网格拓扑。
     * 默认值：`false`。
     * @example `false`
     */
    "KialiEnabled"?: boolean;
    /**
     * 是否启用访问日志。取值：
     * - `true`：启用访问日志。
     * - `false`：不启用访问日志。
     * 默认值：`false`。
     * @example `false`
     */
    "AccessLogEnabled"?: boolean;
    /**
     * 是否自定义Prometheus。取值：
     * - `true`：自定义Prometheus。
     * - `false`：不自定义Prometheus。
     * 默认值：`false`。
     * @example `false`
     */
    "CustomizedPrometheus"?: boolean;
    /**
     * 自定义Prometheus服务地址。
     * @example `http://prometheus:9090`
     */
    "PrometheusUrl"?: string;
    /**
     * 是否启用Redis Filter能力，取值：
     * - `true`：启用Redis Filter能力。
     * - `false`：不启用Redis Filter能力。
     * 默认值：`false`。
     * @example `true`
     */
    "RedisFilterEnabled"?: boolean;
    /**
     * 是否启用MysqlFilter，取值：
     * - `true`：启用MysqlFilter。
     * - `false`：不启用MysqlFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "MysqlFilterEnabled"?: boolean;
    /**
     * 是否启用ThriftFilter。取值：
     * - `true`：启用ThriftFilter。
     * - `false`：不启用ThriftFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "ThriftFilterEnabled"?: boolean;
    /**
     * 是否启用WebAssemblyFilter。取值：
     * - `true`：启用WebAssemblyFilter。
     * - `false`：不启用WebAssemblyFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "WebAssemblyFilterEnabled"?: boolean;
    /**
     * 是否启用MSE微服务引擎。取值：
     * - `true`：启用MSE微服务引擎。
     * - `false`：不启用MSE微服务引擎。
     * 默认值：`false`。
     * @example `false`
     */
    "MSEEnabled"?: boolean;
    /**
     * 是否启用DNS代理能力。取值：
     * - `true`：启用DNS代理能力。
     * - `false`：不启用DNS代理能力。
     * 默认值：`false`。
     * @example `false`
     */
    "DNSProxyingEnabled"?: boolean;
    /**
     *  ASM实例版本。
     * @example `Pro`
     */
    "Edition"?: string;
    /**
     * 是否启用外部服务注册中心。取值：
     * - `true`：启用外部服务注册中心。
     * - `false`：不启用外部服务注册中心。
     * 默认值：`false`。
     * @example `false`
     */
    "ConfigSourceEnabled"?: boolean;
    /**
     * Nacos注册中心实例ID。
     * @example `mse-cn-tl326******`
     */
    "ConfigSourceNacosID"?: string;
    /**
     * 是否启用DubboFilter。取值：
     * - `true`：启用DubboFilter。
     * - `false`：不启用DubboFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "DubboFilterEnabled"?: boolean;
    /**
     * 是否启用Gateway配置过滤。取值：
     * - `true`：启用Gateway配置过滤。
     * - `false`：不启用Gateway配置过滤。
     * 默认值：`false`。
     * @example `false`
     */
    "FilterGatewayClusterConfig"?: boolean;
    /**
     * 是否启用SDS服务。取值：
     * - `true`：启用SDS服务。
     * - `false`：不启用SDS服务。
     * 默认值：`false`。
     * @example `false`
     */
    "EnableSDSServer"?: boolean;
    /**
     * 是否启用Envoy的gRPC日志服务（ALS）。取值：
     * - `true`：启用Envoy的gRPC日志服务。
     * - `false`：不启用Envoy的gRPC日志服务。
     * 默认值：`false`。
     * @example `false`
     */
    "AccessLogServiceEnabled"?: boolean;
    /**
     * 启用Envoy的gRPC日志服务（ALS）的地址。
     * @example `0.0.0.0`
     */
    "AccessLogServiceHost"?: string;
    /**
     * 启用Envoy的gRPC日志服务（ALS）的端口。
     * @example `9999`
     */
    "AccessLogServicePort"?: number;
    /**
     * 是否启用Gateway API。取值：
     * - `true`：启用Gateway API。
     * - `false`：不启用Gateway API。
     * 默认值：`false`。
     * @example `false`
     */
    "GatewayAPIEnabled"?: boolean;
    /**
     * 是否启用控制面日志采集。取值：
     * - `true`：启用控制面日志采集。
     * - `false`：不启用控制面日志采集。
     * 默认值：`false`。
     * @example `false`
     */
    "ControlPlaneLogEnabled"?: boolean;
    /**
     * 控制面日志采集的SLS Project。
     * @example `mesh-log-cf245a429b6ff4b6e97f20797758*****`
     */
    "ControlPlaneLogProject"?: string;
    /**
     * 自定义访问日志的格式（需选择启用访问日志，否则自动忽略本项）。本项字符串为JSON格式，且JSON字符串中必须至少包含下述的键值：authority_for、bytes_received、bytes_sent、downstream_local_address、downstream_remote_address、duration、istio_policy_status、method、path、protocol、requested_server_name、response_code、response_flags、route_name、start_time、trace_id、upstream_cluster、upstream_host、upstream_local_address、upstream_service_time、upstream_transport_failure_reason、user_agent、x_forwarded_for。
     * @example `{"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}`
     */
    "AccessLogFormat"?: string;
    /**
     * 开启和关闭访问日志。取值：
     * - “”：关闭访问日志。
     * - `/dev/stdout`：开启访问日志。
     * @example `/dev/stdout`
     */
    "AccessLogFile"?: string;
    /**
     * 访问日志采集的SLS Project。
     * @example `mesh-log-cf245a429b6ff4b6e97f20797758*****`
     */
    "AccessLogProject"?: string;
    /**
     * 是否启用ASM的Istio资源历史版本管理功能。取值：
     * - `true`：启用ASM的Istio资源历史版本管理功能。
     * - `false`：不启用ASM的Istio资源历史版本管理功能。
     * 默认值：`false`。
     * @example `false`
     */
    "EnableCRHistory"?: boolean;
    /**
     * 是否启用数据面集群Kubernetes API访问Istio资源（需ASM实例v1.9.7.93版本以上）。取值：
     * - `true`：启用数据面集群Kubernetes API访问Istio资源。
     * - `false`：不启用数据面集群Kubernetes API访问Istio资源。
     * 默认值：`false`。
     * @example `false`
     */
    "CRAggregationEnabled"?: boolean;
    /**
     * APIServer 绑定的CLB规格。取值：简约型I（`slb.s1.small`）、标准型I（`slb.s2.small`）、标准型II（`slb.s2.medium`）、高阶型I（`slb.s3.small`）、高阶型II（`slb.s3.medium`）、超强型I（`slb.s3.large`）。
     * @example `slb.s1.small`
     */
    "ApiServerLoadBalancerSpec"?: string;
    /**
     * 服务网格控制面的Istio Pilot绑定的CLB规格。取值：简约型I（`slb.s1.small`）、标准型I（`slb.s2.small`）、标准型II（`slb.s2.medium`）、高阶型I（`slb.s3.small`）	、高阶型II（`slb.s3.medium`）、超强型I（`slb.s3.large`）。
     * @example `slb.s1.small`
     */
    "PilotLoadBalancerSpec"?: string;
    /**
     * CLB付费类型。取值：
     * - `PayOnDemand`：按量付费类型。
     * - `PrePay`：包年包月类型。
     * @example `PrePay`
     */
    "ChargeType"?: string;
    /**
     * `ChargeType`为`PrePay`时生效。表示购买包年包月类型的CLB时，购买的月份。如果为1年，则输入12。
     * @example `3`
     */
    "Period"?: number;
    /**
     * CLB为包年包月类型时，是否自动续费。取值：
     * - `true`：自动续费。
     * - `false`：不自动续费。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * `ChargeType`为`PrePay`时生效。表示购买包年包月类型的CLB时，自动续费的时间。如果为购买时间小于1年，此参数表示自动续费多少个月；如果购买时长超过1年，此参数表示自动续费多少年。
     * @example `3`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 服务网格实例规格，取值：
     * - `standard`：标准版。
     * - `enterprise`：企业版。
     * - `ultimate`：旗舰版。
     * @example `standard`
     */
    "ClusterSpec"?: string;
    /**
     * 是否启用基于MultiBuffer的TLS性能优化。取值：
     * - `true`：开启。
     * - `false`：不开启。
     * 默认值：`true`。
     * @example `true`
     */
    "MultiBufferEnabled"?: boolean;
    /**
     * MultiBuffer开启状态同步时间。默认`30s`。
     * @example `30s`
     */
    "MultiBufferPollDelay"?: string;
    /**
     * 使用已有的CA证书和私钥。
     * @example `false`
     */
    "UseExistingCA"?: boolean;
    /**
     * CA证书（Base64 Encode格式），该参数一般用于自建Istio迁移ASM的场景下，对应自建Istio集群的istio-system命名空间下名称为istio-ca-secret的secret的ca-cert.pem文件内容。
     * @example `ca cert内容，base64编码格式`
     */
    "ExistingCaCert"?: string;
    /**
     * CA Key（Base64 Encode格式）。该参数一般用于自建Istio迁移ASM的场景下，对应自建Istio集群的istio-system命名空间下名称为istio-ca-secret的secret的ca-key.pem文件内容。
     * @example `ca key内容，base64编码格式`
     */
    "ExistingCaKey"?: string;
    /**
     * 已有的证书类型：
     * - 1：Istiod自签证书。对应istio-system命名空间下名称为istio-ca-secret的secret。若使用该类型，还需要提供`ExistingCaCert` 和`ExsitingCaKey`两个参数。
     * - 2：Istiod外部证书。详情请参见[plugin ca cert](https://istio.io/latest/docs/tasks/security/cert-management/plugin-ca-cert/)。一般对应为istio-system命名空间下名称为cacerts的secret。 若使用该类型，还需要提供`ExisingRootCaCert`和`ExisingRootCaKey`两个参数。
     * @example `1`
     */
    "ExistingCaType"?: string;
    /**
     * 已有的根证书。
     * @example `根证书内容，base64 编码格式`
     */
    "ExistingRootCaCert"?: string;
    /**
     * 已有的根证书对应的私钥。
     * @example `root key的内容，base64编码格式`
     */
    "ExistingRootCaKey"?: string;
    /**
     * 从CaCert到RootCert的证书链，至少包含两个证书。
     * @example `base64编码的PEM证书链。`
     */
    "CertChain"?: string;
    /**
     * 创建网格时可以选择一个集群加入网格，为空时不会添加集群。该集群需要和网格在同一个VPC的同一个VSwitch中，且集群域名相同。
     * @example `ACK集群id`
     */
    "GuestCluster"?: string;
    /**
     * 给服务网格实例打tag标签。包含以下信息：
     * - key：标签名称。
     * - value：标签值。
     */
    "Tag"?: {
        /**
         * 标签名称。
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * @example `prod`
         */
        Value: string;
    }[];
    /**
     * 是否为服务网格实例启用Ambient Mesh模式。
     * @example `false`
     */
    "EnableAmbient"?: boolean;
}
