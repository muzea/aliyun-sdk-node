export interface ListServiceSourceResponse {
    /**
     * 请求ID。
     * @example `B8C4B0D8-EBB9-5F20-8295-04224FBE5529`
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
     * 响应码。
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
     * 返回结果。
     */
    Data: {
        /**
         * ID。
         * @example `1`
         */
        Id: number;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * ACK ID或MSE注册中心地址。
         * @example `***`
         */
        Address: string;
        /**
         * 类型。
         * @example `NACOS`
         */
        Type: string;
        /**
         * 来源类型。
         * @example `MSE`
         */
        Source: string;
        /**
         * 是否完成绑定。
         * （数值1表示完成绑定）
         * @example `1`
         */
        BindingWithGateway: number;
        /**
         * 网关ID。
         * @example `1`
         */
        GatewayId: number;
        /**
         * 创建时间。
         * @example `2022-01-07 18:07:57`
         */
        GmtCreate: string;
        /**
         * 更新时间。
         * @example `2022-01-07 18:07:57`
         */
        GmtModified: string;
        /**
         * 来源唯一标识。
         * @example `mse-cn-***`
         */
        SourceUniqueId: string;
        /**
         * 应用路由Ingress支持。
         */
        IngressOptions: {
            /**
             * 开启或关闭Ingress。
             * @example `true`
             */
            EnableIngress: boolean;
            /**
             * Ingress Class。
             * @example `com.test.xxx`
             */
            IngressClass: string;
            /**
             * 监听命名空间。
             * @example `default`
             */
            WatchNamespace: string;
            /**
             * 是否更新IngressStatus。
             * @example `true`
             */
            EnableStatus: boolean;
        };
        /**
         * 网关UniqueId。
         * @example `gw-2u9uhd9283hd92hgd39g239dg2*****`
         */
        GatewayUniqueId: string;
        /**
         * 服务分组数组。
         */
        GroupList: string[];
        /**
         * 服务列表根路径数组。
         */
        PathList: string[];
    }[];
}
