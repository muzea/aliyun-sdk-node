export interface DescribeSessionStatisticResponse {
    /**
     * 总数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 请求ID。
     * @example `C5528624-C6ED-5CA4-A4A2-7C30DBF2****`
     */
    RequestId: string;
    /**
     * 统计信息。
     */
    Statistic: {
        /**
         * 时间点。
         * @example `1690164443508`
         */
        TimePoint: number;
        /**
         * 区间内会话总数。
         * @example `4`
         */
        Count: number;
    }[];
}
