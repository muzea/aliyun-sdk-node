export interface DeleteAccountResponse {
    /**
     * 请求ID。
     * @example `021788F6-E50C-4BD6-9F80-66B0A1******`
     */
    RequestId: string;
    /**
     * 返回码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success`
     */
    Message: string;
    /**
     * 返回数据。
     * @example `true`
     */
    Data: boolean;
    /**
     * 执行结果是否成功。
     * @example `true`
     */
    Success: boolean;
}
