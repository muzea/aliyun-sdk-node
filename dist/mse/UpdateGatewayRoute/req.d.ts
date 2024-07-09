export interface UpdateGatewayRouteRequest {
    /**
     * 网关ID。
     * @example `501`
     */
    "GatewayId"?: number;
    /**
     * 路由名称。
     * @example `route-web`
     */
    "Name"?: string;
    /**
     * 路由顺序。
     * @example `1`
     */
    "RouteOrder"?: number;
    /**
     * 路由匹配条件。
     */
    "Predicates": {
        /**
         * Path匹配。
         */
        PathPredicates: {
            /**
             * 路由Path路径。
             * @example `/test`
             */
            Path: string;
            /**
             * 匹配类型。
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
             * @example `on`
             */
            Value: string;
            /**
             * 匹配类型。
             * @example `PRE`
             */
            Type: string;
        }[];
        /**
         * 参数匹配。
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
     * 目标服务。
     */
    "Services"?: {
        /**
         * 服务ID。
         * @example `1`
         */
        ServiceId: number;
        /**
         * 百分比。
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
         * @example `web`
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
         * @example `DUBBO
        `
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
             * Dubbo服务组。
             * @example `service name`
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
                 * @example `/mytestzbk/sayhello
                `
                 */
                Mothedpath: string;
                /**
                 * Header透传类型。
                 * > 透传类型枚举值。
                 * > - 透传所有：PASS_ALL。
                 * > - 不透传：PASS_NOT。
                 * > - 指定参数：PASS_ASSIGN。
                 * @example `PASS_NOT
                `
                 */
                PassThroughAllHeaders: string;
                /**
                 * 指定透传Header列表。
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
                     * @example `ALL_QUERY_PARAMETER
                    `
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
         * Dubbo端口。
         * @example `20880`
         */
        ServicePort: number;
    }[];
    /**
     * 路由ID。
     * @example `139`
     */
    "Id"?: number;
    /**
     * 目标服务类型。
     * @example `Mock`
     */
    "DestinationType"?: string;
    /**
     * Mock内容。
     */
    "DirectResponseJSON"?: {
        /**
         * Mock返回码。
         * @example `200`
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
     * @example `gw-86575c0bc9f04ecfbacb92b8e392a2c4`
     */
    "GatewayUniqueId": string;
    /**
     * 关联域名。
     * @example `[90]`
     */
    "DomainIdListJSON": string;
    /**
     * 重定向。
     */
    "RedirectJSON"?: {
        /**
         * 状态码。
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
     * 是否开启Waf。
     * @example `false`
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
         * @example `1`
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
         * @example `Namespace
        `
         */
        Namespace: string;
        /**
         * 服务分组名称。
         * @example `test`
         */
        GroupName: string;
        /**
         * 协议类型。
         * @example `DUBBO
        `
         */
        AgreementType: string;
        /**
         * 服务端口。
         * @example `8848`
         */
        ServicePort: number;
    }[];
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
