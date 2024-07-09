export interface ApplyInvoiceResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `6000EE23-274B-4E07-A697-FF2E999520A4`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 发票申请ID。
         * @example `1323125534`
         */
        InvoiceApplyId: number;
    };
}
