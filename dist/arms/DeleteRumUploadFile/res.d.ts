export interface DeleteRumUploadFileResponse {
    /**
     * Id of the request
     * @example `40B10E04-81E8-4643-970D-F1B38F2E****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
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
     * 错误提示信息。
     * @example `内部错误，请联系管理员。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 是否删除成功，删除成功返回success。
     * @example `success`
     */
    Data: string;
}
