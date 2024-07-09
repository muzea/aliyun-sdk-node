export interface UpdatePhoneWebhookRequest {
    /**
     * ISV子客户的SpaceId。
     * @example `293483938849493****`
     */
    "CustSpaceId": string;
    /**
     * 手机号码。
     * @example `861380000****`
     */
    "PhoneNumber": string;
    /**
     * HTTP方式状态报告接口回调地址。
     * @example `http://www.aliyun.com`
     */
    "StatusCallbackUrl"?: string;
    /**
     * HTTP方式上行消息接口回调地址。
     * @example `http://aliyun.com`
     */
    "UpCallbackUrl"?: string;
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
