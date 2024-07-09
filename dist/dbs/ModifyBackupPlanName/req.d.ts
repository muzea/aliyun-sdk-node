export interface ModifyBackupPlanNameRequest {
    /**
     * 备份计划ID。
     * @example `dbstooi0XXXX`
     */
    "BackupPlanId": string;
    /**
     * 备份计划名称。
     * @example `dbstooi0XXXX`
     */
    "BackupPlanName": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
