interface DeleteScheduledTaskRequest {
    "RegionId"?: string;
    /**
    * 定时任务的ID。
    * @example `edRtShc57WGXdt8TlPbr****`
    */ "ScheduledTaskId": string;
    /**
    * @example `123456123456`
    */ "OwnerId"?: number;
}
export { DeleteScheduledTaskRequest };