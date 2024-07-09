export interface QueryMqSofamqTraceByTopicResponse {
    /**
     * 结果描述
     * @example `OK`
     */
    ResultMessage: string;
    /**
     * 结果码
     * @example `OK`
     */
    ResultCode: string;
    /**
     * 请求ID
     * @example `861E6630-AEC0-4B2D-B214-6CB5E44B7F04`
     */
    RequestId: string;
    /**
     * 该消息轨迹查询任务的 ID
     * @example `272967562652883649157096685****`
     */
    QueryId: string;
}
