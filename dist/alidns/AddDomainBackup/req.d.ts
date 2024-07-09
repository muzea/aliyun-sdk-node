export interface AddDomainBackupRequest {
    /**
     * 用户语言
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 域名名称。
     * @example `dns-example.top`
     */
    "DomainName": string;
    /**
     * 备份周期，当前支持：
     * - **DAY**：每天备份一次
     * - **HOUR**：每小时备份一次
     * @example `HOUR`
     */
    "PeriodType": string;
}
