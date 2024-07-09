export interface GetCurrentConcurrencyResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前的并发
     * @example `12`
     */
    CurrentConcurrency: number;
    /**
     * 接口状态码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
    /**
     * 最大并发
     * @example `5`
     */
    MaxConcurrentConversation: number;
    /**
     * 实例id
     * @example `12f3dd08-0c55-44ce-9b64-e69d35ed3a76`
     */
    InstanceId: string;
}
