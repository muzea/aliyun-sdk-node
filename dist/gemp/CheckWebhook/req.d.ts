export interface CheckWebhookRequest {
    /**
     * A short description of struct
     * @example `body`
     */
    "body"?: {
        /**
         * 幂等校验token
         * @example `FD200FAE-E98F-496E-BFE6-4CE61E59A2E9`
         */
        clientToken: string;
        /**
         * webook地址
         * @example `https://oapi.dingtalk.com/robot/send?access_token=XXX`
         */
        webhook: string;
        /**
         * webhook地址类型：
         * - 企业微信WEIXIN_GROUP
         * - 钉钉群DING_GROUP
         * - 飞书FEISHU_GROUP
         * @example `DING_GROUP`
         */
        webhookType: string;
    };
}
