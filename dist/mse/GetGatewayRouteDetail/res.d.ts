export interface GetGatewayRouteDetailResponse {
    /**
     * 请求ID。
     * @example `FDF2D16C-5D28-5FAA-A56B-30BDE3559880`
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
     * 状态码。说明 200表示成功。
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
         * ID。
         * @example `1050`
         */
        Id: number;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-7ea3da97b96543e19f6c597c****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `1`
         */
        GatewayId: number;
        /**
         * 默认服务ID。
         * @example `3`
         */
        DefaultServiceId: number;
        /**
         * 默认服务名称。
         * @example `test`
         */
        DefaultServiceName: string;
        /**
         * 路由状态。
         * - 未发布：0
         * - 发布中：2
         * - 已发布：3
         * - 编辑中(有更新未发布)：4
         * - 下线中：5
         * - 不可用：6
         * @example `0`
         */
        Status: number;
        /**
         * 创建时间。
         * @example `2022-01-07 18:07:57`
         */
        GmtCreate: string;
        /**
         * 最后修改时间。
         * @example `2022-01-07T10:07:57.000+0000`
         */
        GmtModified: string;
        /**
         * 路由顺序。
         * @example `1`
         */
        RouteOrder: number;
        /**
         * 匹配条件。
         * @example `{}`
         */
        Predicates: string;
        /**
         * 路由匹配。
         */
        RoutePredicates: {
            /**
             * 路由匹配。
             */
            PathPredicates: {
                /**
                 * 路径。
                 * @example `/api`
                 */
                Path: string;
                /**
                 * 匹配类型。
                 * @example `PRE`
                 */
                Type: string;
                /**
                 * 是否忽略大小写。
                 * @example `true`
                 */
                IgnoreCase: boolean;
            };
            /**
             * 方法匹配。
             */
            MethodPredicates: string[];
            /**
             * 头匹配。
             */
            HeaderPredicates: {
                /**
                 * 请求头KEY。
                 * @example `id`
                 */
                Key: string;
                /**
                 * 匹配值。
                 * @example `200`
                 */
                Value: string;
                /**
                 * 类型。
                 * @example `PRE`
                 */
                Type: string;
            }[];
            /**
             * 参数匹配。
             */
            QueryPredicates: {
                /**
                 * 参数名称。
                 * @example `userid`
                 */
                Key: string;
                /**
                 * 匹配值。
                 * @example `test`
                 */
                Value: string;
                /**
                 * 类型。
                 * @example `PRE`
                 */
                Type: string;
            }[];
        };
        /**
         * 域名ID。
         * @example `235`
         */
        DomainId: number;
        /**
         * 域名。
         * @example `123.com`
         */
        DomainName: string;
        /**
         * 服务的配置信息。
         * @example `[{\"Percent\":100,\"ServiceId\":126}]`
         */
        Services: string;
        /**
         * 服务。
         */
        RouteServices: {
            /**
             * 服务ID。
             * @example `782`
             */
            ServiceId: number;
            /**
             * 服务名称。
             * @example `xkc-crm`
             */
            ServiceName: string;
            /**
             * 权重。
             * @example `80`
             */
            Percent: number;
            /**
             * 服务版本。
             * @example `v1`
             */
            Version: string;
            /**
             * 服务名称。
             * @example `dubbo4`
             */
            Name: string;
            /**
             * 服务来源。
             * @example `MSE`
             */
            SourceType: string;
            /**
             * 命名空间。
             * @example `acs_ecs_dashboard`
             */
            Namespace: string;
            /**
             * 服务组名称。
             * @example `api`
             */
            GroupName: string;
            /**
             * 协议类型。
             * @example `DUBBO`
             */
            AgreementType: string;
            /**
             * Dubbo协议转换体。
             */
            HttpDubboTranscoder: {
                /**
                 * Dubbo服务名称。
                 * @example `org.apache.dubbo.samples.basic.api.DemoService
                `
                 */
                DubboServiceName: string;
                /**
                 * Dubbo服务版本。
                 * @example `0.0.0`
                 */
                DubboServiceVersion: string;
                /**
                 * Dubbo转发规则列表。
                 */
                MothedMapList: {
                    /**
                     * Dubbo方法名。
                     * @example `sayHello`
                     */
                    DubboMothedName: string;
                    /**
                     * Http方法。
                     * > 支持http方法参数值。
                     * > - ALL_GET
                     * > - ALL_POST
                     * > - ALL_PUT
                     * > - ALL_DELETE
                     * > - ALL_PATCH
                     * @example `ALL_GET`
                     */
                    HttpMothed: string;
                    /**
                     * 方法匹配路径。
                     * @example `/mytestzbk/sayhello`
                     */
                    Mothedpath: string;
                    /**
                     * Header透传类型。
                     * > 透传类型枚举值。
                     * > - 透传所有：PASS_ALL
                     * > - 不透传：PASS_NOT
                     * > - 指定参数：PASS_ASSIGN
                     * @example `PASS_NOT`
                     */
                    PassThroughAllHeaders: string;
                    /**
                     * 指定Header透传列表。
                     */
                    PassThroughList: string[];
                    /**
                     * 参数映射列表。
                     */
                    ParamMapsList: {
                        /**
                         * 入参位置。
                         * > 入参位置枚举值。
                         * > - 请求参数：`ALL_QUERY_PARAMETER`
                         * > - 请求头：`ALL_HEADER`
                         * > - 请求路径：`ALL_PATH`
                         * > - 请求体：`ALL_BODY`
                         * @example `ALL_QUERY_PARAMETER`
                         */
                        ExtractKeySpec: string;
                        /**
                         * 入参位提取Key。
                         * @example `name`
                         */
                        ExtractKey: string;
                        /**
                         * 后端参数类型。
                         * @example `java.lang.String`
                         */
                        MappingType: string;
                    }[];
                }[];
                /**
                 * Dubbo服务组。
                 * @example `service group`
                 */
                DubboServiceGroup: string;
            };
            /**
             * 服务端口。
             * @example `20880`
             */
            ServicePort: number;
            /**
             * 健康状态
             * - Health
             * - Unhealthy
             * - Checking
             * - Unknown
             * @example `Health`
             */
            HealthStatus: string;
            /**
             * 非健康Endpoint列表
             */
            UnhealthyEndpoints: string[];
        }[];
        /**
         * 重写策略信息。
         */
        HTTPRewrite: {
            /**
             * 开启状态。
             * @example `off`
             */
            Status: string;
            /**
             * 节点路径。
             * @example `/test/client`
             */
            Path: string;
            /**
             * 实例地址。
             * @example `aliyuncs.com`
             */
            Host: string;
            /**
             * 重写类型。
             * @example `PRE`
             */
            PathType: string;
            /**
             * 匹配Pattern。
             * @example `/test`
             */
            Pattern: string;
            /**
             * 替换。
             * @example `test`
             */
            Substitution: string;
        };
        /**
         * Header设置信息。
         */
        HeaderOp: {
            /**
             * 状态。
             * @example `off`
             */
            Status: string;
            /**
             * 头字段对象。
             */
            HeaderOpItems: {
                /**
                 * 请求或响应。
                 * @example `Response`
                 */
                DirectionType: string;
                /**
                 * 操作类型。
                 * @example `Add`
                 */
                OpType: string;
                /**
                 * Header Key。
                 * @example `debug`
                 */
                Key: string;
                /**
                 * 设置值。
                 * @example `test`
                 */
                Value: string;
            }[];
        };
        /**
         * 目标服务类型。
         * @example `Single`
         */
        DestinationType: string;
        /**
         * Mock信息。
         */
        DirectResponse: {
            /**
             * 响应码。
             * @example `200`
             */
            Code: number;
            /**
             * Mock返回值。
             * @example `{}`
             */
            Body: string;
        };
        /**
         * 跨域配置。
         */
        Cors: {
            /**
             * 状态。
             * @example `off`
             */
            Status: string;
            /**
             * 跨域。
             * @example `*`
             */
            AllowOrigins: string;
            /**
             * 跨域方法。
             * @example `GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH`
             */
            AllowMethods: string;
            /**
             * 跨域Header。
             * @example `*`
             */
            AllowHeaders: string;
            /**
             * 响应头。
             * @example `*`
             */
            ExposeHeaders: string;
            /**
             * 时间单位。
             * @example `h`
             */
            TimeUnit: string;
            /**
             * 时间数。
             * @example `24`
             */
            UnitNum: number;
            /**
             * 允许携带凭证。
             * @example `true`
             */
            AllowCredentials: boolean;
        };
        /**
         * 超时配置。
         */
        Timeout: {
            /**
             * 时间数。
             * @example `10`
             */
            UnitNum: number;
            /**
             * 时间单位。
             * @example `s`
             */
            TimeUnit: string;
            /**
             * 状态。
             * @example `off`
             */
            Status: string;
        };
        /**
         * 重试配置。
         */
        Retry: {
            /**
             * 重试次数。
             * @example `1`
             */
            Attempts: number;
            /**
             * 重试条件。
             */
            RetryOn: string[];
            /**
             * HTTP状态码。
             */
            HttpCodes: string[];
            /**
             * 重试状态。
             * @example `on`
             */
            Status: string;
        };
        /**
         * 域名列表
         */
        DomainIdList: number[];
        /**
         * 域名列表
         */
        DomainNameList: string[];
        /**
         * 重定向配置
         */
        Redirect: {
            /**
             * 响应码。
             * @example `200`
             */
            Code: number;
            /**
             * 主机。
             * @example `16`
             */
            Host: string;
            /**
             * 路径。
             * @example `10111`
             */
            Path: string;
        };
        /**
         * 流量镜像配置。
         */
        FlowMirror: {
            /**
             * 目标服务ID。
             * @example `21`
             */
            TargetServiceId: number;
            /**
             * 目标服务名称。
             * @example `test`
             */
            TargetServiceName: string;
            /**
             * 目标服务端口。
             * @example `8790`
             */
            Port: number;
            /**
             * 流量复制比例（%），取值0-100。
             * @example `90`
             */
            Percentage: number;
            /**
             * 开启状态，取值：
             * - on：开启
             * - off：关闭
             * @example `on`
             */
            Status: string;
        };
        /**
         * 是否开启Waf。
         * @example `true`
         */
        EnableWaf: boolean;
        /**
         * Ahas状态。
         * @example `1`
         */
        AhasStatus: number;
        /**
         * 是否开启Fallback服务。
         * @example `true`
         */
        Fallback: boolean;
        /**
         * Fallback服务。
         */
        FallbackServices: {
            /**
             * 服务ID。
             * @example `1`
             */
            ServiceId: number;
            /**
             * 服务名称。
             * @example `name`
             */
            ServiceName: string;
            /**
             * 权重百分比。
             * @example `80`
             */
            Percent: number;
            /**
             * 服务版本。
             * @example `v1`
             */
            Version: string;
            /**
             * 名称。
             * @example `name`
             */
            Name: string;
            /**
             * 来源类型。
             * @example `MSE`
             */
            SourceType: string;
            /**
             * 服务所在命名空间。
             * @example `namespace`
             */
            Namespace: string;
            /**
             * 服务分组名称。
             * @example `test`
             */
            GroupName: string;
            /**
             * 协议类型。
             * @example `DUBBO`
             */
            AgreementType: string;
            /**
             * 服务端口。
             * @example `8848`
             */
            ServicePort: number;
        }[];
        /**
         * 路由策略Json字符串。
         * @example `{
              "CORS": "{\"allowMethods\":\"GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH\",\"allowHeaders\":\"*\",\"exposeHeaders\":\"*\",\"unitNum\":12,\"allowCredentials\":true,\"status\":\"off\",\"allowOrigins\":\"*\",\"timeUnit\":\"h\"}",
              "Timeout": "{\"unitNum\":10,\"timeUnit\":\"s\",\"status\":\"off\"}",
              "Retry": "{\"attempts\":2,\"retryOn\":[\"5xx\"],\"status\":\"off\"}",
              "HTTPRewrite": "{\"pathType\":\"EQUAL\",\"path\":\"/o\",\"status\":\"off\"}",
              "Waf": "{\"enabled\":false}",
              "HeaderOp": "{\"status\":\"off\",\"headerOpItems\":[{\"directionType\":\"Request\",\"opType\":\"Add\",\"key\":\"kkk\",\"value\":\"ll\"}]}"
        }`
         */
        Policies: string;
        /**
         * 路由描述
         * @example `a route for xxx`
         */
        Description: string;
    };
}
