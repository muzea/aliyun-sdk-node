export interface DeleteBaselineResponse {
    /**
     * 调用是否成功。
     * - true：调用成功
     * - false：调用失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110000`
     */
    ErrorCode: string;
    /**
     * 错误信息。
     * @example `Baseline deletion failed with nodes dependent on baseline`
     */
    ErrorMessage: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 是否成功删除。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `0000-ABCD-EF****`
     */
    RequestId: string;
}
