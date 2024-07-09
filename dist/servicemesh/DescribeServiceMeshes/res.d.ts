export interface DescribeServiceMeshesResponse {
    /**
     * 请求ID。
     * @example `BD65C0AD-D3C6-48D3-8D93-38D2015C****`
     */
    RequestId: string;
    /**
     * 服务网格详情。
     */
    ServiceMeshes: {
        /**
         * 端点详情。
         */
        Endpoints: {
            /**
             * Istio Pilot地址（内网）。
             * @example `192.168.xx.xx:15011`
             */
            IntranetPilotEndpoint: string;
            /**
             * API Server地址（内网）。
             * @example `https://192.168.xx.xx:6443`
             */
            IntranetApiServerEndpoint: string;
            /**
             * API Server地址（公网）。
             * @example `https://123.56.xx.xx:6443`
             */
            PublicApiServerEndpoint: string;
        };
        /**
         * 服务网格基本信息。
         */
        ServiceMeshInfo: {
            /**
             * 商业化之前的网格实例规格，取值：
             * - `Pro`：专业版。
             * - `Default`：标准版。
             * @example `Pro`
             */
            Profile: string;
            /**
             * 服务网格创建时间。
             * @example `2020-04-21T09:42:20+08:00`
             */
            CreationTime: string;
            /**
             * 服务网格最后修改时间。
             * @example `2020-04-21T09:42:20+08:00`
             */
            UpdateTime: string;
            /**
             * 异常信息。
             * @example `error`
             */
            ErrorMessage: string;
            /**
             * 服务网格版本号。
             * @example `1`
             */
            Version: string;
            /**
             * 服务网格状态。
             * @example `success`
             */
            State: string;
            /**
             * 服务网格ID。
             * @example `cb8963379255149cb98c8686f274x****`
             */
            ServiceMeshId: string;
            /**
             * 服务网格名称。
             * @example `test`
             */
            Name: string;
            /**
             * 服务网格所在地域ID。
             * @example `cn-beijing`
             */
            RegionId: string;
        };
        /**
         * 规格信息。
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
                 * 虚拟交换机ID列表。
                 */
                VSwitches: string[];
            };
            /**
             * 负载均衡信息。
             */
            LoadBalancer: {
                /**
                 * 是否使用公网地址暴露Istio Pilot，取值：
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
                 * 是否使用公网地址暴露API Server，取值：
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
                 * 是否开启采集Prometheus 监控指标（建议使用阿里云Prometheus监控），取值：
                 * - `true`：开启采集Prometheus 监控指标。
                 * - `false`：不开启采集Prometheus 监控指标。
                 * @example `true`
                 */
                Telemetry: boolean;
                /**
                 * 外部流量策略，取值：
                 * - `ALLOW_ANY`：允许访问网格外的服务。
                 * - `REGISTRY_ONLY`：仅允许访问网格内的服务。
                 * @example `ALLOW_ANY`
                 */
                OutboundTrafficPolicy: string;
                /**
                 * 是否启用链路追踪（需要开通可观测链路OpenTelemetry版），取值：
                 * - `true`：启用链路追踪。
                 * - `false`：不启用链路追踪。
                 * @example `true`
                 */
                Tracing: boolean;
                /**
                 * 模式。
                 * @example `true`
                 */
                StrictMtls: boolean;
                /**
                 * 控制面配置。
                 */
                Pilot: {
                    /**
                     * 是否启用支持HTTP 1.0。取值：
                     * - `true`：支持HTTP 1.0。
                     * - `false`：不支持HTTP 1.0。
                     * @example `true`
                     */
                    Http10Enabled: boolean;
                    /**
                     * 启用链路追踪时的采样率。
                     * @example `0.2`
                     */
                    TraceSampling: number;
                };
                /**
                 * 是否启用服务就近访问，取值：
                 * - `true`：启用服务就近访问。
                 * - `false`：不启用服务就近访问。
                 * @example `true`
                 */
                Mtls: boolean;
                /**
                 * Sidecar注入配置。
                 */
                SidecarInjector: {
                    /**
                     * 是否为所有命名空间开启自动注入功能。
                     * - `true`：为全部命名空间开启自动注入。
                     * - `false`：不为全部命名空间开启自动注入。
                     * @example `false`
                     */
                    EnableNamespacesByDefault: boolean;
                    /**
                     * 通过Pod Annotations实现自动注入。
                     * @example `true`
                     */
                    AutoInjectionPolicyEnabled: boolean;
                    /**
                     * CNI初始化配置。
                     */
                    InitCNIConfiguration: {
                        /**
                         * 要从Istio Pod检查中排除的名称空间。
                         * @example `default,foo`
                         */
                        ExcludeNamespaces: string;
                        /**
                         * 为istio-proxy进行流量重定向时，是否需要赋予istio-init容器特权，取值：
                         * - `true`：不需要赋予istio-init容器特权。
                         * - `false`：需要赋予istio-init容器特权。
                         * @example `true`
                         */
                        Enabled: boolean;
                    };
                };
            };
        };
        /**
         * 集群列表。
         */
        Clusters: string[];
        /**
         * 服务网格实例规格，取值：
         * - `standard`：标准版。
         * - `enterprise`：企业版。
         * - `ultimate`：旗舰版。
         * @example `standard`
         */
        ClusterSpec: string;
        /**
         * 创建网格的云产品类型，取值：
         * - `ackone`：网格由ACK One创建。
         * - 当此项取值为空时，代表网格由用户创建。
         * @example `ackone`
         */
        OwnerType: string;
        /**
         * 创建网格的云产品实例ID。
         * @example `cc3e96f249d124eb38b72718ec5*****`
         */
        OwnerId: string;
        /**
         * 标签信息集合。
         */
        Tag: {
            /**
             * 标签键
             * @example `test`
             */
            Key: string;
            /**
             * 标签值。
             * @example `yahaha`
             */
            Value: string;
        }[];
        /**
         * 该网格是否可以升级。
         * @example `false`
         */
        Upgradable: boolean;
    }[];
}
