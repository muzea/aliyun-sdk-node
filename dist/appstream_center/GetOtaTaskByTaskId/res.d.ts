export interface GetOtaTaskByTaskIdResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 出错时的错误码。
     * @example `OtaTask.Running`
     */
    Code: string;
    /**
     * 出错时的错误消息。
     * @example `The task is running and cannot be sumitted.`
     */
    Message: string;
    /**
     * 版本说明，描述OTA升级的内容。
     * @example `测试升级`
     */
    ReleaseNote: string;
    /**
     * OTA版本。
     * @example `0.0.1-R-20220708.110604`
     */
    OtaVersion: string;
    /**
     * 任务执行时间，ISO 8601格式。
     * @example `2022-08-04T14:36:00+08:00`
     */
    TaskStartTime: string;
}
