interface StopMPUTaskRequest {
    "RegionId"?: string;
    /**
    * 应用ID，创建应用后生成。
    * @example `yourAppId`
    */ "AppId": string;
    /**
    * 任务ID。
    * @example `yourTaskId`
    */ "TaskId": string;
    "OwnerId"?: number;
}
export { StopMPUTaskRequest };