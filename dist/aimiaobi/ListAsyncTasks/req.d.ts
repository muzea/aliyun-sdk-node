export interface ListAsyncTasksRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `cd327c3d5d5e44159cc716e23bfa530e_p_beebot_public`
     */
    "AgentKey": string;
    /**
     * 任务名称精确查询
     * @example `任务名称`
     */
    "TaskName"?: string;
    /**
     * 任务Code精确查询
     * @example `MaterialDocumentUpload`
     */
    "TaskCode"?: string;
    /**
     * 任务类型精确查询
     * @example `暂无`
     */
    "TaskType"?: string;
    /**
     * 任务状态精确查询 (0: 待执行, 1: 执行中, 2: 成功, 3: 暂停, 4: 失败可重试, 5: 失败不可重试, 6: 取消)
     * @example `1`
     */
    "TaskStatus"?: number;
    /**
     * 任务状态列表精确查询 (0: 待执行, 1: 执行中, 2: 成功, 3: 暂停, 4: 失败可重试, 5: 失败不可重试, 6: 取消)
     */
    "TaskStatusList"?: number[];
    /**
     * 任务类型列表精确查询
     */
    "TaskTypeList"?: string[];
    /**
     * 任务创建时间 开始查询,格式为：YYYY-MM-DD HH:mm:ss
     * @example `2023-02-19 07:28:11`
     */
    "CreateTimeStart"?: string;
    /**
     * 任务创建时间 结束查询,格式为：YYYY-MM-DD HH:mm:ss
     * @example `2023-03-18 02:00:00`
     */
    "CreateTimeEnd"?: string;
    /**
     * 当前页码
     * @example `1`
     */
    "Current"?: number;
    /**
     * 每页条数：默认10
     * @example `10`
     */
    "Size"?: number;
}
