export interface UpgradeDBInstanceRequest {
    /**
     * 实例当前所属的资源组ID。如何获取资源组ID，请参见[查看资源组基本信息](~~151181~~)。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
    /**
     * 地域ID。
     * > 您可以调用[DescribeRegions](~~86912~~)接口查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "DBInstanceClass"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "DBInstanceGroupCount"?: string;
    /**
     * 实例ID。
     * > 您可以调用[DescribeDBInstances](~~86911~~)接口查看目标地域下所有的AnalyticDB PostgreSQL实例的实例ID。
     * @example `gp-rj***************`
     */
    "DBInstanceId": string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "PayType"?: string;
    /**
     * 该参数已废弃，无需传入该参数。
     * @example `null`
     */
    "MasterNodeNum"?: string;
    /**
     * Segment节点数量。不同实例资源类型和实例系列支持的节点数量不同，具体情况如下：
     * - 存储弹性模式高可用版：取值范围为4~512个，步长为4。
     * - 存储弹性模式高性能版：取值范围为2~512个，步长为2。
     * - Serverless手动调度模式：取值范围为2~512个，步长为2。
     * @example `2`
     */
    "SegNodeNum"?: string;
    /**
     * Segment节点规格。支持的节点规格，请参见[规格及选型](~~35406~~)。
     * > 该参数仅支持存储弹性模式实例。
     * @example `4C16G`
     */
    "InstanceSpec"?: string;
    /**
     * Segment节点存储空间的大小，单位为GB。存储容量范围为50 GB~<props="china">8000</props><props="intl">6000</props>
     *  GB，步长为50。
     * > 该参数仅支持存储弹性模式实例。
     * @example `100`
     */
    "StorageSize"?: string;
    /**
     * 磁盘的性能级别PL（Performance Level），取值说明：
     * - **pl0**：PL0级别。
     * - **pl1**：PL1级别。
     * - **pl2**：PL2级别。
     * @example `pl1`
     */
    "SegDiskPerformanceLevel"?: string;
    /**
     * 变更后的磁盘存储类型，目前仅支持变更为ESSD云盘，取值为**cloud_essd**。
     * @example `cloud_essd`
     */
    "SegStorageType"?: string;
    /**
     * 实例规格变更类型，取值说明：
     * - **0**（默认）：变更Segment节点数量。
     * - **1**：变更Segment节点规格和存储空间大小。
     * - **2**：变更Master节点数量。
     * - **3**：变更磁盘存储类型和性能级别。
     * > - 不同的实例资源类型对计算节点变配的支持程度不一样，具体信息，请参见[注意事项](~~50956~~)。
     * - 选择对应的变更类型后，仅对应的参数生效，其他参数不会生效。例如，**UpgradeType**参数为0的情况下，如果同时传入了变更Segment节点数量和Master节点数量的参数，仅变更Segment节点数量的参数会生效。
     * - 仅中国站支持变更Master节点数量。
     * - 仅支持将磁盘存储类型从高效云盘变更为ESSD云盘。
     * @example `0`
     */
    "UpgradeType"?: number;
}
