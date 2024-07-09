export interface DescribeBackupPolicyRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份类型，取值：
     * * **DataBackupPolicy**：数据备份
     * * **LogBackupPolicy**：日志备份
     * @example `DataBackupPolicy`
     */
    "BackupPolicyMode"?: string;
    /**
     * 备份压缩方式，取值：
     * * **0**：不压缩
     * * **1**：zlib压缩
     * * **2**：并行zlib压缩
     * * **4**：quicklz压缩，开启了库表恢复
     * * **8**：quicklz压缩但还未支持库表恢复
     * @example `1`
     */
    "CompressType"?: string;
    /**
     * 已删除实例的归档备份保留策略。取值：
     * * **None**：不保留
     * * **Lastest**：保留最后一个
     * * **All**：全部保留
     * @example `Lastest`
     */
    "ReleasedKeepPolicy"?: string;
}
