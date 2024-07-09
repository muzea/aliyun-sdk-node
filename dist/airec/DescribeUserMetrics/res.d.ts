export interface DescribeUserMetricsResponse {
    /**
     * 返回详情结果
     */
    result: {
        /**
         * 场景ID
         * @example `test`
         */
        sceneId: string;
        /**
         * 指标结果
         */
        dataPoints: {
            /**
             * 具体数值
             * @example `84.6`
             */
            val: number;
            /**
             * 开始时间（秒级时间戳）
             * @example `1567152000`
             */
            startTime: number;
            /**
             * 结束时间（秒级时间戳）
             * @example `1567152000`
             */
            endTime: number;
        }[];
    }[];
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 请求ID
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `success`
     */
    message: string;
}
