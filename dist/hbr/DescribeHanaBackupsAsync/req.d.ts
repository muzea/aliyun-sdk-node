export interface DescribeHanaBackupsAsyncRequest {
    /**
     * 备份仓库ID。
     * @example `v-000270c******pi81`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-00098******yuqvu`
     */
    "ClusterId": string;
    /**
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 数据库名称。
     * @example `BPD`
     */
    "DatabaseName"?: string;
    /**
     * 恢复方式。
     * - **RECOVERY\_TO\_MOST\_RECENT**： 最近时间，将数据库恢复到已备份的最近可用状态。
     * - **RECOVERY\_TO\_POINT\_IN\_TIME**：指定时间，将数据库恢复到特定时间点。
     * - **RECOVERY\_TO\_SPECIFIC\_BACKUP**：指定备份，将数据库恢复到指定的数据库备份。
     * - **RECOVERY\_TO\_LOG\_POSITION**：日志位置，将数据库还原到指定日志位置。
     * @example `RECOVERY_TO_SPECIFIC_BACKUP`
     */
    "Mode"?: string;
    /**
     * 选择需要恢复到的时间点。仅选择**RECOVERY\_TO\_POINT\_IN\_TIME**恢复方式时有效，系统会将数据库恢复到离这个时间最近的状态。
     * @example `1649851200`
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
     * 是否是跨实例恢复。
     * - true：跨实例恢复
     * - false：非跨实例恢复
     * @example `true`
     */
    "SystemCopy"?: boolean;
    /**
     * 源系统名。表示需要恢复的源数据库名，格式为`源数据库名@SID`。
     * @example `P01@HP1`
     */
    "Source"?: string;
    /**
     * 源SAP HANA实例ID。
     * @example `cl-0000g3m******5cj`
     */
    "SourceClusterId"?: string;
    /**
     * 是否包括差异备份。
     * - true：包括差异备份
     * - false：不包括差异备份
     * @example `false`
     */
    "IncludeDifferential"?: boolean;
    /**
     * 是否包括增量备份。
     * - true：包括增量备份
     * - false：不包括增量备份
     * @example `true`
     */
    "IncludeIncremental"?: boolean;
    /**
     * 是否包括日志备份。
     * - true：包括日志备份
     * - false：不包括日志备份
     * @example `true`
     */
    "IncludeLog"?: boolean;
    /**
     * 是否使用Backint。
     * - true：使用Backint
     * - false：不使用Backint
     * @example `false`
     */
    "UseBackint"?: boolean;
    /**
     * 资源组ID。
     * @example `rg-acfmz7mced2ldhy`
     */
    "ResourceGroupId"?: string;
}
