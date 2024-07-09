export interface ModifyBackupPolicyRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份类型：
     * * **DataBackupPolicy**：数据备份
     * * **LogBackupPolicy**：日志备份
     * @example `DataBackupPolicy`
     */
    "BackupPolicyMode"?: string;
    /**
     * 执行备份任务的时间。格式：<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
     * > * **BackupPolicyMode**为**DataBackupPolicy**时，该参数必传。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `00:00Z-01:00Z`
     */
    "PreferredBackupTime"?: string;
    /**
     * 备份周期。至少需要指定2天，多个取值用英文逗号（,）隔开。取值：
     * * **Monday**：周一
     * * **Tuesday**：周二
     * * **Wednesday**：周三
     * * **Thursday**：周四
     * * **Friday**：周五
     * * **Saturday**：周六
     * * **Sunday**：周日
     * > * 与**BackupInterval**参数共同决定备份策略。例如：本参数指定周六周日备份，**BackupInterval**参数指定30分钟，则在每周的周六和周日每隔30分钟执行一次备份。
     * > * **BackupPolicyMode**参数为**DataBackupPolicy**时，该参数必传。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `Monday`
     */
    "PreferredBackupPeriod"?: string;
    /**
     * 数据备份保留天数，取值：**7~730**。
     * > * **BackupPolicyMode**为**DataBackupPolicy**时，该参数必传。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `7`
     */
    "BackupRetentionPeriod"?: string;
    /**
     * 是否开启日志备份。取值：
     * * **Enable**：开启。
     * * **Disabled**：关闭。
     * > * **BackupPolicyMode**为**DataBackupPolicy**时，用于开启或关闭日志备份。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `Enable`
     */
    "BackupLog"?: string;
    /**
     * 日志备份保留天数。取值：**7~730**，且不大于数据备份保留天数。
     * > * 当开启日志备份时，可设置日志备份文件的保留天数，目前仅支持MySQL和PostgreSQL实例设置该值。
     * > * **BackupPolicyMode**参数为**DataBackupPolicy**或**LogBackupPolicy**时都适用。
     * @example `7`
     */
    "LogBackupRetentionPeriod"?: string;
    /**
     * 是否开启日志备份。取值：
     * * **True**或**1**：开启。
     * * **False**或**0**：关闭。
     * > * **BackupPolicyMode**为**LogBackupPolicy**时，用于开启或关闭日志备份。
     * > * 仅在**BackupPolicyMode**参数为**LogBackupPolicy**时生效。
     * @example `1`
     */
    "EnableBackupLog"?: string;
    /**
     * 日志备份本地保留小时数。取值：**0~7*24**，0表示不保留。
     * > * **BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
     * > * 仅在**BackupPolicyMode**参数为**LogBackupPolicy**时生效。
     * @example `18`
     */
    "LocalLogRetentionHours"?: string;
    /**
     * 本地日志最大循环空间使用率，超出后，则从最早的Binlog开始清理，直到空间使用率低于该比例。取值：**0~50**。默认不修改。
     * > * **BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
     * > * 仅在**BackupPolicyMode**参数为**LogBackupPolicy**时生效。
     * @example `30`
     */
    "LocalLogRetentionSpace"?: string;
    /**
     * 实例使用空间大于80%，或者剩余空间小于5GB时，是否无条件清理Binlog。取值：**Enable | Disable**。默认不修改。
     * > * **BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
     * > * 仅在**BackupPolicyMode**参数为**LogBackupPolicy**时生效。
     * @example `Enable`
     */
    "HighSpaceUsageProtection"?: string;
    /**
     * 日志备份频率，取值：
     * * **LogInterval**：每30分钟备份一次。
     * * 默认与数据备份频率一致。
     * > * **LogInterval**参数仅适用于SQL Server。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `LogInterval`
     */
    "LogBackupFrequency"?: string;
    /**
     * 备份压缩方式。取值：
     * * **0**：不压缩。
     * * **1**：zlib压缩，格式为tar.gz。
     * * **2**：并行zlib压缩。
     * * **4**：quicklz压缩，格式为xb.gz。仅适用于MySQL 5.6/5.7，此备份压缩方式可用于[单库单表恢复](~~103175~~)。
     * * **8**：quicklz压缩，格式为xb.gz。仅适用于MySQL 8.0。暂不支持单库单表恢复。
     * > 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `4`
     */
    "CompressType"?: string;
    /**
     * 归档备份的保留天数。默认为**0**，表示未开启归档备份。取值：**30**~**1095**。
     * > 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `365`
     */
    "ArchiveBackupRetentionPeriod"?: string;
    /**
     * 归档备份的保留周期，该周期内能保存的备份个数由**ArchiveBackupKeepCount**决定。默认为**0**。取值：
     * * **ByMonth**：月
     * * **ByWeek**：周
     * * **KeepAll**：全部保留
     * > 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `ByMonth`
     */
    "ArchiveBackupKeepPolicy"?: string;
    /**
     * 归档备份的保留个数。默认为**1**。取值：
     * * 当**ArchiveBackupKeepPolicy**为**ByMonth**时，取值为**1**~**31**。
     * * 当**ArchiveBackupKeepPolicy**为**ByWeek**时，取值为**1**~**7**。
     * > * 当**ArchiveBackupKeepPolicy**为**KeepAll**时，本参数无需传入。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `1`
     */
    "ArchiveBackupKeepCount"?: number;
    /**
     * 已删除实例的归档备份保留策略。默认为None。取值：
     * * **None**：不保留
     * * **Lastest**：保留最后一个
     * * **All**：全部保留
     * > 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `None`
     */
    "ReleasedKeepPolicy"?: string;
    /**
     * 本地Binlog保留个数。默认为**60**。取值：**6**~**100**。
     * > * 仅在**BackupPolicyMode**参数为**LogBackupPolicy**时生效。
     * > * 如果实例类型为MySQL，可以传入**-1**，即不限制本地Binlog的保留个数。
     * @example `60`
     */
    "LogBackupLocalRetentionNumber"?: number;
    /**
     * 是否开启秒级备份。取值：
     * * **Flash**：开启
     * * **Standard**：关闭
     * > 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `Standard`
     */
    "Category"?: string;
    /**
     * 快照备份频率。取值：
     * * **-1**：不设置备份频率。
     * * **30**：30分钟。
     * * **60**：60分钟。
     * * **120**：120分钟。
     * * **240**：240分钟。
     * * **480**：480分钟。
     * > * 与**PreferredBackupPeriod**参数共同决定备份策略。例如：**PreferredBackupPeriod**参数指定周六周日备份，本参数指定**-1**，则在每周的周六和周日各执行一次备份。
     * > * PostgreSQL实例必须是云盘实例。
     * > * SQL Server实例必须已[开启快照备份](~~211143~~)。
     * > * **Category**参数为**Flash**时本参数无效。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `30`
     */
    "BackupInterval"?: string;
    /**
     * 实例的备份方式。取值：
     * * **Physical**：物理备份
     * * **Snapshot**：快照备份
     * 默认值：**Physical**
     * > * 本参数仅对SQL Server云盘版实例生效。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `Physical`
     */
    "BackupMethod"?: string;
    /**
     * 是否开启增量备份。取值：
     * * **False**（默认）：关闭
     * * **True**：开启
     * > * 本参数仅对SQL Server云盘版实例生效。
     * > * 仅在**BackupPolicyMode**参数为**DataBackupPolicy**时生效。
     * @example `False`
     */
    "EnableIncrementDataBackup"?: boolean;
    /**
     * 设置备库备份选项。取值：
     * - **1**：优先备库
     * - **2**：强制主库
     * >
     * > - 该参数仅适用于SQL Server集群版实例。
     * > - 仅当**BackupMethod**取值为**Physical**时，该参数才生效。如果**BackupMethod**设置为**Snapshot**，SQL Server集群版实例将强制在主库备份。
     * @example `2`
     */
    "BackupPriority"?: number;
}
