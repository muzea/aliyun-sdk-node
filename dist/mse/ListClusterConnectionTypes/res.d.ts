export interface ListClusterConnectionTypesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `8625467C-27DD-5711-878E-6857E3074937`
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
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 响应码。
     * @example `200`
     */
    Code: number;
    /**
     * 响应信息。
     * @example `success`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%**s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则表示所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 连接类型。
         * @example `slb`
         */
        ShowName: string;
    }[];
}
