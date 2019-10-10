interface ModifyBackupPolicyRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 备份类型：
    * * **DataBackupPolicy**：数据备份；
    * * **LogBackupPolicy**：日志备份。
    * @example `DataBackupPolicy`
    */ "BackupPolicyMode"?: string;
    /**
    * 执行备份任务的时间。格式：<i>HH:mm</i>Z-<i>HH:mm</i>Z（UTC时间）。
    * >**BackupPolicyMode**为**DataBackupPolicy**时，该参数必传。
    * @example `00:00Z-01:00Z`
    */ "PreferredBackupTime"?: string;
    /**
    * 备份周期，多个取值用英文逗号（,）隔开，默认为原值。取值：
    * * **Monday**：周一；
    * * **Tuesday**：周二；
    * * **Wednesday**：周三；
    * * **Thursday**：周四；
    * * **Friday**：周五；
    * * **Saturday**：周六；
    * * **Sunday**：周日。
    * >**BackupPolicyMode**为**DataBackupPolicy**时，该参数必传。
    * @example `Monday`
    */ "PreferredBackupPeriod"?: string;
    /**
    *
    * 数据备份保留天数，取值：**7~730**。默认为原值。
    * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
    * @example `7`
    */ "BackupRetentionPeriod"?: string;
    /**
    * 是否开启日志备份。取值：**Enable | Disabled**。默认为原值。
    * >**BackupPolicyMode**为**DataBackupPolicy**时，用于开启或关闭日志备份。
    * @example `Enable`
    */ "BackupLog"?: string;
    /**
    * 日志备份保留天数。取值：**7~730**，且不大于数据备份保留天数。
    * >当开启日志备份时，可设置日志备份文件的保留天数，目前仅支持MySQL、PostgreSQL、PPAS实例设置该值。
    * @example `7`
    */ "LogBackupRetentionPeriod"?: string;
    /**
    * 是否开启日志备份。取值：**True | False**
    * >**BackupPolicyMode**为**LogBackupPolicy**时，用于开启或关闭日志备份。
    * @example `True`
    */ "EnableBackupLog"?: string;
    /**
    * 日志备份本地保留小时数。取值：**0~7*24**，0表示不保留。默认为原值。
    * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
    * @example `18`
    */ "LocalLogRetentionHours"?: string;
    /**
    * 本地日志最大循环空间使用率，超出后，则从最早的Binlog开始清理，直到空间使用率低于该比例。取值：**0~50**。默认为原值。
    * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
    * @example `30`
    */ "LocalLogRetentionSpace"?: string;
    /**
    *
    * 实例使用空间大于80%，或者剩余空间小于5GB时，是否无条件清理Binlog。取值：**Enable | Disable**。默认为原值。
    * >**BackupPolicyMode**为**LogBackupPolicy**时，该参数必传。
    * @example `Enable`
    */ "HighSpaceUsageProtection"?: string;
    /**
    * 是否开启备份文件转储至OSS。取值：**Enable | Disable**。
    * @example `Disable`
    */ "Duplication"?: string;
    /**
    * 转储数据备份或者日志备份：
    * * **DATA**：转储数据备份；
    * * **LOG**：转储日志备份；
    * * **DATA&amp;LOG**：转储数据备份和日志备份。
    * >**Duplication**=**Enable**时，该参数必填。
    * @example `DATA`
    */ "DuplicationContent"?: string;
    /**
    * 用于让RAM授权RDS访问您的OSS。授权后日志文件才能转储至OSS。格式：
    *     {"Storage":"OSS","Location": {"Bucket": 'xxx', "Location":'cn-hangzhou',"OSSEndPoint":"oss-test","Object":"obje1"}
    * >如果**Duplication**=**Enable**，该参数必填。
    * @example ` {"Storage":"OSS","Location": {"Bucket": 'xxx', "Location":'cn-hangzhou',"OSSEndPoint":"oss-test","Object":"obje1"}`
    */ "DuplicationLocation"?: string;
    /**
    * 日志备份频率，取值：
    * * **LogInterval**：每30分钟备份一次。
    * * 默认与数据备份频率一致；
    * >**LogInterval**参数仅适用于SQL Server。
    * @example `LogInterval`
    */ "LogBackupFrequency"?: string;
    /**
    * 备份压缩方式，支持库表恢复。取值：**4**。
    * >支持的实例版本为MySQL 5.7 高可用版（本地SSD盘）和MySQL 5.6高可用版。
    * @example `4`
    */ "CompressType"?: string;
}
export { ModifyBackupPolicyRequest };