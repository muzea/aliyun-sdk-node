export interface DescribePriceRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 订单类型，取值说明：
     * - **BUY**：创建实例。
     * - **UPGRADE**：变更配置。
     * - **RENEW**：续费实例。
     * @example `BUY`
     */
    "OrderType": string;
    /**
     * 包含实例中多个信息的JSON格式字符串。参数说明以及更多JSON格式示例，请参见[DescribePrice接口DBInstances参数说明](~~197291~~)。
     * @example `[ { "DBInstanceId":"dds-bp1b6e54e7cc****", "RegionId":"cn-hangzhou", "ZoneId":"cn-hangzhou-h", "Engine":"MongoDB", "EngineVersion":" 5.0", "DBInstanceClass":"mdb.shard.2x.xlarge.d", "DBInstanceStorage":30, "ChargeType":"PrePaid", "Period":1, "StorageType":"cloud_essd1" } ]`
     */
    "DBInstances": string;
    /**
     * 集群代码，取值说明：
     * - **dds**：副本集版按量付费。
     * - **badds**: 副本集版包年包月。
     * - **dds_sharding**: 分片集群版按量付费。
     * - **badds_sharding**： 分片集群版包年包月。
     * - **badds_sharding_intl**： 分片集群版包年包月（国际站）。
     * - **dds_sharding_intl**： 分片集群版按量付费（国际站）。
     * - **badds_sharding_jp**： 分片集群版包年包月（日本站）。
     * - **badds_intl**： 副本集版包年包月（国际站）。
     * - **dds_intl**： 副本集版按量付费（国际站）。
     * @example `badds`
     */
    "CommodityCode"?: string;
    /**
     * 产品代码，默认为**dds**。
     * @example `dds`
     */
    "ProductCode"?: string;
    /**
     * 附加参数，业务信息。
     * @example `{"AccountPassword":"Pw123456","DBInstanceDescription":"test"}`
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
     * 是否返回订单参数，取值说明：
     * - **false**（默认值）：不返回。
     * - **true**：返回。
     * @example `true`
     */
    "OrderParamOut"?: string;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
}
