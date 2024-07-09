export interface DescribeOtsTableSnapshotsResponse {
    /**
     * 请求ID。
     * @example `09376812-6290-5E36-B504-E8010D72D1F0`
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
     * 当前页显示快照数量。
     * @example `10`
     */
    Limit: number;
    /**
     * 快照列表。
     */
    Snapshots: {
        /**
         * 备份快照任务的状态。取值范围：
         * - **COMPLETE**：成功
         * - **PARTIAL_COMPLETE**：部分成功
         * - **FAILED**：失败
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
         * @example `v-00030j*******sn`
         */
        VaultId: string;
        /**
         * 备份类型。取值为**COMPLETE**，表示全量备份。
         * @example `COMPLETE`
         */
        BackupType: string;
        /**
         * 表示表格存储创建时间。UNIX时间，单位为秒。
         * @example `1607436917`
         */
        CreateTime: number;
        /**
         * 去重后快照实际数据量。单位为字节。
         * @example `0`
         */
        ActualBytes: string;
        /**
         * 数据源类型。取值范围：
         * - **ECS_FILE**：ECS文件的备份快照。
         * - **OSS**：阿里云OSS的备份快照。
         * - **NAS**：阿里云NAS的备份快照。
         * - **OTS_TABLE**：阿里云表格存储的备份快照。
         * @example `OTS_TABLE`
         */
        SourceType: string;
        /**
         * 数据源总量。单位为字节。
         * @example `0`
         */
        BytesTotal: number;
        /**
         * 备份快照完成时间。UNIX时间，单位为秒。
         * @example `1642496679`
         */
        CompleteTime: number;
        /**
         * 备份快照保留天数。
         * @example `730`
         */
        Retention: number;
        /**
         * 备份快照的创建时间。UNIX时间，单位为秒。
         * @example `1642496679`
         */
        CreatedTime: number;
        /**
         * 父备份的快照HASH值。
         * @example `f2fe..`
         */
        ParentSnapshotHash: string;
        /**
         * 快照开始时间。UNIX时间，单位为秒。
         * @example `1642496543`
         */
        StartTime: number;
        /**
         * 备份快照的更新时间。UNIX时间，单位为秒。
         * @example `1642496679`
         */
        UpdatedTime: number;
        /**
         * 备份快照ID。
         * @example `s-00047mxg17p26*****b`
         */
        SnapshotId: string;
        /**
         * 备份任务ID。
         * @example `job-00030j3chkt******2`
         */
        JobId: string;
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
    }[];
    /**
     * 获取下一页快照所需的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a`
     */
    NextToken: string;
}
