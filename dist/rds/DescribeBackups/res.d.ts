export interface DescribeBackupsResponse {
    /**
     * 请求ID。
     * @example `1A6D328C-84B8-40DC-BF49-6C73984D7494`
     */
    RequestId: string;
    /**
     * 实例的快照链大小，单位：字节（Byte）。
     * @example `0`
     */
    TotalEcsSnapshotSize: number;
    /**
     * 本页备份集个数。
     * @example `30`
     */
    PageRecordCount: string;
    /**
     * 总记录数。
     * @example `100`
     */
    TotalRecordCount: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    Items: {
        /**
         * 备份集列表。
         */
        Backup: {
            /**
             * 备份集的存储介质，返回值如下：
             * * **0**：常规存储
             * * **1**：归档存储
             * @example `0`
             */
            StorageClass: string;
            /**
             * 备份集的加密信息。
             * @example `{}`
             */
            Encryption: string;
            /**
             * 备份集状态。
             * @example `Success`
             */
            BackupStatus: string;
            /**
             * 该数据备份是否可删除，返回值如下：
             * * **Enabled**：可删除
             * * **Disabled**：不可删除
             * @example `Disabled`
             */
            StoreStatus: string;
            /**
             * 备份集的一致性时间点。返回值为时间戳。
             * >仅MySQL 5.6返回本参数，其他版本返回0。
             * @example `1576506856`
             */
            ConsistentTime: number;
            /**
             * 备份类型，返回值如下：
             * * **FullBackup**：全量备份
             * * **IncrementalBackup**：增量备份
             * @example `FullBackup`
             */
            BackupType: string;
            /**
             * 备份模式，分为常规备份模式（支持全量和增量恢复）和仅复制模式（仅支持全量恢复），取值：
             * * 0：常规备份模式
             * * 1：仅复制模式
             * >仅SQL Server返回此参数。
             * @example `0`
             */
            CopyOnlyBackup: string;
            /**
             * 本次备份结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2019-02-13T12:20:00Z`
             */
            BackupEndTime: string;
            /**
             * 库表恢复的备份集状态，返回值如下：
             * * **OK**：正常。
             * * **LARGE**：表数量过多，不能用于库表恢复。
             * * **EMPTY**：备份失败的备份集。
             * > 空串表示未开通库表恢复的备份集。
             * @example `OK`
             */
            MetaStatus: string;
            /**
             * 备份任务的发起者。返回值如下：
             * * **System**：系统自动发起。
             * * **User**：用户手动发起。
             * @example `System`
             */
            BackupInitiator: string;
            /**
             * 内网下载地址，若当前不可下载，则返回空值。
             * > 例如：备份方式为**快照备份**的SQL Server实例会返回空值。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou-internal.aliyuncs.com/****`
             */
            BackupIntranetDownloadURL: string;
            /**
             * 备份方式，返回值如下：
             * * **Logical**：逻辑备份
             * * **Physical**：物理备份
             * * **Snapshot**：快照备份
             * @example `Physical`
             */
            BackupMethod: string;
            /**
             * 本次备份开始时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm</i>Z（UTC时间）。
             * @example `2019-02-03T12:20:00Z`
             */
            BackupStartTime: string;
            /**
             * 公网下载地址，若当前不可下载，则返回空值。
             * > 例如：备份方式为**快照备份**的SQL Server实例会返回空值。
             * @example `http://rdsbak-hz-v3.oss-cn-hangzhou.aliyuncs.com/****`
             */
            BackupDownloadURL: string;
            /**
             * 备份集是否可用，返回值如下：
             * * **0**：不可用
             * * **1**：可用
             * @example `1`
             */
            IsAvail: number;
            /**
             * 备份集ID。
             * @example `321020562`
             */
            BackupId: string;
            /**
             * 产生备份集的实例编号，用于区分该备份集产生于主实例或备实例。
             * @example `5882781`
             */
            HostInstanceID: string;
            /**
             * 备份文件大小，单位：Byte。
             * @example `2167808`
             */
            BackupSize: number;
            /**
             * 备份模式，返回值如下：
             * * **Automated**：系统自动备份
             * * **Manual**：手动备份
             * @example `Automated`
             */
            BackupMode: string;
            /**
             * 实例ID。
             * @example `rm-uf6wjk5****`
             */
            DBInstanceId: string;
            /**
             * 校验和，采用CRC64算法。
             * @example `1835830439****`
             */
            Checksum: string;
            BackupDownloadLinkByDB: {
                /**
                 * 单库备份下载链接列表。
                 */
                BackupDownloadLinkByDB: {
                    /**
                     * 内网下载链接地址。
                     * @example `https://cn-hangzhou-internal.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=****&dbList=tb1`
                     */
                    IntranetDownloadLink: string;
                    /**
                     * 数据库名称。
                     * @example `dbs`
                     */
                    DataBase: string;
                    /**
                     * 下载链接地址。
                     * @example `https://cn-hangzhou.bak.rds.aliyuncs.com/custins53664665/hins18676859_2021072909473127987849.zip?Expires=****&dbList=tb1`
                     */
                    DownloadLink: string;
                }[];
            };
            /**
             * 资源组ID。
             * @example `rg-acfmy****`
             */
            ResourceGroupId: string;
            /**
             * 数据库类型。返回值：
             * - MySQL
             * - SQLServer
             * - PostgreSQL
             * - MariaDB
             * @example `MySQL`
             */
            Engine: string;
            /**
             * 数据库版本。
             * @example `8.0`
             */
            EngineVersion: string;
        }[];
    };
}
