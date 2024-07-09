export interface UpdateNamespaceScopeSidecarConfigRequest {
    /**
     * ASM实例ID。
     * @example `ca04bc38979214bf2882be79d39b4****`
     */
    "ServiceMeshId": string;
    /**
     * 命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 拦截对外访问的地址范围`global.proxy.includelPRanges`。
     * @example `*`
     */
    "IncludeIPRanges"?: string;
    /**
     * 不拦截对外访问的地址范围`global.proxy.excludelPRanges`。
     * @example `172.16.0.0/12`
     */
    "ExcludeIPRanges"?: string;
    /**
     * 经过Sidecar代理的入口流量端口。
     * @example `83`
     */
    "IncludeInboundPorts"?: string;
    /**
     * 免于经过Sidecar代理的出口流量端口。
     * @example `81`
     */
    "ExcludeOutboundPorts"?: string;
    /**
     * 免于经过Sidecar代理的入口流量端口。
     * @example `82`
     */
    "ExcludeInboundPorts"?: string;
    /**
     * 经过Sidecar代理的出口流量端口。
     * @example `84`
     */
    "IncludeOutboundPorts"?: string;
    /**
     * Sidecar代理终止等待时间。
     * @example `6s`
     */
    "TerminationDrainDuration"?: string;
    /**
     * Sidecar代理初始化容器CPU资源限制。
     * @example `2000 m`
     */
    "ProxyInitCPUResourceLimit"?: string;
    /**
     * Sidecar代理初始化容器内存资源限制。
     * @example `50 Mi`
     */
    "ProxyInitMemoryResourceLimit"?: string;
    /**
     * Sidecar代理初始化容器CPU资源最低申请额度。
     * @example `60 m`
     */
    "ProxyInitCPUResourceRequest"?: string;
    /**
     * Sidecar代理初始化容器内存资源最低申请额度。
     * @example `30 Mi`
     */
    "ProxyInitMemoryResourceRequest"?: string;
    /**
     * Sidecar代理容器CPU资源限制。
     * @example `2000 m`
     */
    "SidecarProxyCPUResourceLimit"?: string;
    /**
     * Sidecar代理容器内存资源限制。
     * @example `50 Mi`
     */
    "SidecarProxyMemoryResourceLimit"?: string;
    /**
     * Sidecar代理容器CPU资源最低申请额度。
     * @example `60 m`
     */
    "SidecarProxyCPUResourceRequest"?: string;
    /**
     * Sidecar代理容器内存资源最低申请额度。
     * @example `30 Mi`
     */
    "SidecarProxyMemoryResourceRequest"?: string;
    /**
     * Sidecar Proxy生命周期设置。
     * @example `{"postStart":{"exec":{"command":["pilot-agent","wait"]}},"preStop":{"exec":{"command":["/bin/sh","-c","sleep 15"]}}}`
     */
    "Lifecycle"?: string;
    /**
     * 是否启用DNS代理功能，取值：
     * - `true`：启用DNS代理功能。
     * - `false`：不启用DNS代理功能。
     * @example `true`
     */
    "IstioDNSProxyEnabled"?: boolean;
    /**
     * istio-proxy启动后执行参数。
     * @example `{"exec":{"command":["pilot-agent","wait"]}}`
     */
    "PostStart"?: string;
    /**
     * istio-proxy终止前执行参数。
     * @example `{"exec":{"command":["/bin/sh","-c","sleep 15"]}}`
     */
    "PreStop"?: string;
    /**
     * istio-proxy并发度设置。
     * @example `2`
     */
    "Concurrency"?: number;
    /**
     * 用于Envoy监控统计的指标，使用JSON格式表示。
     * @example `{ "inclusionPrefixes": [ "cluster.outbound", "cluster_manager", "listener_manager", "server", "cluster.xds-grpc" ], "inclusionRegexps": [ "listener.*.downstream_cx_total", "listener.*.downstream_cx_active" ] }`
     */
    "ProxyStatsMatcher"?: string;
    /**
     * 应用程序启动前是否等待istio-proxy启动完成，取值：
     * - `true`：应用程序启动前等待istio-proxy启动完成。
     * - `false`：应用程序启动前不等待istio-proxy启动完成。
     * @example `true`
     */
    "HoldApplicationUntilProxyStarts"?: boolean;
    /**
     * 日志等级，取值：`info`、`debug`、`tracing`、`error`。
     * @example `info`
     */
    "LogLevel"?: string;
    /**
     * 自定义的链路追踪配置，需要将链路追踪配置序列化为JSON字符串后传入。链路追踪配置中包含以下字段：
     * - `sampling`：Double类型，链路追踪的采样率。
     * - `custom_tags`：Map类型，其中键为自定义链路追踪标签的键，String类型；值为自定义链路追踪标签的取值，JSON对象类型，可以选择填入以下字段之一。
     *     -  `literal`：链路追踪标签值将取固定值，JSON对象类型，其中必须包含`value`字段，指定固定的字面量值，例如`{"value":"test"}`。
     *     - `header`：链路追踪标签值将取指定的请求头，JSON对象类型，其中必须包含`name`字段和`defaultValue`字段，指定请求头的名称和取不到时的默认值，例如`{"name":"test","defaultValue":"test"}`。
     *     - `environment`：链路追踪标签值将取指定的环境变量，JSON对象类型，其中必须包含`name`字段和`defaultValue`字段，指定环境变量的名称和取不到时的默认值，例如`{"name":"test","defaultValue":"test"}`。
     * @example `{"sampling":99.8,"custom_tags":{"test":{"literal":{"value":"testnamespace"}}}}`
     */
    "Tracing"?: string;
    /**
     * Sidecar对入向流量的拦截策略，取值如下：
     * - `REDIRECT`：默认的拦截策略，Sidecar将使用重定向方式拦截入向流量。
     * - `TPROXY`：透明代理拦截策略，Sidecar将以透明代理的方式拦截入向流量。
     * @example `TPROXY`
     */
    "InterceptionMode"?: string;
    /**
     * 在Sidecar代理中额外添加的环境变量，以JSON对象的形式表示。JSON对象中的键和值分别代表添加至Sidecar代理环境变量的键和值。
     * @example `{"EXIT_ON_ZERO_ACTIVE_CONNECTIONS":"true"}`
     */
    "ProxyMetadata"?: string;
    /**
     * Sidecar代理初始化容器CPU资源限制（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器CPU资源限制。单位为千分之一核。
     * @example `2000`
     */
    "ProxyInitAckSloCPUResourceLimit"?: string;
    /**
     * Sidecar代理初始化容器内存资源限制（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器内存资源限制。
     * @example `2048Mi`
     */
    "ProxyInitAckSloMemoryResourceLimit"?: string;
    /**
     * Sidecar代理初始化容器CPU资源最低申请额度（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器CPU资源最低申请额度。单位为千分之一核。
     * @example `100`
     */
    "ProxyInitAckSloCPUResourceRequest"?: string;
    /**
     * Sidecar代理初始化容器内存资源最低申请额度（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器内存资源最低申请额度。
     * @example `128Mi`
     */
    "ProxyInitAckSloMemoryResourceRequest"?: string;
    /**
     * Sidecar代理容器CPU资源限制（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器CPU资源限制。单位为千分之一核。
     * @example `2000`
     */
    "SidecarProxyAckSloCPUResourceLimit"?: string;
    /**
     * Sidecar代理容器内存资源限制（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器内存资源限制。
     * @example `2048Mi`
     */
    "SidecarProxyAckSloMemoryResourceLimit"?: string;
    /**
     * Sidecar代理容器CPU资源最低申请额度（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器CPU资源最低申请额度。单位为千分之一核。
     * @example `100`
     */
    "SidecarProxyAckSloCPUResourceRequest"?: string;
    /**
     * Sidecar代理容器内存资源最低申请额度（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器内存资源最低申请额度。
     * @example `128Mi`
     */
    "SidecarProxyAckSloMemoryResourceRequest"?: string;
    /**
     * 是否在Sidecar代理容器的安全上下文中为Sidecar代理容器设定为特权，取值：
     * - `true`：Sidecar代理容器具有特权。
     * - `false`：Sidecar代理容器没有特权。
     * @example `false`
     */
    "Privileged"?: boolean;
    /**
     * 是否为Sidecar代理容器启用Core Dump（程序崩溃时转储内存状态），取值：
     * - `true`：为Sidecar代理容器启用Core Dump。
     * - `false`：不为Sidecar代理容器启用Core Dump。
     * @example `false`
     */
    "EnableCoreDump"?: boolean;
    /**
     * 在开始进行Sidecar代理容器的就绪性检查前等待的时间（单位：秒）。
     * @example `1`
     */
    "ReadinessInitialDelaySeconds"?: number;
    /**
     * 对Sidecar代理容器进行就绪性检查时，两次检查之间的时间间隔（单位：秒）。
     * @example `2`
     */
    "ReadinessPeriodSeconds"?: number;
    /**
     * 判断Sidecar代理容器不就绪时所需的就绪性检查失败次数阈值。
     * @example `5`
     */
    "ReadinessFailureThreshold"?: number;
    /**
     * 是否启用 SMC-R优化（SMC-R优化可优化跨节点通信性能，依赖Alibaba Cloud Linux 3以及节点 eRDMA 网络设备）
     * @example `false`
     */
    "SMCEnabled"?: boolean;
}
