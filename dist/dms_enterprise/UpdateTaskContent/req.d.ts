export interface UpdateTaskContentRequest {
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
     * 修改后的节点配置内容。
     * @example `{ "dbId":12****, "sql":"select * from test_table",   "dbType":"lindorm_sql"  }`
     */
    "NodeContent"?: string;
}
