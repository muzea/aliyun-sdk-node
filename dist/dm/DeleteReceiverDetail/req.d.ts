export interface DeleteReceiverDetailRequest {
    /**
     * 收件人列表ID
     * @example `123534`
     */
    "ReceiverId": string;
    /**
     * 收件地址
     * @example `账号+@+域名`
     */
    "Email"?: string;
}
