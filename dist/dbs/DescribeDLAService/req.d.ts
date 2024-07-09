export interface DescribeDLAServiceRequest {
    /**
     * 备份计划ID，您可以调用[DescribeBackupPlanList](~~437215~~)查询。
     * @example `dbstooi01exXXXX`
     */
    "BackupPlanId": string;
    /**
     * 任意字符串。
     * @example `DBS`
     */
    "ClientToken"?: string;
}
