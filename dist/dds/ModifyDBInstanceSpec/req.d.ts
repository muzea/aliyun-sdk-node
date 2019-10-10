interface ModifyDBInstanceSpecRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 实例规格，详情请参考[实例规格表](~~57141~~)。
    * > 本参数和**DBInstanceStorage**参数两者中必须传入一项。
    * @example `dds.mongo.standard`
    */ "DBInstanceClass"?: string;
    /**
    * 实例的存储空间。
    * - 取值范围：**10**-**3000**，单位为GB，具体取值受实例规格约束，详情请参考[实例规格表](~~57141~~)。
    * - 每10GB递增。
    * > - 本参数和**DBInstanceClass**参数两者中必须传入一项。
    * - 仅按量付费的副本集实例支持降配存储空间，且存储空间必须大于当前已使用的存储空间。
    * @example `50`
    */ "DBInstanceStorage"?: string;
    /**
    * 变配类型，取值：
    * - **UPGRADE**：升级配置。
    * - **DOWNGRADE**：降级配置，默认为降级配置。
    * > 当实例付费方式为包年包月时，本参数才可用。
    * @example `UPGRADE`
    */ "OrderType"?: string;
    /**
    * 是否自动付费。取值：
    * - **true**：自动付费，请确保账号有足够的余额。
    * - **false**：控制台手动付费。具体操作为：登录控制台，在页面右上角选择**费用**>**进入费用中心**，在**订单管理**找到目标订单进行支付。
    * 默认值为：**true**。
    * @example `true`
    */ "AutoPay"?: boolean;
    "FromApp"?: string;
    /**
    * 业务信息。
    * @example `{“ActivityId":"000000000"}`
    */ "BusinessInfo"?: string;
    /**
    * 设置实例的节点个数。
    * - 副本集实例取值为**3，5，7**。
    * - 单节点实例取值固定为**1**。
    * @example `3`
    */ "ReplicationFactor"?: string;
    /**
    * 只读节点的个数，取值范围为**1**-**5**。
    * @example `1`
    */ "ReadonlyReplicas"?: string;
    /**
    *  优惠码，默认为：**youhuiquan_promotion_option_id_for_blank**。
    * @example `youhuiquan_promotion_option_id_for_blank`
    */ "CouponNo"?: string;
    /**
    * 变更配置的生效时间，取值：
    * - **Immediately**：立即生效。
    * - **MaintainTime**：在实例的可运维时间段内生效。
    * 默认为**Immediately**。
    * @example `Immediately`
    */ "EffectiveTime"?: string;
}
export { ModifyDBInstanceSpecRequest };