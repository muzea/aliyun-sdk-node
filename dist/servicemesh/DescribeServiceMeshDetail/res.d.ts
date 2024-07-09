export interface DescribeServiceMeshDetailResponse {
    /**
     * 请求ID。
     * @example `11fd0027-c27e-41bb-a565-75583054****`
     */
    RequestId: string;
    /**
     * 服务网格详情。
     */
    ServiceMesh: {
        /**
         * 端点详情。
         */
        Endpoints: {
            /**
             * Istio Pilot地址（内网）。
             * @example `192.168.**.**:15011`
             */
            IntranetPilotEndpoint: string;
            /**
             * Istio Pilot地址（公网）。
             * @example `182.92.**.**:15011`
             */
            PublicPilotEndpoint: string;
            /**
             * API Server地址（内网）。
             * @example `https://192.168.**.**:6443`
             */
            IntranetApiServerEndpoint: string;
            /**
             * API Server地址（公网）。
             * @example `https://123.56.**.**:6443`
             */
            PublicApiServerEndpoint: string;
        };
        /**
         * 服务网格基本信息。
         */
        ServiceMeshInfo: {
            /**
             * 网格规格。取值：
             * - `Default`：标准版。
             * - `Pro`：ASM商业版（专业版）。
             * @example `Default`
             */
            Profile: string;
            /**
             * 服务网格创建时间。
             * @example `2020-04-21T09:42:20+08:00`
             */
            CreationTime: string;
            /**
             * 服务网格最后修改时间。
             * @example `2020-06-03T14:48:54+08:00`
             */
            UpdateTime: string;
            /**
             * 异常信息。
             * @example ` error`
             */
            ErrorMessage: string;
            /**
             * 服务网格版本号。
             * @example `v1.7.4.0-gfb34ba99-aliyun`
             */
            Version: string;
            /**
             * 服务网格状态。
             * @example `running`
             */
            State: string;
            /**
             * 服务网格实例ID.。
             * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
             */
            ServiceMeshId: string;
            /**
             * 服务网格名称。
             * @example `mesh1`
             */
            Name: string;
            /**
             * 服务网格所在地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        };
        /**
         * 服务网格规格信息。
         */
        Spec: {
            /**
             * 服务网格网络配置信息。
             */
            Network: {
                /**
                 * 专有网络ID。
                 * @example `vpc-2zew0rajjkmxy2369****`
                 */
                VpcId: string;
                /**
                 * 安全组ID。
                 * @example `sg-2ze384sxttxbctnj****`
                 */
                SecurityGroupId: string;
                /**
                 * 虚拟机.。
                 */
                VSwitches: string[];
            };
            /**
             * 负载均衡信息。
             */
            LoadBalancer: {
                /**
                 * 是否使用公网地址暴露Istio Pilot。取值：
                 * - `true`：使用公网地址暴露Istio Pilot。
                 * - `false`：不使用公网地址暴露Istio Pilot。
                 * @example `true`
                 */
                PilotPublicEip: boolean;
                /**
                 * 公网地址暴露Istio Pilot对应的负载均衡ID。
                 * @example `lb-2zesa8qs8kbkj9jkl****`
                 */
                PilotPublicLoadbalancerId: string;
                /**
                 * 公网地址暴露API Server对应的负载均衡ID。
                 * @example `lb-2zekaak10uxds44vx****`
                 */
                ApiServerLoadbalancerId: string;
                /**
                 * 是否使用公网地址暴露API Server。取值：
                 * - `true`：使用公网地址暴露API Server。
                 * - `false`：不使用公网地址暴露API Server。
                 * @example `true`
                 */
                ApiServerPublicEip: boolean;
            };
            /**
             * 服务网格配置信息。
             */
            MeshConfig: {
                /**
                 * 开放策略代理（OPA）插件信息。
                 */
                OPA: {
                    /**
                     * OPA代理容器的内存资源请求。
                     * @example `1024Mi`
                     */
                    RequestMemory: string;
                    /**
                     * OPA代理容器日志级别。
                     * @example `info`
                     */
                    LogLevel: string;
                    /**
                     * 是否集成开放策略代理（OPA）插件。取值：
                     * - `true`：集成开放策略代理（OPA）插件。
                     * - `false`：不集成开放策略代理（OPA）插件。
                     * @example `true`
                     */
                    Enabled: boolean;
                    /**
                     * OPA代理容器的内存资源限制。
                     * @example `512Mi`
                     */
                    LimitMemory: string;
                    /**
                     * OPA代理容器的CPU资源请求。
                     * @example `2`
                     */
                    RequestCPU: string;
                    /**
                     * OPA代理容器的CPU资源限制。
                     * @example `1`
                     */
                    LimitCPU: string;
                };
                /**
                 * Prometheus配置。
                 */
                Prometheus: {
                    /**
                     * 是否启用外部Prometheus。取值：
                     * - `true`：启用外部Prometheus。
                     * - `false`：不启用外部Prometheus。
                     * @example `false`
                     */
                    UseExternal: boolean;
                    /**
                     * Prometheus服务地址（在启用外部Prometheus时，系统自动填充）。
                     * @example `http://prometheus:9090`
                     */
                    ExternalUrl: string;
                };
                /**
                 * 访问日志配置。
                 */
                AccessLog: {
                    /**
                     * 是否启用访问日志。取值：
                     * - `true`：启用访问日志。
                     * - `false`：不启用访问日志。
                     * @example `true`
                     */
                    Enabled: boolean;
                    /**
                     * 访问日志项目名称。
                     * @example `k8s-log-b7b05d08670e41ca8c8fc0b7718f*****`
                     */
                    Project: string;
                };
                /**
                 * Pilot配置。
                 */
                Pilot: {
                    /**
                     * 是否支持HTTP1.0。取值：
                     * - `true`：支持HTTP1.0。
                     * - `false`：不支持HTTP1.0。
                     * @example `false`
                     */
                    Http10Enabled: boolean;
                    /**
                     * 链路追踪采样百分比。
                     * @example `100`
                     */
                    TraceSampling: number;
                    /**
                     * Pilot功能配置。
                     */
                    Feature: {
                        /**
                         * 是否启用Gateway配置过滤。取值：
                         * - `true`：启用Gateway配置过滤。
                         * - `false`：不启用Gateway配置过滤。
                         * @example `false`
                         */
                        FilterGatewayClusterConfig: boolean;
                        /**
                         * 是否启用SDS服务。取值：
                         * - `true`：启用SDS服务。
                         * - `false`：不启用SDS服务。
                         * @example `false`
                         */
                        EnableSDSServer: boolean;
                    };
                    /**
                     * 外部服务接入配置。
                     */
                    ConfigSource: {
                        /**
                         * 是否接入外部服务。取值：
                         * - `true`：接入外部服务。
                         * - `false`：不接入外部服务。
                         * @example `false`
                         */
                        Enabled: boolean;
                        /**
                         * 提供外部服务信息的Nacos实例ID。
                         * @example `mse-cn-tl326******`
                         */
                        NacosID: string;
                    };
                };
                /**
                 * MSE配置。
                 */
                MSE: {
                    /**
                     * 是否启用MSE。取值：
                     * - `true`：启用MSE。
                     * - `false`：不启用MSE。
                     * @example `false`
                     */
                    Enabled: boolean;
                };
                /**
                 * 是否启用自定义zipkin。取值：
                 * - `true`：启用自定义zipkin。
                 * - `false`：不启用自定义zipkin。
                 * @example `false`
                 */
                CustomizedZipkin: boolean;
                /**
                 * Sidecar注入器的配置。
                 */
                SidecarInjector: {
                    /**
                     * 是否为所有命名空间开启自动注入功能。取值：
                     * - `true`：为所有命名空间开启自动注入功能。
                     * - `false`：不为所有命名空间开启自动注入功能。
                     * @example `false`
                     */
                    EnableNamespacesByDefault: boolean;
                    /**
                     * Sidecar注入器Pod的内存请求资源。
                     * @example `512Mi`
                     */
                    RequestMemory: string;
                    /**
                     * Sidecar注入器Pod的内存限制资源。
                     * @example `2048Mi`
                     */
                    LimitMemory: string;
                    /**
                     * Sidecar注入器Pod的CPU请求资源。
                     * @example `1000m`
                     */
                    RequestCPU: string;
                    /**
                     * 是否开启通过Pod Annotations实现自动注入Sidecar。取值：
                     * - `true`：开启通过Pod Annotations实现自动注入Sidecar。
                     * - `false`：不开启通过Pod Annotations实现自动注入Sidecar。
                     * @example `true`
                     */
                    AutoInjectionPolicyEnabled: boolean;
                    /**
                     * Sidecar注入器Pod的CPU限制资源。
                     * @example `4000m`
                     */
                    LimitCPU: string;
                    /**
                     * CNI配置。
                     */
                    InitCNIConfiguration: {
                        /**
                         * 排除的命名空间。
                         * @example `kube-system,istio-system`
                         */
                        ExcludeNamespaces: string;
                        /**
                         * 是否启用CNI。取值：
                         * - `true`：启用CNI。
                         * - `false`：不启用CNI。
                         * @example `false`
                         */
                        Enabled: boolean;
                    };
                    /**
                     * 其他自动注入Sidecar的配置（YAML格式）。更多信息，请参见[多种方式灵活开启自动注入](~~186136~~)。
                     * @example `{"injectedAnnotations":{"test/istio-init":"runtime/default2","test/istio-proxy":"runtime/default"},"replicaCount":2,"nodeSelector":{"beta.kubernetes.io/os":"linux"}}`
                     */
                    SidecarInjectorWebhookAsYaml: string;
                    /**
                     * 负责进行Sidecar注入的组件副本数。默认为`1`。
                     * @example `1`
                     */
                    SidecarInjectorNum: number;
                };
                /**
                 * 包含的IP地址段。
                 * @example `192.168.0.0/16`
                 */
                IncludeIPRanges: string;
                /**
                 * 不拦截指定IP范围。
                 * @example `172.16.0.0`
                 */
                ExcludeIPRanges: string;
                /**
                 * 不拦截指定Outbound端口。
                 * @example `80,81`
                 */
                ExcludeOutboundPorts: string;
                /**
                 * 不拦截指定Inbound端口。
                 * @example `80,81`
                 */
                ExcludeInboundPorts: string;
                /**
                 * 是否开启采集Prometheus监控指标（建议使用[阿里云Prometheus监控](https://arms.console.aliyun.com/)）。取值：
                 * - `true`：开启采集Prometheus监控指标。
                 * - `false`：不开启采集Prometheus监控指标。
                 * @example `true`
                 */
                Telemetry: boolean;
                /**
                 * 版本信息。
                 */
                Edition: {
                    /**
                     * 版本名称。
                     * @example `Pro`
                     */
                    Name: string;
                    /**
                     * Istiod镜像版本。
                     * @example `v1.9.7.1-3-gb3f1ab3c9c-pro-aliyun`
                     */
                    IstiodImageTag: string;
                    /**
                     * Istio Proxy镜像版本。
                     * @example `v1.9.7.1-3-gb3f1ab3c9c-pro-aliyun`
                     */
                    ProxyImageTag: string;
                };
                /**
                 * 协议支持配置。
                 */
                ProtocolSupport: {
                    /**
                     * 是否启用MysqlFilter。取值：
                     * - `true`：启用MysqlFilter。
                     * - `false`：不启用MysqlFilter。
                     * @example `false`
                     */
                    MysqlFilterEnabled: boolean;
                    /**
                     * 是否启用RedisFilter。取值：
                     * - `true`：启用RedisFilter。
                     * - `false`：不启用RedisFilter。
                     * @example `false`
                     */
                    RedisFilterEnabled: boolean;
                    /**
                     * 是否启用ThriftFilter。取值：
                     * - `true`：启用ThriftFilter。
                     * - `false`：不启用ThriftFilter。
                     * @example `false`
                     */
                    ThriftFilterEnabled: boolean;
                    /**
                     * 是否启用DubboFilter。取值：
                     * - `true`：启用DubboFilter。
                     * - `false`：不启用DubboFilter。
                     * @example `false`
                     */
                    DubboFilterEnabled: boolean;
                };
                /**
                 * 出向流量策略。取值：
                 * - `ALLOW_ANY`：允许访问所有外部服务。
                 * - `REGISTRY_ONLY`：只能访问注册到网格内的服务。
                 * @example `ALLOW_ANY`
                 */
                OutboundTrafficPolicy: string;
                /**
                 * 网格拓扑配置。
                 */
                Kiali: {
                    /**
                     * 是否启用网格拓扑（必须先开启采集Prometheus监控指标，当该项配置更新为`false`时，系统自动设置本项值为`false`）。取值：
                     * - `true`：启用网格拓扑。
                     * - `false`：不启用网格拓扑。
                     * @example `false`
                     */
                    Enabled: boolean;
                    /**
                     * 网格拓扑服务地址。
                     * @example `http://1.2.**.**:20001`
                     */
                    Url: string;
                };
                /**
                 * 是否启用链路追踪（需要开通[可观测链路OpenTelemetry版](https://tracing-analysis.console.aliyun.com/)）。取值：
                 * - `true`：启用链路追踪。
                 * - `false`：不启用链路追踪。
                 * @example `true`
                 */
                Tracing: boolean;
                /**
                 * WebAssemblyFilter配置。
                 */
                WebAssemblyFilterDeployment: {
                    /**
                     * 是否启用WebAssemblyFilter。取值：
                     * - `true`：启用WebAssemblyFilter。
                     * - `false`：不启用WebAssemblyFilter。
                     * @example `false`
                     */
                    Enabled: boolean;
                };
                /**
                 * 是否启用服务就近访问。取值：
                 * - `true`：启用服务就近访问。
                 * - `false`：不启用服务就近访问。
                 * @example `true`
                 */
                EnableLocalityLB: boolean;
                /**
                 * 服务网格审计信息。
                 */
                Audit: {
                    /**
                     * 是否启用网格审计。取值：
                     * - `true`：启用网格审计。
                     * - `false`：不启用网格审计。
                     * @example `true`
                     */
                    Enabled: boolean;
                    /**
                     * 服务网格审计对应的日志项目。
                     * @example `audit-project`
                     */
                    Project: string;
                    /**
                     * 服务网格审计项目的状态。取值：
                     * - `audit_project_exist`：审计项目存在。
                     * - `audit_project_not_exist`：审计项目不存在。
                     * @example `audit_project_not_exist`
                     */
                    AuditProjectStatus: string;
                };
                /**
                 * Proxy配置。
                 */
                Proxy: {
                    /**
                     * 内存请求资源。
                     * @example `128Mi`
                     */
                    RequestMemory: string;
                    /**
                     * 信任域。
                     * @example `cluster.domain`
                     */
                    ClusterDomain: string;
                    /**
                     * 内存限制资源。
                     * @example `1024Mi`
                     */
                    LimitMemory: string;
                    /**
                     * CPU请求资源。
                     * @example `100m`
                     */
                    RequestCPU: string;
                    /**
                     * 是否启用DNS Proxying。取值：
                     * - `true`：启用DNS Proxying。
                     * - `false`：不启用DNS Proxying。
                     * @example `false`
                     */
                    EnableDNSProxying: boolean;
                    /**
                     * CPU限制资源。
                     * @example `2000m`
                     */
                    LimitCPU: string;
                    /**
                     * 是否启用Envoy的gRPC日志服务(ALS)。取值：
                     * - `true`：启用Envoy的gRPC日志服务(ALS)。
                     * - `false`：不启用Envoy的gRPC日志服务(ALS)。
                     * @example `false`
                     */
                    AccessLogServiceEnabled: boolean;
                    /**
                     * 启用Envoy的gRPC日志服务(ALS)的地址。
                     * @example `0.0.0.0`
                     */
                    AccessLogServiceHost: string;
                    /**
                     * 启用Envoy的gRPC日志服务(ALS)的端口。
                     * @example `9999`
                     */
                    AccessLogServicePort: number;
                    /**
                     * Sidecar访问日志的格式。
                     * @example `{"authority_for":"%REQ(:AUTHORITY)%","bytes_received":"%BYTES_RECEIVED%","bytes_sent":"%BYTES_SENT%","downstream_local_address":"%DOWNSTREAM_LOCAL_ADDRESS%","downstream_remote_address":"%DOWNSTREAM_REMOTE_ADDRESS%","duration":"%DURATION%","istio_policy_status":"%DYNAMIC_METADATA(istio.mixer:status)%","method":"%REQ(:METHOD)%","path":"%REQ(X-ENVOY-ORIGINAL-PATH?:PATH)%","protocol":"%PROTOCOL%","request_id":"%REQ(X-REQUEST-ID)%","requested_server_name":"%REQUESTED_SERVER_NAME%","response_code":"%RESPONSE_CODE%","response_flags":"%RESPONSE_FLAGS%","route_name":"%ROUTE_NAME%","start_time":"%START_TIME%","trace_id":"%REQ(X-B3-TRACEID)%","upstream_cluster":"%UPSTREAM_CLUSTER%","upstream_host":"%UPSTREAM_HOST%","upstream_local_address":"%UPSTREAM_LOCAL_ADDRESS%","upstream_service_time":"%RESP(X-ENVOY-UPSTREAM-SERVICE-TIME)%","upstream_transport_failure_reason":"%UPSTREAM_TRANSPORT_FAILURE_REASON%","user_agent":"%REQ(USER-AGENT)%","x_forwarded_for":"%REQ(X-FORWARDED-FOR)%"}`
                     */
                    AccessLogFormat: string;
                    /**
                     * Sidecar访问日志输出的文件路径。
                     * @example `/dev/stdout`
                     */
                    AccessLogFile: string;
                };
                /**
                 * Kubernetes API支持。
                 */
                K8sNewAPIsSupport: {
                    /**
                     * 是否启用Gateway API。取值：
                     * - `true`：启用Gateway API。
                     * - `false`：不启用Gateway API。
                     * @example `false`
                     */
                    GatewayAPIEnabled: boolean;
                };
                /**
                 * 跨地域负载均衡配置。
                 */
                LocalityLB: {
                    /**
                     * 是否启用跨地域负载均衡。取值：
                     * - `true`：启用跨地域负载均衡。
                     * - `false`：不启用跨地域负载均衡。
                     * @example `false`
                     */
                    Enabled: boolean;
                    /**
                     * 跨地域故障转移配置
                     * >只能与`Distribute`二选一。例如，配置`Failover`就不能配置`Distribute`。
                     * @example `{"failover":[{"from":"cn-hangzhou","to":"cn-shanghai"}]}`
                     */
                    Failover: any;
                    /**
                     * 跨地域流量分布配置
                     * >只能与`Failover`二选一。例如，配置`Distribute`就不能配置Failover。
                     * @example `[{"from":"cn-shanghai","to":{"cn-hangzhou/*":50,"cn-shanghai/*":25,"cn-zhangjiakou/*":25}},{"from":"cn-hangzhou","to":{"cn-hangzhou/*":50,"cn-shanghai/*":25,"cn-zhangjiakou/*":25}}]`
                     */
                    Distribute: any;
                };
                /**
                 * 控制面日志采集配置。
                 */
                ControlPlaneLogInfo: {
                    /**
                     * 是否启用控制面日志采集。取值：
                     * - `true`：启用控制面日志采集。
                     * - `false`：不启用控制面日志采集。
                     * @example `false`
                     */
                    Enabled: boolean;
                    /**
                     * 控制面日志采集目标SLS Project名称。
                     * @example `mesh-log-cbeb85a09161b4a26ab73e0ac****`
                     */
                    Project: string;
                    /**
                     * 控制面日志采集的存储时间（天）。
                     * @example `30`
                     */
                    LogTTL: number;
                };
                /**
                 * 服务网格的功能增强配置。
                 */
                ExtraConfiguration: {
                    /**
                     * Istio资源历史版本功能设置。
                     */
                    IstioCRHistory: {
                        /**
                         * 是否启用ASM的Istio资源历史版本管理功能。取值：
                         * - `true`：启用ASM的Istio资源历史版本管理功能。
                         * - `false`：不启用ASM的Istio资源历史版本管理功能。
                         * @example `false`
                         */
                        EnableHistory: boolean;
                    };
                    /**
                     * 是否启用数据面集群Kubernetes API访问Istio资源。取值：
                     * - `true`：启用数据面集群Kubernetes API访问Istio资源。
                     * - `false`：不启用数据面集群Kubernetes API访问Istio资源。
                     * @example `false`
                     */
                    CRAggregationEnabled: boolean;
                    /**
                     * 基于MulitiBuffer的TLS性能优化。
                     */
                    MultiBuffer: {
                        /**
                         * 是否启用基于MulitiBuffer的TLS性能优化。取值：
                         * - `true`：启用基于MulitiBuffer的TLS性能优化。
                         * - `false`：不启用基于MulitiBuffer的TLS性能优化。
                         * @example `false`
                         */
                        Enabled: boolean;
                        /**
                         * 拉取延迟。
                         * @example `0.02s`
                         */
                        PollDelay: string;
                    };
                    /**
                     * Istio Proxy终止等待时长。
                     * @example `5s`
                     */
                    TerminationDrainDuration: string;
                    /**
                     * Istio Proxy生命周期。
                     */
                    Lifecycle: {
                        /**
                         * Istio Proxy启动后执行脚本。
                         */
                        postStart: {
                            /**
                             * 执行命令。
                             */
                            exec: {
                                /**
                                 * 字符串数组表示的执行具体的命令。
                                 */
                                command: string[];
                            };
                            /**
                             * 执行HTTP Get请求。
                             */
                            httpGet: {
                                /**
                                 * 端口。
                                 * @example `80`
                                 */
                                port: string;
                                /**
                                 * 调用的服务地址。
                                 * @example `127.xx.xx.1`
                                 */
                                host: string;
                                /**
                                 * 调用方式。取值：`http`、`https`。
                                 * @example `http`
                                 */
                                scheme: string;
                                /**
                                 * 发送网络请求时的Header内容。
                                 */
                                httpHeaders: {
                                    /**
                                     * Header中的键。
                                     * @example `key`
                                     */
                                    name: string;
                                    /**
                                     * Header中的键对应的值。
                                     * @example `value`
                                     */
                                    value: string;
                                }[];
                            };
                            /**
                             * 使用TCP Socket方式请求。
                             */
                            tcpSocket: {
                                /**
                                 * TCP Socket端口。
                                 * @example `888`
                                 */
                                port: string;
                                /**
                                 * 远程TCP Socket地址。
                                 * @example `127.xx.xx.1`
                                 */
                                host: string;
                            };
                        };
                        /**
                         * Istio Proxy终止前执行的脚本。
                         */
                        preStop: {
                            /**
                             * 执行命令。
                             */
                            exec: {
                                /**
                                 * 字符串数组表示的执行具体的命令。
                                 */
                                command: string[];
                            };
                            /**
                             * 执行HTTP Get请求。
                             */
                            httpGet: {
                                /**
                                 * 端口。
                                 * @example `80`
                                 */
                                port: string;
                                /**
                                 * 调用的服务地址。
                                 * @example `127.xx.xx.1`
                                 */
                                host: string;
                                /**
                                 * 调用方式。取值：`http`、`https`。
                                 * @example `http`
                                 */
                                scheme: string;
                                /**
                                 * 发送网络请求时的Header内容。
                                 */
                                httpHeaders: {
                                    /**
                                     * Header中的键。
                                     * @example `key`
                                     */
                                    name: string;
                                    /**
                                     * Header中的值。
                                     * @example `value`
                                     */
                                    value: string;
                                }[];
                            };
                            /**
                             * 使用TCP Socket方式请求。
                             */
                            tcpSocket: {
                                /**
                                 * 端口。
                                 * @example `888`
                                 */
                                port: string;
                                /**
                                 * 地址。
                                 * @example `127.xx.xx.1`
                                 */
                                host: string;
                            };
                        };
                    };
                    /**
                     * istio-init初始化容器资源限制。
                     */
                    SidecarProxyInitResourceLimit: {
                        /**
                         * istio-init初始化容器CPU资源限制。
                         * @example `2000m`
                         */
                        ResourceCPULimit: string;
                        /**
                         * istio-init初始化容器内存资源限制。
                         * @example `1024Mi`
                         */
                        ResourceMemoryLimit: string;
                    };
                    /**
                     * istio-init初始化容器资源所需。
                     */
                    SidecarProxyInitResourceRequest: {
                        /**
                         * istio-init初始化容器所需CPU资源。
                         * @example `10m`
                         */
                        ResourceCPURequest: string;
                        /**
                         * istio-init初始化容器所需内存资源。
                         * @example `10Mi`
                         */
                        ResourceMemoryRequest: string;
                    };
                    /**
                     * 用于选择性服务发现的数据平面命名空间标签选择器列表。
                     */
                    DiscoverySelectors: any[];
                    /**
                     * OPA注入范围控制。
                     */
                    OPAScopeInjection: {
                        /**
                         * 是否启用OPA注入范围控制能力。取值：
                         * - `true`：启用OPA注入范围控制能力。
                         * - `false`：不启用OPA注入范围控制能力。
                         * @example `false`
                         */
                        OPAScopeInjected: boolean;
                    };
                    /**
                     * 数据面KubeAPI访问能力
                     */
                    CRAggregationConfiguration: {
                        /**
                         * 是否启用数据面KubeAPI访问能力。
                         * @example `true`
                         */
                        Enabled: boolean;
                    };
                    /**
                     * 节点特征自动获取配置。
                     */
                    NFDConfiguration: {
                        /**
                         * 节点特征自动获取能力是否启用。
                         * @example `true`
                         */
                        Enabled: boolean;
                        /**
                         * 禁用节点特征自动获取能力时，是否清除了节点上的特征相关标签。
                         * @example `true`
                         */
                        NFDLabelPruned: boolean;
                    };
                    /**
                     * 访问日志功能增强配置。
                     */
                    AccessLogExtraConf: {
                        /**
                         * 采集到SLS的入口网关访问日志的存储周期（天）。例如30代表30天。
                         * @example `30`
                         */
                        GatewayLifecycle: number;
                        /**
                         * 采集到SLS的Sidecar访问日志的存储周期（天）。例如30代表30天。
                         * @example `30`
                         */
                        SidecarLifecycle: number;
                        /**
                         * 是否启用网关日志采集。
                         * @example `true`
                         */
                        GatewayEnabled: boolean;
                        /**
                         * 是否启用Sidecar日志采集。
                         * @example `true`
                         */
                        SidecarEnabled: boolean;
                    };
                    /**
                     * 网格自动诊断功能配置
                     */
                    AutoDiagnosis: {
                        /**
                         * 是否在修改Istio资源后自动诊断网格，开启时，当修改任意Istio资源时，将在五分钟后触发一次服务网格的自动诊断。
                         * @example `true`
                         */
                        AutoDiagnosisEnabled: boolean;
                    };
                    /**
                     * 自适应配置推送优化功能配置。
                     */
                    AdaptiveXdsConfiguration: {
                        /**
                         * 是否启用自适应配置推送优化功能。
                         * @example `true`
                         */
                        Enabled: boolean;
                        /**
                         * 自适应配置推送优化出口网关资源配置。
                         */
                        EgressResources: {
                            /**
                             * 自适应配置推送优化出口网关资源需求。
                             * @example `{"cpu":"100m", "memory": "256Mi"}`
                             */
                            Requests: any;
                            /**
                             * 自适应配置推送优化出口网关资源限制。
                             * @example `{"cpu":"200m", "memory": "512Mi"}`
                             */
                            Limits: any;
                        };
                        /**
                         * 自适应配置推送优化出口网关副本数。
                         * @example `2`
                         */
                        EgressReplicaCount: number;
                        /**
                         * 是否为自适应配置推送优化出口网关启用自动扩缩容能力（HPA）。
                         * @example `true`
                         */
                        EgressAutoscaleEnabled: boolean;
                        /**
                         * 自适应配置推送优化出口网关启用HPA的最低副本数。
                         * @example `1`
                         */
                        EgressMinReplica: number;
                        /**
                         * 自适应配置推送优化出口网关启用HPA的最高副本数。
                         * @example `2`
                         */
                        EgressMaxReplica: number;
                        /**
                         * 自适应配置推送优化出口网关HPA的CPU指标配置。
                         */
                        EgressHpaCpu: {
                            /**
                             * 自适应配置推送优化出口网关开启HPA时的CPU目标使用率。取值为1~100。如果超过该值，会增加副本；如果低于该值，会减少副本。
                             * @example `80`
                             */
                            TargetAverageUtilization: number;
                        };
                        /**
                         * 自适应配置推送优化出口网关HPA的内存指标配置。
                         */
                        EgressHpaMemory: {
                            /**
                             * 自适应配置推送优化出口网关开启HPA时的内存目标使用率。取值为1~100。如果超过该值，会增加副本；如果低于该值，会减少副本。
                             * @example `80`
                             */
                            TargetAverageUtilization: number;
                        };
                    };
                    /**
                     * Istiod额外配置。
                     */
                    IstiodExtraConfiguration: {
                        /**
                         * 隔离工作负载的标签。
                         * @example `name=xx,region=xx`
                         */
                        LabelsForOffloadedWorkloads: string;
                        /**
                         * 是否启用QUIC协议监听。
                         * @example `false`
                         */
                        PilotEnableQuicListeners: boolean;
                    };
                };
            };
        };
        /**
         * 集群列表。
         */
        Clusters: string[];
        /**
         * 服务网格实例规格。取值：
         * - `standard`：标准版。
         * - `enterprise`：企业版。
         * - `ultimate`：旗舰版。
         *
         * @example `standard`
         */
        ClusterSpec: string;
        /**
         * 创建网格的云产品类型。取值：
         * - `ackone`：表示网格由ACK One创建。
         * - 当此项取值为空时，代表网格由用户创建。
         * @example `ackone`
         */
        OwnerType: string;
        /**
         * 创建网格的云产品实例ID。
         * @example `cc3e96f249d124eb38b72718ec5*****`
         */
        OwnerId: string;
    };
}
