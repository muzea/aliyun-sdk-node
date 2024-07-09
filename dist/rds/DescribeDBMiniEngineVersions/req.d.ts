export interface DescribeDBMiniEngineVersionsRequest {
    /**
     * 数据库引擎。取值为**MySQL**或**PostgreSQL**。
     * @example `MySQL`
     */
    "Engine"?: string;
    /**
     * 数据库版本。取值：
     * * MySQL：**8.0**、**5.7**、**5.6**、**5.5**
     * * PostgreSQL：**15.0**、**14.0**、**13.0**、**12.0**、**11.0**、**10.0**
     * @example `5.7`
     */
    "EngineVersion"?: string;
    /**
     * 实例系列。取值：
     * * **Basic**：基础系列。
     * * **HighAvailability**：高可用系列。
     * * **Finance**：三节点企业系列。
     * @example `HighAvailability`
     */
    "NodeType"?: string;
    /**
     * 实例存储类型，取值：
     * * **local_ssd**：本地SSD盘。
     * * **cloud_ssd**：SSD云盘。
     * * **cloud_essd**：ESSD PL1云盘。
     * * **cloud_essd2**：ESSD PL2云盘。
     * * **cloud_essd3**：ESSD PL3云盘。
     * @example `local_ssd`
     */
    "StorageType"?: string;
    /**
     * 专属集群ID。可调用DescribeDedicatedHostGroups接口查询。
     * @example `dhg-4n****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 实例小版本号。指定该值查询目标小版本详情。
     * @example `rds_20220731`
     */
    "MinorVersionTag"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId"?: string;
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
