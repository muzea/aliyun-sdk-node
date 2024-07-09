export interface DeleteGatewayRouteResponse {
    /**
     * 请求ID。
     * @example `ADDD8AB7-8D1C-4697-A83E-410D2607****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 报错信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 状态码。
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
         * @example `12`
         */
        Id: number;
        /**
         * 名称。
         * @example `test`
         */
        Name: string;
        /**
         * 网关唯一标识ID。
         * @example `gw-5017305290e14cebbrvec4a5****`
         */
        GatewayUniqueId: string;
        /**
         * 网关ID。
         * @example `125`
         */
        GatewayId: number;
        /**
         * 匹配规则
         * @example `{\"PathPredicates\":{\"Path\":\"/metas\",\"Type\":\"PRE\",\"IgnoreCase\":false}}`
         */
        Predicates: string;
        /**
         * 默认服务ID。
         * @example `1`
         */
        DefaultServiceId: number;
        /**
         * 路由顺序。
         * @example `1`
         */
        RouteOrder: number;
        /**
         * 路由状态。
         * - 未发布：0
         * - 发布中：2
         * - 已发布：3
         * - 编辑中(有更新未发布)：4
         * - 下线中：5
         * - 不可用：6
         * @example `2`
         */
        Status: number;
        /**
         * 创建时间。
         * @example `2022-01-07 18:07:57`
         */
        GmtCreate: string;
        /**
         * 修改时间。
         * @example `2021-12-30T06:41:52.000+0000`
         */
        GmtModified: string;
    };
}
