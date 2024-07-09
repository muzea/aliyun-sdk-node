export interface UpdateBackupPlanRequest {
    /**
     * 备份计划ID。
     * @example `plan-20211***735`
     */
    "PlanId": string;
    /**
     * 备份计划名称。
     * @example `planname`
     */
    "PlanName"?: string;
    /**
     * 备份策略。可选格式：`I|{startTime}|{interval}`。表示从`{startTime}`开始每隔`{interval}`的时间执行一次备份任务。不会补偿已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如`I|1631685600|P1D`表示从2021-09-15 14:00:00开始每隔一天备份一次。
     * - **startTime**：备份起始时间，UNIX时间，单位秒。
     * - **interval**： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
     * @example `I|1602673264|P1D`
     */
    "Schedule"?: string;
    /**
     * 备份保留天数，最小值为1天。
     * @example `7`
     */
    "Retention"?: number;
    /**
     * 仅当**SourceType**取值为**OSS**时，需要配置该参数。表示备份前缀。指定后，仅备份前缀相匹配的对象。
     * @example `oss-prefix`
     */
    "Prefix"?: string;
    /**
     * 备份仓库ID。
     * @example `v-0006******q`
     */
    "VaultId"?: string;
    /**
     * 整机备份详情，类型为JSON字符串。
     * * snapshotGroup：是否使用一致性快照组（仅实例所有云盘均为ESSD时有效）。
     * * appConsistent：是否使用应用一致性（需要搭配参数preScriptPath和postScriptPath使用）。
     * * preScriptPath：冻结脚本路径。
     * * postScriptPath：解冻脚本路径。
     * @example `{\"EnableFsFreeze\":true,\"appConsistent\":false,\"postScriptPath\":\"\",\"preScriptPath\":\"\",\"snapshotGroup\":true,\"timeoutInSeconds\":60}`
     */
    "Detail"?: any;
    /**
     * 数据源类型，取值范围：
     * - **ECS_FILE**：备份ECS文件
     * - **OSS**：备份阿里云OSS
     * - **NAS**：备份阿里云NAS
     * - **OTS**：备份阿里云表格存储
     * - **UDM_ECS**：备份阿里云ECS整机
     * @example `ECS_FILE`
     */
    "SourceType"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示备份流量控制。流量控制可以帮助您在业务高峰期，控制备份文件的流量，以免影响正常业务。格式为`{start}|{end}|{bandwidth}`。多个流量控制配置使用|分隔，并且配置时间不允许有重叠。
     * - **start**：起始小时
     * - **end**：结束小时
     * - **bandwidth**：限制速率，单位KB/s。
     * @example `0:24:5120`
     */
    "SpeedLimit"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示需要备份的路径，该路径下所有文件都备份。最多支持255个字符。
     * @example `["/home/alice/*.pdf", "/home/bob/*.txt"]`
     */
    "Include"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示不需要进行备份的路径，该路径下所有文件都不备份。最多支持255个字符。
     * @example `["/var", "/proc"]`
     */
    "Exclude"?: string;
    /**
     * 仅当**SourceType**取值为**ECS_FILE**时，需要配置该参数。表示是否使用Windows系统VSS定义备份路径。
     * - 此功能仅支持Windows类型ECS实例。
     * - 如果备份源中有数据更改，需要确保备份数据与源数据的一致时，才可配置为`["UseVSS":true]`。
     * - 选择使用VSS后，不支持多个文件目录同时备份。
     * @example `{"UseVSS":false}`
     */
    "Options"?: string;
    /**
     * 当备份路径为空时，是否更新备份路径。
     * - true：按照该接口中定义路径更新备份路径。
     * - false：不更新备份路径，按照创建备份计划时路径继续备份。
     * @example `false`
     */
    "UpdatePaths"?: boolean;
    /**
     * 备份路径。
     */
    "Path"?: string[];
    /**
     * 备份计划规则
     */
    "Rule"?: {
        /**
         * 异地备份保留天数。
         * @example `7`
         */
        DestinationRetention: number;
        /**
         * 备份策略。可选格式：I|{startTime}|{interval}。表示从{startTime}开始每隔{interval}的时间执行一次备份任务。不会执行已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如I|1631685600|P1D表示从2021-09-15 14:00:00开始每隔一天备份一次。
         * startTime：备份起始时间，UNIX时间，单位为秒。 interval： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
         * @example `I|1631685600|P1D`
         */
        Schedule: string;
        /**
         * 策略是否禁用。
         * @example `false`
         */
        Disabled: boolean;
        /**
         * 备份保留天数，最小值为1天。
         * @example `7`
         */
        Retention: number;
        /**
         * 是否开启异地复制。
         * @example `false`
         */
        DoCopy: boolean;
        /**
         * 异地备份地域ID。
         * @example `cn-shanghai`
         */
        DestinationRegionId: string;
        /**
         * 策略名称。
         * @example `rule-test-name`
         */
        RuleName: string;
        /**
         * 备份类型。取值为**COMPLETE**，表示全量备份。
         * @example `COMPLETE`
         */
        BackupType: string;
    }[];
    /**
     * 表格存储实例详情。
     */
    "OtsDetail"?: any;
    /**
     * 是否开启保留至少一个备份版本。
     * - 0 - 不保留
     * - 1 - 保留
     * @example `1`
     */
    "KeepLatestSnapshots"?: number;
    /**
     * 增量文件同步列表的配置。（仅同步需要）
     * @example `{"dataSourceId": "ds-123456789", "path": "/changelist"}`
     */
    "ChangeListPath"?: string;
}
