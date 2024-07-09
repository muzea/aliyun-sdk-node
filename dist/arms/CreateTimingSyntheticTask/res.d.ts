export interface CreateTimingSyntheticTaskResponse {
    /**
     * 请求ID。
     * @example `53B5874D-EBC1-5567-B787-E4B7267F5CEB`
     */
    RequestId: string;
    /**
     * 操作是否成功：true：操作成功                                 false：操作失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 云拨测任务ID。
         * @example `5308a2691f59422c8c3b7aeccec9cd3b`
         */
        TaskId: string;
        /**
         * 任务状态。取值：
         * - **INIT**：新建任务。
         * - **RELEASE**：解析中。
         * - **RUNNING**：运行中。
         * - **STOP**：暂停。
         * - **SYSTEM_STOP**：系统暂停。
         * - **CANCEL**：取消。
         * - **SYSTEM_CANCEL**：系统取消。
         * - **DONE**：已经完成。
         * @example `RUNNING`
         */
        Status: string;
    };
}
