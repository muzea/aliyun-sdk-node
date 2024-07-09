export interface CreatePolicyV2Request {
    /**
     * 策略名称。
     * @example `每天本地备份 + 异地备份`
     */
    "PolicyName"?: string;
    /**
     * 策略描述。
     * @example `每天早上10点备份一次，异地备份到上海。`
     */
    "PolicyDescription"?: string;
    /**
     * 策略规则列表。
     */
    "Rules"?: {
        /**
         * 规则类型，每一个策略需要至少有一个**BACKUP**类型规则，有且仅有一个**TRANSITION**类型规则：
         * - **BACKUP**：备份规则。
         * - **TRANSITION**：生命周期规则。
         * - **REPLICATION**：复制规则。
         * @example `BACKUP`
         */
        RuleType: string;
        /**
         * 仅当**RuleType**取值为**BACKUP**时，需要配置该参数。备份定时设置。可选格式：`I|{startTime}|{interval}`。表示从{startTime}开始每隔{interval}的时间执行一次备份任务。不会补偿已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如`I|1631685600|P1D`表示从2021-09-15 14:00:00开始每隔一天备份一次。
         * * startTime：备份起始时间，UNIX时间，单位为秒。
         * * interval： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
         * @example `I|1648647166|P1D`
         */
        Schedule: string;
        /**
         * 仅当**RuleType**取值为**BACKUP**时，需要配置该参数。备份类型。取值为**COMPLETE**，表示全量备份。
         * @example `COMPLETE`
         */
        BackupType: string;
        /**
         * 仅当**RuleType**取值为**TRANSITION**或**REPLICATION**时，需要配置该参数。
         * - **RuleType**取值为**TRANSITION**：备份保留时间，最小值为1，最大值为364635，单位为天。
         * - **RuleType**取值为**REPLICATION**：异地备份保留时间，最小值为1，最大值为364635，单位为天。
         * @example `7`
         */
        Retention: number;
        /**
         * 仅当**RuleType**取值为**REPLICATION**时，需要配置该参数。复制的目标地域ID。
         * @example `cn-shanghai`
         */
        ReplicationRegionId: string;
        /**
         * 仅当**RuleType**取值为**TRANSITION**时，需要配置该参数。特殊保留规则。
         */
        RetentionRules: {
            /**
             * 特殊保留规则类型：
             * - **DAILY**: 每天的备份
             * - **WEEKLY**：每周的备份
             * - **MONTHLY**：每月的备份
             * - **YEARLY**：每年的备份
             * @example `YEARLY`
             */
            AdvancedRetentionType: string;
            /**
             * 针对第几个备份生效，当前仅支持第1个备份，值为1。
             * @example `1`
             */
            WhichSnapshot: number;
            /**
             * 备份的特殊保留时间，最小值为1，单位为天。
             * @example `730`
             */
            Retention: number;
        }[];
        /**
         * 是否开启保留至少一个备份版本。
         * - 0 - 不保留
         * - 1 - 保留
         * @example `1`
         */
        KeepLatestSnapshots: number;
    }[];
}
