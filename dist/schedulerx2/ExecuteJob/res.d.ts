export interface ExecuteJobResponse {
    /**
     * 返回码。
     * @example `200`
     */
    Code: number;
    /**
     * 错误消息，仅出错时返回错误信息。
     * @example `groupid not exist groupId: testSchedulerx.defaultGroup namespace: adcfc35d-e2fe-4fe9-bbaa-20e90ffc****`
     */
    Message: string;
    /**
     * 请求唯一ID。
     * @example `4F68ABED-AC31-4412-9297-D9A8F0401108****`
     */
    RequestId: string;
    /**
     * 触发任务是否成功。取值如下：
     * - `true`：触发任务成功。
     * - `false`：触发任务失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 如果成功，会返回任务实例ID。
     */
    Data: {
        /**
         * 任务实例ID。
         * @example `11111111`
         */
        JobInstanceId: number;
    };
}
