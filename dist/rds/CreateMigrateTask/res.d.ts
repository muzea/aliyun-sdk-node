export interface CreateMigrateTaskResponse {
    /**
     * 请求ID。
     * @example `866F5EB8-4650-4061-87F0-379F6F968BCE`
     */
    RequestId: string;
    /**
     * 数据库名称。
     * @example `test02`
     */
    DBName: string;
    /**
     * 迁移上云任务类型，取值为：
     * * **FULL**：通过全量备份文件去执行还原操作。
     * * **UPDF**：通过增量文件或者日志文件去还原增量部分的数据。
     * @example `FULL`
     */
    BackupMode: string;
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 迁移任务ID。
     * @example `564563****`
     */
    MigrateTaskId: string;
    /**
     * 任务ID。
     * @example `545****`
     */
    TaskId: string;
}
