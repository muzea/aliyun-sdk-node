export interface DescribeBackupStatusResponse {
    /**
     * 请求ID。
     * @example `F7E71430-A825-470A-B40B-DF3F3AAC9BEE`
     */
    RequestId: string;
    /**
     * 备份使用的BDS实例ID。
     * @example `bds-m5e54q06ceyhxxxx`
     */
    BdsClusterId: string;
    /**
     * 备份开启状态。
     * - closed 未开启
     * - opened 已开启
     * - opening 开启中
     * @example `opened`
     */
    BackupStatus: string;
    /**
     * 备份集群ID
     * @example `ld-m5eznlga4k5bcxxxx`
     */
    ClusterId: string;
}
