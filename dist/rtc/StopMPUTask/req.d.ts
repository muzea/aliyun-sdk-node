export interface StopMPUTaskRequest {
    /**
     * 应用ID，仅支持传单个ID。
     * > 您可以在[控制台](https://rtc.console.aliyun.com/manage/list#/manage/list)创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID，仅支持传单个ID，和[StartMpuTask](~~93183~~)入参TaskId一致。
     * @example `yourTaskId`
     */
    "TaskId": string;
}
