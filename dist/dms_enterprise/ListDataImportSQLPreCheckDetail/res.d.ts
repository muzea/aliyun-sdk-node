export interface ListDataImportSQLPreCheckDetailResponse {
    /**
     * 请求ID。可用于定位日志，排查问题。
     * @example `31853A2B-DC9D-5B39-8492-D2AC8BCF550E`
     */
    RequestId: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功。
     * - **false**：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 预检查SQL详情列表。
     */
    PreCheckSQLDetailList: {
        /**
         * SQL ID，表示是第几个SQL，从1开始。
         * @example `1`
         */
        SqlId: number;
        /**
         * SQL类型。例如DELETE、UPDATE、ALTER_TABLE等。
         * @example `INSERT`
         */
        SqlType: string;
        /**
         * 工单状态。取值如下：
         * - **INIT**：初始化。
         * - **RUNNING**：执行中。
         * - **SUCCESS**：已完成。
         * - **TIMEOUT**：超时跳过。
         * - **FAIL**：已失败。
         * @example `SUCCESS`
         */
        StatusCode: string;
        /**
         * 是否存在跳过预检查SQL的情况。取值如下：
         * - **true**：存在。
         * - **false**：不存在。
         * @example `true`
         */
        Skip: boolean;
    }[];
    /**
     * SQL条数。
     * @example `1`
     */
    TotalCount: number;
}
