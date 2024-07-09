export interface DeleteScheduledTaskRequest {
    /**
     * 定时任务的ID。由系统生成，全局唯一。
     * @example `edRtShc57WGXdt8TlPbr****`
     */
    "ScheduledTaskId": string;
    /**
     * 定时任务所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
