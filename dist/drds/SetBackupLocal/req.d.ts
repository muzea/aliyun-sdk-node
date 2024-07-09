export interface SetBackupLocalRequest {
    /**
     * DRDS 实例ID
     * @example `drdshbgag23d13fds`
     */
    "DrdsInstanceId": string;
    /**
     * 日志备份本地保留小时数。取值为0~7*24，0表示不保留，默认为18
     * @example `12`
     */
    "LocalLogRetentionHours"?: string;
    /**
     * 本地日志最大空间使用率。 取值为0~50，此为循环空间，默认为30。
     * @example `30`
     */
    "LocalLogRetentionSpace"?: string;
    /**
     * 实例使用空间>= 90%，或者剩余空间小于5GB时，是否无条件清理Binlog：1: 开启 0：不开启
     * @example `80`
     */
    "HighSpaceUsageProtection"?: string;
}
