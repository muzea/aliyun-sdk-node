export interface CreateSqlLogTaskResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * > 请求成功时该参数返回**Successful**，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `83D9D59B-057A-54A9-BFF9-CF2B42F05645`
     */
    RequestId: string;
    /**
     * 请求是否执行成功：
     * - **true**：执行成功。
     * - **false**：执行失败。
     * @example `true`
     */
    Success: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 任务ID。
         * @example `54f8041743ca3a9ac5cb9342d050527c`
         */
        TaskId: string;
        /**
         * 数据库实例ID。
         * @example `pc-2ze8g2am97624****`
         */
        InstanceId: string;
        /**
         * 任务名称。
         * @example `Export_test`
         */
        Name: string;
        /**
         * 开始时间，格式为Unix时间戳，单位为毫秒。
         * @example `1596177993000`
         */
        Start: number;
        /**
         * j结束时间，格式为Unix时间戳，单位为毫秒。
         * @example `1608888296000
        `
         */
        End: number;
        /**
         * 任务状态。
         * - **INIT**：待调度。
         * - **RUNNING**：运行中。
         * - **FAILED**：失败。
         * - **CANCELED**：已取消。
         * - **COMPLETED**：完成。
         * > 当任务处于**COMPLETED**时，可以查看任务的结果。
         * @example `COMPLETED`
         */
        Status: string;
        /**
         * 任务创建时间，格式为unix时间戳，单位为毫秒。
         * @example `1681363254423
        `
         */
        CreateTime: number;
    };
}
