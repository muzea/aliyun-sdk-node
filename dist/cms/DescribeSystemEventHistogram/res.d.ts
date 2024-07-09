export interface DescribeSystemEventHistogramResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `486029C9-53E1-44B4-85A8-16A571A043FD`
     */
    RequestId: string;
    /**
     * 操作是否成功。true表示成功，false表示失败。
     * @example `true`
     */
    Success: string;
    SystemEventHistograms: {
        /**
         * 事件分段统计详情。
         */
        SystemEventHistogram: {
            /**
             * 结束时间。
             * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
             * @example `1552225753000`
             */
            EndTime: number;
            /**
             * 开始时间。
             * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
             * @example `1552225770000`
             */
            StartTime: number;
            /**
             * 事件发生数量。
             * @example `2`
             */
            Count: number;
        }[];
    };
}
