export interface DescribeAvailabilityZonesRequest {
    /**
     * 地域ID，您可以调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID，您可以通过调用[DescribeRegions](~~61933~~)查询。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 付费类型。取值：
     * - **PrePaid**（默认值）：包年包月。
     * - **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 实例的数据库类型。取值：
     * - **normal**：副本集实例。
     * - **sharding**：分片集群实例。
     * @example `normal`
     */
    "DbType"?: string;
    /**
     * 资源组ID。资源组详情请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-acfmx2m4rqu7pry`
     */
    "ResourceGroupId"?: string;
    /**
     * 指定返回参数**RegionName**和**ZoneName**的语言，取值说明：
     * - **zh**：默认值，中文。
     * - **en**：英文。
     * @example `zh`
     */
    "AcceptLanguage"?: string;
    /**
     * 存储类型：
     * - **cloud**：仅展示支持云盘版实例的可用区。
     * - **local**：仅展示支持本地盘版实例的可用区。
     * - **default**或空：展示本地盘和云盘版实例都支持的可用区。
     * @example `local`
     */
    "StorageSupport"?: string;
    /**
     * 高可用版还是测试版（dbfs）
     * @example `dbfs`
     */
    "MongoType"?: string;
    /**
     * 存储类型，取值说明：
     * - **cloud_essd1**：ESSD PL1云盘。
     * - **cloud_essd2**：ESSD PL2云盘。
     * - **cloud_essd3**：ESSD PL3云盘。
     * -  **local_ssd**：SSD本地盘。
     * >- 4.4及以上版本实例只支持云盘，不填写默认选择**cloud_essd1**。
     * >- 4.2及以下版本实例只支持本地盘，不填写默认选择**local_ssd**。
     * @example `local_ssd`
     */
    "StorageType"?: string;
    /**
     * 当前地域过滤此输入的可用区查询结果。
     * @example `cn-shanghai-g`
     */
    "ExcludeZoneId"?: string;
    /**
     * 当前地域过滤此输入的可用区查询结果，结合“ExcludeZoneId”实现多可用区过滤。
     * @example `cn-shanghai-b`
     */
    "ExcludeSecondaryZoneId"?: string;
    /**
     * 实例规格。
     * @example `dds.mongo.standard`
     */
    "DBInstanceClass"?: string;
    /**
     * 数据库版本号。
     * @example `5.0`
     */
    "EngineVersion"?: string;
    /**
     * 节点数。
     * > 该参数仅支持副本集实例。
     * @example `3`
     */
    "ReplicationFactor"?: string;
}
