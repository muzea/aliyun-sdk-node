export interface AddGatewayRouteRequest {
    /**
     * 网关ID。
     * @example `526`
     */
    "GatewayId"?: number;
    /**
     * 路由名称。
     * @example `test`
     */
    "Name": string;
    /**
     * 路由顺序。（数值越小优先级越高）
     * @example `1`
     */
    "RouteOrder"?: number;
    /**
     * 匹配规则。
     */
    "Predicates"?: {
        /**
         * 路由匹配。
         */
        PathPredicates: {
            /**
             * 路径。
             * @example `/test`
             */
            Path: string;
            /**
             * 路由匹配：
             * - 前缀：PRE。
             * - 精确：EQUAL。
             * - 正则：ERGULAR。
             * @example `PRE`
             */
            Type: string;
            /**
             * 忽略大小写。
             * @example `true`
             */
            IgnoreCase: boolean;
        };
        /**
         * 方法匹配。
         */
        MethodPredicates: string[];
        /**
         * 请求头匹配。
         */
        HeaderPredicates: {
            /**
             * 请求头Key。
             * @example `debug`
             */
            Key: string;
            /**
             * 对应的Value。
             * @example `test`
             */
            Value: string;
            /**
             * 匹配类型。
             * @example `PRE`
             */
            Type: string;
        }[];
        /**
         * URL参数匹配。
         */
        QueryPredicates: {
            /**
             * 参数名。
             * @example `userid`
             */
            Key: string;
            /**
             * 匹配值。
             * @example `test`
             */
            Value: string;
            /**
             * 匹配类型。
             * @example `PRE`
             */
            Type: string;
        }[];
    };
    /**
     * 服务列表。
     */
    "Services"?: {
        /**
         * 服务ID。
         * @example `353`
         */
        ServiceId: number;
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
         * @example `user`
         */
        Name: string;
        /**
         * 来源类型。
         * @example `MSE`
         */
        SourceType: string;
        /**
         * 服务所在命名空间。
         * @example `default`
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
         * Dubbo协议转换体。
         */
        HttpDubboTranscoder: {
            /**
             * Dubbo服务名称。
             * @example `org.apache.dubbo.samples.basic.api.DemoService`
             */
            DubboServiceName: string;
            /**
             * Dubbot服务版本。
             * @example `0.0.0`
             */
            DubboServiceVersion: string;
            /**
             * 服务组。
             * @example `无`
             */
            DubboServiceGroup: string;
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
                 * > - ALL_GET。
                 * > - ALL_POST。
                 * > - ALL_PUT。
                 * > - ALL_DELETE。
                 * > - ALL_PATCH。
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
                 * > - 透传所有：PASS_ALL。
                 * > - 不透传：PASS_NOT。
                 * > - 指定参数：PASS_ASSIGN。
                 * @example `PASS_NOT`
                 */
                PassThroughAllHeaders: string;
                /**
                 * 指定透传Header列表
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
                     * - 请求头：`ALL_HEADER`
                     * - 请求路径：`ALL_PATH`
                     * - 请求体：`ALL_BODY`
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
        };
        /**
         * 服务端口。
         * @example `443`
         */
        ServicePort: number;
    }[];
    /**
     * 域名ID。
     * @example `20`
     */
    "DomainId"?: number;
    /**
     * 目标服务类型。
     * - Single：单服务
     * - Multiple：多服务
     * - VersionOriented：标签路由
     * - Mock：Mock
     * - Redirect：重定向
     * @example `Multiple`
     */
    "DestinationType"?: string;
    /**
     * Mock响应配置。
     */
    "DirectResponseJSON"?: {
        /**
         * Mock返回码。
         * @example `403`
         */
        Code: number;
        /**
         * Mock返回值。
         * @example `hello`
         */
        Body: string;
    };
    /**
     * 网关唯一标识ID。
     * @example `gw-492af9b04bb4474cae9d645be8*****`
     */
    "GatewayUniqueId": string;
    /**
     * 域名列表。
     * @example `[0,94]`
     */
    "DomainIdListJSON": string;
    /**
     * 重定向配置。
     */
    "RedirectJSON"?: {
        /**
         * 返回码。
         * @example `302`
         */
        Code: number;
        /**
         * 重定向主机名。
         * @example `test.com`
         */
        Host: string;
        /**
         * 重定向路径。
         * @example `/test`
         */
        Path: string;
    };
    /**
     * 是否开启WAF。
     * @example `true`
     */
    "EnableWaf"?: boolean;
    /**
     * 是否开启Fallback服务。
     * @example `true`
     */
    "Fallback"?: boolean;
    /**
     * Fallback服务。
     */
    "FallbackServices"?: {
        /**
         * 服务ID。
         * @example `353`
         */
        ServiceId: number;
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
         * @example `user`
         */
        Name: string;
        /**
         * 来源类型。
         * @example `MSE`
         */
        SourceType: string;
        /**
         * 服务所在命名空间。
         * @example `default`
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
         * @example `443`
         */
        ServicePort: number;
    }[];
    /**
     * 路由类型：
     * Op：管控路由。
     * @example `Op`
     */
    "RouteType"?: string;
    /**
     * 路由策略Json字符串。
     * @example `{"CORS":"{\"allowMethods\":\"GET,POST,PUT,DELETE,HEAD,OPTIONS,PATCH\",\"allowHeaders\":\"*\",\"exposeHeaders\":\"*\",\"unitNum\":12,\"allowCredentials\":true,\"status\":\"off\",\"allowOrigins\":\"*\",\"timeUnit\":\"h\"}","Timeout":"{\"unitNum\":10,\"timeUnit\":\"s\",\"status\":\"off\"}","Retry":"{\"attempts\":2,\"retryOn\":[\"5xx\"],\"status\":\"off\"}","HTTPRewrite":"{\"pathType\":\"EQUAL\",\"path\":\"/o\",\"status\":\"off\"}","Waf":"{\"enabled\":false}","HeaderOp":"{\"status\":\"off\",\"headerOpItems\":[{\"directionType\":\"Request\",\"opType\":\"Add\",\"key\":\"kkk\",\"value\":\"ll\"}]}"}`
     */
    "Policies"?: string;
    /**
     * 路由描述
     * @example `a route for xxx`
     */
    "Description"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
