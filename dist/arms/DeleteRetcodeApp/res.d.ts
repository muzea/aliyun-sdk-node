export interface DeleteRetcodeAppResponse {
    /**
     * 是否成功删除：
     * - `true`：删除成功。
     * - `false`：删除失败。
     * @example `true`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `01FF8DD9-A09C-47A1-895A-B6E321BE77B6`
     */
    RequestId: string;
    /**
     * 状态码。200为成功，其他状态码为异常。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常信息。
     * @example `success`
     */
    Message: string;
}
