export interface ModifyStorageStrategyRequest {
    /**
     * 备份计划ID，可通过调用[DescribeBackupPlanList](~~437215~~)接口获取该参数的值。
     * @example `dbsqdss5tmh****`
     */
    "BackupPlanId": string;
    /**
     * 备份数据保留时间，单位为天，取值：0~1825。
     * > 默认为730（天）。
     * @example `730`
     */
    "BackupRetentionPeriod": number;
    /**
     * 转为低频访问存储时间。需要小于归档冷备存储时间（DuplicationArchivePeriod参数）。更多关于低频访问存储的说明，请参见[存储类型介绍](~~51374~~)。
     * > 默认为180（天）。
     * @example `190`
     */
    "DuplicationInfrequentAccessPeriod": number;
    /**
     * 转为归档冷备存储时间。需要小于备份数据保留时间（BackupRetentionPeriod参数）。更多关于归档存储的说明，请参见[存储类型介绍](~~51374~~)。
     * > 默认为365（天）。
     * @example `366`
     */
    "DuplicationArchivePeriod": number;
    /**
     * 任意字符串，用于保证请求的幂等性，防止重复提交请求。
     * @example `dbstest`
     */
    "ClientToken"?: string;
}
