export interface ListTaskResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 下一页标识。如果存在下一页，服务会返回NextToken值，下次请求时传入。
     * NextToken值有效时间为1分钟。失效后，将返回对应的错误码。
     * @example `223sdf***`
     */
    NextToken: string;
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
    Data: {
        /**
         * 调用成功时，返回任务下作业详情，请参见以下参数说明。
         */
        data: {
            /**
             * 任务作业的状态。
             * - **QUEUED**：待调度。
             * - **SENT**：已调度。
             * - **IN_PROGRESS**：执行中。
             * - **FAILED**：失败。
             * - **REJECTED**：已拒绝。
             * - **TIMED_OUT**：已超时。
             * - **SUCCEEDED**：成功。
             * - **CANCELLED**：已取消。
             * @example `SUCCEEDED`
             */
            Status: string;
            /**
             * 作业的排队时间。
             * @example `2019-05-21T13:03:53.000Z`
             */
            UtcQueueTime: string;
            /**
             * 设备所属产品的ProductKey。
             * @example `a1S0OM***`
             */
            ProductKey: string;
            /**
             * 任务下作业执行进度。
             * @example `80`
             */
            Progress: string;
            /**
             * 设备名称。
             * @example `mydevice`
             */
            DeviceName: string;
            /**
             * 任务名称。
             * @example `MyTestJobIax6Eq`
             */
            JobName: string;
            /**
             * 作业信息的修改时间。
             * @example `2019-05-21T13:03:56.000Z`
             */
            UtcModified: string;
            /**
             * 任务ID。任务的全局唯一标识符。
             * @example `sGWotg***010001`
             */
            JobId: string;
            /**
             * 任务下作业的ID。作业的全局唯一标识符。
             * @example `MSnT9wl***q010101`
             */
            TaskId: string;
            /**
             * 物联网平台为该设备颁发的ID，作为该设备的唯一标识符。
             * @example `BDjhIC***i000101`
             */
            IotId: string;
        }[];
    };
}
