export interface SubmitImportLogTasksResponse {
    /**
     * 请求返回值。
     */
    Data: {
        /**
         * 成功提交的日志接入任务数量。
         * @example `10`
         */
        Count: number;
    };
    /**
     * 请求消息ID。
     * @example `6276D891-*****-55B2-87B9-74D413F7****`
     */
    RequestId: string;
}
