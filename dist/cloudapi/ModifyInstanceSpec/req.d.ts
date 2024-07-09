export interface ModifyInstanceSpecRequest {
    /**
     * 实例id
     * @example `apigateway-cn-v6419k43xxxxx`
     */
    "InstanceId": string;
    /**
     * 实例规格
     * @example `api.s1.small`
     */
    "InstanceSpec": string;
    /**
     * 续费时是否自动付费。取值：
     * * **True**：自动付费。请确保账号有足够的余额。
     * * **False**：控制台手动付费。具体操作为：登录控制台，在右上角选择**费用>进入费用中心**，在**订单管理**找到目标订单进行支付。
     * 默认值：**False**。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 口令
     * @example `b5845042-2f2f-4e96-bd5c-36c6e5c2a68c`
     */
    "Token": string;
    /**
     * 变配参数，取值：
     * - 升配：**UPGRADE**。
     * - 降配：**DOWNGRADE**。
     * 默认值：**UPGRADE**。
     * @example `UPGRADE`
     */
    "ModifyAction"?: string;
    /**
     * 是否跳过"待切流"状态。变配过程中API网关实例可能会增加新的出口IP，"待切流"状态是为了提醒用户将新的出口IP添加到IP白名单，将SkipWaitSwitch参数置为true后，实例不会再进入到"待切流"状态，若有新的出口IP，系统会发送站内信通知用户。
     * @example `false`
     */
    "SkipWaitSwitch"?: boolean;
}
