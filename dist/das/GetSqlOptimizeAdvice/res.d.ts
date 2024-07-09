export interface GetSqlOptimizeAdviceResponse {
    /**
     * 返回的状态码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回消息。
     * >请求成功时该参数返回Successful，请求失败时会返回请求异常信息（如错误码等）。
     * @example `Successful`
     */
    Message: string;
    /**
     * 详细信息列表，包括信息总数、错误码等。
     */
    Data: {
        /**
         * 任务运行状态：
         * - **INIT**：初始化。
         * - **RUNNING**：运行中。
         * - **FINISH**：完成。
         * - **FAILED**：失败。
         * @example `FINISH`
         */
        Status: string;
        /**
         * 任务状态码说明：
         * - **NO_DATA**：没有数据。
         * - **INTERNAL_ERROR**：内部错误。
         * - **SUCCESS**：成功。
         * @example `SUCCESS`
         */
        StatusCode: string;
        /**
         * 文件下载的链接。
         * @example `https://das-sql-optimize.oss-cn-shanghai.aliyuncs.com/adb/oss_sql_optimize_advice/1083*******`
         */
        DownloadUrl: string;
        /**
         * 任务创建时间，格式为Unix时间戳，单位为毫秒。
         * @example `1632303861000`
         */
        CreateTime: string;
        /**
         * 文件过期时间，格式为Unix时间戳，单位为毫秒。
         * >任务创建3天后，文件过期。
         * @example `1632563061000`
         */
        ExpireTime: string;
        /**
         * 任务ID。
         * @example `2021091710461519216****`
         */
        TaskId: string;
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
    Success: string;
}
