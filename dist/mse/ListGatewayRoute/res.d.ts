export interface ListGatewayRouteResponse {
    /**
     * 请求ID。
     * @example `83F02EAB-ECDF-55C6-B332-8649E5E7AF2C`
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
     * 代码。
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
         * @example `36`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `11`
         */
        PageNumber: number;
        /**
         * 分页大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 数据结构。
         */
        Result: {
            /**
             * 路由ID。
             * @example `47`
             */
            Id: number;
            /**
             * 名称。
             * @example `test`
             */
            Name: string;
            /**
             * 网关唯一标识。
             * @example `gw-cf0e7f52ecc7429dbc7ba4d5e3656100`
             */
            GatewayUniqueId: string;
            /**
             * 网关ID。
             * @example `496`
             */
            GatewayId: number;
            /**
             * 状态。
             * @example `2`
             */
            Status: number;
            /**
             * 顺序
             * @example `1`
             */
            RouteOrder: number;
            /**
             * 默认服务名称。
             * @example `test`
             */
            DefaultServiceName: string;
            /**
             * 默认服务id。
             * @example `1`
             */
            DefaultServiceId: number;
            /**
             * 匹配规则
             * @example `{\"PathPredicates\":{\"Path\":\"/rpc/compute \",\"Type\":\"PRE\",\"IgnoreCase\":true}}`
             */
            Predicates: string;
            /**
             * 匹配规则
             */
            RoutePredicates: {
                /**
                 * 路由Path匹配。
                 */
                PathPredicates: {
                    /**
                     * 节点路径。
                     * @example `/getIp`
                     */
                    Path: string;
                    /**
                     * 匹配类型。
                     * @example `PRE`
                     */
                    Type: string;
                    /**
                     * 忽略大小写
                     * @example `true`
                     */
                    IgnoreCase: boolean;
                };
                /**
                 * HTTP方法匹配
                 */
                MethodPredicates: string[];
                /**
                 * Header匹配
                 */
                HeaderPredicates: {
                    /**
                     * Header KEY
                     * @example `userid`
                     */
                    Key: string;
                    /**
                     * 匹配值
                     * @example `test`
                     */
                    Value: string;
                    /**
                     * 匹配类型
                     * @example `PRE`
                     */
                    Type: string;
                }[];
                /**
                 * 参数匹配
                 */
                QueryPredicates: {
                    /**
                     * 参数名称
                     * @example `userid`
                     */
                    Key: string;
                    /**
                     * 匹配值
                     * @example `test`
                     */
                    Value: string;
                    /**
                     * 匹配类型
                     * @example `PRE`
                     */
                    Type: string;
                }[];
            };
            /**
             * 创建时间。
             * @example `2022-01-25T07:14:01.817+0000`
             */
            GmtCreate: string;
            /**
             * 修改时间
             * @example `2022-01-07 18:07:57`
             */
            GmtModified: string;
            /**
             * 服务。
             * @example `[]`
             */
            Services: string;
            /**
             * 服务。
             */
            RouteServices: {
                /**
                 * 服务ID
                 * @example `1563`
                 */
                ServiceId: number;
                /**
                 * 服务名称。
                 * @example `hu`
                 */
                ServiceName: string;
                /**
                 * 权重百分比
                 * @example `11`
                 */
                Percent: number;
                /**
                 * 服务版本。
                 * @example `v1`
                 */
                Version: string;
                /**
                 * 名称。
                 * @example `test`
                 */
                Name: string;
                /**
                 * 来源类型
                 * @example `MSE`
                 */
                SourceType: string;
                /**
                 * 命名空间。
                 * @example `default`
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
                     * @example `org.apache.dubbo.samples.basic.api.DemoService`
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
             * 域名ID。
             * @example `265`
             */
            DomainId: number;
            /**
             * 域名。
             * @example `y.com`
             */
            DomainName: string;
            /**
             * 目标类型。
             * @example `Single`
             */
            DestinationType: string;
            /**
             * Mock配置
             */
            DirectResponse: {
                /**
                 * 响应码。
                 * @example `200`
                 */
                Code: number;
                /**
                 * Mock返回值
                 * @example `hello`
                 */
                Body: string;
            };
            /**
             * 域名列表。
             */
            DomainIdList: number[];
            /**
             * 域名列表。
             */
            DomainNameList: string[];
            /**
             * 重定向
             */
            Redirect: {
                /**
                 * 响应码。
                 * @example `200`
                 */
                Code: number;
                /**
                 * 重定向主机名
                 * @example `test.com`
                 */
                Host: string;
                /**
                 * 路径。
                 * @example `/test`
                 */
                Path: string;
            };
            /**
             * 路由类型
             * @example `Op`
             */
            Type: string;
            /**
             * 路由备注（ingress）
             */
            Comment: {
                /**
                 * 状态。
                 * @example `error`
                 */
                Status: string;
            };
            /**
             * 是否开启waf
             * @example `false`
             */
            EnableWaf: string;
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
                 * @example `353
                `
                 */
                ServiceId: number;
                /**
                 * 服务名称。
                 * @example `service name`
                 */
                ServiceName: string;
                /**
                 * 权重百分比。
                 * @example `100`
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
                 * @example `MSE
                `
                 */
                SourceType: string;
                /**
                 * 服务所在命名空间。
                 * @example `Namespace`
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
        }[];
    };
}
