export interface ListDashboardDetailsResponse {
    /**
     * 指定指标的详细信息
     */
    result: {
        /**
         * trace_id
         * @example `Alibaba`
         */
        traceId: string;
        /**
         * 场景ID
         * @example `test`
         */
        sceneId: string;
        /**
         * 指标结果
         */
        metricRes: {
            /**
             * 统计
             * @example `xxx`
             */
            total: any;
            /**
             * 详细信息
             * @example `xxx`
             */
            detail: any;
        };
    }[];
    /**
     * 错误码
     * @example `InternalServerError`
     */
    code: string;
    /**
     * 请求ID
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `An internal server error occurred`
     */
    message: string;
}
