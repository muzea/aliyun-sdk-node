export interface UpdateTableThemeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `abcd`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 是否成功返回更新结果：
     * - true：是
     * - false：否
     * @example `true`
     */
    UpdateResult: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 主题是否更新成功：
     * - true：是
     * - false：否
     * @example `true`
     */
    Success: boolean;
}
