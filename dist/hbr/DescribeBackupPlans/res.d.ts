export interface DescribeBackupPlansResponse {
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
     * 查询到的符合条件的备份计划总数。
     * @example `8`
     */
    TotalCount: number;
    BackupPlans: {
        /**
         * 查询到的符合条件的备份计划列表。
         */
        BackupPlan: {
            /**
             * 备份仓库ID。
             * @example `v-*********************`
             */
            VaultId: string;
            /**
             * 备份类型。取值为**COMPLETE**，表示全量备份。
             * @example `COMPLETE`
             */
            BackupType: string;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示文件系统创建时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CreateTime: number;
            /**
             * 数据源ID。
             * @example `ds-000ht6o9*****w61`
             */
            DataSourceId: string;
            /**
             * 数据源类型，取值范围：
             * - **ECS_FILE**：备份ECS文件
             * - **OSS**：备份阿里云OSS
             * - **NAS**：备份阿里云NAS
             * - **OTS**：备份阿里云表格存储
             * - **UDM_ECS**：备份阿里云ECS整机
             * @example `ECS_FILE`
             */
            SourceType: string;
            /**
             * 备份计划是否属于暂停状态。
             * - true：暂停
             * - false：未暂停
             * @example `false`
             */
            Disabled: boolean;
            /**
             * 仅当**SourceType**取值为**OSS**时，该参数有效。表示备份前缀。
             * @example `oss-prefix`
             */
            Prefix: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示是否使用Windows系统VSS定义备份路径。
             * @example `{"UseVSS":false}`
             */
            Options: string;
            /**
             * 客户端ID。
             * @example `c-000ge4w*****1qb`
             */
            ClientId: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示不需要进行备份的路径，该路径下所有文件都不备份。
             * @example `["/var", "/proc"]	`
             */
            Exclude: string;
            /**
             * 备份保留天数。
             * @example `7`
             */
            Retention: number;
            /**
             * 备份计划的创建时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            CreatedTime: number;
            /**
             * 客户端组ID。
             * @example `cl-000ht6o9******h`
             */
            ClusterId: string;
            /**
             * 仅当**SourceType**取值为**OSS**时，该参数有效。表示OSS bucket名称。
             * @example `hbr-backup-oss`
             */
            Bucket: string;
            /**
             * 整机备份详情。
             * @example `{\"doCopy\":true,\"doBackup\":false,\"instanceName\":\"instance example\",\"appConsistent\":false,\"destinationRegionId\":\"cn-shanghai\",\"enableFsFreeze\":true,\"osNameEn\":\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\",\"osName\":\"Windows Server  2019 Data Center Edition 64bit Chinese Edition\",\"diskIdList\":[],\"backupVaultId\":\"\",\"snapshotGroup\":true,\"destinationRetention\":35,\"platform\":\"Windows Server 2012\",\"timeoutInSeconds\":60,\"backupRetention\":1,\"osType\":\"windows\",\"preScriptPath\":\"\",\"postScriptPath\":\"\",\"enableWriters\":true,\"ecsDeleted\":false}`
             */
            Detail: string;
            /**
             * 备份策略。可选格式：`I|{startTime}|{interval}`。表示从`{startTime}`开始每隔`{interval}`的时间执行一次备份任务。不会执行已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如`I|1631685600|P1D`表示从2021-09-15 14:00:00开始每隔一天备份一次。
             * - **startTime**：备份起始时间，UNIX时间，单位为秒。
             * - **interval**： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
             * @example `I|1602673264|P1D`
             */
            Schedule: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示备份流量控制。格式为`{start}|{end}|{bandwidth}`。多个流量控制配置使用`|`分隔，并且配置时间不允许有重叠。
             * - start：起始小时。
             * - end：结束小时。
             * - bandwidth：限制速率，单位为KB。
             * @example `0:24:5120`
             */
            SpeedLimit: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示ECS实例ID。
             * @example `i-*********************`
             */
            InstanceId: string;
            /**
             * 备份计划ID。
             * @example `plan-*********************`
             */
            PlanId: string;
            /**
             * 备份数据源组ID。
             * @example `System-Database`
             */
            BackupSourceGroupId: string;
            /**
             * 仅当**SourceType**取值为**NAS**时，该参数有效。表示文件系统ID。
             * @example `00594`
             */
            FileSystemId: string;
            /**
             * 表格存储详细信息。
             */
            OtsDetail: {
                TableNames: {
                    /**
                     * 表格存储信息。
                     */
                    TableName: string[];
                };
            };
            /**
             * 表格存储的实例名称。
             * @example `instancename`
             */
            InstanceName: string;
            /**
             * 备份计划更新时间。UNIX时间，单位为秒。
             * @example `1554347313`
             */
            UpdatedTime: number;
            /**
             * 备份计划名称。
             * @example `planname`
             */
            PlanName: string;
            /**
             * 仅当**SourceType**取值为**ECS_FILE**时，该参数有效。表示需要备份的路径，该路径下所有文件都备份。
             * @example `["/home/alice/*.pdf", "/home/bob/*.txt"]`
             */
            Include: string;
            Rules: {
                /**
                 * 备份策略列表，仅云盘备份有效。
                 */
                Rule: {
                    /**
                     * 异地备份保留天数。
                     * @example `90`
                     */
                    DestinationRetention: number;
                    /**
                     * 备份策略。可选格式：`I|{startTime}|{interval}`。表示从`{startTime}`开始每隔`{interval`}的时间执行一次备份任务。不会执行已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如`I|1631685600|P1D`表示从2021-09-15 14:00:00开始每隔一天备份一次。
                     * - `startTime`：备份起始时间，UNIX时间，单位为秒。
                     * - `interval`： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
                     * @example `I|1631685600|P1D`
                     */
                    Schedule: string;
                    /**
                     * 备份保留天数。
                     * @example `90`
                     */
                    Retention: number;
                    /**
                     * 策略是否禁用。
                     * @example `true`
                     */
                    Disabled: boolean;
                    /**
                     * 备份快照数据到备份仓库。
                     * @example `false`
                     */
                    DoCopy: boolean;
                    /**
                     * 异地备份地域ID。
                     * @example `cn-shanghai`
                     */
                    DestinationRegionId: string;
                    /**
                     * 策略ID。
                     * @example `rule-0008i52rf0ulpni6kn6m`
                     */
                    RuleId: string;
                    /**
                     * 策略名称。
                     * @example `Disk Golden Rule`
                     */
                    RuleName: string;
                    /**
                     * 备份类型。取值为**COMPLETE**，表示全量备份。
                     * @example `COMPLETE`
                     */
                    BackupType: string;
                }[];
            };
            Resources: {
                /**
                 * 备份资源列表，仅云盘备份有效。
                 */
                Resource: {
                    /**
                     * 数据源类型。取值范围包括**UDM_DISK**。
                     * @example `UDM_DISK`
                     */
                    SourceType: string;
                    /**
                     * 数据源ID。
                     * @example `d-j6cgioir6m******lu4`
                     */
                    ResourceId: string;
                    /**
                     * 数据源其他信息。
                     * @example `{\"doBackup\":false,\"diskName\":\"data_disk\",\"size\":100,\"type\":\"data\",\"category\":\"cloud_essd\",\"imageId\":\"\",\"device\":\"/dev/xvdb\",\"encrypted\":false}`
                     */
                    Extra: string;
                }[];
            };
            Paths: {
                /**
                 * 备份路径列表。仅当**SourceType**取值为**ECS_FILE**时，该参数有效。
                 */
                Path: string[];
            };
            /**
             * 免费试用属性。
             */
            TrialInfo: {
                /**
                 * 免费试用开始时间。
                 * @example `1579413159`
                 */
                TrialStartTime: number;
                /**
                 * 免费试用仓库释放时间。
                 * @example `1594965600`
                 */
                TrialVaultReleaseTime: number;
                /**
                 * 免费试用过期时间。
                 * @example `1584597600`
                 */
                TrialExpireTime: number;
                /**
                 * 免费试用结束后是否转为按量付费。
                 * @example `true`
                 */
                KeepAfterTrialExpiration: boolean;
            };
            /**
             * 实例分组ID。
             * @example `i-**`
             */
            InstanceGroupId: string;
            /**
             * 跨账号备份类型。支持：
             * - SELF_ACCOUNT
             * - CROSS_ACCOUNT
             * @example `CROSS_ACCOUNT`
             */
            CrossAccountType: string;
            /**
             * 被当前账号管理的跨账号备份的原账号ID。
             * @example `1841642xxxxx9795`
             */
            CrossAccountUserId: number;
            /**
             * 被当前账号管理的跨账号备份的原账号RAM中创建的角色名。
             * @example `BackupRole`
             */
            CrossAccountRoleName: string;
            /**
             * 是否开启保留至少一个备份版本。
             * - 0 - 不保留
             * - 1 - 保留
             * @example `0`
             */
            KeepLatestSnapshots: number;
            /**
             * 目的端数据源类型。（仅同步需要）
             * @example `OSS`
             */
            DestSourceType: string;
            /**
             * 目的端数据源ID。（仅同步需要）
             * @example `ds-*********************`
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
             * 计划最近一次执行的作业Id
             * @example `job-12345678`
             */
            LatestExecuteJobId: string;
        }[];
    };
}
