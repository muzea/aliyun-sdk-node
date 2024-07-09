export interface DescribeClusterBackupsResponse {
    /**
     * 请求ID。
     * @example `2F42BB4E-461F-5B55-A37C-53B1141C****`
     */
    RequestId: string;
    /**
     * 本次请求所返回的最大记录条数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页最大记录数量。
     * @example `30`
     */
    PageSize: number;
    /**
     * 集群备份集列表，一个集群备份里面包含各个节点的备份集。
     */
    ClusterBackups: {
        /**
         * 集群备份集是否有效，取值说明：
         * - **1**：集群的备份集有效。
         * - **0**：子节点的备份集未完成或者失败。
         * @example `1`
         */
        IsAvail: number;
        /**
         * 集群备份集ID。
         * @example `cb-o8c2ugnxo26kx***`
         */
        ClusterBackupId: string;
        /**
         * 集群备份集状态。
         * @example `OK`
         */
        ClusterBackupStatus: string;
        /**
         * 集群备份开始时间。
         * @example `2023-10-16T19:33:20Z`
         */
        ClusterBackupStartTime: string;
        /**
         * 集群备份集大小，单位为Byte。
         * @example `107374182400`
         */
        ClusterBackupSize: string;
        /**
         * 集群备份结束时间。
         * @example `2023-10-16T19:33:20Z`
         */
        ClusterBackupEndTime: string;
        /**
         * 集群备份模式。
         * @example `Automated`
         */
        ClusterBackupMode: string;
        /**
         * 补充信息，为JSON格式。
         */
        ExtraInfo: {
            /**
             * 是否来自于历史备份集，为**1**则表示是从历史备份集迁移过来的。
             * @example `1`
             */
            RegistryFromHistory: string;
        };
        /**
         * 单个集群备份集下，各个子节点的备份集集合。
         */
        Backups: {
            /**
             * 备份ID。
             * @example `738025367`
             */
            BackupId: string;
            /**
             * MongoDB分片名称。
             * @example `d-bp16cb162771****
            `
             */
            InstanceName: string;
            /**
             * 备份文件的外网下载地址，若当前不可下载，则返回为空字符串。
             * @example `http://oss.com/xxx`
             */
            BackupDownloadURL: string;
            /**
             * 内网下载地址，若当前不可下载，则返回空值。
             * @example `http://oss.com/xxx`
             */
            BackupIntranetDownloadURL: string;
            /**
             * 本次备份开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-10-16T19:33:20Z`
             */
            BackupStartTime: string;
            /**
             * 本次备份结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2023-10-16T19:33:20Z`
             */
            BackupEndTime: string;
            /**
             * 备份文件大小，单位为Byte。
             * @example `77544597650`
             */
            BackupSize: string;
            /**
             * 备份集是否可用，取值说明：
             * * **0**：不可用。
             * * **1**：可用。
             * @example `1`
             */
            IsAvail: string;
            /**
             * 备份状态，取值说明：
             * - **Success**：备份成功。
             * - **Failed**：备份失败。
             * @example `Success`
             */
            BackupStatus: string;
            /**
             * 备份名称。
             * @example `12345678.tar.gz`
             */
            BackupName: string;
            /**
             * 备份关联的实例节点信息。
             */
            ExtraInfo: {
                /**
                 * 节点ID。
                 * @example `d-2ze75ab1fa5d****`
                 */
                NodeId: string;
                /**
                 * 节点的存储空间大小，单位为MB。
                 * @example `20480`
                 */
                StorageSize: string;
                /**
                 * 节点规格。
                 * @example `mdb.shard.4x.large.d`
                 */
                InstanceClass: string;
                /**
                 * 节点类型。
                 * @example `db`
                 */
                NodeType: string;
            };
        }[];
        /**
         * 备份进度，单位为%。
         * 仅正在运行的备份才会显示进度。
         * @example `50`
         */
        Progress: string;
        /**
         * 备份的状态，取值如下：
         * - **Init**：初始化。
         * - **No_Need**：无附加日志备份。
         * - **Running**：附加日志备份中。
         * - **Ready**：附加日志备份完成。
         * - **Failed**：附加日志备份失败。
         * > 当**ClusterBackupStatus**参数（集群备份集的状态）的值为OK时，仅表示全量备份阶段执行成功了，对于开启了日志备份的集群实例，想要使用按时间点恢复或满足一致性恢复的效果时，需要附加日志备份完成。
         * @example `Ready`
         */
        AttachLogStatus: string;
    }[];
}
