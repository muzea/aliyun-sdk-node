export interface RecoverCallInConfigResponse {
    /**
     * 恢复是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Data: boolean;
    /**
     * 请求ID。
     * @example `a78278ff-26bb-48ec-805c-26a0f4c102***`
     */
    RequestId: string;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应消息。
     * @example `成功`
     */
    Message: string;
}
