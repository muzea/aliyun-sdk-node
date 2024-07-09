export interface RenewDBInstanceRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。
     * @example `dds-bpxxxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 实例续费时长，单位为月。取值：**1~9，12，24，36**。
     * @example `1`
     */
    "Period": number;
    /**
     * 是否自动付费。取值：
     * - **true**：自动付费，请确保账号有足够的余额。
     * - **false**：控制台手动付费。具体操作为：登录控制台，在页面右上角选择**费用**>**用户中心**，在**订单管理**找到目标订单进行支付。
     * 默认值为：**true**。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 业务信息。
     * @example `{“ActivityId":"000000000"}`
     */
    "BusinessInfo"?: string;
    /**
     * 是否使用优惠券，取值说明：
     * - **default**或**null**（默认）：使用优惠券。
     * - **youhuiquan_promotion_option_id_for_blank**：不使用优惠券。
     * @example `default`
     */
    "CouponNo"?: string;
    /**
     * 是否开启自动续费，取值说明：
     * - **true**：开启自动续费。
     * - **false**：不开启自动续费。
     * 默认值为 **false**
     * @example `true`
     */
    "AutoRenew"?: boolean;
}
