export interface ListGatewayAuthConsumerResponse {
    /**
     * 请求ID。
     * @example `dc63-465d-8ef5-20dc18af****`
     */
    RequestId: string;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
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
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%**s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则表示所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据结构。
     */
    Data: {
        /**
         * 查询到的总数。
         * @example `9`
         */
        TotalSize: number;
        /**
         * 页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 页面大小。
         * @example `10`
         */
        PageSize: number;
        /**
         * 返回集合。
         */
        Result: {
            /**
             * 鉴权消费者ID。
             * @example `1`
             */
            Id: number;
            /**
             * 鉴权消费者名称。
             * @example `test`
             */
            Name: string;
            /**
             * 鉴权消费者状态：
             * - true：启用
             * - false：停用
             * @example `true`
             */
            ConsumerStatus: boolean;
            /**
             * 创建人。
             * @example `123`
             */
            PrimaryUser: string;
            /**
             * 网关唯一标识ID。
             * @example `gw-5017305290e14centbrveca****`
             */
            GatewayUniqueId: string;
            /**
             * 鉴权类型：
             * - JWT
             * @example `JWT`
             */
            Type: string;
            /**
             * 鉴权消费者描述。
             * @example `描述`
             */
            Description: string;
            /**
             * 创建时间。
             * @example `2021-09-13 19:24:23`
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
