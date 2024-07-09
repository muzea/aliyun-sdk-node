export interface CancelSubscriptionBillResponse {
    /**
     * 提示信息
     * @example `成功`
     */
    Message: string;
    /**
     * 请求id
     * @example `210e876f16704666020714468dab35`
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
