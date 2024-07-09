export interface GetZookeeperDataImportUrlResponse {
    /**
     * 请求ID。
     * @example `E4E2058F-C524-5C29-9BC7-5874EA8D7CE2`
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
     * Code仅仅用来和success同步。
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
     * @example `You are not authorized to perform this operation.`
     */
    DynamicMessage: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 文件上传地址。
         * @example `http://xxxxxxxxx`
         */
        Url: string;
        /**
         * 允许上传文件的最大大小（单位MB）。
         * @example `250000`
         */
        MaxSize: string;
    };
}
