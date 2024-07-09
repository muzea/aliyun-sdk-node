export interface UpdateTaskConfigRequest {
    /**
     * 租户ID，可通过调用[GetUserActiveTenant](~~198073~~)或[ListUserTenants](~~198074~~)接口获取该参数的值。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务节点ID，可调用[GetTaskInstanceRelation](~~424711~~)接口获取该参数的值。
     * @example `43****`
     */
    "NodeId": string;
    /**
     * 节点高级配置。取值为JSON字符串格式。
     * @example `{ "rerun":{ "rerunEnable":true,  "rerunCount":1,   "rerunInterval":10 } }`
     */
    "NodeConfig": string;
}
