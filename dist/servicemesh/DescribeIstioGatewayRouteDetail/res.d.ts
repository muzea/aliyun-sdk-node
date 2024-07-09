export interface DescribeIstioGatewayRouteDetailResponse {
    /**
     * 路由详情
     */
    RouteDetail: {
        /**
         * 路由名称。
         * @example `demo-route`
         */
        RouteName: string;
        /**
         * 路由类型，取值`HTTP`、`TLS`、`TCP`。
         * @example `HTTP`
         */
        RouteType: string;
        /**
         * 路由匹配规则。
         */
        MatchRequest: {
            /**
             * URI匹配规则 。
             */
            URI: {
                /**
                 * 路由规则匹配模式，取值：
                 * - `exact`：精准匹配。
                 * - `prefix`：前缀匹配。
                 * - `regex`：正则匹配。
                 * @example `prefix`
                 */
                MatchingMode: string;
                /**
                 * 用于匹配的内容。
                 * @example `/ratings/v2/`
                 */
                MatchingContent: string;
            };
            /**
             * 用于判断是否匹配的请求头部列表。
             */
            Headers: {
                /**
                 * Header匹配的键。
                 * @example `x-request-id`
                 */
                Name: string;
                /**
                 * Header值匹配方式，取值：
                 * - `exact`：精准匹配。
                 * - `prefix`：前缀匹配。
                 * - `regex`：正则匹配。
                 * @example `exact`
                 */
                MatchingMode: string;
                /**
                 * 用于Header匹配的内容。
                 * @example `v1`
                 */
                MatchingContent: string;
            }[];
            /**
             * TLS连接匹配属性列表。
             */
            TLSMatchAttributes: {
                /**
                 * TLS端口。
                 * @example `443`
                 */
                TLSPort: number;
                /**
                 * 服务器名称标识列表。
                 */
                SNIHosts: string[];
            }[];
            /**
             * 端口列表。
             */
            Ports: number[];
        };
        /**
         * HTTP路由高级配置选项。
         */
        HTTPAdvancedOptions: {
            /**
             * HTTP重定向。
             */
            HTTPRedirect: {
                /**
                 * 在重定向时，使用此值覆盖URL的路径部分。
                 * @example `/v1/getProductRatings`
                 */
                Uri: string;
                /**
                 * 在重定向时，使用此值覆盖URL的Authority或Host部分。
                 * @example `newratings.default.svc.cluster.local`
                 */
                Authority: string;
                /**
                 * 在重定向上，指定要在重定向响应中使用的HTTP状态代码。默认响应代码为301。
                 * @example `301`
                 */
                RedirectCode: number;
            };
            /**
             * 虚拟服务流量代理。
             */
            Delegate: {
                /**
                 * 名称。
                 * @example `reviews`
                 */
                Name: string;
                /**
                 * 命名空间。
                 * @example `default`
                 */
                Namespace: string;
            };
            /**
             * 重写虚拟服务。
             */
            Rewrite: {
                /**
                 * 用这个值重写URI的路径（或前缀）部分。
                 * @example `/v1/getProductRatings`
                 */
                Uri: string;
                /**
                 * 使用此值重写Authority或Host头。
                 * @example `newratings.default.svc.cluster.local`
                 */
                Authority: string;
            };
            /**
             * 超时时长。
             * @example `5s`
             */
            Timeout: string;
            /**
             * 请求重试配置。
             */
            Retries: {
                /**
                 * 给定请求允许的重试次数。
                 * @example `3`
                 */
                Attempts: number;
                /**
                 * 请求的每次尝试超时时间。
                 * @example `2s`
                 */
                PerTryTimeout: string;
                /**
                 * 用于指定重试发生的条件，例如`connect-failure,refused-stream,503`。
                 * @example `connect-failure,refused-stream,503`
                 */
                RetryOn: string;
                /**
                 * 用于指定重试是否应重试到其他位置的标志。
                 */
                RetryRemoteLocalities: {
                    /**
                     * 用于指定重试是否应重试到其他位置的标志，取值：
                     * - `true`：其他位置也重试
                     * - `false`：其他位置不重试
                     * 默认`false`。
                     * @example `false`
                     */
                    Value: boolean;
                };
            };
            /**
             * 故障注入设置。
             */
            Fault: {
                /**
                 * 设置延迟。
                 */
                Delay: {
                    /**
                     * 固定延迟时间。
                     * @example `5s`
                     */
                    FixedDelay: string;
                    /**
                     * 指数型延迟等待时间，等待时间为2的x次方，x为输入参数。
                     * @example `3`
                     */
                    ExponentialDelay: string;
                    /**
                     * 将注入延迟的请求的百分比。
                     */
                    Percentage: {
                        /**
                         * 使用提供的错误码中止的请求的百分比，用小数表示。
                         * @example `0.1`
                         */
                        Value: number;
                    };
                };
                /**
                 * 提前中止带有预先指定的错误码的请求。
                 */
                Abort: {
                    /**
                     * HTTP状态码。
                     * @example `400`
                     */
                    HttpStatus: number;
                    /**
                     * 使用提供的错误码中止的请求的百分比。
                     */
                    Percentage: {
                        /**
                         * 流量镜像百分比。用小数表示
                         * @example `0.1`
                         */
                        Value: number;
                    };
                };
            };
            /**
             * 除了将请求转发到预期目标之外，还将HTTP通信镜像到另一个目标。
             */
            Mirror: {
                /**
                 * 服务注册表中服务的名称。
                 * @example `reviews.default.svc.cluster.local`
                 */
                Host: string;
                /**
                 * 服务中子集的名称
                 * @example `v1`
                 */
                Subset: string;
            };
            /**
             * 使用提供的错误码中止的请求的百分比。
             */
            MirrorPercentage: {
                /**
                 * 使用提供的错误码中止的请求的百分比，用小数表示。
                 * @example `0.2`
                 */
                Value: number;
            };
        };
        /**
         * L4路由规则加权目的地列表。
         */
        RouteDestinations: {
            /**
             * Destination唯一标识请求或连接应转发到的服务实例。
             */
            Destination: {
                /**
                 * 服务注册表中服务的名称。
                 * @example `reviews`
                 */
                Host: string;
                /**
                 * 服务中子集的名称。
                 * @example `v1`
                 */
                Subset: string;
                /**
                 * 端口列表。
                 */
                Port: {
                    /**
                     * 指定主机上要寻址的端口。
                     * @example `443`
                     */
                    Number: number;
                };
            };
            /**
             * 流量权重，范围：1~100。
             * @example `80`
             */
            Weight: number;
            /**
             * 用于判断是否匹配的请求头部列表。
             */
            Headers: {
                /**
                 * 用于判断是否匹配的请求头部。
                 */
                Request: {
                    /**
                     * 用给定值覆盖键指定的Header。
                     */
                    Set: any;
                    /**
                     * 添加值到Header中。
                     * @example `key`
                     */
                    Add: any;
                    /**
                     * 删除Header中的值。
                     */
                    Remove: string[];
                };
                /**
                 * 返回响应前做的处理。
                 */
                Response: {
                    /**
                     * 用给定值覆盖键指定的Header。
                     * @example `key`
                     */
                    Set: any;
                    /**
                     * 添加值到Header中。
                     * @example `key`
                     */
                    Add: any;
                    /**
                     * 删除Header中的值。
                     */
                    Remove: string[];
                };
            };
        }[];
        /**
         * 匹配的请求域名列表
         */
        Domains: string[];
        /**
         * 序列化为JSON的VirtualService原始YAML
         * @example `{}`
         */
        RawVSRoute: string;
        /**
         * 如果为True，说明原始YAML中包含有当前界面上不支持的特性。
         * @example `true`
         */
        HasUnsafeFeatures: boolean;
    };
    /**
     * 请求ID。
     * @example `31d3a0f0-07ed-4f6e-9004-1804498c****`
     */
    RequestId: string;
    /**
     * 路由优先级。整数，数字越小，优先级越高。
     * @example `1`
     */
    Priority: number;
    /**
     * 网关路由状态，取值：
     * - `0`：在线。
     * - `1`：下线。
     * - `2`：创建或更新错误。
     * @example `1`
     */
    Status: number;
    /**
     * 路由描述。
     * @example `demo route`
     */
    Description: string;
    /**
     * 命名空间
     * @example `default`
     */
    Namespace: string;
}
