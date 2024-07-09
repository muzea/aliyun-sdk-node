export interface DescribeHanaRestoresResponse {
    /**
     * 请求ID。
     * @example `7DEFC897-8F05-5C05-912C-C9A9510FBFF1`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 分页页码。从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `19`
     */
    TotalCount: number;
    HanaRestore: {
        /**
         * 恢复任务列表。
         */
        HanaRestores: {
            /**
             * 恢复任务状态。
             *   - **RUNNING**：运行中
             *   - **COMPLETE**：成功
             *   - **PARTIAL_COMPLETE**：部分成功
             *   - **FAILED**：失败
             *   - **CANCELED**：已取消
             *   - **EXPIRED**：已超时
             * @example `COMPLETE`
             */
            Status: string;
            /**
             * 恢复的实际时间点。
             * @example `1635315505`
             */
            ReachedTime: number;
            /**
             * 备份仓库ID。
             * @example `v-000g9acf******gta`
             */
            VaultId: string;
            /**
             * 当前恢复阶段，该值直接从SAP HANA获取。
             * @example `2`
             */
            CurrentPhase: number;
            /**
             * 恢复后，日志条目将从日志区中删除。初始化日志区域，如果不想恢复驻留在日志区中的日志段，请选择true，否则选择false。
             * @example `true`
             */
            ClearLog: boolean;
            /**
             * 恢复阶段详情。
             * @example `SQL Error 448 - recovery could not be completed:`
             */
            Message: string;
            /**
             * 检查差异和日志备份可用性。
             * - true：在恢复开始时，系统会检查所需的差异备份和日志备份是否都可用。 如果缺少差异备份或日志备份，在更改数据之前会停止恢复。
             * - false：不开启检查。
             * @example `true`
             */
            CheckAccess: boolean;
            /**
             * 恢复方式。
             * - **RECOVERY\_TO\_MOST\_RECENT**： 将数据库恢复到已备份的最近可用状态。
             * - **RECOVERY\_TO\_POINT\_IN\_TIME**：将数据库恢复到特定时间点。
             * - **RECOVERY\_TO\_SPECIFIC\_BACKUP**：将数据库恢复到指定的数据库备份。
             * - **RECOVERY\_TO\_LOG\_POSITION**：将数据库还原到指定日志位置。
             * @example `RECOVERY_TO_SPECIFIC_BACKUP`
             */
            Mode: string;
            /**
             * 是否是跨实例恢复。
             * - true：跨实例恢复
             * - false：非跨实例恢复
             * @example `true`
             */
            SystemCopy: boolean;
            /**
             * 当前进度，该值直接从SAP HANA获取。
             * @example `1`
             */
            CurrentProgress: number;
            /**
             * 是否使用差异备份。如果您需要使用差异备份或增量备份执行恢复，请选择true。如果选择在不使用差异备份或增量备份的情况下执行恢复，则使用日志备份进行恢复。
             * @example `true`
             */
            UseDelta: boolean;
            /**
             * 备份ID。
             * @example `1635315505`
             */
            BackupID: number;
            /**
             * 源SAP HANA实例ID。
             * @example `cl-0000g3mvy******5cj`
             */
            SourceClusterId: string;
            /**
             * 要恢复的Volume ID。仅选择**RECOVERY\_TO\_LOG\_POSITION**恢复方式时有效。
             * @example `0`
             */
            VolumeId: number;
            /**
             * 数据库的名称。
             * @example `BWD`
             */
            DatabaseName: string;
            /**
             * 恢复阶段。
             * @example `restart`
             */
            Phase: string;
            /**
             * 待恢复的SAP HANA实例ID。
             * @example `cl-000923yu******p00j4`
             */
            ClusterId: string;
            /**
             * 数据库恢复ID。
             * @example `1644038961030`
             */
            DatabaseRestoreId: number;
            /**
             * 状态，该值直接从SAP HANA获取。
             * @example `successful`
             */
            State: string;
            /**
             * 源系统名。表示需要恢复的源数据库名，格式为`源数据库名@SID`。
             * @example `PRD@H4P`
             */
            Source: string;
            /**
             * 最大阶段，该值直接从SAP HANA获取。
             * @example `4`
             */
            MaxPhase: number;
            /**
             * 恢复任务结束时间。UNIX时间，单位为秒。
             * @example `1634356382`
             */
            EndTime: number;
            /**
             * 恢复任务开始时间。UNIX时间，单位为秒。
             * @example `1636970413`
             */
            StartTime: number;
            /**
             * 备份前缀。
             * @example `INC_DATA_BACKUP`
             */
            BackupPrefix: string;
            /**
             * 恢复任务ID。
             * @example `r-000c1en183ayn9sesgqh`
             */
            RestoreId: string;
            /**
             * 日志位置，仅选择**RECOVERY\_TO\_LOG\_POSITION**恢复方式时有效。
             * @example `0`
             */
            LogPosition: number;
            /**
             * 选择需要恢复到的时间点。仅选择**RECOVERY\_TO\_POINT\_IN\_TIME**恢复方式时有效，系统会将数据库恢复到离这个时间最近的状态。
             * @example `1649851200`
             */
            RecoveryPointInTime: number;
            /**
             * 最大进度，该值直接从SAP HANA获取。
             * @example `1`
             */
            MaxProgress: number;
            /**
             * 是否从Catalog中查找备份。仅选择**RECOVERY\_TO\_SPECIFIC\_BACKUP**恢复方式时有效。如果不使用Catalog，需要指定一个备份前缀，混合云备份服务会根据备份前缀进行恢复。
             * @example `false`
             */
            UseCatalog: boolean;
        }[];
    };
}
