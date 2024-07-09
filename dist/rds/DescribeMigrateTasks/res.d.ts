export interface DescribeMigrateTasksResponse {
    /**
     * 实例ID。
     * @example `rm-uf6wjk5****`
     */
    DBInstanceId: string;
    /**
     * 获取第几页的数据。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `4E356DDF-6B83-45DB-99D5-4B1E8A0D286B`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `10`
     */
    PageRecordCount: number;
    /**
     * 满足条件的总的记录数。
     * @example `30`
     */
    TotalRecordCount: number;
    Items: {
        /**
         * 备份数据上云任务信息列表。
         */
        MigrateTask: {
            /**
             * 备份数据上云任务结束时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-05-30T13:11:04Z`
             */
            EndTime: string;
            /**
             * 备份数据上云任务的状态，取值：
             * * **NoStart**：未开始
             * * **Running**：运行中
             * * **Success**：成功
             * * **Failed**：失败
             * * **Waiting**：等待（等待增量备份文件导入）
             * @example `Success`
             */
            Status: string;
            /**
             * 备份数据上云任务的描述信息。
             * @example `Api description`
             */
            Description: string;
            /**
             * 备份数据上云任务创建时间。格式：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2017-05-30T12:11:04Z`
             */
            CreateTime: string;
            /**
             * 数据库名称。
             * @example `testDB`
             */
            DBName: string;
            /**
             * 备份数据上云任务类型，取值：
             * * **FULL**：表示通过全量备份文件去执行还原操作。
             * * **UPDF**：表示通过增量文件或者日志文件去还原增量部分的数据。
             * @example `FULL`
             */
            BackupMode: string;
            /**
             * 备份数据上云任务的ID。
             * @example `564522545`
             */
            MigrateTaskId: string;
            /**
             * 是否是覆盖性导入。
             * @example `True`
             */
            IsDBReplaced: string;
        }[];
    };
}
