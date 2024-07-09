export interface DeleteTableResponse {
    /**
     * 请求ID。
     * @example `abcde`
     */
    RequestId: string;
    /**
     * 删除表的任务信息。
     */
    TaskInfo: {
        /**
         * 已经结束的任务状态。
         * @example `success`
         */
        Status: string;
        /**
         * 正在运行的任务ID。
         * @example `abc1`
         */
        NextTaskId: string;
        /**
         * 已经结束的任务ID。
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
