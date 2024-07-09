export interface CreateSaslUserResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回消息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `C5CA600C-7D5A-45B5-B6DB-44FAC2C****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
}
