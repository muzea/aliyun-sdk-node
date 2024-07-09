export interface ListFlowControlTaskReportsResponse {
    /**
     * 请求ID。
     * @example `16B78383-2803-4964-9605-37B30C073B0E`
     */
    requestId: string;
    /**
     * 返回参数。
     */
    result: {
        /**
         * 指标统计数据。
         */
        total: {
            /**
             * Ctr指标。
             * @example `0.1`
             */
            accTaskCtr: number;
            /**
             * Pv指标。
             * @example `1000`
             */
            accTaskPv: number;
            /**
             * 场景Ctr指标。
             * @example `0.2`
             */
            accTotalCtr: number;
            /**
             * 失效物品占比指标。
             * @example `0.3`
             */
            InvalidPercent: number;
        };
        /**
         * 指标列表。
         */
        metrics: {
            /**
             * 指标类型。
             * @example `taskPv`
             */
            type: string;
            /**
             * 数据列表。
             */
            details: {
                /**
                 * 指标值。
                 * @example `0`
                 */
                val: number;
                /**
                 * 指标结束时间秒级时间戳。
                 * @example `1664035200`
                 */
                endTime: number;
                /**
                 * 指标开始时间秒级时间戳。
                 * @example `1664000452`
                 */
                startTime: number;
            }[];
        }[];
    };
}
