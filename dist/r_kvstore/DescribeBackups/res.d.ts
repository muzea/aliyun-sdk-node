export interface DescribeBackupsResponse {
    /**
     * 请求ID。
     * @example `963C20F0-7CE1-4591-AAF3-6F3CD1CE****`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 每页最大记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 备份总个数。
     * @example `5`
     */
    TotalCount: number;
    /**
     * 当前实例全量备份文件的大小，单位是字节。全量备份来源于每天定时备份、手动备份、缓存分析时生成的备份等。
     * > 该值和当前请求所响应的备份集数量以及大小无关，而是该实例当前所有有效全量备份的大小。
     * @example `1000`
     */
    FullStorageSize: number;
    /**
     * 当前实例日志备份文件的大小，单位是字节，当且仅当开启闪回时才有效。
     * > 该值和当前请求所响应的备份集数量以及大小无关，而是该实例当前所有有效日志备份的大小。
     * @example `5000`
     */
    LogStorageSize: number;
    /**
     * <props="china">该实例的免费备份额度，单位是字节，免费额度为实例规格默认内存量，更多信息请参见[备份商业化通知](~~2664017~~)。
     * 全量备份和日志备份共享该免费额度。当变配实例规格时，实例的免费额度会产生变化。</props>
     * <props="intl">该参数未生效，请忽略该参数。</props>
     * @example `100000`
     */
    FreeSize: number;
    Backups: {
        /**
         * 备份集详情。
         */
        Backup: {
            /**
             * 备份状态，返回值：
             * * **Success**：成功。
             * * **Failed**：失败。
             * @example `Success`
             */
            BackupStatus: string;
            /**
             * 备份开始时间。
             * @example `2019-03-14T05:28:50Z`
             */
            BackupStartTime: string;
            /**
             * 备份类型，返回值：
             * * **FullBackup**：全量备份。
             * * **IncrementalBackup**：增量备份。
             * @example `FullBackup`
             */
            BackupType: string;
            /**
             * 备份文件的外网下载地址。
             * @example `https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/********`
             */
            BackupDownloadURL: string;
            /**
             * 节点ID。
             * > 当实例的架构为标准版时，本参数返回的是实例ID。
             * @example `r-bp10noxlhcoim2****-db-1`
             */
            NodeInstanceId: string;
            /**
             * 备份结束时间。
             * @example `2019-03-14T05:31:13Z`
             */
            BackupEndTime: string;
            /**
             * 备份文件ID。
             * @example `165*****50`
             */
            BackupId: number;
            /**
             * 备份的数据库，默认为**all**，即备份所有数据库。
             * @example `all`
             */
            BackupDBNames: string;
            /**
             * 引擎版本，即Redis实例的大版本。
             * @example `4.0`
             */
            EngineVersion: string;
            /**
             * 备份文件的内网下载地址。
             * > 您可以在与该Redis实例连通的ECS（二者需属于同地域的经典网络或者在同一VPC内）上使用该地址下载目标备份文件。
             * @example `https://rdsbak-hk45-v2.oss-cn-hongkong.aliyuncs.com/********`
             */
            BackupIntranetDownloadURL: string;
            /**
             * 备份文件大小。
             * @example `1024`
             */
            BackupSize: number;
            /**
             * 备份模式，返回值：
             * * **Automated**：自动备份。
             * * **Manual**：手动备份。
             *
             * @example `Automated`
             */
            BackupMode: string;
            /**
             * 备份方法，返回值：
             * * **Logical**：逻辑备份。
             * * **Physical**：物理备份。
             *
             * @example `Physical`
             */
            BackupMethod: string;
            /**
             * 备份任务ID。
             * @example `24340`
             */
            BackupJobID: number;
            RecoverConfigMode: string;
        }[];
    };
    /**
     * 本组参数已弃用，请忽略。
     */
    AccessDeniedDetail: {
        /**
         * 说明如上。
         * @example `-`
         */
        AuthAction: string;
        /**
         * 说明如上。
         * @example `-`
         */
        AuthPrincipalDisplayName: string;
        /**
         * 说明如上。
         * @example `-`
         */
        AuthPrincipalOwnerId: string;
        /**
         * 说明如上。
         * @example `-`
         */
        AuthPrincipalType: string;
        /**
         * 说明如上。
         * @example `-`
         */
        EncodedDiagnosticMessage: string;
        /**
         * 说明如上。
         * @example `-`
         */
        NoPermissionType: string;
        /**
         * 说明如上。
         * @example `-`
         */
        PolicyType: string;
    };
}
