export interface CreateTableThemeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `ABCd`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `0`
     */
    ErrorCode: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 生成的主题ID。
     * @example `123`
     */
    ThemeId: number;
}
