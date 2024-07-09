export interface CreateFlowControlTaskResponse {
    /**
     * 返回参数。
     */
    result: {
        /**
         * 流量调控任务ID。
         * @example `1667297014460`
         */
        taskId: string;
        /**
         * 实例最后更新时间，单位为UTC时间。
         * @example `2018-12-06T11:17:49.000Z`
         */
        gmtModified: string;
        /**
         * 任务状态。
         * 取值：
         * - **DRAFT**：草稿。
         * - **READY**：待生效。
         * - **RUNNING**：运行中。
         * - **ENDED**：结束。
         * @example `DRAFT`
         */
        status: string;
        /**
         * 创建时间的UTC时间。
         * @example `2020-04-27T06:38:28.000Z`
         */
        gmtCreate: string;
    };
    /**
     * 状态码。
     * @example `200`
     */
    code: string;
    /**
     * 请求ID。
     * @example `EDF43C1F-99E4-431F-A7C0-8B260A5A792E`
     */
    requestId: string;
    /**
     * 错误信息。
     * @example `An internal server error occurred`
     */
    message: string;
}
