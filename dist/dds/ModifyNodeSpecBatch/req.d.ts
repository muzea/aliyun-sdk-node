export interface ModifyNodeSpecBatchRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 需要进行变更配置的实例ID。
     * @example `dds-bp1337621e8f****`
     */
    "DBInstanceId": string;
    /**
     * 需要变配的Mongos节点、Shard节点的规格信息。具体规格请参见[实例规格表](~~57141~~)。
     * @example `{"Shards":[{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp14ae4572fd****","Storage":20},{"DBInstanceClass":"dds.shard.mid","DBInstanceName":"d-bp19f4f92dc5****","Storage":30}]}`
     */
    "NodesInfo": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 是否自动付费。取值：
     * - **true**：自动付费，请确保账号有足够的余额。
     * - **false**：手动付费。具体操作为：登录云数据库MongoDB控制台，在页面右上角选择**费用** > **用户中心**，在左侧导航栏，选择**订单管理**，在**订单管理**页面找到目标实例进行支付。
     * 默认值为**true**。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 变更配置的生效时间，取值：
     * - **Immediately**：立即生效。
     * - **MaintainTime**：在实例的可维护时间段内生效。
     * > - 您可以调用接口[ModifyDBInstanceMaintainTime](~~62008~~)修改实例的可维护时间段。
     * > - 您可以调用接口[DescribeDBInstanceAttribute](~~62010~~)查看实例可维护时间段时间。
     * 默认为**Immediately**。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 变配类型，取值：
     * - **UPGRADE**：升级配置。
     * - **DOWNGRADE**：降级配置。
     * > 当实例付费方式为包年包月时，该参数可用。
     * @example `UPGRADE`
     */
    "OrderType"?: string;
    /**
     * 是否使用优惠券，取值说明：
     * - **default**或**null**（默认）：使用优惠券。
     * - **youhuiquan_promotion_option_id_for_blank**：不使用优惠券。
     * @example `default`
     */
    "CouponNo"?: string;
    /**
     * 业务信息。
     * @example `{“ActivityId":"000000000"}`
     */
    "BusinessInfo"?: string;
}
