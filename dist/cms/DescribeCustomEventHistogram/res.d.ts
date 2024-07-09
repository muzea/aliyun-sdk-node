export interface DescribeCustomEventHistogramResponse {
    /**
     * 状态码。
     * >200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 返回信息。当请求成功时，返回成功信息；当请求失败时，返回失败原因。
     * @example `success`
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
    EventHistograms: {
        /**
         * 自定义事件统计数据列表。
         */
        EventHistogram: {
            /**
             * 结束时间。
             * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
             * @example `1552226750000`
             */
            EndTime: number;
            /**
             * 开始时间。
             * 格式为Unix时间戳，即从1970年1月1日开始所经过的毫秒数。
             * @example `1552226740000`
             */
            StartTime: number;
            /**
             * 事件发生的数量。
             * @example `3`
             */
            Count: number;
        }[];
    };
}
