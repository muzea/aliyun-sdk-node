export interface ListGatewayServiceResponse {
    /**
     * 请求ID。
     * @example `F46CDBA4-B1EE-5C94-8A48-51C10177****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `You are not authorized to perform this operation.`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 总条数。
         * @example `9`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页最大记录数，默认值为10。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回集合。
         */
        Result: {
            /**
             * ID。
             * @example `1`
             */
            Id: number;
            /**
             * 服务名。
             * @example `test`
             */
            Name: string;
            /**
             * 网关唯一ID。
             * @example `gw-5017305290e14centbrveca****`
             */
            GatewayUniqueId: string;
            /**
             * 网关ID。
             * @example `1`
             */
            GatewayId: number;
            /**
             * 来源类型。
             * @example `MSE`
             */
            SourceType: string;
            /**
             * 命名空间。
             * @example `public`
             */
            Namespace: string;
            /**
             * 分组。
             * @example `test`
             */
            GroupName: string;
            /**
             * 来源ID。
             * @example `2`
             */
            SourceId: number;
            /**
             * 注册中心中原服务名。
             * @example `test`
             */
            ServiceNameInRegistry: string;
            /**
             * 元信息或IP列表。
             * @example `{}`
             */
            MetaInfo: string;
            /**
             * IP列表。
             */
            Ips: string[];
            /**
             * 记录创建时间。
             * @example `2022-01-07 18:07:57`
             */
            GmtCreate: string;
            /**
             * 记录修改时间。
             * @example `2022-01-07 18:07:57`
             */
            GmtModified: string;
            /**
             * 服务版本。
             */
            Versions: {
                /**
                 * 版本名。
                 * @example `v1`
                 */
                Name: string;
            }[];
            /**
             * 服务协议。
             * @example `HTTP`
             */
            ServiceProtocol: string;
            /**
             * 服务端口。
             * @example `80`
             */
            ServicePort: number;
            /**
             * 健康状态。
             * - Health
             * - Unhealthy
             * - Unknown
             * @example `Unhealthy`
             */
            HealehStatus: string;
            /**
             * 健康状态。
             * - Health
             * - Unhealthy
             * - Unknown
             * @example `Unhealthy`
             */
            HealthStatus: string;
            /**
             * 是否进行健康检查。
             * @example `true`
             */
            HealthCheck: boolean;
            /**
             * 健康检查信息。
             */
            HealthCheckInfo: {
                /**
                 * 是否检查。
                 * @example `true`
                 */
                Check: boolean;
                /**
                 * 网络协议。
                 * @example `TCP`
                 */
                Protocol: string;
                /**
                 * 超时时间。
                 * @example `2`
                 */
                Timeout: number;
                /**
                 * 健康检查间隔。
                 * @example `2`
                 */
                Interval: number;
                /**
                 * 健康阈值。
                 * @example `2`
                 */
                HealthyThreshold: number;
                /**
                 * 非健康阈值。
                 * @example `2`
                 */
                UnhealthyThreshold: number;
                /**
                 * 健康检查HTTP请求路径。
                 * @example `/health`
                 */
                HttpPath: string;
                /**
                 * 健康检查HTTP请求地址。
                 * @example `http://172.168.0.1`
                 */
                HttpHost: string;
                /**
                 * 健康检查期望状态值。
                 */
                ExpectedStatuses: number[];
            };
            /**
             * 非健康endpoint数组
             */
            UnhealthyEndpoints: string[];
            /**
             * 流量管理策略。
             */
            GatewayTrafficPolicy: {
                /**
                 * TLS。
                 */
                Tls: {
                    /**
                     * TLS模式。
                     * - DISABLE
                     *  - SIMPLE
                     * - MUTUAL
                     * - ISTIO_MUTUAL
                     * @example `SIMPLE`
                     */
                    Mode: string;
                    /**
                     * 证书ID。
                     * @example `5******-cn-hangzhou`
                     */
                    CertId: string;
                    /**
                     * CA证书ID。
                     * @example `5******-cn-hangzhou`
                     */
                    CaCertId: string;
                    /**
                     * CA证书公钥。
                     * @example `content`
                     */
                    CaCertContent: string;
                    /**
                     * 主体别名数组。
                     */
                    SubjectAltNames: string[];
                    /**
                     * 服务名称标识。
                     * @example `name-sni`
                     */
                    Sni: string;
                };
                /**
                 * 负载均衡设置。
                 */
                LoadBalancerSettings: {
                    /**
                     * 负载均衡策略
                     * - ROUND_ROBIN
                     *  - LEAST_CONN
                     *  - RANDOM
                     *  - CONSISTENT_HASH
                     * @example `RANDOM`
                     */
                    LoadbalancerType: string;
                    /**
                     * 一致性哈希配置。
                     */
                    ConsistentHashLBConfig: {
                        /**
                         * 参数名称。
                         * @example `param`
                         */
                        ParameterName: string;
                        /**
                         * 基于Cookie的参数。
                         */
                        HttpCookie: {
                            /**
                             * cookie名称。
                             * @example `name`
                             */
                            Name: string;
                            /**
                             * cookie路径。
                             * @example `/path`
                             */
                            Path: string;
                            /**
                             * cookie生命周期。
                             * @example `360`
                             */
                            Ttl: string;
                        };
                        /**
                         * 哈希环最小值。
                         * @example `10000`
                         */
                        MinimumRingSize: number;
                        /**
                         * 一致性哈希的方式。
                         * - HEADER
                         *  - COOKIE
                         *  - SOURCE_IP
                         *  - QUERY_PARAMETER
                         * @example `HEADER`
                         */
                        ConsistentHashLBType: string;
                    };
                    /**
                     * 最小请求数的预热时间。
                     * @example `10`
                     */
                    WarmupDuration: number;
                };
            };
            /**
             * 端口数组。
             */
            Ports: number[];
            ServiceFQDN: string;
        }[];
    };
}
