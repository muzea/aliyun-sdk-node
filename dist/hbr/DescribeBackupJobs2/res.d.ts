export interface DescribeBackupJobs2Response {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
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
     * 分页页码，从1开始，默认值为1。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 分页大小，最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    PageSize: number;
    /**
     * 查询到的符合条件的备份任务总数。
     * @example `8`
     */
    TotalCount: number;
    BackupJobs: {
        /**
         * 符合条件的备份任务列表。
         */
        BackupJob: {
            /**
             * 备份任务状态。取值范围：
             * - **COMPLETE**：成功
             * - **PARTIAL_COMPLETE**：部分成功
             * - **FAILED**：失败
             * @example `COMPLETE`
             */
            Status: string;
            /**
             * 备份任务的错误信息。
             * @example `PARTIAL_COMPLETE`
             */
            ErrorMessage: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份任务实际项目数。
             * @example `6`
             */
            ActualItems: number;
            /**
             * 备份仓库ID。
             * @example `v-0006******q`
             */
            VaultId: string;
            /**
             * 去除重复后备份任务实际数据量。单位为字节。
             * @example `600`
             */
            ActualBytes: number;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示文件系统创建时间。UNIX时间，单位为秒。
             * @example `1607436917`
             */
            CreateTime: number;
            /**
             * 备份类型。取值为**COMPLETE**，表示全量备份。
             * @example `COMPLETE`
             */
            BackupType: string;
            /**
             * 仅当**SourceType**取值为**OSS**时，该参数有效。表示备份对象前缀。
             * @example `example/`
             */
            Prefix: string;
            /**
             * 数据源类型，取值范围：
             * - **ECS_FILE**：备份ECS文件
             * - **OSS**：备份阿里云OSS
             * - **NAS**：备份阿里云NAS
             * @example `ECS_FILE`
             */
            SourceType: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示是否使用Windows系统VSS定义备份路径。
             * - 此功能仅支持Windows类型ECS实例。
             * - 如果备份源中有数据更改，需要确保备份数据与源数据的一致时，才可配置为`["UseVSS":true]`。
             * - 选择使用VSS后，不支持多个文件目录同时备份。
             * @example `{"UseVSS":false}`
             */
            Options: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份客户端ID。
             * @example `c-*********************`
             */
            ClientId: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份项目数。
             * @example `8`
             */
            ItemsDone: number;
            /**
             * 数据源总数据量。单位为字节。
             * @example `1000`
             */
            BytesTotal: number;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示不需要进行备份的路径，该路径下所有文件都不备份。最多支持255个字符。
             * @example `["/var", "/proc"]`
             */
            Exclude: string;
            /**
             * 备份任务名称。
             * @example `jobname`
             */
            JobName: string;
            /**
             * 备份任务完成时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CompleteTime: number;
            /**
             * 备份任务创建时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CreatedTime: number;
            /**
             * 仅当**SourceType**取值为**OSS**时，该参数有效。表示备份OSS bucket名称。
             * @example `hbr-backup-oss`
             */
            Bucket: string;
            /**
             * 备份进度。值为100%*100。
             * @example `10000`
             */
            Progress: number;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示备份流量控制。格式为`{start}|{end}|{bandwidth}`。多个流量控制配置使用`|`分隔，并且配置时间不允许有重叠。
             * - **start**：起始小时
             * - **end**：结束小时
             * - **bandwidth**：限制速率，单位KB/s。
             * @example `0:24:5120`
             */
            SpeedLimit: string;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示ECS实例ID。
             * @example `i-*********************`
             */
            InstanceId: string;
            /**
             * 备份计划ID。
             * @example `plan-20********35`
             */
            PlanId: string;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示文件系统ID。
             * @example `005494`
             */
            FileSystemId: string;
            /**
             * 备份任务开始时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            StartTime: number;
            /**
             * 备份任务更新时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            UpdatedTime: number;
            /**
             * 备份任务ID。
             * @example `job-000g********w7`
             */
            JobId: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示数据源项目总数。
             * @example `10`
             */
            ItemsTotal: number;
            /**
             * 备份任务包含的备份路径。
             * @example `["/home/alice/*.pdf", "/home/bob/*.txt"]`
             */
            Include: string;
            /**
             * 增量备份的数据量。单位为字节。
             * @example `800`
             */
            BytesDone: number;
            Paths: {
                /**
                 * 表示备份路径。
                 */
                Path: string[];
            };
            /**
             * ECS整机备份任务详情。
             */
            Detail: {
                /**
                 * 是否进行异地复制。
                 * @example `true`
                 */
                DoCopy: boolean;
                /**
                 * 异地复制快照ID。
                 * @example `s-******************`
                 */
                DestinationNativeSnapshotId: string;
                /**
                 * 异地复制进度。
                 * @example `85`
                 */
                DestinationNativeSnapshotProgress: number;
                /**
                 * 异地复制状态。
                 * @example `COMPLETE`
                 */
                DestinationNativeSnapshotStatus: string;
                /**
                 * 异地复制备份保留时间。
                 * @example `30`
                 */
                DestinationRetention: number;
                /**
                 * 异地复制备份ID。
                 * @example `s-******************`
                 */
                DestinationSnapshotId: string;
                /**
                 * 异地复制失败信息。
                 * @example `ECS.CreatingSnapshot`
                 */
                DestinationNativeSnapshotErrorMessage: string;
                /**
                 * 快照ID。
                 * @example `s-******************`
                 */
                NativeSnapshotId: string;
                DiskNativeSnapshotIdList: {
                    /**
                     * 快照与云盘对应关系。
                     */
                    DiskNativeSnapshotId: any[];
                };
            };
            /**
             * 表格存储实例名称。
             * @example `instancename`
             */
            InstanceName: string;
            /**
             * 表格存储实例详情。
             */
            OtsDetail: {
                TableNames: {
                    /**
                     * 表格存储实例的数据表名称列表。
                     */
                    TableName: string[];
                };
            };
            /**
             * 实际的平均备份速度。单位为KB/s。
             * @example `500`
             */
            Speed: number;
            /**
             * 表格存储实例的数据表名称。
             * @example `table1`
             */
            TableName: string;
            /**
             * 跨账号备份类型。支持：
             * - SELF_ACCOUNT：本账号备份
             * - CROSS_ACCOUNT：跨账号备份
             * @example `SELF_ACCOUNT`
             */
            CrossAccountType: string;
            /**
             * 被当前账号管理的跨账号备份的原账号ID。
             * @example `158975xxxxx4625`
             */
            CrossAccountUserId: number;
            /**
             * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
             * @example `BackupRole`
             */
            CrossAccountRoleName: string;
            /**
             * 仅SourceType=CONTAINER时返回，表示容器备份任务备份的集群标识。当集群类型为阿里云容器服务Kubernetes集群时，该值为Kubernetes集群ID。
             * @example `c83**************************b76`
             */
            Identifier: string;
            /**
             * 目的端数据源类型。（仅同步需要）
             * @example `OSS`
             */
            DestSourceType: string;
            /**
             * 目的端数据源ID。（仅同步需要）
             * @example `ds-000cov4ufudxklj24zdk`
             */
            DestDataSourceId: string;
            /**
             * 目的端数据源详情。（仅同步需要）
             * @example `{\"prefix\":\"/\"}`
             */
            DestDataSourceDetail: string;
            /**
             * 增量文件同步列表的配置。（仅同步需要）
             * @example `{"dataSourceId": "ds-123456789", "path": "/changelist"}`
             */
            ChangeListPath: string;
            /**
             * 表示需处理文件的总数。
             * @example `10`
             */
            FilesTotal: number;
            /**
             * 表示文件已处理完成数。
             * @example `9`
             */
            FilesDone: number;
            /**
             * 表示实际处理的文件数。
             * @example `8`
             */
            ActualFiles: number;
        }[];
    };
}
