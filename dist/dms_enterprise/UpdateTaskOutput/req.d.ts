export interface UpdateTaskOutputRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务节点ID。可调用[GetTaskInstanceRelation](~~424711~~)接口获取此参数的值。
     * @example `14059`
     */
    "NodeId": string;
    /**
     * 任务输出变量。
     * @example `{“outputs”:[{"row":0, "column":-1,"combiner":","}"extractMethod":"{\"row\":0,\"column\":-1,\"combiner\":\",\"}",   "variableName":"var", // 变量  "description":"For demo" // 变量介绍}]}`
     */
    "NodeOutput"?: string;
}
