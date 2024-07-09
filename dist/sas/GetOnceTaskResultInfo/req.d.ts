export interface GetOnceTaskResultInfoRequest {
    /**
     * 任务类型。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSET\_SECURITY\_CHECK**：资产采集任务
     * @example `ASSETS_COLLECTION`
     */
    "TaskType": string;
    /**
     * 任务名称。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSET\_SECURITY\_CHECK**：资产采集任务
     * @example `ASSETS_COLLECTION`
     */
    "TaskName": string;
    /**
     * 扫描任务ID。
     * @example `9dfa3a7eb9547781632785b49003****`
     */
    "TaskId": string;
}
