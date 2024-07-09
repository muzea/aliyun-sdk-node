export interface RemoveApplicationResponse {
    /**
     * 请求id。
     * @example `abcde-12345`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `NoPermission`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `success`
     */
    Message: string;
    /**
     * 删除执行结果。
     * @example `success`
     */
    Data: string;
}
