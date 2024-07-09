export interface UpgradeDBInstanceMajorVersionRequest {
    /**
     * 升级后实例规格。CPU和内存配置必须大于等于原实例规格。
     * 例如，原实例规格`pg.n2.small.2c`的CPU为1核，内存为2GB，可升级为`pg.n2.medium.2c`，CPU为2核，内存为4 GB。
     * > RDS PG的实例规格代码，请参见[RDS PostgreSQL主实例规格列表](~~276990~~)。
     * @example `pg.n2.medium.2c`
     */
    "DBInstanceClass"?: string;
    /**
     * 升级后实例存储空间。
     * 单位：GB
     * 取值范围：
     * - ESSD PL1云盘：20 GB ~ 3200 GB
     * - ESSD PL2云盘：500 GB ~ 3200 GB
     * - ESSD PL3云盘：1500 GB ~ 3200 GB
     * > 本地盘实例升级大版本时，支持存储空间缩容。可选择的最小存储空间，请参见[升级数据库大版本](~~203309~~)。
     * @example `20`
     */
    "DBInstanceStorage"?: number;
    /**
     * 计费方式。固定配置为按量付费，取值Postpaid。
     * > 升级后如果需要变更实例的计费方式，请参见[按量付费转包年包月](~~96743~~)。
     * @example `Postpaid`
     */
    "PayType": string;
    /**
     * 升级后实例网络类型。固定配置为VPC，当前只支持专有网络实例进行大版本升级。
     * 如果网络类型为经典网络，请先切换为专有网络。关于如何查看或切换网络类型，请参见[切换网络类型](~~96761~~)。
     * @example `VPC`
     */
    "InstanceNetworkType"?: string;
    /**
     * 该参数与SwitchOver配合使用，只有**SwitchOver**参数取值为**true**时有效。表示割接时间。
     * 取值范围：
     * - Immediate：立即生效。
     * - MaintainTime：在可运维时间段内生效，可调用ModifyDBInstanceMaintainTime接口修改可运维时间段。
     * @example `Immediate`
     */
    "SwitchTimeMode"?: string;
    /**
     * 预留参数，无需配置。
     * @example `2021-07-10T13:15:12Z`
     */
    "SwitchTime"?: string;
    /**
     * 割接配置，系统将创建一个新实例进行数据迁移。请选择迁移后是否自动切换至新实例。
     * 取值范围：
     * - true：割接，自动切换。
     * - false：不割接，不自动切换。此选项一般用于正式升级之前测试当前业务在新版本中的兼容性。
     * > - 如果选择了割接：
     * >     - 割接后无法回退，请谨慎选择。
     * >     - 切换过程中，原实例会被变为只读，业务无法写入，请务必在业务低峰期进行。
     * >     - 如果原实例中创建了只读实例，则无法选择割接。只能通过不割接升级实例，且原只读实例不会被克隆。升级完成后，您需要在新版本实例中另行创建PostgreSQL只读实例。
     * > - 如果选择了不割接：
     * >     - 迁移过程中，原实例的业务不会受到影响。
     * >     - 如需通过不割接升级实例，需在迁移完成后把应用程序中的数据库连接地址改为新实例的连接地址。如何查看连接地址，请参见[查看或修改内外网地址和端口](~~96788~~)。
     * @example `false`
     */
    "SwitchOver"?: string;
    /**
     * 选择在哪个时间点对数据库执行统计信息收集。
     * - Before：表示割接前收集，可以保证业务稳定性。如果实例数据量太大可能会导致升级时间较久。
     * - After：表示割接后收集，实例升级速度较快。升级后访问未生成统计信息的表可能导致执行计划不准确，业务高峰期还可能导致数据库宕机。
     * > 对于不割接场景，割接前收集表示新实例开放读写前收集，割接后收集表示新实例开放读写后收集。
     * @example `After`
     */
    "CollectStatMode"?: string;
    /**
     * 升级后实例目标大版本。必须与执行升级前检查时设置的目标版本一致。
     * > 可通过调用UpgradeDBInstanceMajorVersionPrecheck接口执行大版本升级前检查。
     * @example `13.0`
     */
    "TargetMajorVersion"?: string;
    /**
     * 原实例ID。
     * @example `pgm-bp1gm3yh0ht1****`
     */
    "DBInstanceId"?: string;
    /**
     * VPC ID。可以通过DescribeDBInstanceAttribute接口查看原实例的VPC ID。
     * @example `vpc-bp1opxu1zkhn00gzv****`
     */
    "VPCId"?: string;
    /**
     * - 当原实例为基础系列实例时，配置目标实例交换机ID。
     * - 当原实例为高可用系列实例时，可以配置目标主备实例交换机ID，使用逗号（,）分隔。
     * > 配置的目标实例交换机需要与原实例处于同一可用区。可调用DescribeVSwitches接口查询获取。
     * @example `vsw-bp10aqj6o4lclxdrm****,vsw-bp10aqj6o4lclxdrm****`
     */
    "VSwitchId"?: string;
    /**
     * 无需配置，表示目标实例的内网IP。系统默认通过VPCId和vSwitchId自动分配。
     * @example `172.16.XX.XX`
     */
    "PrivateIpAddress"?: string;
    /**
     * 预留参数，无需配置。
     * @example `1`
     */
    "UsedTime"?: string;
    /**
     * 预留参数，无需配置。
     * @example `Month`
     */
    "Period"?: string;
    /**
     * 表示升级后实例的存储类型。
     * 取值范围：
     * - cloud_ssd：SSD云盘
     * - cloud_essd：ESSD PL1云盘
     * - cloud_essd2：ESSD PL2云盘
     * - cloud_essd3：ESSD PL3云盘
     * 版本升级功能基于云盘快照，当前升级后支持选择的存储类型如下。
     * - 当原实例为SSD云盘时，可选SSD云盘。
     * - 当原实例为ESSD云盘时，可选ESSD PL1云盘、ESSD PL2 云盘、ESSD PL3 云盘。
     * - 当原实例为本地SSD盘时，可选ESSD PL1云盘、ESSD PL2 云盘、ESSD PL3 云盘。
     * @example `cloud_essd`
     */
    "DBInstanceStorageType"?: string;
    /**
     * 目标主可用区ID。可以通过DescribeRegions接口查看可用区ID。
     * RDS PostgreSQL支持升级后将新的实例配置到与原实例同一地域的其他可用区。
     * @example `cn-hangzhou-j`
     */
    "ZoneId"?: string;
    /**
     * 仅当原实例为高可用系列时，该参数可配置，表示目标实例备可用区ID。
     * RDS PostgreSQL支持升级后将新的备实例配置到与原实例同一地域的其他可用区。
     * 可以通过DescribeRegions接口查看可用区ID。
     * @example `cn-hangzhou-j`
     */
    "ZoneIdSlave1"?: string;
    /**
     * 预留参数，无需配置。
     * @example `cn-hangzhou-j`
     */
    "ZoneIdSlave2"?: string;
}
