export interface MigrateDBInstanceRequest {
    /**
     * 地域ID。可以通过接口DescribeRegions查看地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 专属集群ID。可调用DescribeDedicatedHostGroups获取。
     * @example `dhg-4nxxxxxxx`
     */
    "DedicatedHostGroupId": string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5xxxxxxx`
     */
    "DBInstanceId": string;
    /**
     * 主实例要迁移的目标主机ID。可调用DescribeDedicatedHosts获取。
     * @example `i-bpxxxxxxx1`
     */
    "TargetDedicatedHostIdForMaster"?: string;
    /**
     * 备实例要迁移的目标主机ID。可调用DescribeDedicatedHosts获取。
     * @example `i-bpxxxxxxx2`
     */
    "TargetDedicatedHostIdForSlave"?: string;
    /**
     * 迁移时间。取值：
     * * **Immediately**：立即切换（默认）
     * * **MaintainTime**：在运维时间段切换
     * * **Specified**：指定时间切换
     * @example `MaintainTime`
     */
    "EffectiveTime"?: string;
    /**
     * 指定切换的时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >当**EffectiveTime**=**Specified**时需要填入本参数。
     * @example `2019-10-21T10:00:00Z`
     */
    "SpecifiedTime"?: string;
    /**
     * 日志节点的可用区ID。
     * @example `cn-hangzhou-k`
     */
    "ZoneIdForLog"?: string;
    /**
     * 备节点的可用区ID。
     * @example `cn-hangzhou-j`
     */
    "ZoneIdForFollower"?: string;
}
