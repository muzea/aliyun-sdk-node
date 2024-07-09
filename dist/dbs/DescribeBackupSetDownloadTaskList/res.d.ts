export interface DescribeBackupSetDownloadTaskListResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 页码。
     * @example `0`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `6DC3D286-E0E6-5988-A558-2184984B****`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `The specified parameter %s value is not valid.`
     */
    ErrMessage: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 总备份集下载记录数。
     * @example `1`
     */
    TotalElements: number;
    /**
     * 每页的记录数。
     * @example `30`
     */
    PageSize: number;
    Items: {
        /**
         * 备份计划详情。
         */
        BackupSetDownloadTaskDetail: {
            /**
             * 备份集下载状态，返回值如下：
             * - **checking**：预检查中
             * - **init**：预检查失败（未启动）
             * - **check_pass**：预检查通过
             * - **pause**：暂停
             * - **schedule**：等待调度
             * - **running**：运行中
             * - **stop**：失败
             * - **finish**：完成
             * @example `finish`
             */
            BackupSetDownloadStatus: string;
            /**
             * 备份集数据大小。
             * @example `237837`
             */
            BackupSetDataSize: number;
            /**
             * 备份集下载目标类型。
             * > 仅自动下载显示，agent表示已安装备份网关。
             * @example `无`
             */
            BackupSetDownloadTargetType: string;
            /**
             * 备份集下载服务器目录。
             * > 仅自动下载有值。
             * @example `无`
             */
            BackupSetDownloadDir: string;
            /**
             * 异常信息。
             * @example `java.lang.IndexOutOfBoundsException.`
             */
            ErrMessage: string;
            /**
             * 创建时间戳。
             * @example `1642044001000`
             */
            BackupSetDownloadCreateTime: number;
            /**
             * 备份计划ID。
             * @example `qhnuhyw3****`
             */
            BackupPlanId: string;
            /**
             * 数据库类型。
             * @example `MySQL`
             */
            BackupSetDbType: string;
            /**
             * 备份集公网下载地址。
             * > 仅手工下载类型，且转换完成的有值。
             * @example `"//dbs-137XXXX-cn-hangzhou-1hr5cpbtmXXXX.oss-cn-hangzhou.example"`
             */
            BackupSetDownloadInternetUrl: string;
            /**
             * 源备份集ID。
             * @example `1h7za2yws****`
             */
            BackupSetId: string;
            /**
             * 备份集内网下载地址。
             * > 仅手工下载类型，且转换完成的有值。
             * @example `"//dbs-13XXXX-cn-hangzhou-1hr5cpbtmXXXX.oss-cn-hangzhou-internal.example"`
             */
            BackupSetDownloadIntranetUrl: string;
            /**
             * 备份集备份网关，仅自动下载有值。
             * @example `无`
             */
            BackupGatewayId: number;
            /**
             * 下载类型，返回值如下：
             * - **manual**：手工
             * - **auto**：自动
             * @example `manual`
             */
            BackupSetDownloadWay: string;
            /**
             * 完成时间戳。
             * @example `1642044013000`
             */
            BackupSetDownloadFinishTime: number;
            /**
             * 源备份集任务类型，返回值如下：
             * - **cbs_backup_sub_full**：逻辑全量任务
             * - **cbs_backup_sub_cont**：逻辑增量任务
             * @example `cbs_backup_sub_cont`
             */
            BackupSetJobType: string;
            /**
             * 备份集下载任务ID。
             * @example `urxgrxt7****`
             */
            BackupSetDownloadTaskId: string;
            /**
             * 备份集下载任务名称。
             * @example `1h7za2yws****-ManualCont`
             */
            BackupSetDownloadTaskName: string;
            /**
             * 备份集下载数据格式，取值如下：
             * - **Native**
             * - **SQL**
             * - **CSV**
             * - **JSON**
             * @example `Native`
             */
            BackupSetDataFormat: string;
            /**
             * 源备份集编码。
             * @example `mysql-bin.00XXXX`
             */
            BackupSetCode: string;
        }[];
    };
}
