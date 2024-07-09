export interface QuerySingleAggregationReportResponse {
    /**
     * 查询结果
     */
    result: any;
    /**
     * 错误码
     * @example `200`
     */
    code: string;
    /**
     * 当前请求的RequestID
     * @example `8F81A922-6C81-46D6-B78C-CC35E16B1691`
     */
    requestId: string;
    /**
     * 错误详情
     * @example `successful`
     */
    message: string;
}
