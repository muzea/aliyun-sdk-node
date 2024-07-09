export interface QueryClusterDiskSpecificationResponse {
    /**
     * 请求返回码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `E13A3A34-7201-50C4-B2D0-0D7DB891811E`
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
     * 错误码。
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
     * 数据概览。
     */
    Data: {
        /**
         * 磁盘大小步长。
         * @example `2`
         */
        Step: number;
        /**
         * 磁盘允许最大值，单位：GB。
         * @example `500`
         */
        Max: number;
        /**
         * 磁盘允许最小值，单位：GB。
         * @example `1`
         */
        Min: number;
    };
}
