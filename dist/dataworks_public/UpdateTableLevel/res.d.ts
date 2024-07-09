export interface UpdateTableLevelResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `abcde`
     */
    RequestId: string;
    /**
     * 错误消息。
     * @example `The specified parameters are invalid.`
     */
    ErrorMessage: string;
    /**
     * 是否成功返回结果。
     * @example `true`
     */
    UpdateResult: boolean;
    /**
     * 错误码。
     * @example `1031203110005`
     */
    ErrorCode: string;
    /**
     * 是否成功更新层级。
     * @example `true`
     */
    Success: boolean;
}
