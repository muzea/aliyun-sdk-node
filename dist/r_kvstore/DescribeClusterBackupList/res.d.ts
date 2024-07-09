export interface DescribeClusterBackupListResponse {
    /**
     * 请求 ID。
     * @example `C009DA42-3B19-5B81-963D-1509DE2408DD`
     */
    RequestId: string;
    /**
     * MaxResults本次请求所返回的最大记录条数
     * @example `4`
     */
    MaxResults: number;
    /**
     * 第几页，同请求参数
     * @example `1`
     */
    PageNumber: number;
    /**
     * 一页最大多少条记录，同请求参数
     * @example `30`
     */
    PageSize: number;
    /**
     * 当前实例全量备份文件的大小，单位是字节。全量备份来源于每天定时备份、手动备份、缓存分析时生成的备份等。
     * >该值和当前请求所响应的备份集数量以及大小无关，而是该实例当前所有有效全量备份的大小。
     * @example `1000`
     */
    FullStorageSize: number;
    /**
     * 当前实例日志备份文件的大小，单位是字节，当且仅当开启闪回时才有效。
     * >该值和当前请求所响应的备份集数量以及大小无关，而是该实例当前所有有效日志备份的大小。
     * @example `5000`
     */
    LogStorageSize: number;
    /**
     * <props="china">该实例的免费备份额度，单位是字节，免费额度为实例规格默认内存量，更多信息请参见备份商业化通知。 全量备份和日志备份共享该免费额度。当变配实例规格时，实例的免费额度会产生变化。</props>
     * <props="intl">该参数未生效，请忽略该参数。</props>
     * @example `100000`
     */
    FreeSize: number;
    /**
     * 集群备份集列表，一个集群备份里面包含各个节点的备份集
     */
    ClusterBackups: {
        /**
         * 集群备份集是否有效，子节点的备份集未完成或者失败时，为0
         * @example `1`
         */
        IsAvail: number;
        /**
         * 集群备份集ID
         * @example `cb-zmdqj2m3xyxjtdt0`
         */
        ClusterBackupId: string;
        /**
         * 集群备份集状态。
         * - 成功：OK
         * - 运行中：RUNNING
         * - 失败：其他字段
         * @example `OK`
         */
        ClusterBackupStatus: string;
        /**
         * 集群备份集大小
         * @example `2048`
         */
        ClusterBackupSize: string;
        /**
         * 集群备份开始时间。
         * @example `2024-01-10T17:21:25Z`
         */
        ClusterBackupStartTime: string;
        /**
         * 集群备份结束时间。
         * @example `2024-01-10T17:21:55Z`
         */
        ClusterBackupEndTime: string;
        /**
         * 集群备份模式。
         * @example `Automated`
         */
        ClusterBackupMode: string;
        /**
         * 做全量备份时，当时单个DB节点的内存规格大小，单位为MB
         * @example `1024`
         */
        ShardClassMemory: number;
        /**
         * 单个集群备份集下，各个子节点的备份集集合
         */
        Backups: {
            /**
             * 备份文件的ID。
             * @example `514645788`
             */
            BackupId: string;
            /**
             * 实例的名称。
             * @example `r-bp1y4is8svonly****-db-0`
             */
            InstanceName: string;
            /**
             * 备份文件的外网下载地址。
             * @example `http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb`
             */
            BackupDownloadURL: string;
            /**
             * 备份文件的内网下载地址。
             * > 您可以在与该Redis实例连通的ECS（二者需属于同地域的经典网络或者在同一VPC内）上使用该地址下载目标备份文件。
             * @example `http://rdsbakbucket-huhehaote-v2.oss-cn-huhehaote-internal.aliyuncs.com/custins424747958/hins100322105_data_20240110012135.rdb`
             */
            BackupIntranetDownloadURL: string;
            /**
             * 该参数暂未生效，请忽略该参数。
             * @example `null`
             */
            RecoverConfigMode: string;
            /**
             * 本次备份开始时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2024-01-09T17:21:30Z`
             */
            BackupStartTime: string;
            /**
             * 本次备份结束时间，格式为<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2024-01-09T17:21:57`
             */
            BackupEndTime: string;
            /**
             * 备份文件大小，单位为Byte。
             * @example `1024`
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
             * 备份状态，返回值：
             * * **OK**：成功。
             * * **ERROR**：失败。
             * @example `OK`
             */
            BackupStatus: string;
            /**
             * 备份名称。
             * @example `hins100322105_data_20240110012135.rdb`
             */
            BackupName: string;
            /**
             * 数据库类型，返回值固定为**redis**。
             * @example `redis`
             */
            Engine: string;
            /**
             * 附加信息
             */
            ExtraInfo: {
                /**
                 * DB 的版本
                 * @example `5.0`
                 */
                CustinsDbVersion: string;
            };
        }[];
        /**
         * 备份进度，仅正在运行的备份才会显示进度
         * @example `100%`
         */
        Progress: string;
    }[];
}
