export interface CloseTaskOrderResponse {
    /**
     * msg
     * @example `请求成功`
     */
    Message: string;
    /**
     * requestId
     * @example `AQWFE#$#ASD`
     */
    RequestId: string;
    /**
     * data
     * @example `null`
     */
    Data: string;
    /**
     * code
     * @example `200`
     */
    Code: string;
    /**
     * success
     * @example `true`
     */
    Success: boolean;
}
