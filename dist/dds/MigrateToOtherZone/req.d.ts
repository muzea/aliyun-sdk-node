export interface MigrateToOtherZoneRequest {
    /**
     * 实例ID。
     * > 如果实例的网络类型为专有网络，您还需要传入**VSwitchId**参数。
     * @example `dds-bp2658****`
     */
    "InstanceId": string;
    /**
     * 迁移的目标可用区ID。
     * > - 迁移的目标可用区必须和当前实例的可用区处于同一地域。
     * > - 您可以通过调用[DescribeRegions](~~61933~~)接口查询可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 迁移可用区的生效时间，取值：
     * - **Immediately**（默认值）：立即生效。
     * - **MaintainTime**：在实例的可运维时间段内生效。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
    /**
     * 迁移的目标可用区虚拟交换机ID。
     * > 当实例的网络类型为专有网络时，本参数才可用且必须传入。
     * @example `vsw-bp67ac****`
     */
    "VSwitchId"?: string;
}
