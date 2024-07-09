export interface RenewInstanceRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * - 续费不允许变更存储容量，改参数已经弃用，默认按当前规格下订单续费。
     * @example `-`
     */
    "Capacity"?: string;
    /**
     * - 续费不允许变更规格，改参数已经弃用，默认按当前规格下订单续费。
     * @example `-`
     */
    "InstanceClass"?: string;
    /**
     * 在原来的基础上，额外续费的周期，单位为月，取值：**1**~**9**、**12**、**24**、**36**。
     * @example `6`
     */
    "Period": number;
    /**
     * 是否自动付费。取值：
     * * **true**：自动付费，默认值。
     * * **false**：手动付费。
     * <props="china">选择为手动付费时，您需要在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后单击左侧导航栏的**订单管理** > **我的订单**，找到目标订单进行支付。</props>
     * <props="intl">选择为手动付费时，您需要在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后单击左侧导航栏的**订单管理**，找到目标订单进行支付。</props>
     * <props="partner">选择为手动付费时，您需要在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后单击左侧导航栏的**订单管理**，找到目标订单进行支付。</props>
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 用于备注请求来源，默认值为**OpenAPI**，无需手动设置。
     * @example `OpenAPI`
     */
    "FromApp"?: string;
    /**
     * 活动ID、业务信息。
     * @example `000000000`
     */
    "BusinessInfo"?: string;
    /**
     * 优惠码，默认值为：`youhuiquan_promotion_option_id_for_blank`。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `0.6823317918435086`
     */
    "ClientToken"?: string;
    /**
     * 是否开启自动续费，取值：
     * * **true**：开启，按以选择的续费时长进行续费，例如您选择续费时长为3个月，那么每次自动续费时会缴纳3个月的费用。
     * * **false**（默认）：不开启。
     * @example `false`
     */
    "AutoRenew"?: boolean;
}
