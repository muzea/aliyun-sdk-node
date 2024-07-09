export interface GetEffectiveDaysResponse {
    /**
     * http状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求id
     * @example `Success`
     */
    RequestId: string;
    /**
     * 生效时间
     * @example `7`
     */
    EffectiveDays: number;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 接口提示消息
     * @example `Success`
     */
    Message: string;
}
