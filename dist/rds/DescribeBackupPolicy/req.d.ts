interface DescribeBackupPolicyRequest {
    "RegionId"?: string;
    /**
    * 实例ID。
    * @example `rm-uf6wjk5xxxxxxx`
    */ "DBInstanceId": string;
    "OwnerId"?: number;
    /**
    * 备份类型，取值：
    * * **DataBackupPolicy**：数据备份；
    * * **LogBackupPolicy**：日志备份。
    * @example `DataBackupPolicy`
    */ "BackupPolicyMode"?: string;
    /**
    * 备份压缩方式，取值：
    * * **0**：不压缩；
    * * **1**：zlib压缩；
    * * **2**：并行zlib压缩；
    * * **4**：quicklz压缩，开启了库表恢复；
    * * **8**：MySQL8.0 quicklz压缩但是还未支持库表恢复。
    * @example `1`
    */ "CompressType"?: string;
}
export { DescribeBackupPolicyRequest };