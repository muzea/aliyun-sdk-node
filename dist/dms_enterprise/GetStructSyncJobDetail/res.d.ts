export interface GetStructSyncJobDetailResponse {
    /**
     * 请求ID。
     * @example `48602B78-0DDF-414C-8688-70CAB6070115`
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
     * 结构同步任务详情。
     */
    StructSyncJobDetail: {
        /**
         * 任务状态，取值和说明如下：
         * - **NEW**：新创建。
         * - **COMPARING**：正在对比结构。
         * - **COMPARE_BREAK**：对比手动中断。
         * - **COMPARE_FINISH**：对比完成。
         * - **NOT_SCRIPTS**：对比完成, 没有可执行脚本。
         * - **SUBMITED_DBTASK**：已提交DBTask。
         * - **DBTASK_SUCCESS**：DBTask执行成功。
         * - **SUBMITED_WORKFLOW**：提交审批。
         * - **WORKFLOW_SUCCESS**：审批结束。
         * @example `DBTASK_SUCCESS`
         */
        JobStatus: string;
        /**
         * 任务描述信息。
         * @example `test`
         */
        Message: string;
        /**
         * 已经分析的表。
         * @example `2`
         */
        TableAnalyzed: number;
        /**
         * 表的总数。
         * @example `2`
         */
        TableCount: number;
        /**
         * SQL总数。
         * @example `1`
         */
        SqlCount: number;
        /**
         * 已执行的SQL数量。
         * @example `1`
         */
        ExecuteCount: number;
        /**
         * 安全规则描述，取值：
         * - **CANNOT_SYNC**：不允许同步。
         * - **WITH_APPROVE**：需通过审批后进行同步，可调用[SubmitStructSyncOrderApproval](~~206166~~)接口发起审批流程。
         * - **WITHOUT_APPROVE**：不需要审批即可进行同步。
         * @example `WITHOUT_APPROVE`
         */
        SecurityRule: string;
        /**
         * SQL任务分组ID。
         * @example `12345`
         */
        DBTaskGroupId: number;
    };
}
