export interface UpdateMeshFeatureRequest {
    /**
     * 服务网格ID。
     * @example `cb8963379255149cb98c8686f274x****`
     */
    "ServiceMeshId": string;
    /**
     * 启用链路追踪（需要开通[可观测链路OpenTelemetry版](https://tracing-analysis.console.aliyun.com/)）。取值：
     * - `true`：启用链路追踪。
     * - `false`：不启用链路追踪。
     * 默认值：`false`。
     * @example `false`
     */
    "Tracing"?: boolean;
    /**
     * 链路追踪采样百分比。
     * @example `100`
     */
    "TraceSampling"?: number;
    /**
     * 自定义链路追踪标签设置，格式为JSON，结构为：
     * ```
     * {
     *     "name1": CustomTag,
     *     "name2": CustomTag
     * }
     * ```
     * CustomTag结构为：literal、header或environment，请任选其一。
     * ```
     * {
     *     "literal": {
     *         "value": "固定值"
     *     }
     *     "header": {
     *         "name": "HEADER名称",
     *         "defaultValue": "若指定HEADER不存在，使用的默认值。"
     *     }
     *     "environment": {
     *         "name": "环境变量名称",
     *         "defaultValue": "若指定环境变量不存在，使用的默认值。"
     *     }
     * }
     * ```
     * @example `{"mytag": {"literal":{"value":"test"}}}`
     */
    "TraceCustomTags"?: string;
    /**
     * HttpUrl Span标签中包含的请求路径的最大长度，默认值为`256`。
     * @example `256`
     */
    "TraceMaxPathTagLength"?: string;
    /**
     * 是否启用跨地域负载均衡，取值：
     * - `true`：启用跨地域负载均衡。
     * - `false`：不启用跨地域负载均衡。
     * 默认值：`false`。
     * @example `true`
     */
    "LocalityLoadBalancing"?: boolean;
    /**
     * 跨地域负载均衡配置，取值：
     *
     * - `failover`：跨地域故障转移配置，例如：
     *
     * ```
     *     failover: [//  struct，跨地域故障转移配置。
     *         {
     *             // 当北京地域服务故障时，流量转移到杭州同服务。
     *             from: "cn-beijing",
     *             to: "cn-hangzhou",
     *         }
     *     ]
     * ```
     * - `distribute`：跨地域流量分布配置，例如：
     * ```
     * distribute: [ // struct, 跨地域流量分布配置 。
     *         {
     *             // 路由到北京地域的流量70%分配到北京，30%分配到杭州。
     *             "from": "cn-beijing",
     *             "to": {
     *                 "cn-beijing": 70,
     *                 "cn-hangzhou": 30,
     *             }
     *         }
     *     ]
     * ```
     * @example `{"failover":[{"from":"cn-hangzhou","to":"cn-shanghai"}]}`
     */
    "LocalityLBConf"?: string;
    /**
     * 是否开启采集Prometheus监控指标（建议使用[阿里云Prometheus监控](https://arms.console.aliyun.com/)），取值：
     * - `true`：开启采集Prometheus监控指标。
     * - `false`：不开启采集Prometheus监控指标。
     * 默认值：`false`。
     * @example `false`
     */
    "Telemetry"?: boolean;
    /**
     * 是否集成开放策略代理（OPA）插件，取值：
     * - `true`：集成开放策略代理（OPA）插件。
     * - `false`：不集成开放策略代理（OPA）插件。
     * 默认值：`false`。
     * @example `false`
     */
    "OpenAgentPolicy"?: boolean;
    /**
     * OPA代理容器日志级别，取值：
     * - `info`：输出所有信息。
     * - `debug`：输出调试信息和错误信息。
     * - `error`：仅输出错误信息。
     * @example `info`
     */
    "OPALogLevel"?: string;
    /**
     * OPA代理容器的CPU资源请求。
     * @example `1`
     */
    "OPARequestCPU"?: string;
    /**
     * OPA代理容器的内存资源请求。
     * @example `512Mi`
     */
    "OPARequestMemory"?: string;
    /**
     * OPA代理容器的CPU资源限制。
     * @example `2`
     */
    "OPALimitCPU"?: string;
    /**
     * OPA代理容器的内存资源限制。
     * @example `1024Mi`
     */
    "OPALimitMemory"?: string;
    /**
     * 是否启用网格审计（需要开通[阿里云日志服务](https://sls.console.aliyun.com/)），取值：
     * - `true`：启用网格审计。
     * - `false`：不启用网格审计。
     * 默认值：`false`。
     * @example `false`
     */
    "EnableAudit"?: boolean;
    /**
     * 网格审计对应的日志项目名称。
     * 默认值：`mesh-log-{meshId}`。
     * @example `mesh-log-c08ba3fd1e64xxb0f8cc1ad8****`
     */
    "AuditProject"?: string;
    /**
     * 是否启用自建Zipkin，取值：
     * - `true`：启用自建Zipkin。
     * - `false`：不启用自建Zipkin。
     * 默认值：`false`。
     * @example `false`
     */
    "CustomizedZipkin"?: boolean;
    /**
     * 对外部服务的访问策略，取值：
     * - `ALLOW_ANY`：允许访问所有外部服务。
     * - `REGISTRY_ONLY`：只能访问注册到网格内的服务。
     * @example `ALLOW_ANY`
     */
    "OutboundTrafficPolicy"?: string;
    /**
     * CPU所需资源。
     * @example `100m`
     */
    "ProxyRequestCPU"?: string;
    /**
     * 内存所需资源。
     * @example `128Mi`
     */
    "ProxyRequestMemory"?: string;
    /**
     * CPU资源限制。
     * @example `2000m`
     */
    "ProxyLimitCPU"?: string;
    /**
     * 内存资源限制。
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
     * @example `100.100.XXX.XXX`
     */
    "ExcludeIPRanges"?: string;
    /**
     * 以英文半角逗号（,）分隔的出站端口列表。
     * @example `80,81`
     */
    "ExcludeOutboundPorts"?: string;
    /**
     * 设置端口使Inbound流量经过Sidecar。
     * @example `80,81`
     */
    "IncludeInboundPorts"?: string;
    /**
     * 以英文半角逗号（,）分隔的入站端口列表。
     * @example `80,81`
     */
    "ExcludeInboundPorts"?: string;
    /**
     * 是否为所有命名空间开启自动注入功能，取值：
     * - `true`：为所有命名空间开启自动注入功能。
     * - `false`：不为所有命名空间开启自动注入功能。
     * 默认值：`false`。
     * @example `false`
     */
    "EnableNamespacesByDefault"?: boolean;
    /**
     * 是否开启通过Pod Annotations实现自动注入Sidecar，取值：
     * - `true`：开启通过Pod Annotations实现自动注入Sidecar。
     * - `false`：不开启通过Pod Annotations实现自动注入Sidecar。
     * 默认值：`false`。
     * @example `false`
     */
    "AutoInjectionPolicyEnabled"?: boolean;
    /**
     * Sidecar注入器Pod的CPU请求资源。
     * @example `1000m`
     */
    "SidecarInjectorRequestCPU"?: string;
    /**
     * Sidecar注入器Pod的内存请求资源。
     * @example `512Mi`
     */
    "SidecarInjectorRequestMemory"?: string;
    /**
     * Sidecar注入器Pod的CPU限制资源。
     * @example `4000m`
     */
    "SidecarInjectorLimitCPU"?: string;
    /**
     * Sidecar注入器Pod的内存限制资源。
     * @example `2048Mi`
     */
    "SidecarInjectorLimitMemory"?: string;
    /**
     * 其他自动注入Sidecar的配置（YAML格式）。
     * @example `{"injectedAnnotations":{"test/istio-init":"runtime/default2","test/istio-proxy":"runtime/default"},"replicaCount":2,"nodeSelector":{"beta.kubernetes.io/os":"linux"}}`
     */
    "SidecarInjectorWebhookAsYaml"?: string;
    /**
     * 是否启用CNI，取值：
     * - `true`：启用CNI。
     * - `false`：不启用CNI。
     * 默认值：`false`。
     * @example `false`
     */
    "CniEnabled"?: boolean;
    /**
     * CNI排除的命名空间。
     * @example `kube-system`
     */
    "CniExcludeNamespaces"?: string;
    /**
     * 是否启用OPA，取值：
     * - `true`：启用OPA。
     * - `false`：不启用OPA。
     * 默认值：`false`。
     * @example `false`
     */
    "OpaEnabled"?: boolean;
    /**
     * 是否支持HTTP1.0，取值：
     * - `true`：支持HTTP1.0。
     * - `false`：不支持HTTP1.0。
     * 默认值：`false`。
     * @example `false`
     */
    "Http10Enabled"?: boolean;
    /**
     * 是否启用网格拓扑（需先开启采集Prometheus监控指标，当该项更新为`false`时，本项强制为`false`），取值：
     * - `true`：启用网格拓扑。
     * - `false`：不启用网格拓扑。
     * 默认值：`false`。
     * @example `false`
     */
    "KialiEnabled"?: boolean;
    /**
     * 是否自定义Prometheus，取值：
     * - `true`：自定义Prometheus。
     * - `false`：不自定义Prometheus。
     * 默认值：`false`。
     * @example `false`
     */
    "CustomizedPrometheus"?: boolean;
    /**
     * Prometheus服务地址（非自定义情况下，使用ARMS地址格式）。
     * @example `http://prometheus:9090`
     */
    "PrometheusUrl"?: string;
    /**
     * 是否启用访问日志采集，取值：
     * - `true`：启用访问日志采集。
     * - `false`：不启用访问日志采集。
     * 默认值：`false`。
     * @example `false`
     */
    "AccessLogEnabled"?: boolean;
    /**
     * 是否启用MSE微服务引擎，取值：
     * - `true`：启用MSE微服务引擎。
     * - `false`：不启用MSE微服务引擎。
     * 默认值：`false`。
     * @example `false`
     */
    "MSEEnabled"?: boolean;
    /**
     * 是否启用RedisFilter，取值：
     * - `true`：启用RedisFilter。
     * - `false`：不启用RedisFilter。
     * 默认值：`false`。
     * @example `false`
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
     * 是否启用ThriftFilter，取值：
     * - `true`：启用ThriftFilter。
     * - `false`：不启用ThriftFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "ThriftFilterEnabled"?: boolean;
    /**
     * 是否启用WebAssemblyFilter，取值：
     * - `true`：启用WebAssemblyFilter。
     * - `false`：不启用WebAssemblyFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "WebAssemblyFilterEnabled"?: boolean;
    /**
     * 是否启用DNS Proxying，取值：
     * - `true`：启用DNS Proxying。
     * - `false`：不启用DNS Proxying。
     * 默认值：`false`。
     * @example `false`
     */
    "DNSProxyingEnabled"?: boolean;
    /**
     * 是否启用DubboFilter，取值：
     * - `true`：启用DubboFilter。
     * - `false`：不启用DubboFilter。
     * 默认值：`false`。
     * @example `false`
     */
    "DubboFilterEnabled"?: boolean;
    /**
     * 是否启用Gateway配置过滤，取值：
     * - `true`：启用Gateway配置过滤。
     * - `false`：不启用Gateway配置过滤。
     * 默认值：`false`。
     * @example `false`
     */
    "FilterGatewayClusterConfig"?: boolean;
    /**
     * 是否启用SDS服务，取值：
     * - `true`：启用SDS服务。
     * - `false`：不启用SDS服务。
     * 默认值：`false`。
     * @example `false`
     */
    "EnableSDSServer"?: boolean;
    /**
     * 是否启用Envoy的gRPC日志服务，取值：
     * - `true`：启用Envoy的gRPC日志服务（ALS）。
     * - `false`：不启用Envoy的gRPC日志服务（ALS）。
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
     * 是否启用Gateway API，取值：
     * - `true`：启用Gateway API。
     * - `false`：不启用Gateway API。
     * 默认值：`false`。
     * @example `false`
     */
    "GatewayAPIEnabled"?: boolean;
    /**
     * 是否启用外部服务注册中心，取值：
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
     * 自定义访问日志的格式（需先启用访问日志，否则自动忽略本项）。本项字符串为JSON格式，且JSON字符串中必须至少包含以下键值：authority\_for、bytes\_received、bytes\_sent、downstream\_local\_address、downstream\_remote\_address、duration、istio\_policy\_status、method、path、protocol、requested\_server\_name、response\_code、response\_flags、route\_name、start\_time、trace\_id、upstream\_cluster、upstream\_host、upstream\_local\_address、upstream\_service\_time、upstream\_transport\_failure\_reason、user\_agent、x\_forwarded\_for。
     * @example `{"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}`
     */
    "AccessLogFormat"?: string;
    /**
     * 开启和关闭访问日志，取值：
     * - `“”`：关闭访问日志。
     * - `/dev/stdout`：开启访问日志。
     * @example `“”`
     */
    "AccessLogFile"?: string;
    /**
     * 自定义日志服务SLS采集的Project。
     * @example `mesh-log-cf245a429b6ff4b6e97f20797758e****`
     */
    "AccessLogProject"?: string;
    /**
     * 设置是否启用ASM的Istio资源历史版本管理功能。
     * @example `false`
     */
    "EnableCRHistory"?: boolean;
    /**
     * 设置是否启用数据面集群Kubernetes API访问Istio资源（需ASM实例v1.9.7.93版本以上）。
     * @example `false`
     */
    "CRAggregationEnabled"?: boolean;
    /**
     * istio-proxy终止等待时长，例如5秒，输入为5s。
     * @example `5s`
     */
    "TerminationDrainDuration"?: string;
    /**
     * istio-init初始化容器CPU资源限制。
     * @example `2000m`
     */
    "ProxyInitCPUResourceLimit"?: string;
    /**
     * istio-init初始化容器内存资源限制。
     * @example `1024Mi`
     */
    "ProxyInitMemoryResourceLimit"?: string;
    /**
     * istio-init初始化容器CPU资源所需。
     * @example `10m`
     */
    "ProxyInitCPUResourceRequest"?: string;
    /**
     * istio-init初始化容器内存资源所需。
     * @example `10Mi`
     */
    "ProxyInitMemoryResourceRequest"?: string;
    /**
     * istio-proxy生命周期。
     * @example `{"postStart":{"exec":{"command":["pilot-agent","wait"]}},"preStop":{"exec":{"command":["/bin/sh","-c","sleep 15"]}}}`
     */
    "Lifecycle"?: string;
    /**
     * 开启MultiBuffer加速功能。
     * @example `false`
     */
    "MultiBufferEnabled"?: boolean;
    /**
     * MultiBuffer的策略拉取延迟，默认为空 。
     * @example `0.02s`
     */
    "MultiBufferPollDelay"?: string;
    /**
     * 用于选择性服务发现的数据平面命名空间标签选择器列表。
     * @example `[{"matchExpressions":[{"key":"asm-discovery","operator":"Exists"}]}]`
     */
    "DiscoverySelectors"?: string;
    /**
     * 服务网格实例规格，取值：
     * - `standard`：标准版。
     * - `enterprise`：企业版。
     * - `ultimate`：旗舰版。
     * @example `standard`
     */
    "ClusterSpec"?: string;
    /**
     * 是否启用OPA注入范围控制能力，取值：
     * - `true`：启用OPA注入范围控制能力。
     * - `false`：不启用OPA注入范围控制能力。
     * @example `false`
     */
    "OPAScopeInjected"?: boolean;
    /**
     * 负责注入OPA代理的Pod所申请的最少CPU核数。例如`1000m`表示1核CPU。
     * @example `80m`
     */
    "OPAInjectorCPURequirement"?: string;
    /**
     * 负责注入OPA代理的Pod所申请的最少内存。例如`50 Mi`表示50 MB。
     * @example `50Mi`
     */
    "OPAInjectorMemoryRequirement"?: string;
    /**
     * 负责注入OPA代理的Pod所限制的最大CPU核数。例如`1000m`表示1核CPU。
     * @example `1000m`
     */
    "OPAInjectorCPULimit"?: string;
    /**
     * 负责注入OPA代理的Pod所限制的最大内存。例如`1024Mi`表示1024 MB。
     * @example `1024Mi`
     */
    "OPAInjectorMemoryLimit"?: string;
    /**
     * 是否为访问ASM网格拓扑创建CLB。
     * @example `false`
     */
    "IntegrateKiali"?: boolean;
    /**
     * 是否启用节点特征自动获取能力。
     * @example `false`
     */
    "NFDEnabled"?: boolean;
    /**
     * 是否在禁用节点特征自动获取能力时，清除节点上的特征相关标签。
     * 此字段仅在禁用节点特征自动获取能力时（即设置`NFDEnabled`为`false`时）需要设置。
     * @example `false`
     */
    "NFDLabelPruned"?: boolean;
    /**
     * 负载链路追踪导出的代理服务所申请的最少CPU核数。例如`1000m`表示1核CPU。
     * @example `200m`
     */
    "TracingOnExtZipkinRequestCPU"?: string;
    /**
     * 负载链路追踪导出的代理服务所申请的最少内存。例如`1Mi`表示1 MB。
     * @example `200Mi`
     */
    "TracingOnExtZipkinRequestMemory"?: string;
    /**
     * 负载链路追踪导出的代理服务所限制的最大CPU核数。例如`1000m`表示1核CPU。
     * @example `1000Mi`
     */
    "TracingOnExtZipkinLimitCPU"?: string;
    /**
     * 负载链路追踪导出的代理服务所限制的最大内存。例如`1Mi`表示1 MB。
     * @example `1024Mi`
     */
    "TracingOnExtZipkinLimitMemory"?: string;
    /**
     * 负载链路追踪导出的代理服务的副本数量。
     * @example `2`
     */
    "TracingOnExtZipkinReplicaCount"?: string;
    /**
     * 采集到SLS的入口网关访问日志的存储周期（天）。例如`30`代表30天。
     * @example `30`
     */
    "AccessLogGatewayLifecycle"?: number;
    /**
     * 采集到SLS的Sidecar访问日志的存储周期（天）。例如`30`代表30天。
     * @example `30`
     */
    "AccessLogSidecarLifecycle"?: number;
    /**
     * 是否启用网格自动诊断功能（开启后，当修改网格内Istio资源时，将会自动对网格进行诊断）。
     * @example `true`
     */
    "EnableAutoDiagnosis"?: boolean;
    /**
     * 设置端口使outbound流量经过Sidecar。
     * @example `8000,8001`
     */
    "IncludeOutboundPorts"?: string;
    /**
     * 设置数据面Sidecar代理的日志级别。日志级别按输出日志信息量从低到高排序依次为`none`、`error`、`warn`、`info`、`debug`。
     * @example `info`
     */
    "LogLevel"?: string;
    /**
     * 设置数据面Sidecar代理的并行度。
     * @example `2`
     */
    "Concurrency"?: number;
    /**
     * 设置在Pod启动时是否先等待Sidecar代理容器启动再启动业务容器。
     * @example `true`
     */
    "HoldApplicationUntilProxyStarts"?: boolean;
    /**
     * 设定数据面Sidecar代理额外上报的指标。
     * @example `{"inclusionRegexps":".*adaptive_concurrency.*"}`
     */
    "ProxyStatsMatcher"?: string;
    /**
     * Sidecar对入向流量的拦截策略。取值：
     * - `REDIRECT`：默认的拦截策略，Sidecar将使用重定向方式拦截入向流量。
     * - `TPROXY`：透明代理拦截策略，Sidecar将以透明代理的方式拦截入向流量。
     * @example `TPROXY`
     */
    "InterceptionMode"?: string;
    /**
     * 设定是否令Sidecar代理在启动前加载bootstrap配置
     * @example `true`
     */
    "EnableBootstrapXdsAgent"?: boolean;
    /**
     * 当启用网格拓扑功能且集成ARMS Prometheus采集监控指标时，若ARMS Prometheus实例配置了鉴权token，通过此参数设定ARMS Prometheus的鉴权Token，以授权网格拓扑访问ARMS Prometheus实例。
     * 参数格式为JSON编码的字符串，JSON对象中的键为数据面集群的集群ID，值为数据面集群内安装的ARMS Prometheus实例设定的鉴权Token。
     * @example `{"c31e3b******5634b":"token_example"}`
     */
    "KialiArmsAuthTokens"?: string;
    /**
     * ASM下发到数据面组件的默认调度配置。支持以JSON的形式配置`nodeSelector`和`tolerations`。
     * > - 该参数的修改属于高危操作。该操作会导致ASM所有的数据面组件重启，请谨慎操作。
     * >- 此处配置不包括ASM网关，网关调度请在网关中配置。
     * @example `{"tolerations":[{"key":"test-taints", "operator":"Exists", "effect":"NoSchedule"}], "nodeSelector":{"kubernetes.io/hostname":"test-nodes"}}`
     */
    "DefaultComponentsScheduleConfig"?: string;
    /**
     * 当开启网格拓扑且为访问网格拓扑创建CLB时，通过此参数使用Annotation配置不同集群中网格拓扑服务的CLB。
     * 参数格式为JSON编码的字符串，JSON对象中的键为数据面集群的集群ID，值为数据面集群中网格拓扑服务的Annotation内容。
     * 有关如何通过注解配置CLB，请参考<props="china"> [通过Annotation配置传统型负载均衡CLB](https://help.aliyun.com/document_detail/86531.html)</props><props="intl">[通过Annotation配置传统型负载均衡CLB](https://www.alibabacloud.com/help/container-service-for-kubernetes/latest/use-annotations-to-configure-load-balancing-1)</props>。
     * @example `{"c31e3b******5634b":{"service.beta.kubernetes.io/alibaba-cloud-loadbalancer-address-type":"intranet"}}`
     */
    "KialiServiceAnnotations"?: string;
    /**
     * 是否启用将ASM网关访问日志采集到阿里云日志服务SLS。
     * @example `false`
     */
    "AccessLogGatewayEnabled"?: boolean;
    /**
     * 是否启用将ASM网格代理（Sidecar）的日志采集到阿里云日志服务SLS。
     * @example `false`
     */
    "AccessLogSidecarEnabled"?: boolean;
    /**
     * 隔离工作负载的标签
     * @example `name=xx,region=xx`
     */
    "LabelsForOffloadedWorkloads"?: string;
    /**
     * 新的RootCert。仅当创建网格时使用了自定义证书时才可以修改该参数。
     * @example `Base64编码的PEM证书。`
     */
    "ExistingRootCaCert"?: string;
    /**
     * 新的CaCert。仅当创建网格时使用了自定义证书时才可以修改该参数。
     * @example `Base64编码的PEM证书。`
     */
    "ExistingCaCert"?: string;
    /**
     * 新的CaKey。仅当创建网格时使用了自定义证书时才可以修改该参数。
     * @example `Base64编码的PEM私钥。`
     */
    "ExistingCaKey"?: string;
    /**
     * 从CaCert到RootCert的证书链，至少包含两个证书。
     * @example `Base64编码的PEM证书链。`
     */
    "CertChain"?: string;
    /**
     * 是否安装 SMC 加速
     * @example `false`
     */
    "SMCEnabled"?: boolean;
    /**
     * 是否启用HTTP/3支持。
     * @example `false`
     */
    "PilotEnableQuicListeners"?: boolean;
}
