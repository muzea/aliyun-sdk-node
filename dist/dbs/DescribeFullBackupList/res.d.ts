export interface DescribeFullBackupListResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 页码。
     * @example `1`
     */
    PageNum: number;
    /**
     * 请求ID。
     * @example `636BC118-6080-4119-A6B5-C199CEC1037D`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `Param.NotFound`
     */
    ErrCode: string;
    /**
     * 是否执行成功。返回值：
     * - **true**：执行成功。
     * - **false**：执行失败。
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
     * 总全量备份任务数。
     * @example `1`
     */
    TotalElements: number;
    /**
     * 每页的记录数。
     * @example `10`
     */
    PageSize: number;
    Items: {
        /**
         * 全量备份任务详情。
         */
        FullBackupFile: {
            /**
             * 任务结束时间戳。
             * @example `1676887128000`
             */
            FinishTime: number;
            /**
             * 备份任务状态，取值：
             * - schedule：初始化中
             * - running：运行中
             * - finish：完成
             * - stop：失败
             * - pause：暂停
             * @example `finish`
             */
            BackupStatus: string;
            /**
             * 数据库连接地址。
             * @example `121.XXX.XXX.144:3306`
             */
            SourceEndpointIpPort: string;
            /**
             * 任务开始时间戳。
             * @example `1676886947000`
             */
            CreateTime: number;
            /**
             * 错误信息。
             * @example `NULL`
             */
            ErrMessage: string;
            /**
             * 备份对象。
             * @example `[{\"DBName\":\"test\"}]`
             */
            BackupObjects: string;
            /**
             * 备份结束时间戳。
             * @example `1676887128000`
             */
            EndTime: number;
            /**
             * 备份开始时间。
             * @example `1676887100000`
             */
            StartTime: number;
            /**
             * 备份集保留到期时间戳。
             * @example `1677491900000`
             */
            BackupSetExpiredTime: number;
            /**
             * 存储类型，取值：
             * - Standard：标准存储
             * - IA：低频访问存储
             * - Archive：归档存储
             * - UNKNOWN：未知，通常是任务未完成时的状态
             * @example `Standard`
             */
            StorageMethod: string;
            /**
             * 备份集ID。
             * @example `1iukx5h******`
             */
            BackupSetId: string;
            /**
             * 备份大小。
             * @example `580`
             */
            BackupSize: number;
        }[];
    };
}
