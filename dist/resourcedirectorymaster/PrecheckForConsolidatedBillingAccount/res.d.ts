export interface PrecheckForConsolidatedBillingAccountResponse {
    /**
     * 请求ID。
     * @example `9E6B6CA8-9E7A-521F-A743-AA582714727E`
     */
    RequestId: string;
    /**
     * 检查失败原因。
     */
    Reasons: {
        /**
         * 检查失败错误码。
         * @example `PaymentAccountEnterpriseInvoiceError`
         */
        Code: string;
        /**
         * 检查失败错误描述。
         * @example `No enterprise invoice header information is set for the payment account.`
         */
        Message: string;
    }[];
    /**
     * 检查结果。取值：
     * - true：检查成功。
     * - false：检查失败。
     * @example `false`
     */
    Result: boolean;
}
