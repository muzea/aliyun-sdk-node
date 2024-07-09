export interface CreateBackupPlanRequest {
    /**
     * 备份的集群的ID。
     * @example `cds-bp11tjzh50****7b`
     */
    "ClusterId": string;
    /**
     * 备份集群数据中心ID。
     * @example ` cn-hangzhou-g`
     */
    "DataCenterId": string;
    /**
     * 每天开始备份的时间，UTC 通用标准时，以Z来标识。
     * @example `00:30Z`
     */
    "BackupTime": string;
    /**
     * 备份周期。可取值：Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday
     * @example `Monday`
     */
    "BackupPeriod"?: string;
    /**
     * 创建备份计划保留天数取值范围1-7天。
     * @example `5`
     */
    "RetentionPeriod"?: number;
    /**
     * 是否激活备份计划。
     * @example `true`
     */
    "Active"?: boolean;
    "ClientToken"?: string;
}
