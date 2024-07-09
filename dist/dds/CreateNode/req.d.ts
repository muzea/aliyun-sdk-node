export interface CreateNodeRequest {
    /**
     * 分片集群实例ID。
     * @example `dds-bp11501cd7b5****`
     */
    "DBInstanceId": string;
    /**
     * Shard节点或Mongos节点的规格，规格详情请参见[实例规格表](~~57141~~)。
     * @example `dds.shard.mid`
     */
    "NodeClass": string;
    /**
     * Node的磁盘空间，单位：GB。
     * 取值范围：**10**~**2000**，步长为10 GB。
     * > 当节点类型为**Shard**时，需要配置该参数。
     * @example `10`
     */
    "NodeStorage"?: number;
    /**
     * 节点类型，取值说明：
     * - **shard**：Shard节点。
     * - **mongos**：Mongos节点。
     * @example `shard`
     */
    "NodeType": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 是否自动付费，取值说明：
     * - **true**：（默认值）自动付费，请确保账号有足够的余额。
     * - **false**：控制台手动付费。您可以单击控制台右上角的**费用**，进入**费用中心**页面，选择**订单管理**  > **我的订单**，在**订单列表**页面找到目标订单进行支付。
     * > 当付费类型为包年包月时，需要配置该参数。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 设置Shard节点中只读节点的个数。
     * 取值范围：**0**~**5**（整数），默认值为**0**。
     * > 当前仅中国站支持本参数。
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
    /**
     * 是否申请Shard节点直连地址，取值说明：
     * - **true**：申请Shard节点直连地址。
     * - **false**：（默认值）不申请Shard节点直连地址。
     * @example `false`
     */
    "ShardDirect"?: boolean;
    /**
     * 账号名，取值说明：
     * - 以小写字母开头。
     * - 由小写字母、数字或下划线（_）组成。
     * - 长度为4~16个字符。
     * >- 云数据库MongoDB不支持使用关键字作为账号。
     * >- 账号的权限固定为只读权限。
     * >- 首次申请Shard节点直连地址时，需要设置账号和密码，后续申请无需再次设置。
     * @example `ceshi`
     */
    "AccountName"?: string;
    /**
     * 账号密码，取值说明：
     * - 由大写字母、小写字母、数字、特殊字符中的至少三种组成。
     * - !@#$%^&*()_+-=为特殊字符。
     * - 长度为8~32个字符。
     * >云数据库MongoDB不支持重置Shard节点的账号密码。
     * @example `123+abc`
     */
    "AccountPassword"?: string;
}
