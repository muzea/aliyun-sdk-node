export interface GetDataCronClearTaskDetailListResponse {
    /**
     * 请求ID。
     * @example `C1D39814-9808-47F8-AFE0-AF167239AC9B`
     */
    RequestId: string;
    /**
     * 请求是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 历史数据清理任务执行列表。
     */
    DataCronClearTaskDetailList: {
        /**
         * SQL任务分组ID。
         * @example `432523`
         */
        DBTaskGroupId: number;
        /**
         * SQL详情状态，取值：
         * - **INIT**：初始化状态
         * - **PENDING**：等待任务抓取
         * - **BE_SCHEDULED**：待调度
         * - **FAIL**：执行失败
         * - **SUCCESS**：执行成功
         * - **PAUSE**：暂停
         * - **DELETE**：删除
         * - **RUNNING**：正在执行
         * @example `SUCCESS`
         */
        jobStatus: string;
        /**
         * 影响行数。
         * @example `1`
         */
        ActualAffectRows: number;
        /**
         * 任务创建时间。
         * @example `2021-01-14 10:00:00`
         */
        CreateTime: string;
    }[];
    /**
     * SQL任务列表总数。
     * @example `1`
     */
    TotalCount: number;
}
