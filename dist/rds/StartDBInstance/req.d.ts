export interface StartDBInstanceRequest {
    /**
     * 地域ID。可调用DescribeRegions获取。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 该接口也支持暂停专属集群下的RDS实例，此时需要配置专属集群ID。可调用DescribeDedicatedHostGroups查询。
     * @example `dhg-39****`
     */
    "DedicatedHostGroupId"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-bp****`
     */
    "DBInstanceId": string;
    /**
     * 该参数仅支持专属集群实例，配置主节点的目标主机ID。
     * > **DBInstanceTransType**=**2**时需要传该本参数。
     * @example `dh-bp****`
     */
    "TargetDedicatedHostIdForMaster"?: string;
    /**
     * 该参数仅支持专属集群实例，配置备节点的目标主机ID。
     * > **DBInstanceTransType**=**2**时需要传入该参数。
     * @example `dh-bp****`
     */
    "TargetDedicatedHostIdForSlave"?: string;
    /**
     * 此参数已废弃，无需配置。
     * @example `dh-bp****`
     */
    "TargetDedicatedHostIdForLog"?: string;
    /**
     * 该参数仅支持专属集群实例，生效时间，取值：
     * * **Immediate**：立即生效。
     * * **MaintainTime**：在可运维时间段内生效，请参见ModifyDBInstanceMaintainTime。
     * * **SpecificTime**：指定时间生效。
     * 默认值：MaintainTime。
     * @example `Immediate`
     */
    "EffectiveTime"?: string;
    /**
     * 该参数仅支持专属集群实例，指定切换的时间。格式：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * > 当**EffectiveTime**=**Specified**时需要填入本参数。
     * @example `2019-10-21T10:00:00Z`
     */
    "SpecifiedTime"?: string;
    /**
     * 该参数仅支持专属集群实例，目标实例的规格。
     * @example `rds.ebmhfc6.20xlarge`
     */
    "TargetDBInstanceClass"?: string;
    /**
     * 该参数仅支持专属集群实例，数据库版本。
     * @example `5.7`
     */
    "EngineVersion"?: string;
    /**
     * 该参数仅支持专属集群实例，实例的迁移方式。取值：
     * * **0**：默认值。系统优先进行本地升降级，若本地资源不足，则进行跨机迁移。
     * * **1**：本地升降级。若系统判断实例当前不支持本地升降级，则会报错。
     * * **2**：跨机迁移。将实例迁移到指定的主机，需要传入参数**DedicatedHostGroupId**、**TargetDedicatedHostIdForMaster**、**TargetDedicatedHostIdForSlave**。不能迁移到当前实例所在主机，否则会迁移失败。
     * @example `0`
     */
    "DBInstanceTransType"?: number;
    /**
     * 该参数仅支持专属集群实例，自定义存储空间，取值：**5~2000**。单位：GB。不传该参数表示存储空间保持不变。
     * @example `1000`
     */
    "Storage"?: number;
    /**
     * 该参数仅支持专属集群实例，交换机ID。
     * @example `vsw-****`
     */
    "VSwitchId"?: string;
    /**
     * 该参数仅支持专属集群实例，可用区ID。
     * @example `cn-hangzhou-a`
     */
    "ZoneId"?: string;
}
