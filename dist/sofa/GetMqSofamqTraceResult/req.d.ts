export interface GetMqSofamqTraceResultRequest {
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 消息轨迹查询的任务 ID
     * @example `272967562652883649157096685****`
     */
    "QueryId": string;
}
