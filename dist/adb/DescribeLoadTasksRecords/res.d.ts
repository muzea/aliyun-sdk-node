export interface DescribeLoadTasksRecordsResponse {
    /**
     * 任务总数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 本页记录数。
     * @example `30`
     */
    PageSize: string;
    /**
     * 请求ID。
     * @example `C60B05DB-2B77-421A-98E9-92C20E******`
     */
    RequestId: string;
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: string;
    /**
     * 集群ID。
     * @example `am-bp2590j****`
     */
    DBClusterId: string;
    /**
     * 任务信息列表。
     */
    LoadTasksRecords: {
        /**
         * 异步导入导出任务中使用的SQL语句详情。
         * @example `insert overwrite into courses_external_table\nselect * from courses`
         */
        Sql: string;
        /**
         * 任务状态。
         * @example `FINISH`
         */
        State: string;
        /**
         * 任务开始时间，精确到毫秒，格式为<i>yyyy-MM-ddTHH:mm:ss.SSSZ</i>。
         * @example `2021-05-18 18:47:27.0`
         */
        CreateTime: string;
        /**
         * 导入导出任务涉及的数据库名称。
         * @example `adb_demo`
         */
        DBName: string;
        /**
         * 进程ID。
         * @example `2021051818472717201616624903453******`
         */
        ProcessID: string;
        /**
         * 任务状态的更新时间，精确到毫秒，格式为<i>yyyy-MM-ddTHH:mm:ss.SSSZ</i>。
         * @example `2021-05-18 18:47:31.0`
         */
        UpdateTime: string;
        /**
         * 任务ID。
         * @example `2021051818472717201616624903453******`
         */
        JobName: string;
        /**
         * 异步导入导出任务所处理的数据行数。
         * @example `6`
         */
        ProcessRows: number;
    }[];
}
