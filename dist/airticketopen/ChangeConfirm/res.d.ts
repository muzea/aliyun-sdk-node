export interface ChangeConfirmResponse {
    /**
     * http 请求成功，status 值均为 200
     * @example `200`
     */
    status: number;
    /**
     * 业务错误码
     * @example `null`
     */
    error_code: string;
    /**
     * 错误信息
     * @example `null`
     */
    error_msg: string;
    /**
     * 是否正确
     * @example `true`
     */
    success: boolean;
    /**
     *
     * @example `51593418-8C73-5E47-8BA8-3F1D4A00CC0B`
     */
    RequestId: string;
    /**
     * 正确处理返回数据
     */
    data: {
        /**
         * 改签支付金额
         * @example `30`
         */
        pay_amount: number;
        /**
         * 改签支付流水号
         * @example `hkduendkd-2023-dj0`
         */
        transaction_no: string;
    };
    /**
     * 错误处理携带数据
     * @example `null`
     */
    error_data: any;
}
