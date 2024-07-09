export interface QueryJobStatisticsResponse {
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
     * 调用成功时，返回的作业状态详情，请参见以下参数说明。
     */
    Data: {
        /**
         * 对应任务下被设备拒绝的作业总数量。
         * @example `1`
         */
        Rejected: number;
        /**
         * 对应任务下执行超时的作业总数量。
         * @example `5`
         */
        TimeOut: number;
        /**
         * 对应任务下执行失败的作业总数量。
         * @example `1`
         */
        Failed: number;
        /**
         * 对应任务下待执行的作业总数量。
         * @example `2`
         */
        Queued: number;
        /**
         * 对应任务下执行成功的作业总数量。
         * @example `22`
         */
        Succeeded: number;
        /**
         * 对应任务下处于已推送状态的作业总数量。
         * @example `3`
         */
        Sent: number;
        /**
         * 对应任务下的作业总数量。
         * @example `50`
         */
        Total: number;
        /**
         * 对应任务下执行中的作业总数量。
         * @example `13`
         */
        InProgress: number;
        /**
         * 对应任务下被取消的作业总数量。
         * @example `3`
         */
        Cancelled: number;
    };
}
