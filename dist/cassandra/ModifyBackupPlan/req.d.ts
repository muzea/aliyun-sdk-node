export interface ModifyBackupPlanRequest {
    /**
     * 备份集群ID。
     * @example `cds-uf6m0bod****6158`
     */
    "ClusterId": string;
    /**
     * 集群数据中心ID。
     * @example `cn-shanghai-e`
     */
    "DataCenterId": string;
    /**
     * 每天开始备份的时间，UTC 通用标准时，以Z来标识。
     * @example `00:30Z`
     */
    "BackupTime"?: string;
    /**
     * 备份周期。
     * 可取值：Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
     * @example `Monday,Tuesday`
     */
    "BackupPeriod"?: string;
    /**
     * 备份计划保留天数。
     * @example `7`
     */
    "RetentionPeriod"?: number;
    /**
     * 备份计划是否激活。
     * @example `true`
     */
    "Active"?: boolean;
}
