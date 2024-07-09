export interface UpdateTaskTimeVariablesRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务节点ID，可调用[GetTaskInstanceRelation](~~424711~~)接口获取该参数的值。
     * @example `43****`
     */
    "NodeId": string;
    /**
     * 节点变量，时间变量配置。取值类型为JSON格式的字符串。
     * @example `{"variables":[ {"name":"var", "pattern":"yyyy-MM-dd|+0m+0h-2d+0w+0M+1y"} ]}`
     */
    "TimeVariables": string;
}
