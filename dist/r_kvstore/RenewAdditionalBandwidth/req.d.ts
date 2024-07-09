export interface RenewAdditionalBandwidthRequest {
    /**
     * 实例ID，可调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 优惠券编号。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 是否自动付费。取值：
     * * **true**：自动付费，默认值。
     * * **false**：手动付费。您需要在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后单击左侧导航栏的**订单管理** > **我的订单**，找到目标订单进行支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 购买的时长，单位为天，取值：**1**、**2**、**3**、**7**、**14**、**30**、**60**、**90**、**180**、**365**、**730**、**1095**、**1825**。
     * @example `30`
     */
    "OrderTimeLength": string;
    /**
     * 调用来源，本参数仅用于内部维护使用，无需传入。
     * @example `SDK`
     */
    "SourceBiz"?: string;
}
