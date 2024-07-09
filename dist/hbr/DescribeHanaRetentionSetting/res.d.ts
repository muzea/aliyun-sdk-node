export interface DescribeHanaRetentionSettingResponse {
    /**
     * 请求ID。
     * @example `280DD872-EE25-52E8-9CB4-491067173DD0`
     */
    RequestId: string;
    /**
     * 备份仓库ID。
     * @example `v-0006wkn7******zkn`
     */
    VaultId: string;
    /**
     * 更新保留时间策略。可选格式：`I|{startTime}|{interval}`，表示从{startTime}开始每隔{interval}的时间更新一次保留时间。
     * - startTime：备份起始时间，UNIX时间，单位秒。
     * - interval： ISO8601时间间隔。例如：PT1H表示间隔一小时。P1D表示间隔一天。
     * @example `I|0|P1D`
     */
    Schedule: string;
    /**
     * 请求是否成功。
     * - true：成功
     * - false：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 数据库名称。
     * @example `Q01`
     */
    DatabaseName: string;
    /**
     * 备份是否永久保留。
     * - true：永久保留
     * - false：不永久保留，保留RetentionDays指定的天数。
     * @example `false`
     */
    Disabled: boolean;
    /**
     * 返回码，200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 备份保留天数，若Disabled为false，则备份将保留该参数指定的天数。
     * @example `3650`
     */
    RetentionDays: number;
    /**
     * 返回信息描述，成功一般返回successful，错误时会返回相应错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0003jyv******fsku5m`
     */
    ClusterId: string;
}
