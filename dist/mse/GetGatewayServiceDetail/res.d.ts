export interface GetGatewayServiceDetailResponse {
    /**
     * 请求ID。
     * @example `9802C54E-5CC5-5706-927B-993DBB6DCF2F`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 响应码。
     * @example `1`
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
     * 数据概览。
     */
    Data: {
        /**
         * 服务ID。
         * @example `1`
         */
        Id: number;
        /**
         * 服务名称。
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
         * 服务来源
         * @example `MSE`
         */
        SourceType: string;
        /**
         * 命名空间。
         * @example `default`
         */
        Namespace: string;
        /**
         * 分组名称。
         * @example `test`
         */
        GroupName: string;
        /**
         * 来源ID。
         * @example `1`
         */
        SourceId: number;
        /**
         * 服务注册到注册中心的名称。
         * @example `test`
         */
        ServiceNameInRegistry: string;
        /**
         * 服务的基本信息。
         * @example `{}`
         */
        MetaInfo: string;
        /**
         * 服务IP地址。
         */
        Ips: string[];
        /**
         * 服务版本号（已废弃）。
         */
        Versions: {
            /**
             * 标签。
             * @example `version`
             */
            Label: string;
            /**
             * 标签值。
             * @example `v1`
             */
            Value: string;
            /**
             * 类型。
             * @example `test`
             */
            Type: string;
        }[];
        /**
         * 标签详情。
         */
        LabelDetails: {
            /**
             * 标签。
             * @example `label`
             */
            Key: string;
            /**
             * 标签值。
             */
            Values: string[];
        }[];
        /**
         * 版本详细。
         */
        VersionDetails: {
            /**
             * 服务版本。
             */
            ServiceVersion: {
                /**
                 * 版本名。
                 * @example `v2`
                 */
                Name: string;
                /**
                 * 标签。
                 */
                Labels: {
                    /**
                     * 标签。
                     * @example `version`
                     */
                    Key: string;
                    /**
                     * 标签值。
                     * @example `v2`
                     */
                    Value: string;
                }[];
            };
            /**
             * 实例数。
             * @example `1`
             */
            EndpointNum: number;
            /**
             * 实例百分比。
             * @example `20%`
             */
            EndpointNumPercent: string;
        }[];
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
         * 服务流量策略。
         * @example `{}`
         */
        GatewayTrafficPolicy: any;
        /**
         * 健康检查状态。
         * @example `true`
         */
        HealthStatus: string;
        /**
         * 是否健康检查。
         * @example `true`
         */
        HealthCheck: string;
        /**
         * 服务协议。
         * @example `HTTP`
         */
        ServiceProtocol: string;
        /**
         * 服务端口数组。
         */
        Ports: number[];
        /**
         * 服务端口流量策略。
         */
        PortTrafficPolicyList: {
            /**
             * 端口配置ID。
             * @example `1`
             */
            Id: number;
            /**
             * 服务ID。
             * @example `1`
             */
            ServiceId: number;
            /**
             * 服务端口。
             * @example `8080`
             */
            ServicePort: number;
            /**
             * 网关UniqueId。
             * @example `gw-2837hfd91h34dbg87364g*****`
             */
            GatewayUniqueId: string;
            /**
             * 流量策略。
             */
            TrafficPolicy: any;
            /**
             * 创建时间
             * @example `1667460287386`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `1667460287386`
             */
            GmtModified: string;
        }[];
        ServiceFQDN: string;
    };
}
