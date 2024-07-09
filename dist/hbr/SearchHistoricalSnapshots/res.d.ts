export interface SearchHistoricalSnapshotsResponse {
    /**
     * 获取下一页快照所需的Token。
     * @example `BE`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 当前页显示历史快照数量。
     * @example `10`
     */
    Limit: number;
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
     * 符合条件的快照总数。
     * @example `20`
     */
    TotalCount: number;
    Snapshots: {
        /**
         * 历史快照列表。
         */
        Snapshot: {
            /**
             * 备份快照任务的状态。取值范围：
             * * **COMPLETE**：成功
             * * **PARTIAL_COMPLETE**：部分成功
             * * **FAILED**：失败
             * @example `COMPLETE`
             */
            Status: string;
            /**
             * 快照HASH值。
             * @example `f2fe...`
             */
            SnapshotHash: string;
            /**
             * 保存备份库快照的仓库ID。
             * @example `v-0003rf9m17pap3ltpqx5`
             */
            VaultId: string;
            /**
             * 快照实际项目数。
             * > 目前仅文件备份可用。
             * @example `6`
             */
            ActualItems: number;
            /**
             * 备份类型。取值为**COMPLETE**，表示全量备份。
             * @example `COMPLETE`
             */
            BackupType: string;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示文件系统创建时间。UNIX时间，单位为秒。
             * @example `1607436917`
             */
            CreateTime: number;
            /**
             * 去重后快照实际数据量。单位为字节。
             * @example `600`
             */
            ActualBytes: number;
            /**
             * 数据源类型。取值范围：
             * * **ECS_FILE**：ECS文件的备份快照。
             * * **OSS**：阿里云OSS的备份快照。
             * * **NAS**：阿里云NAS的备份快照。
             * @example `ECS_FILE`
             */
            SourceType: string;
            /**
             * 仅当**SourceType**取值为**OSS**时，该参数有效。表示备份前缀。
             * @example `example/`
             */
            Prefix: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份客户端ID。
             * @example `c-*********************`
             */
            ClientId: string;
            /**
             * 数据源总量。单位为字节。
             * @example `1000`
             */
            BytesTotal: number;
            /**
             * 备份项目数。
             * > 目前仅文件备份可用。
             * @example `8`
             */
            ItemsDone: number;
            /**
             * 备份快照完成时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CompleteTime: number;
            /**
             * 备份快照保留天数。
             * @example `7`
             */
            Retention: number;
            /**
             * 备份快照的创建时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CreatedTime: number;
            /**
             * 仅当**SourceType**取值为**OSS**时，该参数有效。表示OSS bucket名称。
             * @example `hbr-backup-oss`
             */
            Bucket: string;
            /**
             * 父备份的快照HASH值。
             * @example `f2fe..`
             */
            ParentSnapshotHash: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示ECS实例ID。
             * @example `i-*********************`
             */
            InstanceId: string;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示文件系统ID。
             * @example `005494`
             */
            FileSystemId: string;
            /**
             * 记录备份失败信息的文件，包含备份部分完成的信息。
             * @example `Item	Error Message C:\Program Files (x86)\Symantec\Symantec Endpoint Protection\14.3.558.0000.105\Bin\service.dat	Open: open \\?\C:\Program Files (x86)\Symantec\Symantec Endpoint Protection\14.3.558.0000.105\Bin\service.dat: The process cannot access the file because it is being used by another process. C:\ProgramData\McAfee\Agent\data\InstallerFiles\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af_contrib.ini	Open: open \\?\C:\ProgramData\McAfee\Agent\data\InstallerFiles\172e8a3b04b7ab0fd0215f4fb7707e3744b37d83b6743b3eacb94447c74dc9af_contrib.ini: Access is denied.`
             */
            ErrorFile: string;
            /**
             * 快照开始时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            StartTime: number;
            /**
             * 备份快照的更新时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            UpdatedTime: number;
            /**
             * 备份快照ID。
             * @example `s-*********************`
             */
            SnapshotId: string;
            /**
             * 备份任务ID。
             * @example `v-*********************`
             */
            JobId: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份的文件路径。
             * @example `["/home"]`
             */
            Path: string;
            /**
             * 数据源项目总数。
             * > 目前仅文件备份可用。
             * @example `10`
             */
            ItemsTotal: number;
            /**
             * 增量备份的数据量。单位为字节。
             * @example `800`
             */
            BytesDone: number;
            Paths: {
                /**
                 * 备份文件路径列表。
                 * @example `"/home"`
                 */
                Path: string[];
            };
            /**
             * 表格存储实例名称。
             * @example `instancename`
             */
            InstanceName: string;
            /**
             * 表格存储实例的数据表名称。
             * @example `table2`
             */
            TableName: string;
            /**
             * 备份任务开始执行时间。UNIX时间，单位为毫秒。
             * @example `1642492553038`
             */
            RangeStart: number;
            /**
             * 备份任务结束执行时间。UNIX时间，单位为毫秒。
             * @example `1642521709966`
             */
            RangeEnd: number;
            /**
             * 快照到期时间，UNIX时间，单位为秒。
             * @example `1640334062`
             */
            ExpireTime: number;
            /**
             * 转归档前快照HASH值。
             * @example `qwer***`
             */
            SourceSnapshotHash: string;
            /**
             * 转归档前父快照HASH值。
             * @example `qwer***`
             */
            SourceParentSnapshotHash: string;
            /**
             * 存储类型。取值：
             * - **Standard**：标准。
             * - **Archive**：归档。
             * - **ColdArchive**：冷归档。
             * @example `STANDARD`
             */
            StorageClass: string;
            /**
             * 转归档时间。
             * @example `1640334062`
             */
            ArchiveTime: number;
            /**
             * 是否使用本地NAS。
             * @example `false`
             */
            UseCommonNas: boolean;
            /**
             * 备份任务包含的备份路径。
             * @example `[\"/test/example_cn-huhehaote_3.txt\", \"/test/example_cn-huhehaote_9.txt\", \"/test/example_cn-huhehaote_5.txt\", \"/test/example_cn-huhehaote_1.txt\", \"/test/example_cn-huhehaote_7.txt\"]`
             */
            Include: string;
            /**
             * 备份任务不包含的备份路径。
             * @example `[\"/test/example_cn-hangzhou_7.txt\", \"/test/example_cn-hangzhou_1.txt\", \"/test/example_cn-hangzhou_3.txt\", \"/test/example_cn-hangzhou_9.txt\", \"/test/example_cn-hangzhou_6.txt\"]`
             */
            Exclude: string;
        }[];
    };
}
