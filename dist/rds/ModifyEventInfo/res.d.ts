export interface ModifyEventInfoResponse {
    /**
     * 请求ID。
     * @example `224DB9F7-3100-4899-AB9C-C938BCCB43E7`
     */
    RequestId: string;
    /**
     * 错误id。
     * @example `12343`
     */
    ErrorEventId: string;
    /**
     * 成功记录数。
     * @example `1`
     */
    SuccessCount: number;
    /**
     * 错误代码。
     * @example `mst.errorcode.success.errormessage`
     */
    ErrorCode: string;
    /**
     * 成功事件id。
     * @example `234221`
     */
    SuccessEventId: string;
}
