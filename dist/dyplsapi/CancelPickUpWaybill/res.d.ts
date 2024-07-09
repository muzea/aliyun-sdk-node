export interface CancelPickUpWaybillResponse {
    /**
     * 请求ID。
     * @example `9FC30594-3841-43AD-9008-03393BCB5CD2`
     */
    RequestId: string;
    /**
     * 状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~109196~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 是否取消成功。
         * @example `true`
         */
        Success: boolean;
        /**
         * 错误码。
         * @example `无`
         */
        ErrorCode: string;
        /**
         * 取消结果。
         * @example `取消成功`
         */
        Message: string;
        /**
         * 错误信息。
         * @example `无`
         */
        ErrorMsg: string;
    };
}
