export interface DescribeRestoreJobs2Response {
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
     * @example `1`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `1`
     */
    TotalCount: number;
    RestoreJobs: {
        /**
         * 恢复任务详情。
         * @example `{'RestoreJob': []}`
         */
        RestoreJob: {
            /**
             * 备份快照HASH值。
             * @example `f2fe...`
             */
            SnapshotHash: string;
            /**
             * 恢复任务状态。取值范围：
             *   - **COMPLETE**：成功
             *   - **PARTIAL_COMPLETE**：部分成功
             *   - **FAILED**：失败
             * @example `COMPLETE`
             */
            Status: string;
            /**
             * 恢复任务的错误信息。
             * @example `PARTIAL_COMPLETE`
             */
            ErrorMessage: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示恢复任务实际项目数。
             * @example `6`
             */
            ActualItems: number;
            /**
             * 备份仓库ID。
             * @example `v-0006******q`
             */
            VaultId: string;
            /**
             * 去除重复后恢复任务实际数据量。单位为字节。
             * @example `600`
             */
            ActualBytes: number;
            /**
             * 整机备份详情。
             * @example `{\"doCopy\":true,\"doBackup\":false,\"instanceName\":\"instance example\",\"appConsistent\":false,\"destinationRegionId\":\"cn-shanghai\",\"enableFsFreeze\":true,\"osNameEn\":\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\",\"osName\":\"Windows Server 2019 Data Center Edition 64bit Chinese Edition\",\"diskIdList\":[],\"backupVaultId\":\"\",\"snapshotGroup\":true,\"destinationRetention\":35,\"platform\":\"Windows Server 2012\",\"timeoutInSeconds\":60,\"backupRetention\":1,\"osType\":\"windows\",\"preScriptPath\":\"\",\"postScriptPath\":\"\",\"enableWriters\":true,\"ecsDeleted\":false}`
             */
            UdmDetail: string;
            /**
             * 数据源类型，取值范围：
             *   - **ECS_FILE**：恢复ECS文件
             *   - **OSS**：恢复阿里云OSS
             *   - **NAS**：恢复阿里云NAS
             *   - **OTS_TABLE**：恢复阿里云OTS
             *   - **UDM\_ECS**：恢复阿里云ECS整机
             * @example `ECS_FILE`
             */
            SourceType: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示是否使用Windows系统VSS定义恢复路径。
             *   - 此功能仅支持Windows类型ECS实例。
             *   - 如果备份源中有数据更改，需要确保备份数据与源数据的一致时，才可配置为`["UseVSS":true]`。
             *   - 选择使用VSS后，不支持多个文件目录同时恢复。
             * @example `{"UseVSS":false}`
             */
            Options: string;
            /**
             * 恢复任务目标实例ID。
             * @example `i-2ze3m7ktcgw******cs`
             */
            TargetInstanceId: string;
            /**
             * 恢复任务类型。
             * @example `ECS_FILE`
             */
            RestoreType: string;
            /**
             * 仅NAS备份有效。恢复的目标文件系统创建时间。
             * @example `1634714531`
             */
            TargetCreateTime: number;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示恢复项目数。
             * @example `8`
             */
            ItemsDone: number;
            /**
             * 数据源总数据量。单位为字节。
             * @example `1000`
             */
            BytesTotal: number;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示不需要进行恢复的路径，该路径下所有文件都不恢复。最多支持255个字符。
             * @example `["/var", "/proc"]`
             */
            Exclude: string;
            /**
             * 父任务ID。
             * @example `r-0003hd2an3x4dyv0l18b`
             */
            ParentId: string;
            /**
             * 恢复任务完成时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CompleteTime: number;
            /**
             * 恢复任务创建时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CreatedTime: number;
            /**
             * 仅OSS备份有效，恢复的目标Bucket。
             * @example `target-bucket`
             */
            TargetBucket: string;
            /**
             * 恢复使用的客户端组ID。
             * @example `cl-000******hp6`
             */
            ClusterId: string;
            /**
             * 仅NAS备份有效，恢复的目标文件系统。
             * @example `0be9****9c9`
             */
            TargetFileSystemId: string;
            /**
             * 恢复进度。值为100%*100。
             * @example `10000`
             */
            Progress: number;
            /**
             * 恢复任务过期时间。
             * @example `1634714531`
             */
            ExpireTime: number;
            /**
             * 恢复的目标数据源ID。
             * @example `ds-000*****997`
             */
            TargetDataSourceId: string;
            /**
             * 仅OSS备份有效，恢复的目标前缀。
             * @example `"/target"`
             */
            TargetPrefix: string;
            /**
             * 恢复任务目标路径。
             * @example `"D:\\rebk"`
             */
            TargetPath: string;
            /**
             * 恢复失败文件列表。
             * @example `"test.csv"`
             */
            ErrorFile: string;
            /**
             * 恢复任务开始时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            StartTime: number;
            /**
             * 恢复任务更新时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            UpdatedTime: number;
            /**
             * 恢复使用的快照ID。
             * @example `s-0002******ga88`
             */
            SnapshotId: string;
            /**
             * 恢复任务ID。
             * @example `r-0003*****8a`
             */
            RestoreId: string;
            /**
             * 恢复的目标客户端ID。
             * @example `c-000e*****397`
             */
            TargetClientId: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示数据源项目总数。
             * @example `10`
             */
            ItemsTotal: number;
            /**
             * 恢复任务包含的恢复路径。
             * @example `["/home/alice/*.pdf", "/home/bob/*.txt"]`
             */
            Include: string;
            /**
             * 恢复的数据量。单位为字节。
             * @example `800`
             */
            BytesDone: number;
            /**
             * 备份目标表格存储实例名称。
             * @example `instancename`
             */
            TargetInstanceName: string;
            /**
             * 备份目标表格存储实例的数据表。
             * @example `tablename`
             */
            TargetTableName: string;
            /**
             * 实际的平均备份速度。单位为KB/s。
             * @example `500`
             */
            Speed: number;
            /**
             * 备份目标表格存储实例的时间。UNIX时间，单位为秒。
             * @example `1642560261`
             */
            TargetTime: number;
            /**
             * 表格存储实例详情
             */
            OtsDetail: {
                /**
                 * 每个表格存储恢复任务处理的channel数量。
                 * @example `2`
                 */
                BatchChannelCount: number;
                /**
                 * 是否覆盖已存在的表格存储恢复任务。
                 * @example `false`
                 */
                OverwriteExisting: boolean;
            };
            /**
             * 跨账号备份类型。支持：
             * - SELF_ACCOUNT：本账号备份
             * - CROSS_ACCOUNT：跨账号备份
             * @example `SELF_ACCOUNT`
             */
            CrossAccountType: string;
            /**
             * 被当前账号管理的跨账号备份的原账号ID。
             * @example `158975xxxxxx4625`
             */
            CrossAccountUserId: number;
            /**
             * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
             * @example `BackupRole`
             */
            CrossAccountRoleName: string;
            /**
             * 恢复任务报告。
             */
            Report: {
                /**
                 * 根据文件列表恢复时的全量文件。
                 * @example `/temp/report/158975xxxxxx4625/job-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_total.csv`
                 */
                TotalFiles: string;
                /**
                 * 成功执行的文件列表。
                 * @example `/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_success.zip
                `
                 */
                SuccessFiles: string;
                /**
                 * 执行失败的文件列表。
                 * @example `/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_failed.zip`
                 */
                FailedFiles: string;
                /**
                 * 跳过的文件列表。
                 * @example `/temp/report/158975xxxxxx4625/r-0001hfxxxxxymsspjjtl/job-0001hfxxxxxymsspjjtl_skipped.zip`
                 */
                SkippedFiles: string;
                /**
                 * 报告生成状态。
                 * @example `COMPLETE`
                 */
                ReportTaskStatus: string;
            };
            /**
             * 恢复的数据量。单位为字节。仅StorageClass=ARCHIVE时有效，按照1MB对齐。
             * @example `1048576`
             */
            MeteringBytesDone: number;
            /**
             * 数据源总数据量。单位为字节。仅StorageClass=ARCHIVE时有效，按照1MB对齐。
             * @example `1048576`
             */
            MeteringBytesTotal: number;
            /**
             * 备份数据存储类型。取值：
             * - **STANDARD**：标准。
             * - **ARCHIVE**：归档。
             * @example `STANDARD`
             */
            StorageClass: string;
            /**
             * VMware回切任务详情
             * @example `{"cpu":4,"extra":"{\"restoreVMNamePrefix\":\"627-\",\"dataCenterName\":\"SDDC-Datacenter\",\"dataStoreId\":\"datastore-50\",\"folderId\":\"group-v49\",\"resourcePoolId\":\"resgroup-46\",\"locationName\":\"vcenter.pc-uf600arcwi9td3eyj641.acvs.aliyuncs.com/SDDC-Datacenter/Workloads\",\"computeResourceName\":\"SDDC-Datacenter/Default_c-uf600arcwi9td3eyj640\",\"dataStoreName\":\"Default_c-uf600arcwi9td3eyj640/WorkloadDatastore\",\"networkMoReference\":\"DistributedVirtualPortgroup:dvportgroup-1001\",\"useHotAdd\":false}","instanceId":"i-2vc357i2eannmmotcagz","memoryInMB":8192,"serverId":"0fdc0c86-eb92-4e05-91ab-eeaf9fb6ad01","uefiBoot":false}`
             */
            FailbackDetail: string;
        }[];
    };
}
