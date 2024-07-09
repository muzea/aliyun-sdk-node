export interface AppMessagePushResponse {
    /**
     * Id of the request
     * @example `123-123143-4`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `null`
     */
    Data: string;
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `SysytemError`
     */
    Message: string;
    /**
     * 通信码
     * @example `true`
     */
    Success: boolean;
}
