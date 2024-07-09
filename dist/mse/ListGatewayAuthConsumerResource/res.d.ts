export interface ListGatewayAuthConsumerResourceResponse {
    /**
     * 请求ID。
     * @example `A73AC37C-C617-4E3A-8049-372CF49C****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `True`
     */
    Success: boolean;
    /**
     * code仅仅用来和success同步。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
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
     * 动态错误信息中的占位符。
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 总条数。
         * @example `11`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `1`
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
             * 鉴权消费者授权ID。
             * @example `1`
             */
            Id: number;
            /**
             * 网关鉴权消费者ID。
             * @example `2`
             */
            ConsumerId: number;
            /**
             * 路由ID。
             * @example `3091`
             */
            RouteId: number;
            /**
             * 路由名称。
             * @example `test`
             */
            RouteName: string;
            /**
             * 资源授权状态：
             * - true：启用
             * - false：停用
             * @example `true`
             */
            ResourceStatus: boolean;
            /**
             * 网关唯一标识。
             * @example `gw-5017305290e14centbrveca****`
             */
            GatewayUniqueId: string;
            /**
             * 创建时间。
             * @example `2022-01-07 18:07:57`
             */
            GmtCreate: string;
            /**
             * 修改时间。
             * @example `2022-01-07 18:07:57`
             */
            GmtModified: string;
        }[];
    };
}
