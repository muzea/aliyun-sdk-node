export interface ModifyBackupPolicyResponse {
    /**
     * 请求ID。
     * @example `DA147739-AEAD-4417-9089-65E9B1D8240D`
     */
    RequestId: string;
    /**
     * 备份压缩方式，取值：
     * * **0**：不压缩。
     * * **1**：zlib压缩。
     * * **2**：并行zlib压缩。
     * * **4**：quicklz压缩，开启了库表恢复。
     * * **8**：MySQL8.0 quicklz压缩但是还未支持库表恢复。
     * @example `4`
     */
    CompressType: string;
    /**
     * 本地日志最大循环空间使用率。
     * @example `30`
     */
    LocalLogRetentionSpace: string;
    /**
     * 本地Binlog保留个数。
     * @example `60`
     */
    LogBackupLocalRetentionNumber: number;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceID: string;
    /**
     * 是否开启了日志备份。取值：
     * * **1**：开启
     * * **0**：关闭
     * @example `1`
     */
    EnableBackupLog: string;
    /**
     * 日志备份本地保留小时数。
     * @example `18`
     */
    LocalLogRetentionHours: number;
    /**
     * 实例使用空间大于80%，或者剩余空间小于5GB时，是否无条件清理Binlog。
     * @example `Disable`
     */
    HighSpaceUsageProtection: string;
}
