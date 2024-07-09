export interface ListWorkflowInstancesResponse {
    /**
     * 下一次请求的分页token。
     * @example `123abc***`
     */
    nextToken: string;
    /**
     * 记录总数
     * @example `10`
     */
    totalSize: number;
    /**
     * 返回结果
     */
    data: {
        /**
         * 工作流实例ID
         * @example `wi-3q9jo749ne5****`
         */
        workflowInstanceId: string;
        /**
         * 工作流ID
         * @example `w-3q9jo749ne5****`
         */
        workflowId: string;
        /**
         * 工作流版本号
         * @example `1`
         */
        workflowVersion: number;
        /**
         * 工作流实例名称
         * @example `workflow_instance_name`
         */
        name: string;
        /**
         * 状态
         * @example `SUCCESS`
         */
        status: string;
        /**
         * 开始时间
         * @example `2024-01-01 00:00:00`
         */
        startTime: string;
        /**
         * 结束时间
         * @example `2024-01-01 00:00:00`
         */
        endTime: string;
        /**
         * 调度时间
         * @example `2024-01-01 00:00:00`
         */
        scheduleTime: string;
    }[];
    /**
     * 请求ID
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    requestId: string;
}
