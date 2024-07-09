export interface DescribeNamespaceScopeSidecarConfigResponse {
    /**
     * 请求ID。
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 命名空间级别配置内容。
     */
    ConfigPatches: {
        /**
         * Sidecar代理终止等待时间。
         * @example `6s`
         */
        TerminationDrainDuration: string;
        /**
         * Sidecar代理初始化容器资源限制。
         */
        SidecarProxyInitResourceLimit: {
            /**
             * CPU资源限制。
             * @example `2000 m`
             */
            ResourceCPULimit: string;
            /**
             * 内存资源限制。
             * @example `50 Mi`
             */
            ResourceMemoryLimit: string;
        };
        /**
         * Sidecar代理初始化容器资源最低申请额度。
         */
        SidecarProxyInitResourceRequest: {
            /**
             * CPU资源最低要求。
             * @example `60 m`
             */
            ResourceCPURequest: string;
            /**
             * 内存资源最低要求。
             * @example `30 Mi`
             */
            ResourceMemoryRequest: string;
        };
        /**
         * Sidecar代理容器资源限制。
         */
        SidecarProxyResourceLimit: {
            /**
             * CPU资源限制。
             * @example `2000 m`
             */
            ResourceCPULimit: string;
            /**
             * 内存资源限制。
             * @example `50 Mi`
             */
            ResourceMemoryLimit: string;
        };
        /**
         * Sidecar代理容器资源最低申请额度。
         */
        SidecarProxyResourceRequest: {
            /**
             * CPU资源最低要求。
             * @example `60 m`
             */
            ResourceCPURequest: string;
            /**
             * 内存资源限制。
             * @example `30 Mi`
             */
            ResourceMemoryRequest: string;
        };
        /**
         * 免于经过Sidecar代理的出口流量端口。
         * @example `81`
         */
        ExcludeOutboundPorts: string;
        /**
         * 免于经过Sidecar代理的出口流量IP地址。
         * @example `192.168.1.3/31`
         */
        ExcludeOutboundIPRanges: string;
        /**
         * 经过Sidecar代理的出口流量IP地址。
         * @example `192.168.1.4/31`
         */
        IncludeOutboundIPRanges: string;
        /**
         * 免于经过Sidecar代理的入口流量端口。
         * @example `82`
         */
        ExcludeInboundPorts: string;
        /**
         * 经过Sidecar代理的入口流量端口。
         * @example `83`
         */
        IncludeInboundPorts: string;
        /**
         * 经过Sidecar代理的出口流量端口。
         * @example `84`
         */
        IncludeOutboundPorts: string;
        /**
         * 是否启用DNS代理功能，取值：
         * - `true`：启用DNS代理功能。
         * - `false`：不启用DNS代理功能。
         * @example `true`
         */
        IstioDNSProxyEnabled: boolean;
        /**
         * Sidecar代理生命周期JSON字符串。
         * @example `{"postStart":{"exec":{"command":["pilot-agent","wait"]}},"preStop":{"exec":{"command":["/bin/sh","-c","sleep 15"]}}}`
         */
        LifecycleStr: string;
        /**
         * istio-proxy并发度设置。
         * @example `2`
         */
        Concurrency: number;
        /**
         * 日志等级，取值：`info`、`debug`、`trace`、`error`。
         * @example `info`
         */
        LogLevel: string;
        /**
         * 应用程序启动前是否等待istio-proxy启动完成，取值：
         * - `true`：应用程序启动前等待istio-proxy启动完成。
         * - `false`：应用程序启动前不等待istio-proxy启动完成。
         * @example `true`
         */
        HoldApplicationUntilProxyStarts: boolean;
        /**
         * 用于Envoy监控统计的指标。
         */
        ProxyStatsMatcher: {
            /**
             * Envoy监控统计的指标前缀列表。
             */
            InclusionPrefixes: string[];
            /**
             * Envoy监控统计的指标后缀列表。
             */
            InclusionSuffixes: string[];
            /**
             * Envoy监控统计的指标正则表达式列表。
             */
            InclusionRegexps: string[];
        };
        /**
         * 自定义的链路追踪配置。
         */
        Tracing: {
            /**
             * 链路追踪的采样率。
             * @example `99.8`
             */
            Sampling: number;
            /**
             * 链路追踪上报的自定义标签。其中键为自定义链路追踪标签的键，String类型；值为自定义链路追踪标签的取值，JSON对象类型，可以选择填入以下字段之一。
             *  - ` literal`：链路追踪标签值将取固定值，JSON对象类型，其中必须包含`value`字段，指定固定的字面量值，例如`{"value":"test"}`。
             *
             * - `header`：链路追踪标签值将取指定的请求头，JSON对象类型，其中必须包含`name`字段和`defaultValue`字段，指定请求头的名称和取不到时的默认值，例如`{"name":"test","defaultValue":"test"}`。
             * - `environment`：链路追踪标签值将取指定的环境变量，JSON对象类型，其中必须包含`name`字段和`defaultValue`字段，指定环境变量的名称和取不到时的默认值，例如`{"name":"test","defaultValue":"test"}`。
             * @example `{"test":{"literal":{"value":"test"}}}`
             */
            CustomTags: any;
            /**
             * 链路追踪标签最大长度限制。
             * @example `10`
             */
            MaxPathTagLength: number;
        };
        /**
         * Sidecar对入向流量的拦截策略，取值如下：
         * - `REDIRECT`：默认的拦截策略，Sidecar将使用重定向方式拦截入向流量。
         * - ` TPROXY`：透明代理拦截策略，Sidecar将以透明代理的方式拦截入向流量。
         * @example `TPROXY`
         */
        InterceptionMode: string;
        /**
         * 在Sidecar代理中额外添加的环境变量，对象中的键和值分别代表添加至Sidecar代理环境变量的键和值。
         */
        ProxyMetadata: any;
        /**
         * Sidecar代理初始化容器资源设置（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器资源。
         */
        SidecarProxyInitAckSloResource: {
            /**
             * Sidecar代理初始化容器资源最低申请额度设置（ACK动态超卖资源形式）。当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器资源最低申请额度。
             * 对象中可能包含两种键，对应两种类型的资源：
             * - `kubernetes.io/batch-cpu`：ACK超卖类型CPU资源，单位为千分之一核。
             * - `kubernetes.io/batch-memory`：ACK超卖类型内存资源。
             */
            Requests: any;
            /**
             * Sidecar代理初始化容器资源限制设置（ACK动态超卖资源形式）。当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理初始化容器资源限制。
             * 对象中可能包含两种键，对应两种类型的资源：
             * - `kubernetes.io/batch-cpu`：ACK超卖类型CPU资源，单位为千分之一核。
             * - `kubernetes.io/batch-memory`：ACK超卖类型内存资源。
             */
            Limits: any;
        };
        /**
         * Sidecar代理容器资源设置（ACK动态超卖资源形式），当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器资源。
         */
        SidecarProxyAckSloResource: {
            /**
             * Sidecar代理容器资源最低申请额度设置（ACK动态超卖资源形式）。当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器资源最低申请额度。
             * 对象中可能包含两种键，对应两种类型的资源：
             * - `kubernetes.io/batch-cpu`：ACK超卖类型CPU资源，单位为千分之一核。
             * - `kubernetes.io/batch-memory`：ACK超卖类型内存资源。
             */
            Requests: any;
            /**
             * Sidecar代理容器资源限制设置（ACK动态超卖资源形式）。当Pod带有ACK动态资源超卖标签`labelkoordinator.sh/qosClass`时，使用此值设定Sidecar代理容器资源限制。
             * 对象中可能包含两种键，对应两种类型的资源：
             * - `kubernetes.io/batch-cpu`：ACK超卖类型CPU资源，单位为千分之一核。
             * - `kubernetes.io/batch-memory`：ACK超卖类型内存资源。
             */
            Limits: any;
        };
        /**
         * 是否在Sidecar代理容器的安全上下文中为Sidecar代理容器设定为特权，取值：
         * - `true`：Sidecar代理容器具有特权。
         * - `false`：Sidecar代理容器没有特权。
         * @example `false`
         */
        Privileged: boolean;
        /**
         * 是否为Sidecar代理容器启用Core Dump（程序崩溃时转储内存状态），取值：
         * - `true`：为Sidecar代理容器启用Core Dump。
         * - `false`：不为Sidecar代理容器启用Core Dump。
         * @example `false`
         */
        EnableCoreDump: boolean;
        /**
         * 在开始进行Sidecar代理容器的就绪性检查前等待的时间（单位：秒）。
         * @example `2`
         */
        ReadinessInitialDelaySeconds: number;
        /**
         * 对Sidecar代理容器进行就绪性检查时，两次检查之间的时间间隔（单位：秒）。
         * @example `3`
         */
        ReadinessPeriodSeconds: number;
        /**
         * 判断Sidecar代理容器不就绪时所需的就绪性检查失败次数阈值。
         * @example `5`
         */
        ReadinessFailureThreshold: number;
        /**
         * SMC-R优化相关配置。
         */
        SMCConfiguration: {
            /**
             * 是否启用 SMC-R优化（ SMC-R可以优化跨节点通信性能，依赖Alibaba Cloud Linux 3以及节点 eRDMA 网络设备）
             * @example `true`
             */
            Enabled: boolean;
        };
    };
}
