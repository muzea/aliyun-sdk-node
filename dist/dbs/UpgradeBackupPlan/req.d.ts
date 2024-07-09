export interface UpgradeBackupPlanRequest {
    /**
     * 备份计划ID。
     * @example `dbstooi01eXXXX`
     */
    "BackupPlanId": string;
    /**
     * 规格，取值：
     * - micro
     * - small
     * - medium
     * - large
     * - xlarge
     * @example `micro`
     */
    "InstanceClass": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
