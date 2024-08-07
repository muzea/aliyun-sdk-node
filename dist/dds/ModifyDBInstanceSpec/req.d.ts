export interface ModifyDBInstanceSpecRequest {
    /**
     * 实例ID。
     * @example `dds-bp1ea17b41ab****`
     */
    "DBInstanceId": string;
    /**
     * 实例规格。<props="intl"><ph>详情请参见[实例规格表](~~57141~~)。您也可以通过调用[DescribeAvailableResource](~~149719~~)接口查看实例规格。</ph></props>
     * <props="china">
     * - 单节点实例和副本集实例配置为实例的规格，详情请参见[实例规格表](~~57141~~)。您也可以调用[DescribeAvailableResource](~~149719~~)接口查看单节点实例和副本集实例的实例规格。
     * - Serverless实例配置为实例的计算规格，取值范围为100~8000。
     * </props>
     * >  该参数和**DBInstanceStorage**参数两者中至少配置一项。
     * @example `dds.sn4.xlarge.1`
     */
    "DBInstanceClass"?: string;
    /**
     * 实例的存储空间。<props="intl"><ph>取值范围为10~3000 GB，步长为10 GB。具体取值受实例规格约束，详情请参见[实例规格表](~~57141~~)。</ph></props>
     * <props="china">
     * - 单节点实例和副本集实例存储空间的取值范围为10~3000 GB，步长为10 GB。具体取值受实例规格约束，详情请参见[实例规格表](~~57141~~)。
     * - Serverless实例存储空间的取值范围1~100 GB，步长为1 GB。
     * </props>
     * > - 该参数和**DBInstanceClass**参数两者中至少配置一项。
     * > - 目前不支持降配存储空间。
     * @example `50`
     */
    "DBInstanceStorage"?: string;
    /**
     * 变配类型，取值说明：
     * - **UPGRADE**：升级配置。
     * - **DOWNGRADE**：默认值，降级配置。
     * > 当实例付费方式为包年包月时，可以配置该参数。
     * @example `UPGRADE`
     */
    "OrderType"?: string;
    /**
     * 实例是否自动付费，取值说明：
     * - **true**：默认值，自动付费，请确保账号有足够的余额。
     * - **false**：控制台手动付费。您可以登录云数据库MongoDB控制台，在页面右上角选择**费用** > **用户中心**，在左侧导航栏，选择**订单管理**>**我的订单**，在**商品订单**页面找到目标订单进行支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 业务信息。
     * @example `{“ActivityId":"000000000"}`
     */
    "BusinessInfo"?: string;
    /**
     * 设置实例的节点个数。
     * - 副本集实例取值为**3**，**5**，**7**。
     * - 单节点实例取值固定为**1**。
     * - 共享存储版副本集实例（仅支持中国站）取值固定为**2**。
     * > Serverless实例（仅支持中国站）不需要配置该参数。
     * @example `3`
     */
    "ReplicationFactor"?: string;
    /**
     * 只读节点的个数，取值范围为**0**~**5**。
     * 如果实例的网络类型只开通了**经典网络**和**专有网络**，您需要开通公网或释放经典网络，才能变更**只读节点数**。
     * >您可以登录云数据库MongoDB控制台，在**数据库连接**页面查看已开通的网络类型。
     * @example `1`
     */
    "ReadonlyReplicas"?: string;
    /**
     * 是否使用优惠券，取值说明：
     * - **default**或**null**（默认）：使用优惠券。
     * - **youhuiquan_promotion_option_id_for_blank**：不使用优惠券。
     * @example `default`
     */
    "CouponNo"?: string;
    /**
     * 变更配置的生效时间，取值说明：
     * - **Immediately**：默认值，立即生效。
     * - **MaintainTime**：在实例的可运维时间段内生效。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 附加参数，取值说明：
     * - **async**：变配订单创建后返回结果。
     * - **sync**：变配订单创建后实例变配下发时返回结果。
     * @example `async`
     */
    "ExtraParam"?: string;
}
