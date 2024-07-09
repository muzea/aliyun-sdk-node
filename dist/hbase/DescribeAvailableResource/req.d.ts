export interface DescribeAvailableResourceRequest {
    /**
     * 付费方式，取值：
     * - **Prepaid**：包年包月（预付费）。
     * - **PostPaid**：按量付费（后付费）。
     * @example `Prepaid`
     */
    "ChargeType": string;
    /**
     * 地域ID，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 可用区，可调用[DescribeRegions](~~144489~~)接口获取。
     * @example `cn-hangzhou-h`
     */
    "ZoneId"?: string;
    /**
     * 实例的服务类型。取值：
     * - **hbase**：表示云数据库HBase标准版实例。
     * - **hbaseue**：表示云数据库HBase增强版实例。
     * - **singlehbase**：表示云数据库HBase单节点实例。
     * - **bds**：表示数据同步（BDS）服务。
     * @example `hbaseue`
     */
    "Engine"?: string;
    /**
     * 实例的服务类型版本号。取值：
     * - **1.0**：数据同步（BDS）服务支持1.0版本。
     * - **1.1**：云数据库HBase标准版实例和云数据库HBase单节点实例支持1.1版本。
     * - **2.0**：云数据库HBase标准版实例、云数据库HBase增强版实例和云数据库HBase单节点实例支持2.0版本。
     * > 请根据云数据库HBase实例的服务类型填写对应的版本号。
     * @example `2.0`
     */
    "EngineVersion"?: string;
    /**
     * 实例的Core节点规格，更多取值请参见[实例节点规格](~~194870~~)。
     * @example `hbase.sn1.large`
     */
    "CoreInstanceType"?: string;
    /**
     * 实例的Core磁盘类型，取值：
     * - **cloud_efficiency**：高效云盘
     * - **cloud_ssd**：SSD云盘
     * - **cloud_essd_pl1**：ESSD云盘
     * - **local_hdd_pro**：本地HDD盘
     * - **local_ssd_pro**：本地SSD盘
     * @example `cloud_ssd`
     */
    "DiskType"?: string;
}
