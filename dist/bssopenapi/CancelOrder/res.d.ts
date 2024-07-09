export interface CancelOrderResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `30D2285E-A848-4ECB-AA74-4954C60858A1`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回信息。
     */
    Data: {
        /**
         * 主机ID。
         * @example `cn`
         */
        HostId: string;
    };
}
