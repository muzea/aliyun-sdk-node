export interface SubmitAsyncTaskRequest {
    /**
     * 业务空间唯一标识：AgentKey
     * @example `2daaa2e0c209xb26acb97009ea77bd4b_p_efm`
     */
    "AgentKey": string;
    /**
     * 任务名称定义
     * @example `任务名称`
     */
    "TaskName"?: string;
    /**
     * 任务定义：详见任务定义表
     * @example `MaterialDocumentUpload`
     */
    "TaskCode": string;
    /**
     * 任务提交参数
     * @example `{"fileUrl":"https://www.example.com/aaa.doc","fileName":"文件名称","shareAttr":1}`
     */
    "TaskParam"?: string;
    /**
     * 任务执行时间，默认立即执行。格式：YYYY-MM-DD HH:mm:ss
     * @example `2023-10-14 14:30:00`
     */
    "TaskExecuteTime"?: string;
}
