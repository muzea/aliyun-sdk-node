export interface QueryMqSofamqTraceByMsgKeyResponse {
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
     * 该查询任务的 ID。可根据该任务 ID，再调用 GetMqSofamqTraceResult 接口获取详细结果。
     * @example `272967562652883649157096685****`
     */
    QueryId: string;
}
