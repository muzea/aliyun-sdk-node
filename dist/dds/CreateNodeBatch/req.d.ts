export interface CreateNodeBatchRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "ClientToken"?: string;
    /**
     * 请求来源，取值说明：
     * - **OpenApi**：请求来源为OpenAPI。
     * - **mongo_buy**：请求来源为控制台。
     * @example `OpenApi`
     */
    "FromApp"?: string;
    /**
     * 是否自动付费，取值说明：
     * - **true**：（默认值）自动付费，请确保账号有足够的余额。
     * - **false**：手动付费。具体操作为：登录云数据库MongoDB控制台，在页面右上角选择**费用** > **用户中心**，在左侧导航栏，选择订单管理，在订单管理页面找到目标实例进行支付。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 需要添加节点的实例ID。
     * @example `dds-bp18b0934e70****`
     */
    "DBInstanceId": string;
    /**
     * 添加Mongos节点或Shard节点的规格信息。具体规格，请参见[实例规格表](~~57141~~)。
     * > 分片集群实例默认最多支持32个Mongos节点和32个Shard节点。
     * @example `{"Shards":[{"DBInstanceClass":"mdb.shard.4x.large.d","Storage":20}]}`
     */
    "NodesInfo": string;
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
     * > - 云数据库MongoDB不支持使用关键字作为账号。
     * > - 账号的权限固定为只读权限。
     * > - 首次申请Shard节点直连地址时，需要设置账号和密码，后续申请无需再次设置。
     * @example `ceshi`
     */
    "AccountName"?: string;
    /**
     * 账号密码，取值说明：
     * - 由大写字母、小写字母、数字、特殊字符中的至少三种组成。
     * - !@#$%^&*()_+-=为特殊字符。
     * - 长度为8~32个字符。
     * >云数据库MongoDB不支持重置Shard节点的账号密码。
     * @example `PassWord123`
     */
    "AccountPassword"?: string;
}
