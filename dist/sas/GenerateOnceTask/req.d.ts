export interface GenerateOnceTaskRequest {
    /**
     * 任务类型。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端问题诊断任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSET\_SECURITY\_CHECK**：资产采集任务
     * @example `CLIENT_PROBLEM_CHECK`
     */
    "TaskType": string;
    /**
     * 任务名称。取值：
     * - **CLIENT\_PROBLEM\_CHECK**：客户端问题诊断任务
     * - **CLIENT\_DEV\_OPS**：云运维任务
     * - **ASSET\_SECURITY\_CHECK**：资产采集任务
     * @example `CLIENT_PROBLEM_CHECK`
     */
    "TaskName": string;
    /**
     * 扩展信息字段。
     * @example `{"mode":1,"problemType":"offline","uuids":"inet-795dcad1-360f-49d2-b01e-b7da7f1c****"}`
     */
    "Param": string;
    /**
     * 增加任务的来源。
     * @example `Manual`
     */
    "Source"?: string;
}
