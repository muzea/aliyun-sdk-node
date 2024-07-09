export interface DescribeVpnSslServerLogsResponse {
    /**
     * 每页包含的条目数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `DEDAC5B1-9292-5BF7-BDDF-61BA58CFB2FB`
     */
    RequestId: string;
    /**
     * 日志条目数。
     * @example `10`
     */
    Count: number;
    /**
     * 查询的日志是否精确。取值：
     * - **true**：精确。
     * - **false**：不精确。
     * @example `true`
     */
    IsCompleted: boolean;
    Data: {
        /**
         * 数组，数组中的每一项都为一条日志。
         */
        Logs: string[];
    };
}
