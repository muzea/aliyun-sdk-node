export interface StopRecordTaskRequest {
    /**
     * 应用ID。通过控制台创建和查询，仅支持传单个ID。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID。仅支持传单个ID，和[StartRecordTask](~~193528~~)入参TaskId一致。
     * @example `yourTaskId`
     */
    "TaskId": string;
}
