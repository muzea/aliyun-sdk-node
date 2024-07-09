export interface MigrateAvailableZoneRequest {
    /**
     * 实例ID。
     * > 如果实例的网络类型为专有网络，您还需要传入**Vswitch**参数。
     * @example `dds-bp1ece71ff2f****`
     */
    "DBInstanceId": string;
    /**
     * 迁移的目标可用区ID。
     * > - 迁移的目标可用区和当前实例的可用区处于同一地域。
     * > - 您可以通过调用[DescribeRegions](~~61933~~)接口查询可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 迁移的目标可用区虚拟交换机ID。
     * > 当实例的网络类型为专有网络时，需要配置该参数。
     * @example `vsw-bp1buy0h9myt5i9e7****`
     */
    "Vswitch"?: string;
    /**
     * 迁移可用区的生效时间，取值：
     * - **Immediately**：立即生效。
     * - **MaintainTime**：在实例的可运维时间段内生效。
     * 默认为**Immediately**。
     * @example `Immediately`
     */
    "EffectiveTime"?: string;
}
