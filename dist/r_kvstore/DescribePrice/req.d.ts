export interface DescribePriceRequest {
    /**
     * 地域ID，可调用[DescribeRegions](~~61012~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 使用实例的存储容量指定规格，单位为MB。本参数仅查询Redis社区版经典部署模式的实例，推荐您使用**InstanceClass**参数精确地指定一个规格。
     * > 指定**InstanceClass**参数后，无需再指定本参数。
     * @example `1024`
     */
    "Capacity"?: number;
    /**
     * 使用**InstanceClass**编码指定实例规格。
     * **InstanceClass**查询步骤：
     * 1. 在[规格查询导航](~~26350~~)中，根据需要选择实例类型，点击其**架构类型**列以打开规格文档。
     * 2. 在规格文档的实例规格表中，选择需要的实例规格，并找到其**InstanceClass**列的编码。
     * 查询云原生版集群架构实例时，需指定本参数为下述指定参数之一，并在Instances参数中指定具体待查询的实例规格。
     * - Redis集群架构：redis.cluster.sharding.common.ce
     * - Tair内存型集群架构：tair.rdb.cluster.sharding.common
     * - Tair持久内存型集群架构：tair.scm.cluster.sharding.common.ce
     * @example `redis.master.small.default`
     */
    "InstanceClass"?: string;
    /**
     * 订单类型，取值：
     * * **BUY**：新购。
     * * **UPGRADE**：变更配置。
     * * **RENEW**：续费。
     * * **CONVERT**：转换付费类型。
     * @example `BUY`
     */
    "OrderType": string;
    /**
     * 可用区ID，可调用[DescribeZones](~~94527~~)查询。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 付费类型，取值：
     * * **PostPaid**（默认）：按量付费。
     * * **PrePaid**：包年包月。
     * @example `PostPaid`
     */
    "ChargeType"?: string;
    /**
     * 节点类型，取值：
     * - **STAND_ALONE**：单副本。
     * - **MASTER_SLAVE**（默认）：高可用（双副本）。
     * @example `MASTER_SLAVE`
     */
    "NodeType"?: string;
    /**
     * 包年包月时长，单位为月。取值范围：**1**~**9**、**12**、**24**、**36**。
     * @example `3`
     */
    "Period"?: number;
    /**
     * 购买实例的数量，取值范围：**1**~**30**，默认值为**1**。
     * @example `1`
     */
    "Quantity"?: number;
    /**
     * 实例ID。
     * > 当**OrderType**为**UPGRADE**或**RENEW**时必传。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId"?: string;
    /**
     * 包含查询云原生版集群架构实例或多个实例的JSON格式字符串，更多信息请参见Instances参数补充说明。
     * @example `[{"RegionId": "cn-hangzhou","ZoneId": "cn-hangzhou-b","ShardClass": "tair.scm.with.proxy.standard.2m.8d","ShardCount": "3","Period": "1","Quantity": "1"}]`
     */
    "Instances"?: string;
    /**
     * 活动ID、业务信息等扩展信息。
     * @example `000000000000`
     */
    "BusinessInfo"?: string;
    /**
     * 优惠码，默认值：youhuiquan_promotion_option_id_for_blank，表示无优惠码。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * 是否强制变配，取值：
     * * **false**：是。
     * * **true**（默认）：否。
     * @example `true`
     */
    "ForceUpgrade"?: boolean;
    /**
     * 是否返回订单参数，可选值：
     * * **false**（默认）：不返回。
     * * **true**：返回。
     * @example `true`
     */
    "OrderParamOut"?: string;
}
