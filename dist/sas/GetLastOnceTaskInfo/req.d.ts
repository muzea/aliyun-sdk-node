export interface GetLastOnceTaskInfoRequest {
    /**
     * 任务类型。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端问题诊断任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSETS_COLLECTION**：资产采集任务
     * @example `ASSETS_COLLECTION`
     */
    "TaskType": string;
    /**
     * 任务名称。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端问题诊断任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSETS_COLLECTION**：资产采集任务
     * @example `ASSETS_COLLECTION`
     */
    "TaskName": string;
    /**
     * 添加任务的来源。
     * @example `console_batch`
     */
    "Source"?: string;
}
