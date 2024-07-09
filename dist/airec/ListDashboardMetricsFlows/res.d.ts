export interface ListDashboardMetricsFlowsResponse {
    /**
     * 统计结果
     */
    result: {
        /**
         * 指标类型
         * @example `xxx`
         */
        metricType: string;
        /**
         * 指标数据
         * @example `xxx`
         */
        metricData: any;
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
