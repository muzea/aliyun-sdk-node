export interface ModifyBackupPlanConfigRequest {
    /**
     * 集群Id。
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    "ClusterId": string;
    /**
     * 备份表，⼀⾏写⼀个表名称，⽀持通配符，*表示全部。
     * @example `*`
     */
    "Tables": string;
    /**
     * 全量备份周期(天)，取值范围3-9。
     * @example `7`
     */
    "FullBackupCycle": string;
    /**
     * 全量备份保留个数，取值3-8。
     * @example `3`
     */
    "MinHFileBackupCount": string;
    /**
     * 设置下一次全量备份时间，必须比当前时间大6分钟以上。
     * @example `2020-11-09T18:00:00Z`
     */
    "NextFullBackupDate": string;
}
