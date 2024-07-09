export interface CreateSimilarSecurityEventsQueryTaskResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5861EE3E-F0B3-48B8-A5DC-A5080BFBE052`
     */
    RequestId: string;
    /**
     * 创建查询同类告警事件任务的返回信息。
     */
    CreateSimilarSecurityEventsQueryTaskResponse: {
        /**
         * 任务状态。取值：
         * - **New**：新增
         * - **RetrievingData**：数据提取中
         * - **DataRetrieved**：数据提取成功
         * - **Processing**：任务处理中
         * - **Success**：任务执行成功
         * - **Failed**：任务执行失败
         * - **PartialFailed**：任务执行部分失败
         * @example `New`
         */
        Status: string;
        /**
         * 本次任务的ID。
         * @example `2915`
         */
        TaskId: number;
    };
}
