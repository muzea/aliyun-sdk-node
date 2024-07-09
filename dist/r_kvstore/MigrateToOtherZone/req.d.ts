export interface MigrateToOtherZoneRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "DBInstanceId": string;
    /**
     * 要迁移到的目标主可用区ID，可调用[DescribeZones](~~94527~~)接口查询。
     * @example `cn-hangzhou-g`
     */
    "ZoneId": string;
    /**
     * 虚拟交换机的ID 。
     * > * vSwitch所在可用区须与ZoneId（目的可用区）一致；
     * > *  如果实例的网络类型为VPC，则该参数为必选。
     * @example `vsw-bp1e7clcw529l773d****`
     */
    "VSwitchId"?: string;
    /**
     * 数据迁移后执行数据库切换的时间，取值：
     * * **Immediately**：迁移完立即切换。
     * * **MaintainTime**：在可维护时间段内切换。
     * > 默认值：**Immediately**。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 要迁移到的目标备可用区ID，可调用[DescribeZones](~~94527~~)接口查询。
     * > 传入本参数可以实现主备数据节点分布在不同的可用区，实现跨可用区容灾，可承受机房级别的故障。
     * @example `cn-hangzhou-h`
     */
    "SecondaryZoneId"?: string;
}
