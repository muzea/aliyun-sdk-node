export interface UpdateAccountWebhookRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `2934839388494****`
     */
    "CustSpaceId": string;
    /**
     * HTTP方式通知回调地址。
     * @example `http://www.aliyun.com`
     */
    "StatusCallbackUrl"?: string;
    /**
     * 是否使用HTTP方式接收回执。取值：
     * - Y：是
     * - N：否
     * @example `Y`
     */
    "HttpFlag"?: string;
    /**
     * 是否使用队列方式接收回执。取值：
     * - Y：是
     * - N：否
     * @example `N`
     */
    "QueueFlag"?: string;
}
