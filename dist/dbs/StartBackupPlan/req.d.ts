export interface StartBackupPlanRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbsqdss5tmh****`
     */
    "BackupPlanId": string;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
}
