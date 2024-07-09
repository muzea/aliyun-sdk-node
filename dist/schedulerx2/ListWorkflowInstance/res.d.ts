export interface ListWorkflowInstanceResponse {
    /**
     * 请求唯一ID
     * @example `39090022-1F3B-4797-8518-6B61095F1AF0`
     */
    RequestId: string;
    /**
     * 返回码
     * @example `200`
     */
    Code: number;
    /**
     * API执行是否成功。取值如下：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息
     * @example `workflowId=xxx is not existed`
     */
    Message: string;
    /**
     * 工作流实例列表封装在data里
     */
    Data: {
        /**
         * 工作流实例的列表
         */
        WfInstanceInfos: {
            /**
             * 工作流实例ID
             * @example `123456`
             */
            WfInstanceId: number;
            /**
             * 工作流ID
             * @example `123`
             */
            WorkflowId: number;
            /**
             * 工作流实例状态，取值如下：
             * - 1: 等待中
             * - 2: 准备中
             * - 3：运行中
             * - 4：成功
             * - 5：失败
             * @example `5`
             */
            Status: number;
            /**
             * 开始时间
             * @example `2023-01-03 18:00:01`
             */
            StartTime: string;
            /**
             * 结束时间
             * @example `2023-01-03 18:00:21`
             */
            EndTime: string;
            /**
             * 计划调度时间
             * @example `2023-01-03 18:00:00`
             */
            ScheduleTime: string;
            /**
             * 数据时间
             * @example `2023-01-03 18:00:00`
             */
            DataTime: string;
        }[];
    };
}
