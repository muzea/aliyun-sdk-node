export interface GetExecutionHistoryResponse {
    /**
     * 首次查询非必填，该字段是以返回的**ScheduleEventId**作为下次查询的Token；无数据时，该字段不返回。
     * @example `3`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `testRequestId`
     */
    RequestId: string;
    /**
     * 事件信息。
     */
    Events: {
        /**
         * 执行步骤类型。取值说明如下：
         * - **StepEntered**
         * - **StepStarted**
         * - **StepSucceeded**
         * - **StepFailed**
         * - **StepExited**
         * - **BranchEntered**
         * - **BranchExited**
         * - **IterationEntered**
         * - **IterationExited**
         * - **TaskScheduled**
         * - **TaskStarted**
         * - **TaskSubmitted**
         * - **TaskSubmitFailed**
         * - **TaskSucceeded**
         * - **TaskFailed**
         * - **TaskTimedOut**
         * - **ExecutionStarted**
         * - **ExecutionStopped**
         * - **ExecutionSucceeded**
         * - **ExecutionFailed**
         * - **ExecutionTimedOut**
         * @example `TaskSucceeded`
         */
        Type: string;
        /**
         * 执行步骤ID。
         * @example `2`
         */
        EventId: number;
        /**
         * 事件更新时间。
         * @example `2019-01-01T01:01:01.001Z`
         */
        Time: string;
        /**
         * 调度步骤ID。
         * @example `1`
         */
        ScheduleEventId: number;
        /**
         * 执行步骤详情。
         * @example `{}`
         */
        EventDetail: string;
        /**
         * 执行步骤名称。
         * @example `passStep`
         */
        StepName: string;
    }[];
}
