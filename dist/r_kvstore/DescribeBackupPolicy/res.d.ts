export interface DescribeBackupPolicyResponse {
    /**
     * 备份保留天数。
     * @example `7`
     */
    BackupRetentionPeriod: string;
    /**
     * 请求ID。
     * @example `90B82DB7-FB28-4CC2-ADBF-1F8659F3****`
     */
    RequestId: string;
    /**
     * 备份周期，返回值：
     * * **Monday**：周一。
     * * **Tuesday**：周二。
     * * **Wednesday**：周三。
     * * **Thursday**：周四。
     * * **Friday**：周五。
     * * **Saturday**：周六。
     * * **Sunday**：周日。
     * @example `Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday`
     */
    PreferredBackupPeriod: string;
    /**
     * 下次备份时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2019-03-14T05:28Z`
     */
    PreferredNextBackupTime: string;
    /**
     * 备份时间，格式为<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * @example `05:00Z-06:00Z`
     */
    PreferredBackupTime: string;
    /**
     * 是否开启了增量备份，返回值：
     * * **1**：已开启。
     * * **0**：未开启。
     * @example `1`
     */
    EnableBackupLog: number;
    /**
     * 本组参数已弃用，请忽略。
     */
    AccessDeniedDetail: {
        /**
         * 说明如上。
         * @example `_`
         */
        AuthAction: string;
        /**
         * 说明如上。
         * @example `_`
         */
        AuthPrincipalDisplayName: string;
        /**
         * 说明如上。
         * @example `_`
         */
        AuthPrincipalOwnerId: string;
        /**
         * 说明如上。
         * @example `_`
         */
        AuthPrincipalType: string;
        /**
         * 说明如上。
         * @example `_`
         */
        EncodedDiagnosticMessage: string;
        /**
         * 说明如上。
         * @example `_`
         */
        NoPermissionType: string;
        /**
         * 说明如上。
         * @example `_`
         */
        PolicyType: string;
    };
    /**
     * 实例是否启用备份服务化，取值：
     * * **1**：开启
     * * **0**：未开启
     * @example `0`
     */
    DbsInstance: string;
}
