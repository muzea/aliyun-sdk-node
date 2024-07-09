export interface DescribeMigrateTaskByIdResponse {
    /**
     * 备份数据上云任务的状态，取值：
     * - **NoStart**：未开始
     * - **Running**：运行中
     * - **Success**：成功
     * - **Failed**：失败
     * - **Waiting**：等待增量备份文件导入
     * @example `Success`
     */
    Status: string;
    /**
     * 备份数据上云任务结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2021-05-30T15:15:05Z`
     */
    EndTime: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceName: string;
    /**
     * 请求ID。
     * @example `6ED3635A-01F9-47BD-B9C8-CB3FD70A336E`
     */
    RequestId: string;
    /**
     * 备份数据上云任务的描述信息。
     * @example `Success to DBCC checkdb asynchronously`
     */
    Description: string;
    /**
     * 备份数据上云任务创建时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2020-05-30T12:11:04Z`
     */
    CreateTime: string;
    /**
     * 数据库名称。
     * @example `mytestdb`
     */
    DBName: string;
    /**
     * 备份数据上云任务类型，取值：
     * - **FULL**：表示通过全量备份文件去执行还原操作。
     * - **UPDF**：表示通过增量文件或者日志文件去还原增量部分的数据。
     * @example `FULL`
     */
    BackupMode: string;
    /**
     * OSS备份上云任务的ID。
     * @example `235943`
     */
    MigrateTaskId: string;
    /**
     * 是否是覆盖性导入。取值：
     * - **False**：否
     * - **True**：是
     * @example `False`
     */
    IsDBReplaced: string;
}
