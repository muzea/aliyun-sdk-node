export interface ModifyNodeSpecRequest {
    /**
     * 实例ID。
     * @example `dds-bp1c0b990184****`
     */
    "DBInstanceId": string;
    /**
     * 分片集群实例中Shard节点ID或Mongos节点ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)接口查询。
     * > 当传入的值为Shard节点ID时，还需要传入**NodeStorage**参数。
     * @example `s-bp143e1b1637****`
     */
    "NodeId": string;
    /**
     * Shard节点或Mongos节点的规格，规格详情请参见[实例规格表](~~57141~~)。
     * @example `dds.mongos.standard`
     */
    "NodeClass"?: string;
    /**
     * Shard节点的存储空间，步长为10，单位：GB。
     * - SSD本地盘，取值范围：**10**~**2000**。
     * - ESSD PL1云盘，取值范围：**20**~**16000**。
     * @example `20`
     */
    "NodeStorage"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 请求来源，取值说明：
     * - **OpenApi**：请求来源为OpenApi。
     * - **mongo_buy**：请求来源为控制台。
     * @example `OpenApi`
     */
    "FromApp"?: string;
    /**
     * 是否自动付费，取值说明：
     * - **true**（默认值）：自动付费，请确保账号有足够的余额。
     * - **false**：手动付费。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 变更配置的生效时间，取值说明：
     * - **Immediately**（默认值）：立即生效。
     * - **MaintainTime**：实例可运维时间段内生效。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 变更配置的执行时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2022-01-05T03:18:53Z`
     */
    "SwitchTime"?: string;
    /**
     * 订单类型，取值说明：
     * - **UPGRADE**：升配。
     * - **DOWNGRADE**：降配 。
     * @example `UPGRADE`
     */
    "OrderType"?: string;
    /**
     * 调整Shard节点中只读节点的个数。
     * 取值范围：**0**~**5**（整数），默认值：**0**。
     * @example `5`
     */
    "ReadonlyReplicas"?: number;
    /**
     * 附加参数，业务信息。
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
}
