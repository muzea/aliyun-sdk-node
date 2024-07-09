export interface ListClusterTypesResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `821B5B05-8919-5FBB-BA75-417BFC093EB8`
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
     * 错误码
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的**%s**。
     * > 如果**ErrMessage**返回**The Value of Input Parameter %s is not valid**，且**DynamicMessage**返回**DtsJobId**，则代表所传入的请求参数**DtsJobId**不合法。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        Code: string;
        /**
         * 可开通的MSE引擎类型。
         * @example `Zookeeper`
         */
        ShowName: string;
    }[];
}
