interface MigrateToOtherZoneRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 目标可用区ID，可以通过[DescribeRegions](~~26243~~)接口查看。
    * @example `cn-hangzhou-b`
    */ "ZoneId": string;
    "OwnerId"?: number;
    "VPCId"?: string;
    /**
    * 生效时间，取值：
    * * **Immediate**：立即生效；
    * * **MaintainTime**：在可运维时间段内生效，请参见[ModifyDBInstanceMaintainTime](~~26249~~)。
    * 默认值：**Immediate**。
    * @example `Immediate`
    */ "EffectiveTime"?: string;
    /**
    * 交换机ID。
    * @example `vsw-uf6adz52c2pxxxxxxx`
    */ "VSwitchId"?: string;
    "Category"?: string;
    "ZoneIdSlave1"?: string;
    "ZoneIdSlave2"?: string;
}
export { MigrateToOtherZoneRequest };