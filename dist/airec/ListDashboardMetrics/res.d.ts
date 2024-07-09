export interface ListDashboardMetricsResponse {
    /**
     * 统计结果
     */
    result: {
        /**
         * 统计
         * @example `xxx`
         */
        total: any;
        /**
         * 详细信息
         */
        detail: {
            /**
             * 具体数值
             * @example `13`
             */
            val: string;
            /**
             * 秒级时间戳
             * @example `1586673466`
             */
            startTime: string;
            /**
             * 秒级时间戳
             * @example `1586673466`
             */
            endTime: string;
        }[];
    }[];
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求id
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
