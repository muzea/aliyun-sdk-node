export interface GetMPUTaskStatusRequest {
    /**
     * 应用ID，仅支持传单个ID。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID，仅支持传单个ID，和[StartMpuTask](~~93183~~)入参TaskId一致。
     * @example `yourTaskId`
     */
    "TaskId": string;
}
