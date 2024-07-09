export interface CreateHanaRestoreRequest {
    /**
     * 备份仓库ID。
     * @example `v-000************yqr`
     */
    "VaultId"?: string;
    /**
     * 待恢复的SAP HANA实例ID。
     * @example `cl-000fbrs5******ka9w`
     */
    "ClusterId": string;
    /**
     * 待恢复的数据库名称。
     * @example `TS2`
     */
    "DatabaseName": string;
    /**
     * 备份ID。
     * @example `1645628400235`
     */
    "BackupId"?: number;
    /**
     * 恢复方式。
     * - **RECOVERY\_TO\_MOST\_RECENT**： 最近时间，将数据库恢复到已备份的最近可用状态。
     * - **RECOVERY\_TO\_POINT\_IN\_TIME**：指定时间，将数据库恢复到特定时间点。
     * - **RECOVERY\_TO\_SPECIFIC\_BACKUP**：指定备份，将数据库恢复到指定的数据库备份。
     * - **RECOVERY\_TO\_LOG\_POSITION**：日志位置，将数据库还原到指定日志位置。
     * @example `RECOVERY_TO_POINT_IN_TIME`
     */
    "Mode": string;
    /**
     * 选择需要恢复到的时间点。仅选择**RECOVERY\_TO\_POINT\_IN\_TIME**恢复方式时有效，系统会将数据库恢复到离这个时间最近的状态。
     * @example `1635315505`
     */
    "RecoveryPointInTime"?: number;
    /**
     * 日志位置，仅选择**RECOVERY\_TO\_LOG\_POSITION**恢复方式时有效。
     * @example `0`
     */
    "LogPosition"?: number;
    /**
     * 要恢复的Volume ID。仅选择**RECOVERY\_TO\_LOG\_POSITION**恢复方式时有效。
     * @example `0`
     */
    "VolumeId"?: number;
    /**
     * 是否从Catalog中查找备份。仅选择**RECOVERY\_TO\_SPECIFIC\_BACKUP**恢复方式时有效。如果不使用Catalog，需要指定一个备份前缀，混合云备份服务会根据备份前缀进行恢复。
     * @example `false`
     */
    "UseCatalog"?: boolean;
    /**
     * 备份前缀。
     * @example `COMPLETE_DATA_BACKUP_2022_05_02_15_39`
     */
    "BackupPrefix": string;
    /**
     * 是否是跨实例恢复。
     * @example `false`
     */
    "SystemCopy"?: boolean;
    /**
     * 源系统名。表示需要恢复的源数据库名，格式为`源数据库名@SID`。
     * @example `HNP@HNP`
     */
    "Source"?: string;
    /**
     * 源SAP HANA实例ID。
     * @example `cl-000ii8tzv******xm0t`
     */
    "SourceClusterId"?: string;
    /**
     * 初始化日志区域，如果不想恢复驻留在日志区中的日志段，请选择false。恢复后, 日志条目将从日志区中删除。
     * @example `false`
     */
    "ClearLog"?: boolean;
    /**
     * 检查差异和日志备份可用性。开启此项后，在恢复开始时，系统会检查所需的差异备份和日志备份是否都可用。 如果缺少差异备份或日志备份，在更改数据之前会停止恢复。
     * @example `false`
     */
    "CheckAccess"?: boolean;
    /**
     * 使用差异备份。如果您需要使用差异备份或增量备份执行恢复，请选择此选项。如果选择在不使用差异备份或增量备份的情况下执行恢复，则使用日志备份进行恢复。
     * @example `true`
     */
    "UseDelta"?: boolean;
    /**
     * SidAdmin，SAP HANA创建的一个系统账号。
     * @example `DB`
     */
    "SidAdmin"?: string;
    /**
     * Hana主节点客户端ID。
     * @example `c-000ii8tzv**********`
     */
    "MasterClientId"?: string;
}
