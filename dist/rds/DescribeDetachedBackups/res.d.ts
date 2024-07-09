export interface DescribeDetachedBackupsResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 请求ID。
     * @example `1A6D328C-84B8-40DC-BF49-6C73984D7494`
     */
    RequestId: string;
    /**
     * 本页备份集个数。
     * @example `30`
     */
    PageRecordCount: string;
    /**
     *
     * 总记录数。
     * @example `100`
     */
    TotalRecordCount: string;
    Items: {
        /**
         * 备份集列表。
         */
        Backup: {
            /**
             * 备份集的一致性时间点。返回值为时间戳。
             * > 仅MySQL 5.6返回本参数，其他版本返回0。
             * @example `1576506856`
             */
            ConsistentTime: number;
            /**
             * 该数据备份是否可删除，返回值：
             * - **Enabled**：可删除
             * - **Disabled**：不可删除
             * @example `Disabled`
             */
            StoreStatus: string;
            /**
             * 备份集状态，返回值：
             * - **Success**：已完成备份
             * - **Failed**：备份失败
             * @example `Success`
             */
            BackupStatus: string;
            /**
             * 备份类型，返回值：
             * - **FullBackup**：全量备份
             * - **IncrementalBackup**：增量备份
             * @example `FullBackup`
             */
            BackupType: string;
            /**
             * 本次备份开始时间。
             * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2019-02-03T12:20:00Z`
             */
            BackupStartTime: string;
            /**
             * 公网下载地址，若当前不可下载，则为空串。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/****`
             */
            BackupDownloadURL: string;
            /**
             * 备份集是否可用，返回值：
             * - **0**：不可用
             * - **1**：可用
             * @example `1`
             */
            IsAvail: number;
            /**
             * 库表恢复的备份集状态，返回值：
             * - **OK**：正常。
             * - **LARGE**：表数量过多，不能用于库表恢复。
             * - **EMPTY**：备份失败的备份集。
             * @example `OK`
             */
            MetaStatus: string;
            /**
             * 本次备份结束时间。
             * 格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2019-02-13T12:20:00Z`
             */
            BackupEndTime: string;
            /**
             * 备份集ID。
             * @example `32102****`
             */
            BackupId: string;
            /**
             * 产生备份集的实例编号，用于区分该备份集产生于主实例或备实例。
             * @example `588****`
             */
            HostInstanceID: string;
            /**
             * 内网下载地址，若当前不可下载，则为空串。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/****`
             */
            BackupIntranetDownloadURL: string;
            /**
             * 备份文件大小，单位：Byte。
             * @example `2167808`
             */
            BackupSize: number;
            /**
             * 备份模式，返回值：
             * - **Automated**：系统自动备份
             * - **Manual**：手动备份
             * @example `Automated`
             */
            BackupMode: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5****`
             */
            DBInstanceId: string;
            /**
             * 实例备注。
             * @example `test`
             */
            DBInstanceComment: string;
            /**
             * 备份方式，返回值：
             * - **Logical**：逻辑备份
             * - **Physical**：物理备份
             * @example `Physical`
             */
            BackupMethod: string;
        }[];
    };
}
