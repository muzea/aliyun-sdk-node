export interface CreateTaskRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `7***`
     */
    "DagId": number;
    /**
     * 任务节点名称。
     * @example `zhttest`
     */
    "NodeName": string;
    /**
     * 任务节点类型，取值请参见[NodeType参数说明](~~424705~~)。
     * @example `36`
     */
    "NodeType": string;
    /**
     * 节点配置内容。
     * @example `test`
     */
    "NodeContent"?: string;
    /**
     * 节点变量（时间变量配置）。
     * @example `test`
     */
    "TimeVariables"?: string;
    /**
     * 任务输出变量。
     * @example `test`
     */
    "NodeOutput"?: string;
    /**
     * 节点在图上的显示位置。
     * @example `test`
     */
    "GraphParam"?: string;
}
