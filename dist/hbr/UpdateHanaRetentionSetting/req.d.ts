export interface UpdateHanaRetentionSettingRequest {
    /**
     * 备份仓库ID。
     * @example `v-000fb0v2ly******k6`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-00024vyjj******srrq`
     */
    "ClusterId"?: string;
    /**
     * 更新保留时间策略。可选格式：`I|{startTime}|{interval}`。表示从{startTime}开始每隔{interval}的时间更新一次保留时间。
     * - startTime：备份起始时间，UNIX时间，单位为秒。
     * - interval： ISO8601时间间隔。例如：PT1H表示间隔一小时，P1D表示间隔一天。
     * @example `I|0|P1D`
     */
    "Schedule": string;
    /**
     * 备份保留天数。若Disabled为false，则备份将保留该参数指定的天数。
     * @example `90`
     */
    "RetentionDays": number;
    /**
     * 备份是否永久保留。
     * - true：永久保留
     * - false：不永久保留，保留RetentionDays指定的天数。
     * @example `false`
     */
    "Disabled": boolean;
    /**
     * 数据库名称。
     * @example `SYSTEMDB`
     */
    "DatabaseName": string;
}
