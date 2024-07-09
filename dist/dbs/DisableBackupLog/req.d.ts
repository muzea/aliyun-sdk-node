export interface DisableBackupLogRequest {
    /**
     * 备份计划ID。您可以调用[DescribeBackupPlanList](~~437215~~)查询。
     * @example `dbstooi01****`
     */
    "BackupPlanId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCziJZNwH****`
     */
    "ClientToken"?: string;
}
