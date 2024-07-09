export interface CreateStorageAnalysisTaskResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 返回的数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `910f83f4b96df0524ddc5749f61539f8`
         */
        TaskId: string;
        /**
         * 创建任务是否成功：
         * - **true**：执行成功。
         * - **false**：执行失败。
         * @example `false`
         */
        CreateTaskSuccess: boolean;
        /**
         * 创建任务失败时的错误提示。
         * @example `unknown error`
         */
        ErrorMessage: string;
    };
    /**
     * 请求ID。
     * @example `B6D17591-B48B-4D31-9CD6-9B9796B2****`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: boolean;
}
