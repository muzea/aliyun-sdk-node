export interface CreateTableResponse {
    /**
     * 请求ID。
     * @example `abcdef`
     */
    RequestId: string;
    /**
     * 请求任务的信息。
     * 请求任务提交成功后，会被分为多个子任务有序执行。当前子任务执行成功后，才会继续执行下一个子任务，所有子任务执行完毕，该请求任务结束。
     * 如下情况，请求任务会终止，您需要根据错误码信息解决问题后重新发起请求任务：
     * - 请求任务提交失败。
     * - 请求任务提交成功后，任意子任务执行失败。
     */
    TaskInfo: {
        /**
         * 当前执行的子任务的状态信息。取值如下：
         * - operating表示子任务正在执行中。
         * - success表示子任务执行成功。
         * - failure表示子任务执行失败。详细的报错信息请参见Content参数。
         * @example `success`
         */
        Status: string;
        /**
         * 即将执行的子任务ID。如果该字段为空，则表示所有子任务均已结束。
         * @example `abc1`
         */
        NextTaskId: string;
        /**
         * 当前执行的子任务ID。
         * @example `abc`
         */
        TaskId: string;
        /**
         * 当前子任务的执行状态详细信息。具体如下：
         * - 执行成功，则显示success。
         * - 执行失败则显示对应的报错详情。
         * @example `success`
         */
        Content: string;
    };
}
