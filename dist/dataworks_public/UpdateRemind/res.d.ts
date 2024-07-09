export interface UpdateRemindResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 更新自定义监控规则的返回结果。
     * @example `true`
     */
    Data: boolean;
    /**
     * 错误信息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 本次调用的唯一ID。出现错误后，您可以根据该ID排查问题。
     * @example `0000-ABCD-EFG****`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * - true（成功）
     * - false（失败）
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
}
