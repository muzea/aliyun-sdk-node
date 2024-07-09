export interface DeleteTableThemeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `abcdef`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 主题是否删除成功：
     * - true：是
     * - false：否
     * @example `true`
     */
    Success: boolean;
    /**
     * 删除结果。
     * @example `true`
     */
    DeleteResult: boolean;
}
