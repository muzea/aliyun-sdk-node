export interface DescribeRestoreRangeInfoRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbssl67c7mx****`
     */
    "BackupPlanId": string;
    /**
     * 查询可恢复开始时间，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `1646674092000`
     */
    "BeginTimestampForRestore": number;
    /**
     * 查询可恢复结束时间，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `1646846814000`
     */
    "EndTimestampForRestore": number;
    /**
     * 用于保证请求的幂等性，防止重复提交请求。
     * @example `ETnLKlblzczshOTUbOCzxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 是否开启最近恢复。
     * @example `true`
     */
    "RecentlyRestore"?: boolean;
}
