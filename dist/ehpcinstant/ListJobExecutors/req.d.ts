export interface ListJobExecutorsRequest {
    /**
     * 作业ID。
     * @example `job-xxx`
     */
    "JobId"?: string;
    /**
     * 作业名称。
     * @example `task0`
     */
    "TaskName"?: string;
    /**
     * 每页显示条数。
     * @example `10`
     */
    "PageSize"?: string;
    /**
     * 分页查询的页码。
     * @example `1`
     */
    "PageNumber"?: string;
}
