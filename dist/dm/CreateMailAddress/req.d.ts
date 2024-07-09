export interface CreateMailAddressRequest {
    /**
     * 发信地址
     * @example `账号+@+域名`
     */
    "AccountName": string;
    /**
     * 回信地址
     * @example `reply@aliyun.com`
     */
    "ReplyAddress"?: string;
    /**
     * 发信类型。取值：
     * - **batch**：批量邮件
     * - **trigger**：触发邮件
     * @example `batch`
     */
    "Sendtype": string;
}
