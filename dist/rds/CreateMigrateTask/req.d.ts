interface CreateMigrateTaskRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    /**
    * 目标数据库名称。
    * @example `testDB`
    */ "DBName": string;
    /**
    * 迁移上云任务类型，取值：
    * * **FULL**：通过全量备份文件执去执行还原操作。
    * * **UPDF**：通过增量文件或者日志文件去还原增量部分的数据。
    * @example `FULL`
    */ "BackupMode": string;
    /**
    * 是否将还原后的数据库带上线，便于用户访问，取值：
    * * **True**：将数据库带上线。
    * * **False**：不将数据库带上线。
    * >目前SQL Server 2008 R2 版本该值恒定为**True**。
    * @example `True`
    */ "IsOnlineDB": string;
    "OwnerId"?: number;
    /**
    * 打开数据库后一致性检查方法，取值：
    * * **SyncExecuteDBCheck**：同步执行DB检查；
    * * **AsyncExecuteDBCheck**：异步执行DB检查。
    * 默认值为**AsyncExecuteDBCheck**（兼容 SQL Server 2008 R2）。
    * > 当 **IsOnlineDB**=**True**时，该值有效。
    * @example `AsyncExecuteDBCheck`
    */ "CheckDBMode"?: string;
    /**
    * OSS的组成部分。
    * 取值由3段组成，用英文冒号（:）分隔：
    * * OSS Endpoint地址：oss-ap-southeast-1.aliyuncs.com；
    * * OSS Bucket名字：rdsmssqlsingapore；
    * * OSS上的备份文件Key：autotest_2008R2_TestMigration_FULL.bak。
    * >* 该参数对于 SQL Server 2008 R2 版本实例是可选参数。
    * * 该参数对于 SQL Server 2008 R2 以上版本实例是必传参数。
    * @example `oss-ap-southeast-1.aliyuncs.com:rdsmssqlsingapore:autotest_2008R2_TestMigration_FULL.bak`
    */ "OssObjectPositions"?: string;
    /**
    * 备份文件所在OSS共享URL地址（Encode编码后的URL）。
    * 有多个地址时，先使用“|”隔开，再编码后传入参数。
    * > SQL Server 2008 R2 必须传入该参数。
    * @example `check_cdn_oss.sh www.xxxxxx.mobi `
    */ "OSSUrls"?: string;
    /**
    * 迁移任务ID：
    * * **BackupMode**=**FULL**时，该值为空。（兼容RDS for SQLServer 2008 R2）；
    * * **BackupMode**=**UPDF**时，该值为对应FULL任务的ID。
    * 默认值为FULL。
    * >* **IsOnlineDB**=**True**时，**BackupMode**必须取值为**FULL**；
    * * **IsOnlineDB**=**False**时，**BackupMode**必须为**UPDF**。
    * @example `无`
    */ "MigrateTaskId"?: string;
}
export { CreateMigrateTaskRequest };