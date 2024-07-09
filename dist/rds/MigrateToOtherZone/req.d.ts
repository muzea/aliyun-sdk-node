export interface MigrateToOtherZoneRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 专有网络VPC ID。迁移可用区时VPC不能变更，需保持不变。
     * - 专有网络实例迁移可用区时必须传入该参数。
     * - 如果实例引擎为SQL Server，迁移可用区VPC可支持变更。
     * @example `vpc-****`
     */
    "VPCId"?: string;
    /**
     * 目标可用区ID，可调用DescribeRegions获取。
     * @example `cn-hangzhou-b`
     */
    "ZoneId": string;
    /**
     * 生效时间，取值：
     * * **Immediate**：默认值，立即生效。
     * * **MaintainTime**：在可运维时间段内生效，请参见ModifyDBInstanceMaintainTime。
     * * **ScheduleTime**：手动指定生效时间。
     * > 如果在本参数中传入**ScheduleTime**，则还需要传入**SwitchTime**参数。
     * @example `Immediate`
     */
    "EffectiveTime"?: string;
    /**
     * 交换机ID。
     * - 专有网络实例迁移可用区时必须传入该参数。可通过调用DescribeVSwitches接口查询已创建的交换机。
     * - 当RDS PostgreSQL、SQL Server实例迁移可用区配置了备可用区时，此参数可以配置多个，用英文逗号（,）分隔，与可用区对应。
     * @example `vsw-uf6adz52c2p****`
     */
    "VSwitchId"?: string;
    /**
     * 实例系列，取值：
     * * **Basic**：基础系列
     * * **HighAvailability**：高可用系列
     * * **AlwaysOn**：SQL Server集群系列
     * * **cluster**：MySQL集群系列
     * * **Finance**：三节点企业系列
     * @example `HighAvailability`
     */
    "Category"?: string;
    /**
     * 备可用区1。
     * >非基础系列实例需要传入该参数。
     * @example `cn-hangzhou-c`
     */
    "ZoneIdSlave1"?: string;
    /**
     * 备可用区2。
     * >仅三节点企业系列实例可传入该参数。
     * @example `cn-hangzhou-d`
     */
    "ZoneIdSlave2"?: string;
    /**
     * 切换可用区的自定义生效时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * >本参数配合**EffectiveTime**参数使用，仅在**EffectiveTime**为**ScheduleTime**时需要传入。
     * @example `2021-12-14T15:15:15Z`
     */
    "SwitchTime"?: string;
    /**
     * 是否在迁移可用区时变配。
     * - **true**：变配，当配置为**true**时，至少需要配置**DBInstanceClass**或**DBInstanceStorage**中的一个参数。
     * - **false**：默认值，不变配。
     * > 该参数仅RDS MySQL实例适用。
     * @example `true`
     */
    "IsModifySpec"?: string;
    /**
     * 目标实例规格代码，只支持变更规格，不支持变更存储类型。
     * 当**IsModifySpec**参数配置为**true**时，至少需要配置本参数和**DBInstanceStorage**中的一个。
     * 实例规格代码请参见[RDS MySQL主实例规格列表](~~276975~~)。
     * @example `mysql.x4.xlarge.2`
     */
    "DBInstanceClass"?: string;
    /**
     * 目标存储空间大小。当**IsModifySpec**参数配置为**true**时，至少需要配置本参数和**DBInstanceClass**中的一个。
     * 单位：GB。
     * 取值范围：不同规格可扩容存储空间大小不同，具体请以[RDS MySQL主实例规格列表](~~276975~~)为准。
     * @example `500`
     */
    "DBInstanceStorage"?: number;
    /**
     * <props="china">是否开启通用云盘IO加速功能，参数取值含义如下：</props>
     * <props="china"> - 1：开启</props>
     * <props="china"> - 0：不开启</props>
     * <props="china">> 通用云盘的IO加速功能的更多信息，请参见[通用云盘IO加速功能技术介绍](~~2527067~~)。</props>
     * <props="intl">预留参数。</props>
     * @example `0`
     */
    "IoAccelerationEnabled"?: string;
}
