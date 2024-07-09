export interface ListTaskExecutionsRequest {
    /**
     * 地域ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 执行ID
     * @example `exec-xxx`
     */
    "ExecutionId"?: string;
    /**
     * 执行状态，取值范围：Running, Started, Success, Failed, Waiting, Cancelled, Pending, Skipped。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 开始时间小于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "StartDateBefore"?: string;
    /**
     * 开始时间大于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "StartDateAfter"?: string;
    /**
     * 结束时间小于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "EndDateBefore"?: string;
    /**
     * 结束时间大于等于指定时间的执行
     * @example `2019-05-16T10:26:14Z`
     */
    "EndDateAfter"?: string;
    /**
     * 任务执行ID
     * @example `task-exec-xxx`
     */
    "TaskExecutionId"?: string;
    /**
     * 任务名称
     * @example `describeInstance`
     */
    "TaskName"?: string;
    /**
     * 任务动作
     * @example `ACS::Sleep`
     */
    "TaskAction"?: string;
    /**
     * 父任务执行ID。Loop情况会用到，一般是Loop的Parent的TaskExecutionId。
     * @example `task-exec-xxx`
     */
    "ParentTaskExecutionId"?: string;
    /**
     * 标记是否展示Loop产生的子Task。默认为False。
     * @example `false`
     */
    "IncludeChildTaskExecution"?: boolean;
    /**
     * 分页大小。取值范围：20-100。默认为50。
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 翻页标记的Token
     * @example `MTRBMDc0NjAtRUJFNy00N0NBLTk3NTctMTJDQzQ3NjFENDdB`
     */
    "NextToken"?: string;
    /**
     * 排序字段。取值范围：
     * - **StartDate**（默认值）：创建时间
     * - **EndDate**：结束时间
     * - **Status**：状态
     * @example `StartDate`
     */
    "SortField"?: string;
    /**
     * 排序方向。取值范围：
     * - **Ascending**：升序
     * - **Descending**（默认值）：降序
     * @example `Ascending`
     */
    "SortOrder"?: string;
}
