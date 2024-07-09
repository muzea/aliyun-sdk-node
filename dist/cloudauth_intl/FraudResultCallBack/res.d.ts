export interface FraudResultCallBackResponse {
    /**
     * 请求Id
     * @example `4EB35****87EBA1`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码
     * @example `Success`
     */
    Code: string;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
}
