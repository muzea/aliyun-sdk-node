export interface GetTaskFlowNotificationResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `F19D575F-EBEA-5683-AFA3-A8F6D9A7DE03`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值说明如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 用户指定消息通知配置。
     */
    Notification: {
        /**
         * 任务流运行失败通知开关。返回值说明如下：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `true`
         */
        DagNotificationFail: boolean;
        /**
         * 任务流运行成功通知开关。返回值说明如下：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `true`
         */
        DagNotificationSuccess: boolean;
        /**
         * 任务流SLA通知全局开关。返回值说明如下：
         * - **true**：开启。
         * - **false**：关闭。
         * @example `true`
         */
        DagNotificationSla: boolean;
    };
}
