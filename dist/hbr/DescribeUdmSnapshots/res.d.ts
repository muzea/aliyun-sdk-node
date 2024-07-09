export interface DescribeUdmSnapshotsResponse {
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
     * 请求ID。
     * @example `51CDEECB-7001-51CC-94AC-2A0F2A4B71D2`
     */
    RequestId: string;
    /**
     * 快照总个数。
     * @example `3`
     */
    TotalCount: number;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 快照详情集合。
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
         * 备份类型。取值为**COMPLETE**，表示全量备份。
         * @example `COMPLETE`
         */
        BackupType: string;
        /**
         * 创建备份快照的时间.
         * @example `1607436917`
         */
        CreateTime: number;
        /**
         * 快照的实际容量。单位：byte。
         * @example `600`
         */
        ActualBytes: string;
        /**
         * 数据源类型，取值范围：
         * - **UDM_ECS**：整机备份
         * - **UDM\_ECS_DISK**：整机备份云盘子任务
         * - **UDM_DISK**：云盘备份
         * @example `UDM_ECS`
         */
        SourceType: string;
        /**
         * 快照的前缀。
         * @example `example/`
         */
        Prefix: string;
        /**
         * 云盘或本地盘ID。
         * @example `d-2ze86h5fga5rfwxxa8ef`
         */
        DiskId: string;
        /**
         * 数据源总量。单位为字节。
         * @example `1000`
         */
        BytesTotal: number;
        /**
         * 快照信息。
         * @example `{
                            "sourceDiskId":"d-bp17misjuy636t82v7b0",
                            "lastModifiedTime":"2022-03-09T11:35:12Z",
                            "snapshotSN":"64588-429372675-857161235",
                            "snapshotId":"s-bp1fbtwv3e6xr6wpe9e0",
                            "creationTime":"2022-03-09T11:31:12Z",
                            "snapshotType":"user",
                            "usage":"none",
                            "description":"",
                            "sourceStorageType":"disk",
                            "tags":[
                                {
                                    "tagValue":"job-0007e0wqjl0imbrtkmnm",
                                    "tagKey":"HBR JobId"
                                }
                            ],
                            "productCode":"",
                            "encrypted":false,
                            "sourceDiskType":"system",
                            "retentionDays":30,
                            "snapshotName":"Created-from-HBR-job:job-0007e0wqjl0imbrtkmnm",
                            "kMSKeyId":"",
                            "progress":"100%",
                            "category":"standard",
                            "sourceDiskSize":"20",
                            "status":"accomplished"
                        }`
         */
        NativeSnapshotInfo: string;
        /**
         * 备份快照完成时间。UNIX时间，单位为秒。
         * @example `1646895666`
         */
        CompleteTime: number;
        /**
         * 快照保留时间，单位为天。
         * @example `7`
         */
        Retention: number;
        /**
         * 备份快照的创建时间。UNIX时间，单位为秒。
         * @example `1642496679`
         */
        CreatedTime: number;
        /**
         * 快照时间戳。UNIX时间，单位为秒。
         * @example `1642496679`
         */
        RealSnapshotTime: number;
        /**
         * 父级快照Hash值。
         * @example `f2fe..`
         */
        ParentSnapshotHash: string;
        /**
         * ECS实例ID。
         * @example `i-bp1f0pe78dxizrsdcgxd`
         */
        InstanceId: string;
        /**
         * 快照开始时间。UNIX时间，单位为秒。
         * @example `1554347313`
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
         * 快照ID。
         * @example `s-00047mg17p26x*****b`
         */
        NativeSnapshotId: string;
        /**
         * 快照详情。
         */
        Detail: {
            /**
             * 磁盘名称。
             * @example `/dev/xvdb`
             */
            DiskDevName: string;
            /**
             * 降级原因。
             * @example `HBR.NoRamRoleBound`
             */
            DowngradeReason: string;
            /**
             * 系统盘ID。
             * @example `d-bp1e6427vhd320hifvc`
             */
            OsDiskId: string;
            /**
             * 操作系统名称。
             * @example `Debian 10.10 64-bit (UEFI)`
             */
            OsName: string;
            /**
             * 是否包含系统盘。
             * @example `true`
             */
            ContainOsDisk: boolean;
            /**
             * 一致性等级。
             * @example `CRASH`
             */
            ConsistentLevel: string;
            /**
             * 实例名称。
             * @example `BNSHSVR42 IPGUARD`
             */
            VmName: string;
            /**
             * 设备与恢复点ID映射关系。
             * @example `{
                "/dev/xvdb":"s-0000u7y6wm3v1e7hxh5a",
                "/dev/xvda":"s-0004bl6yr5pt89jjsv5a"
            }`
             */
            DiskHbrSnapshotIdWithDeviceMap: any;
            /**
             * 实例ID与云盘ID映射关系。
             * @example `{
                "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvs",
                "i-bp1dlp0keohh7ids4uo6":"d-bp1e6427vhd320hifvd"
            }`
             */
            InstanceIdWithDiskIdListMap: any;
            /**
             * 实例名称。
             * @example `swh-hbr`
             */
            InstanceName: string;
            /**
             * 操作系统类型，linux或windows。
             * @example `windows`
             */
            OsType: string;
            /**
             * 系统平台。
             * @example `CentOS`
             */
            Platform: string;
            /**
             * 操作系统英文名称。
             * @example `Debian  11.1 64 bit`
             */
            OsNameEn: string;
            /**
             * 主机名。
             * @example `iZbpxxxxxxxxxxxxxxxxe2Z`
             */
            HostName: string;
            /**
             * 是否为系统盘。
             * @example `true`
             */
            SystemDisk: boolean;
            /**
             * 恢复点备份的云盘ID列表。
             */
            DiskIdList: string[];
            /**
             * 快照ID列表，与DiskIdList一一对应。
             */
            NativeSnapshotIdList: string[];
            /**
             * 快照分组ID。
             * @example `ssg-uf6856txcaq31uj***`
             */
            SnapshotGroupId: string;
            /**
             * 源实例规格。
             * @example `ecs.c6.xlarge`
             */
            InstanceType: string;
            /**
             * 源磁盘类型。
             * @example `cloud_essd`
             */
            DiskCategory: string;
            /**
             * 源磁盘性能等级。
             * @example `PL0`
             */
            PerformanceLevel: string;
            /**
             * 是否为即刻克隆功能创建的备份。
             * @example `false`
             */
            InstantAccess: boolean;
        };
        /**
         * 特殊保留类型，仅对特殊保留备份有效：
         * - **WEEKLY**：周特殊保留备份
         * - **MONTHLY**：月特殊保留备份
         * - **YEARLY**：年特殊保留备份
         * @example `WEEKLY`
         */
        AdvancedRetentionType: string;
        /**
         * 备份过期时间。
         * @example `1640334062`
         */
        ExpireTime: number;
    }[];
}
