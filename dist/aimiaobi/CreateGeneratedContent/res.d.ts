export interface CreateGeneratedContentResponse {
    /**
     * 请求唯一标识
     * @example `3f7045e099474ba28ceca1b4eb6d6e21`
     */
    RequestId: string;
    /**
     * 是否成功：true 成功，false 失败
     * @example `false`
     */
    Success: boolean;
    /**
     * 状态码
     * @example `success`
     */
    Code: string;
    /**
     * 错误说明
     * @example `successful`
     */
    Message: string;
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 业务数据
     * @example `42`
     */
    Data: number;
}
