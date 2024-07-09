export interface EnableAdditionalBandwidthRequest {
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
     * 是否自动付款，取值：
     * * **true**：默认值，自动付款，请确保账号有足够的余额。
     * * **false**：手动付款。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 数据分片ID，您可以调用[DescribeLogicInstanceTopology](~~94665~~)获取，传入多个时使用英文逗号（,）分隔；您也可以传入**All**（即表示所有数据分片）。
     * > 当Redis实例为[集群架构](~~52228~~)或[读写分离架构](~~62870~~)时，本参数才可用且必须传入。
     * @example `r-bp1zxszhcgatnx****-db-0`
     */
    "NodeId"?: string;
    /**
     * 要增加的带宽，单位为MB/s。取值为大于等于**0**的整数 ，最大可传入该实例（或单分片）规格默认带宽的6倍，但增加的上限为192MB/s。例如实例默认带宽为10 MB/s，可增加的范围为**0**~**60**。
     * > * 您可以调用[DescribeRoleZoneInfo](~~190794~~)接口，通过返回参数**DefaultBandWidth**获取默认最大带宽。更多关于实例规格的信息，请参见[实例规格查询导航](~~26350~~)。
     * > * 如果请求参数**NodeId**传入了多个数据分片ID，本参数传入的带宽值需和数据分片ID的顺序对应，多个带宽值之间使用英文逗号（,）分隔。
     * @example `20`
     */
    "Bandwidth"?: string;
    /**
     * 购买的时长，单位为天，取值：**1**、**2**、**3**、**7**、**14**、**30**、**60**、**90**、**180**、**365**、**730**、**1095**、**1825**。
     * > 如果需要继续使用购买的带宽，您需要在带宽到期前调用[RenewAdditionalBandwidth](~~211199~~)接口及时续费。
     * @example `30`
     */
    "OrderTimeLength"?: string;
    /**
     * 调用来源，本参数仅用于内部维护使用，无需传入。
     * @example `SDK`
     */
    "SourceBiz"?: string;
    /**
     * 是否开启自动续费，取值：
     * * **true**：开启。
     * * **false**：不开启，默认值。
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费周期，单位为月，取值：**1**、**2**、**3**、**4**、**5**、**6**、**7**、**8**、**9**、**12**、**24**、**36**、**60**。
     * > * 当**AutoRenew**参数取值为**true**时，本参数才可用且必须传入。
     * > * 该参数设置后暂不支持通过API查询，您可以在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后在**实例ID**文本框中输入实例ID加`-bw`后缀（例如r-bp1zxszhcgatnx****-bw）来查询。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 额外增加带宽的付费类型，取值：
     * * **PrePaid**：预付费，即包年包月。
     * * **PostPaid**：按量付费，当前仅支持该方式。
     * @example `PrePaid`
     */
    "ChargeType"?: string;
}
