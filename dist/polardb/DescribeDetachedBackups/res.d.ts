export interface DescribeDetachedBackupsResponse {
    /**
     * 总记录数。
     * @example `50`
     */
    TotalRecordCount: string;
    /**
     * 本页记录数。
     * @example `15`
     */
    PageRecordCount: string;
    /**
     * 请求ID。
     * @example `717B2382-BB14-4DCB-BBC2-32DBE0******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    Items: {
        /**
         * 备份集详情。
         */
        Backup: {
            /**
             * 备份文件大小，单位为Byte。
             * > 因为快照之间存在共享数据块，因此删除目标快照备份后释放的空间会远小于该备份文件的大小。
             * @example `7251056`
             */
            BackupSetSize: string;
            /**
             * 一致性快照的时间点，格式为Unix时间戳，单位为秒。
             * @example `1589253947`
             */
            ConsistentTime: string;
            /**
             * 是否允许删除备份集，取值范围如下：
             * * **Enabled**：允许删除
             * * **Disabled**：不允许删除
             * @example `Disabled`
             */
            StoreStatus: string;
            /**
             * 备份状态，取值范围如下：
             * * **Success**：备份完成
             * * **Failed**：备份失败
             * @example `Success`
             */
            BackupStatus: string;
            /**
             * 备份类型，仅支持全量备份，取值固定为**FullBackup**。
             * @example `FullBackup`
             */
            BackupType: string;
            /**
             * 本次备份开始时间（UTC时间）。
             * @example `2020-05-12T03:25:44Z`
             */
            BackupStartTime: string;
            /**
             * 备份集是否可用，取值范围如下：
             * * **0**：不可用
             * * **1**：可用
             * @example `1`
             */
            IsAvail: string;
            /**
             * 本次备份结束时间（UTC时间）。
             * @example `2020-05-12T03:25:55Z`
             */
            BackupEndTime: string;
            /**
             * 备份ID。
             * @example `111111111`
             */
            BackupId: string;
            /**
             * 集群ID。
             * @example `pc-**************`
             */
            DBClusterId: string;
            /**
             * 备份集级别，取值范围如下：
             * * **Level-1**：一级备份
             * * **Level-2**：二级备份
             * @example `Level-2`
             */
            BackupsLevel: string;
            /**
             * 备份模式，取值范围如下：
             * * **Automated**：系统自动备份
             * * **Manual**：手动备份
             * @example `Manual`
             */
            BackupMode: string;
            /**
             * 数据备份方法，仅支持快照备份，取值固定为**Snapshot** 。
             * @example `Snapshot`
             */
            BackupMethod: string;
        }[];
    };
}
