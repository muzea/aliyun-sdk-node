export interface BuyPayAsYouGoOrderResponse {
    /**
     * 请求ID。
     * @example `C51420E3-144A-4A94-B473-8662FCF4AD10`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 购买成功后，返回购买的订单实例ID。
     * @example `dms_pre_public_cn-nif23l****`
     */
    InstanceId: string;
}
