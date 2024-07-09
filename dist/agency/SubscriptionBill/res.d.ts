export interface SubscriptionBillResponse {
    /**
     * 提示信息
     * @example `成功`
     */
    Message: string;
    /**
     * 请求id
     * @example `9C14ADFE-DF0A-54D4-8BD5-45D0839246B4`
     */
    RequestId: string;
    /**
     * 返回数据
     * @example `true`
     */
    Data: boolean;
    /**
     * 状态码
     * @example `200`
     */
    Code: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
}
