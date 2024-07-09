export interface QueryTaskResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `512FF8FD-A97F-4AAF-B0A2-7BE3D3A19BB3`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的作业详情，请参见以下参数说明。
     */
    Data: {
        /**
         * 作业的状态。
         * - **QUEUED**：待调度。
         * - **SENT**：已调度。
         * - **IN_PROGRESS**：执行中。
         * - **FAILED**：失败。
         * - **REJECTED**：已拒绝。
         * - **TIMED_OUT**：已超时。
         * - **SUCCEEDED**：已成功。
         * - **CANCELLED**：已取消。
         * @example `SUCCEEDED`
         */
        Status: string;
        /**
         * 作业的进度。
         * @example `80`
         */
        Progress: string;
        /**
         * 设备名称。
         * @example `mydevice`
         */
        DeviceName: string;
        /**
         * 任务执行的相关信息，例如执行的错误信息。
         * @example `this is message about task execution`
         */
        Message: string;
        /**
         * 作业的排队时间。
         * @example `2019-05-21T13:03:53.000Z`
         */
        UtcQueueTime: string;
        /**
         * 设备所属产品的ProductKey。
         * @example `a1S****`
         */
        ProductKey: string;
        /**
         * 作业所属任务的名称。
         * @example `MyTestJobIax6Eq`
         */
        JobName: string;
        /**
         * 作业信息的修改时间。
         * @example `2019-05-21T13:03:56.000Z`
         */
        UtcModified: string;
        /**
         * 作业所属任务的ID。
         * @example `sGWotgRkutxX*****`
         */
        JobId: string;
        /**
         * 任务作业执行过程中设备上报的信息。
         * @example `{ "msg":"this is message reported by device" }`
         */
        StatusDetail: string;
        /**
         * 作业ID。作业的全局唯一标识符。
         * @example `MSnT9***q010101`
         */
        TaskId: string;
        /**
         * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
         * @example `BDjhI****01`
         */
        IotId: string;
    };
}
