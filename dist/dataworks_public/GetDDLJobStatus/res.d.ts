export interface GetDDLJobStatusResponse {
    /**
     * 请求ID。
     * @example `abc`
     */
    RequestId: string;
    /**
     * 任务的详情。
     */
    Data: {
        /**
         * 任务的状态。
         * @example `success`
         */
        Status: string;
        /**
         * 正在进行的TaskID。如果为空，说明全部任务已经结束。
         * @example `abc1`
         */
        NextTaskId: string;
        /**
         * 任务的ID。
         * @example `abc`
         */
        TaskId: string;
        /**
         * 任务的内容。
         * @example `success`
         */
        Content: string;
    };
}
