export interface GetDataCorrectTaskDetailResponse {
    /**
     * 请求ID。
     * @example `B5FD0BC8-2D90-4478-B8EC-A0E92E0B1773`
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
     * 变更任务执行详情。
     */
    DataCorrectTaskDetail: {
        /**
         * SQL任务分组ID。
         * @example `1234235`
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
         * @example `2021-03-05 15:08:55`
         */
        CreateTime: string;
    };
}
