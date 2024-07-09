export interface ListDDLPublishRecordsResponse {
    /**
     * 请求ID。
     * @example `A1549FB0-D4B8-4140-919F-17322C1072B8`
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
     * 发布记录列表。
     */
    DDLPublishRecordList: {
        /**
         * 审批状态，取值如下：
         * - **EXEMPT_PASS**：免批通过
         * - **TO_AUDIT**：等待审批
         * - **CANCEL**：撤销审批
         * - **SUCCESS**：审批通过
         * - **FAIL**：未通过
         * @example `CANCEL`
         */
        AuditStatus: string;
        /**
         * 审批过期时间。
         * @example `2020-12-14 20:52:38`
         */
        AuditExpireTime: string;
        /**
         * 工单创建人的用户ID（可通过[GetUser](~~147098~~)接口获取的UserId参数），非阿里云UID。
         * @example `1423`
         */
        CreatorId: number;
        /**
         * 是否终止，取值为：
         * - **true**：是
         * - **false**：否
         * > 导致终止的原因有审批撤回或在指定执行时间前未完成审批等。
         * @example `true`
         */
        Finality: boolean;
        /**
         * 终止原因。
         * @example `CANCEL`
         */
        FinalityReason: string;
        /**
         * 发布状态，取值如下：
         * - **START**：创建
         * - **ANALYZE**：分析
         * - **AUDIT**：审批
         * - **DISPATCH**：调度
         * - **SUCCESS**：成功
         * @example `AUDIT`
         */
        PublishStatus: string;
        /**
         * 风险等级，取值如下：
         * - **NONE_RISK**：无风险
         * - **LOW_RISK**：低风险
         * - **MIDDLE_RISK**：中风险
         * - **HIGH_RISK**：高风险
         * @example `LOW_RISK`
         */
        RiskLevel: string;
        /**
         * 发布状态描述。
         * @example `CANCEL`
         */
        StatusDesc: string;
        /**
         * 审批流ID。
         * @example `432153`
         */
        WorkflowInstanceId: number;
        /**
         * 发布备注
         * @example `发布备注`
         */
        Comment: string;
        /**
         * 发布任务信息列表。
         */
        PublishTaskInfoList: {
            /**
             * 数据库ID。
             * @example `4325`
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
             * 计划发布时间。
             * @example `2020-12-14 20:52:38`
             */
            PlanTime: string;
            /**
             * 发布策略，取值：
             * - **IMMEDIATELY**：立即执行
             * - **REGULARLY**：定时执行
             * @example `IMMEDIATELY`
             */
            PublishStrategy: string;
            /**
             * 状态描述。
             * @example `NONE`
             */
            StatusDesc: string;
            /**
             * 任务状态。
             * @example `NONE`
             */
            TaskJobStatus: string;
            /**
             * 发布任务列表。
             */
            PublishJobList: {
                /**
                 * 已经执行的SQL数量。
                 * @example `0`
                 */
                ExecuteCount: number;
                /**
                 * 变更脚本。
                 * @example `ALTER TABLE test_toolkit_rename_table_after_rename MODIFY COLUMN gmt_modified datetime NOT NULL`
                 */
                Scripts: string;
                /**
                 * 变更的表名。
                 * @example `test_toolkit_rename_table_after_rename`
                 */
                TableName: string;
                /**
                 * 状态描述。
                 * @example `NONE`
                 */
                StatusDesc: string;
                /**
                 * 发布任务状态，取值如下：
                 * - **NONE**：未知
                 * - **SUCCESS**：执行成功
                 * - **FAIL**：执行失败
                 * @example `NONE`
                 */
                TaskJobStatus: string;
                /**
                 * SQL任务分组ID。
                 * @example `423515`
                 */
                DBTaskGroupId: number;
            }[];
        }[];
    }[];
}
