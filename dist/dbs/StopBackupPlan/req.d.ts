export interface StopBackupPlanRequest {
    /**
     * 备份计划ID。
     * @example `dbstooi01XXXX`
     */
    "BackupPlanId": string;
    /**
     * 暂停方式，取值：
     * - ALL：暂停备份计划、全量数据备份任务、增量日志备份任务、恢复任务
     * - PLAN：只暂停备份计划
     * @example `ALL`
     */
    "StopMethod": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
