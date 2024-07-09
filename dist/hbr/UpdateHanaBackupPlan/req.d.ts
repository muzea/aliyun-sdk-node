export interface UpdateHanaBackupPlanRequest {
    /**
     * 备份仓库ID。
     * @example `v-0000rcw******5c6`
     */
    "VaultId": string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0005dhe******f38`
     */
    "ClusterId": string;
    /**
     * 备份计划ID。
     * @example `pl-000br3cm4dqvmtph7cul`
     */
    "PlanId": string;
    /**
     * 备份计划名称。
     * @example `plan-20211109-162411`
     */
    "PlanName"?: string;
    /**
     * 备份策略。可选格式：`I|{startTime}|{interval}`。表示从{startTime}开始每隔{interval}的时间执行一次备份任务。不会补偿已过去时间的备份任务。如果上一次备份任务没有完成，不会触发下一次备份任务。例如`I|1631685600|P1D`表示从2021-09-15 14:00:00开始每隔一天备份一次。
     * * startTime：备份起始时间，UNIX时间，单位秒。
     * * interval： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
     * @example `I|1602673264|P1D`
     */
    "Schedule"?: string;
    /**
     * 备份前缀。
     * @example `COMPLETE_DATA_BACKUP`
     */
    "BackupPrefix"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmze36euddwjq`
     */
    "ResourceGroupId"?: string;
}
