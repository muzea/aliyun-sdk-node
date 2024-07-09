export interface CreateTableLevelResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `请求id`
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
     * 是否成功创建层级。
     * @example `true`
     */
    Success: boolean;
    /**
     * 层级ID。
     * @example `123`
     */
    LevelId: number;
}
