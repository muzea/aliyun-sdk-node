export interface ListDBTaskSQLJobResponse {
    /**
     * 请求ID。
     * @example `F6C47680-8D2D-43A4-8902-F2740D71A398`
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
     * SQL任务列表。
     */
    DBTaskSQLJobList: {
        /**
         * SQL任务ID。
         * @example `12****`
         */
        JobId: number;
        /**
         * SQL任务类型。
         * @example `STRUCT_SYNC`
         */
        JobType: string;
        /**
         * SQL任务备注信息。
         * @example `test`
         */
        Comment: string;
        /**
         * 库搜索名。
         * > 建议您的业务不要强依赖该参数，后续版本的格式可能会发生变化。
         * @example `test@xxx:3306[test]`
         */
        DbSearchName: string;
        /**
         * 库ID。
         * @example `43214523`
         */
        DbId: number;
        /**
         * 是否为逻辑库，取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        Logic: boolean;
        /**
         * 创建时间。
         * @example `2021-02-18 17:49:20`
         */
        CreateTime: string;
        /**
         * 最后执行时间。
         * @example `2021-02-18 17:49:31`
         */
        LastExecTime: string;
        /**
         * SQL任务分组ID。
         * @example `432****`
         */
        DbTaskGroupId: number;
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
        Status: string;
        /**
         * 是否以事务方式执行，取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        Transactional: boolean;
    }[];
    /**
     * SQL任务列表总数。
     * @example `1`
     */
    TotalCount: number;
}
