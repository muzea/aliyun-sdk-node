export interface ListK8sIngressRulesResponse {
    /**
     * 接口状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `5C1C9DE7-88FF-4B56-A47B-3DBBCEB******`
     */
    RequestId: string;
    /**
     * 接口响应数据。
     */
    Data: {
        /**
         * 集群名称。
         * @example `my-dev-cluster`
         */
        ClusterName: string;
        /**
         * 集群ID。
         * @example `5b2b4ab4-efbc-4a81-9c45-a5942881****`
         */
        ClusterId: string;
        /**
         * 阿里云地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 应用路由列表。
         */
        IngressConfs: {
            /**
             * 应用路由创建时间。
             * @example `2021-04-27 20:16:52`
             */
            CreationTime: string;
            /**
             * 是否启用SSL重定向：
             * - true：启用。
             * - false：关闭。
             * @example `true`
             */
            SslRedirect: boolean;
            /**
             * 应用路由入口IP地址。
             * @example `47.11x.xx.xx`
             */
            Endpoint: string;
            /**
             * 应用路由所属K8s命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 应用路由名称。
             * @example `my-ingress`
             */
            Name: string;
            /**
             * 应用路由监控URL。
             * @example `http://grafana.console.aliyun.com/d/10xxxx/ingress`
             */
            DashboardUrl: string;
            /**
             * 应用路由规则列表。
             */
            Rules: {
                /**
                 * 保存TLS证书的Secret名称。
                 * @example `my-secret`
                 */
                SecretName: string;
                /**
                 * 应用路由域名。
                 * @example `example.com`
                 */
                Host: string;
                /**
                 * 应用路由匹配路径列表。
                 */
                Paths: {
                    /**
                     * 应用路由状态，支持以下状态：
                     * - **Normal**：状态正常。
                     * - **ServiceNotFound**：后端Service不存在。
                     * - **InvalidServicePort**：无效服务端口。
                     * - **NotManagedService**：非EDAS管控Service。
                     * - **Unknown**：未知错误。
                     * @example `Normal`
                     */
                    Status: string;
                    /**
                     * 匹配路径。
                     * @example `/foo/bar`
                     */
                    Path: string;
                    /**
                     * EDAS应用名称。
                     * @example `my-app`
                     */
                    AppName: string;
                    /**
                     * EDAS应用ID。
                     * @example `43d30ba5-c568-460c-8080-d447ed1a****`
                     */
                    AppId: string;
                    /**
                     * 后端服务配置。
                     */
                    Backend: {
                        /**
                         * 后端服务名称。
                         * @example `http-service`
                         */
                        ServiceName: string;
                        /**
                         * 后端服务端口。
                         * @example `8080`
                         */
                        ServicePort: string;
                    };
                    /**
                     * 基于EDAS为网关注入TraceId支持调用链路查询能力，设置匹配该条规则流量的采样率。
                     * @example `100`
                     */
                    CollectRate: number;
                    /**
                     * 路径匹配类型：
                     * - ImplementationSpecific：默认。
                     * - Exact：完整匹配。
                     * - Prefix：前缀匹配。
                     * @example `ImplementationSpecific`
                     */
                    PathType: string;
                }[];
                /**
                 * 是否启用TLS：
                 * - true：启用。
                 * - false：不启用。
                 * @example `false`
                 */
                EnableTls: boolean;
            }[];
            /**
             * 应用型负载均衡ALB实例ID。
             * @example `alb-5sde0tq62r********`
             */
            AlbId: string;
            /**
             * 应用路由类型：
             * - **NginxIngress**：使用nginx应用路由控制器。
             * - **AlbIngress**：使用ALB应用路由控制器。
             * 默认使用NginxIngress。
             * @example `NginxIngress`
             */
            IngressType: string;
            /**
             * 社区版本基础监控地址。
             * @example `https://g.console.aliyun.com/d/xxxxxx/nginx-ingress-dashboard-official`
             */
            OfficalBasicUrl: string;
            /**
             * 社区版本请求性能监控地址。
             * @example `https://g.console.aliyun.com/d/xxxxxx/request-handling-performance-official`
             */
            OfficalRequestUrl: string;
            /**
             * MSE网关实例ID。
             * @example `gw-xxxxxxxx`
             */
            MseGatewayId: string;
            /**
             * MSE网关实例名称。
             * @example `gw-test-name`
             */
            MseGatewayName: string;
            /**
             * 注解。
             * @example `{"test-annotation":"test-annotation-value"}`
             */
            Annotations: string;
            /**
             * 标签。
             * @example `{"test-label": "test-labels"}`
             */
            Labels: string;
        }[];
    }[];
}
