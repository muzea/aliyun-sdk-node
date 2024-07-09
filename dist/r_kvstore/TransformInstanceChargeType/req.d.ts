export interface TransformInstanceChargeTypeRequest {
    /**
     * 实例ID，您可以调用[DescribeInstances](~~60933~~)获取。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 包年包月的付费时长，单位为月，取值：**1**~**9**、**12**、**24**、**36**。
     * > 当**ChargeType**参数取值为**PrePaid**时，本参数才可用且必须传入。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 是否自动付费，取值：
     * * **true**：自动付费，默认值。
     * * **false**：手动付费。您需要在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后单击左侧导航栏的**订单管理** > **我的订单**，找到目标订单进行支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 要转换到的付费类型，取值：
     * * **PrePaid**：包年包月，传入本值时，您还需要传入**Period**参数。
     * * **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    "ChargeType": string;
    /**
     * 是否开启自动续费，取值：
     * * **true**：开启。
     * * **false**（默认）：不开启。
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 自动续费周期，单位为月，取值：**1**、**2**、**3**、**6**、**12**。
     * > 当**AutoRenew**取值为**true**时，本参数必须传入。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
}
