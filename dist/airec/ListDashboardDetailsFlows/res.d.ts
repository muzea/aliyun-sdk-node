export interface ListDashboardDetailsFlowsResponse {
    /**
     * 指定指标的详细信息
     */
    result: {
        /**
         * 查询指标，枚举选择
         * USER_ACTION_PV_COUNT 整体流量规模PV
         * USER_ACTION_UV_COUNT 整体流量规模UV
         * USER_ACTION_PV_RATIO  流量转化率
         * USER_ACTION_UV_RATIO 人均流量
         * USER_PV_STAY 人均停留 （内容型）
         * USER_UV_STAY 次均停留  （内容型）
         * @example `USERACTIONUV_COUNT`
         */
        metricType: string;
        /**
         * 指标结果
         */
        metricData: {
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
             * @example `xxx`
             */
            metricRes: any;
        }[];
    };
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
