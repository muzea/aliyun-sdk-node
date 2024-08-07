export interface DescribeBackupsResponse {
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: string;
    /**
     * 本页记录数。
     * @example `1`
     */
    PageRecordCount: string;
    /**
     * 请求ID。
     * @example `24A1990B-4F6E-482B-B8CB-75C612******`
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
             * > 因为快照之间存在共享数据块，因此删除目标快照备份后释放的空间会远小于该备份文件的大小。更多详情，请参见[备份功能FAQ](~~164881~~)。
             * @example `4639948800`
             */
            BackupSetSize: string;
            /**
             * 一致性快照的时间点，格式为Unix时间戳，单位为秒。
             * @example `1605425407`
             */
            ConsistentTime: string;
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
             * @example `2020-11-15T07:30:05Z`
             */
            BackupStartTime: string;
            /**
             * 备份集预期过期时间（仅支持开启稀疏备份的实例）
             * @example `2022-10-24T08:13:23Z`
             */
            ExpectExpireTime: string;
            /**
             * 备份集预期过期类型（仅支持开启稀疏备份的实例）
             * @example `EXPIRED  `
             */
            ExpectExpireType: string;
            /**
             * 备份集是否可用，取值范围如下：
             * * **0**：不可用
             * * **1**：可用
             * @example `0`
             */
            IsAvail: string;
            /**
             * 本次备份结束时间（UTC时间）。
             * @example `2020-11-15T07:30:20Z`
             */
            BackupEndTime: string;
            /**
             * 备份ID。
             * @example `61*******`
             */
            BackupId: string;
            /**
             * 集群ID。
             * @example `pc-****************`
             */
            DBClusterId: string;
            /**
             * 备份集级别，取值范围如下：
             * * **Level-1**：一级备份
             * * **Level-2**：二级备份
             * @example `Level-1`
             */
            BackupsLevel: string;
            /**
             * 备份模式，取值范围如下：
             * * **Automated**：系统自动备份
             * * **Manual**：手动备份
             * @example `Automated`
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
