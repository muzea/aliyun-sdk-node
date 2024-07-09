export interface ModifyBackupStrategyRequest {
    /**
     * 备份计划ID。
     * @example `dbstooi01XXXX`
     */
    "BackupPlanId": string;
    /**
     * 全量备份周期，取值如下：
     * - Monday：周一
     * - Tuesday：周二
     * - Wednesday：周三
     * - Thursday：周四
     * - Friday：周五
     * - Saturday：周六
     * - Sunday：周日
     * > BackupPeriod值必须指定每周至少两天，且日期间用英文逗号（,）分隔。
     * @example `Monday,Tuesday,Wednesday`
     */
    "BackupPeriod": string;
    /**
     * 全量备份开始时间，取值：格式：HH:mm。
     * > 该参数必填。
     * @example `14:22`
     */
    "BackupStartTime"?: string;
    /**
     * 全量备份周期，取值：
     * - **simple**：周期备份，和BackupPeriod、BackupStartTime配合使用。
     * - **manual**：手动备份。
     * > 默认为**simple**。
     * @example `simple`
     */
    "BackupStrategyType"?: string;
    /**
     * 增量时间间隔，以秒（s）为单位。
     * > 仅支持物理备份。
     * @example `1000`
     */
    "BackupLogIntervalSeconds"?: number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
