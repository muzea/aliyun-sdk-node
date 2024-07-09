export interface DescribeSecurityEventOperationStatusResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `1683940A-E4AE-4473-8C40-F4075434B76B`
     */
    RequestId: string;
    /**
     * 安全告警事件处理状态的结果返回。
     */
    SecurityEventOperationStatusResponse: {
        /**
         * 处理安全告警事件的任务状态。
         * - **Processing**：处理中
         * - **Success**：处理成功
         * - **Failure**：处理失败
         * - **Pending**：等待中
         * @example `Success`
         */
        TaskStatus: string;
        /**
         * 相同安全告警事件处理状态列表。
         */
        SecurityEventOperationStatuses: {
            /**
             * 安全告警的处理状态。
             * - **Processing**：任务处理中
             * - **Success**：任务执行成功
             * - **Failed**：任务执行失败
             * @example `Success`
             */
            Status: string;
            /**
             * 安全告警事件的ID。
             * @example `12321`
             */
            SecurityEventId: string;
            /**
             * 处理安全告警事件的返回Code信息。
             * @example `ignore.Success`
             */
            ErrorCode: string;
        }[];
    };
}
