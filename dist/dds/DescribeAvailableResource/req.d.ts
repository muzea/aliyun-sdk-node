export interface DescribeAvailableResourceRequest {
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~61933~~)接口进行查询。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区ID。您可以通过[DescribeRegions](~~61933~~)接口查看可用的可用区。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 付费类型，取值说明：
     * - **PrePaid**（默认值）：包年包月。
     * - **PostPaid**：按量付费。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 实例的数据库类型，取值说明：
     * - **normal**：副本集实例。
     * - **sharding**：分片集群实例。
     * @example `sharding`
     */
    "DbType"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmyiu4ekp****`
     */
    "ResourceGroupId"?: string;
    /**
     * 存储类型，取值说明：
     * - local_ssd：SSD本地盘。
     * - cloud_essd1：ESSD PL1云盘。
     * - cloud_essd2：ESSD PL2云盘。
     * - cloud_essd3：ESSD PL3云盘。
     * - cloud_auto：AutoPL 云盘。
     * 默认为空，表示查询所有存储类型。
     * @example `local_ssd`
     */
    "StorageType"?: string;
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
     * 节点数，只适用于副本集。
     * @example `3`
     */
    "ReplicationFactor"?: string;
}
