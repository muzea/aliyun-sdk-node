export interface DescribeIncrementBackupListResponse {
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
     * @example `A5D52069-E8AA-5056-8C5C-654C3610****`
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
     * @example `The specified parameter %s value is not valid.     `
     */
    ErrMessage: string;
    /**
     * 总页数。
     * @example `1`
     */
    TotalPages: number;
    /**
     * 增量备份任务总数。
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
         * 增量备份任务详情。
         */
        IncrementBackupFile: {
            /**
             * 备份结束时间戳。
             * @example `1648434713000`
             */
            EndTime: number;
            /**
             * 备份集保留到期时间戳。
             * @example `1711506719000`
             */
            BackupSetExpiredTime: number;
            /**
             * 备份开始时间戳。
             * @example `1648433764000`
             */
            StartTime: number;
            /**
             * 存储类型，返回值如下：
             * - **Standard**：标准存储
             * - **IA**：低频访问存储
             * - **Archive**：归档存储
             * - **UNKNOWN**：未知，通常是任务未完成时的状态
             * @example `Standard`
             */
            StorageMethod: string;
            /**
             * 备份集任务ID。
             * @example `1hv5g9wk4****`
             */
            BackupSetJobId: string;
            /**
             * 备份集ID。
             * @example `mysql-bin.00****`
             */
            BackupSetId: string;
            /**
             * 备份任务状态，返回值如下：
             * - **INIT**：未启动
             * - **FILLING**：备份中
             * - **COMPLETED**：完成
             * - **UNCOMPLETED**：未完成
             * @example `FILLING`
             */
            BackupStatus: string;
            /**
             * 数据库连接地址。
             * @example `172.1XX.103.1:4XXX`
             */
            SourceEndpointIpPort: string;
            /**
             * 备份大小。
             * @example `18535`
             */
            BackupSize: number;
        }[];
    };
}
