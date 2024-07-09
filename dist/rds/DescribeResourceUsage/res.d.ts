export interface DescribeResourceUsageResponse {
    /**
     * OSS中备份集的数据文件大小，单位：Byte。0表示没有数据。
     * @example `8821760`
     */
    BackupOssDataSize: number;
    /**
     * 已用空间（DataSize+LogSize），单位：Byte。-1表示没有数据。
     * @example `2337275904`
     */
    DiskUsed: number;
    /**
     * 归档备份的占用空间，单位：Byte。
     * @example `0`
     */
    ArchiveBackupSize: number;
    /**
     * OSS中备份集的日志文件大小，单位：Byte。0表示没有数据。
     * @example `44180999`
     */
    BackupOssLogSize: number;
    /**
     * 日志备份的占用空间（不包括归档备份），单位：Byte。
     * @example `45145563`
     */
    BackupLogSize: number;
    /**
     * 数据备份的占用空间（不包括归档备份），单位：Byte。
     * @example `94324736`
     */
    BackupDataSize: number;
    /**
     * 冷备份的占用空间，单位：Byte。-1表示没有数据。
     * @example `2337275904`
     */
    ColdBackupSize: number;
    /**
     * 数据文件占用空间，单位：Byte。-1表示没有数据。
     * @example `1292094741`
     */
    DataSize: number;
    /**
     * 扣除免费额度后，需要付费的备份占用空间，单位：Byte。
     * @example `0`
     */
    PaidBackupSize: number;
    /**
     * 请求ID。
     * @example `F937E173-559C-4498-8D90-38D32342B9E4`
     */
    RequestId: string;
    /**
     * 日志占用空间，单位：Byte。-1表示没有数据。
     * @example `1045181163`
     */
    LogSize: number;
    /**
     * 备份占用空间，单位：Byte。-1表示没有数据。
     * @example `53002759`
     */
    BackupSize: number;
    /**
     * 实例ID。
     * @example ` rm-uf6wjk5xxxxxxx`
     */
    DBInstanceId: string;
    /**
     * 数据库类型。
     * @example `MySQL`
     */
    Engine: string;
    /**
     * SQL的占用空间，单位：Byte。-1表示没有数据。
     * @example `315052751`
     */
    SQLSize: number;
}
