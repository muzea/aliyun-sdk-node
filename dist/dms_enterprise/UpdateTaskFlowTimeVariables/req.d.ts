export interface UpdateTaskFlowTimeVariablesRequest {
    /**
     * 租户ID。
     * > 鼠标移动到界面右上角的头像处，查看租户ID。具体操作，请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可调用[GetTaskInstanceRelation](~~424711~~)接口获取该参数的值。
     * @example `43****`
     */
    "DagId": number;
    /**
     * 任务流时间变量。
     * @example `{"variables":[ {"name":"var", "pattern":"yyyy-MM-dd|+0m+0h-2d+0w+0M+1y"} ]}`
     */
    "TimeVariables": string;
}
