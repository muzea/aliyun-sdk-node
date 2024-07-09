export interface CreateInstancesRequest {
    /**
     * 新实例的配置信息，格式为JSON，详细说明请参见Instances参数补充说明。
     * @example `[{
        "RegionId": "cn-hangzhou",
        "izNo": "cn-hangzhou-b",
        "quantity": 1,
        "instanceType": "Redis",
        "instanceClass": "redis.logic.sharding.1g.2db.0rodb.4proxy.default",
        "EngineVersion": "5.0",
        "ChargeType": "PrePaid",
        "Period":"1"
    }]`
     */
    "Instances": string;
    /**
     * 用于保证请求的幂等性。由客户端生成该参数值，要保证在不同请求间唯一，大小写敏感、不超过64个ASCII字符。
     * @example `ETnLKlblzczshOTUbOCz****`
     */
    "Token"?: string;
    /**
     * 是否自动付费，取值：
     * * **true**：自动付费，默认值。
     * * **false**：手动付费。您需要在控制台的顶部菜单栏，单击**费用** > **续费管理**，然后单击左侧导航栏的**订单管理** > **我的订单**，找到目标订单进行支付。
     * > **Instances**参数中，**ChargeType**取值为**PrePaid**时，本参数才可用。
     * @example `true`
     */
    "AutoPay"?: boolean;
    /**
     * 业务扩展信息。
     * @example `000000000`
     */
    "BusinessInfo"?: string;
    /**
     * 优惠码，默认值为：`youhuiquan_promotion_option_id_for_blank`。
     * @example `youhuiquan_promotion_option_id_for_blank`
     */
    "CouponNo"?: string;
    /**
     * Redis实例的大版本，取值：**4.0**、**5.0**。
     * > 默认值为**5.0**。
     * @example `5.0`
     */
    "EngineVersion"?: string;
    /**
     * 是否需要从回收站中重建恢复源实例，取值：
     * * **true**：需要。
     * * **false**：不需要，默认值。
     * > **Instances**参数中设置了**SrcDBInstanceId**参数时，本参数才可用。
     * @example `false`
     */
    "RebuildInstance"?: boolean;
    /**
     * 是否开启自动续费，取值：
     * * **true**：开启。
     * * **false**：不开启，默认值。
     * > **Instances**参数中，**ChargeType**取值为**PrePaid**时，本参数才可用。
     * @example `false`
     */
    "AutoRenew"?: string;
    /**
     * 资源组ID。
     * @example `rg-resourcegroupid1`
     */
    "ResourceGroupId"?: string;
}
