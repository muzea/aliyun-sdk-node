export interface QueryRtcAsrTasksRequest {
    /**
     * 要查询的任务id，不填写则查询用户uid下所有运行中的任务。
     * @example `asr-a6ac15e0-9118-4b4c-9e64-306163a0****`
     */
    "TaskId"?: string;
}
