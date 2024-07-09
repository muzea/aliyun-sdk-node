export interface OnsTraceGetResultRequest {
    /**
     * 需要提取轨迹查询结果的任务ID。
     * @example `272967562652883649157096685****`
     */
    "QueryId": string;
    /**
     * 需查询的消息所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 需查询的消息的Topic。
     * @example `test`
     */
    "Topic"?: string;
}
