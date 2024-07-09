export interface ListDBTaskSQLJobDetailResponse {
    /**
     * 请求ID。
     * @example `3F044E33-FE09-58F1-8C61-A0F612EC****`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息。
     * @example `JobId is mandatory for this action.`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `MissingJobId`
     */
    ErrorCode: string;
    /**
     * SQL任务详情列表。
     */
    DBTaskSQLJobDetailList: {
        /**
         * SQL任务详情ID。
         * @example `24723****`
         */
        JobDetailId: number;
        /**
         * 当前执行的SQL。
         * @example `update a set id = 1 where id  = 1;`
         */
        CurrentSql: string;
        /**
         * 执行次数。
         * @example `1`
         */
        ExecuteCount: number;
        /**
         * SQL任务ID。
         * @example `1276****`
         */
        JobId: number;
        /**
         * 物理库ID。
         * @example `1988****`
         */
        DbId: number;
        /**
         * 是否为逻辑库，返回值如下：
         * - **true**：逻辑库
         * - **false**：物理库
         * @example `false`
         */
        Logic: boolean;
        /**
         * 是否存在跳过执行SQL脚本的情况，返回值如下：
         * - **true**：存在
         * - **false**：不存在
         * @example `false`
         */
        Skip: boolean;
        /**
         * SQL类型，例如，DELETE、UPDATE、ALTER_TABLE等。
         * @example `CREATE_TABLE`
         */
        SqlType: string;
        /**
         * SQL详情状态，返回值如下：
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
         * 日志详情信息。
         * @example `log_info`
         */
        Log: string;
        /**
         * SQL执行开始时间。
         * @example `2021-12-16 00:00:00`
         */
        StartTime: string;
        /**
         * SQL执行结束时间。
         * @example `2021-12-16 00:00:01`
         */
        EndTime: string;
        /**
         * SQL执行耗时，单位为毫秒。
         * @example `38`
         */
        TimeDelay: number;
        /**
         * SQL执行影响行数。
         * @example `0`
         */
        AffectRows: number;
    }[];
    /**
     * SQL任务总数。
     * @example `1`
     */
    TotalCount: number;
}
