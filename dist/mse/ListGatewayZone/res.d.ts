export interface ListGatewayZoneResponse {
    /**
     * 用于和Success同步，当Success为true时，Code为200
     * @example `200`
     */
    Code: number;
    /**
     * 响应信息。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `EE5C32A1-BC0E-4B79-817C-103E4EDF****`
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
     * @example `NO_PERMISSION`
     */
    ErrorCode: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 动态错误信息中的占位符。
     * @example `code`
     */
    DynamicCode: string;
    /**
     * 动态错误信息，用于替换返回参数**ErrMessage**错误信息中的%s。
     * @example `The specified parameter is invalid.`
     */
    DynamicMessage: string;
    /**
     * 可用区列表。
     */
    Data: {
        /**
         * 可用区ID。
         * @example `cn-hangzhou-i`
         */
        ZoneId: string;
        /**
         * 可用区本地名称。
         * @example `I`
         */
        LocalName: string;
    }[];
}
