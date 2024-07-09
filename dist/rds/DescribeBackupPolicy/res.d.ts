export interface DescribeBackupPolicyResponse {
    /**
     * 日志备份保留天数。
     * @example `7`
     */
    LogBackupRetentionPeriod: number;
    /**
     * 归档备份的保留周期。
     * @example `ByMonth`
     */
    ArchiveBackupKeepPolicy: string;
    /**
     * 归档备份的保留个数。
     * @example `1`
     */
    ArchiveBackupKeepCount: string;
    /**
     * 本地日志备份保留小时数。
     * @example `0`
     */
    LocalLogRetentionHours: number;
    /**
     * 数据备份保留天数。
     * @example `7`
     */
    BackupRetentionPeriod: number;
    /**
     * 请求ID。
     * @example `B87E2AB3-B7C9-4394-9160-7F639F732031`
     */
    RequestId: string;
    /**
     * 数据备份周期，多个取值用英文逗号（,）隔开。返回值：
     * * **Monday**：周一
     * * **Tuesday**：周二
     * * **Wednesday**：周三
     * * **Thursday**：周四
     * * **Friday**：周五
     * * **Saturday**：周六
     * * **Sunday**：周日
     * @example `Monday,Wednesday,Friday,Sunday`
     */
    PreferredBackupPeriod: string;
    /**
     * 备份压缩方式。返回值：
     * * **0**：不压缩
     * * **1**：zlib压缩
     * * **2**：并行zlib压缩
     * * **4**：quicklz压缩，开启了库表恢复
     * * **8**：quicklz压缩但还未支持库表恢复
     * @example `1`
     */
    CompressType: string;
    /**
     * 备用参数。
     * @example `0`
     */
    SupportReleasedKeep: number;
    /**
     * 本地日志最大空间使用率。
     * @example `30`
     */
    LocalLogRetentionSpace: string;
    /**
     * 实例是否支持快照备份。返回值：
     * - **1**：是
     * - **0**：否
     * > 仅SQL Server实例会返回本参数。
     * @example `1`
     */
    SupportVolumeShadowCopy: number;
    /**
     * 实例的备份方式。返回值：
     * * **Physical**：物理备份
     * * **Snapshot**：快照备份
     * > 仅SQL Server云盘版实例会返回本参数。
     * @example `Physical`
     */
    BackupMethod: string;
    /**
     * 日志备份频率。返回值：
     * * **LogInterval**：每30分钟备份一次；
     * * 默认与数据备份周期**PreferredBackupPeriod**一致。
     * > 仅SQL Server实例会返回本参数。
     * @example `LogInterval`
     */
    LogBackupFrequency: string;
    /**
     * 下次备份时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
     * @example `2018-01-19T15:15Z`
     */
    PreferredNextBackupTime: string;
    /**
     * 实例使用空间大于80%，或者剩余空间小于5 GB时，是否强制清理Binlog：
     * * **Disable**：不清理
     * * **Enable**：清理
     * @example `Enable`
     */
    HighSpaceUsageProtection: string;
    /**
     * 归档备份的保留天数。
     * @example `365`
     */
    ArchiveBackupRetentionPeriod: string;
    /**
     * 备份间隔，单位：分钟。
     * * 对于MySQL实例是指[快照备份频率](~~98818~~)（非快照备份周期）。
     * * 对于SQL Server实例是指日志备份频率。
     * @example `30`
     */
    BackupInterval: string;
    /**
     * 已删除实例的归档备份保留策略。返回值：
     * * **None**：不保留
     * * **Lastest**：保留最后一个
     * * **All**：全部保留
     * @example `None`
     */
    ReleasedKeepPolicy: string;
    /**
     * 数据备份时间，格式：<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * @example `15:00Z-16:00Z`
     */
    PreferredBackupTime: string;
    /**
     * 本地Binlog保留个数。
     * @example `60`
     */
    LogBackupLocalRetentionNumber: number;
    /**
     * 是否开启秒级备份。返回值：
     * - **Flash**：开启
     * - **Standard**：关闭
     * > 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `Standard`
     */
    Category: string;
    /**
     * 是否开启日志备份。返回值：
     * * **1**：开启
     * * **0**：关闭
     * @example `1`
     */
    EnableBackupLog: string;
    /**
     * 是否已开启日志备份。返回值：
     * * **Enable**：是
     * * **Disabled**：否
     * @example `Enable`
     */
    BackupLog: string;
    /**
     * 是否已开启增量备份。返回值：
     * * **True**：是
     * * **False**：否
     * @example `True`
     */
    EnableIncrementDataBackup: boolean;
    /**
     * 是否支持修改备库备份选项。返回值：
     * - **True**：是
     * - **False**：否
     * @example `False`
     */
    SupportModifyBackupPriority: boolean;
    /**
     * 备库备份的设置。返回值：
     * - **1**：优先备库
     * - **2**：强制主库
     * > 该参数仅适用于SQL Server企业集群版实例，仅当SupportModifyBackupPriority为True时返回该参数。
     * @example `2`
     */
    BackupPriority: number;
    /**
     * 是否已开启PITR任意时间点恢复（原日志备份的升级版）。返回值：
     * - **True**：是
     * - **False**：否
     * > 仅MySQL实例会返回本参数。功能详情，请参见[设置任意时间点恢复策略](~~2666046~~)。
     * @example `True`
     */
    EnablePitrProtection: boolean;
    /**
     * 可任意时间点恢复天数。
     * @example `7`
     */
    PitrRetentionPeriod: number;
}
