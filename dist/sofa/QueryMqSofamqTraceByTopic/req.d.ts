export interface QueryMqSofamqTraceByTopicRequest {
    /**
     * 查询的时间范围的起始时间点
     * @example `1568033253`
     */
    "BeginTime": number;
    /**
     * 需要查询的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 查询的时间范围的结束时间点
     * @example `1568133253`
     */
    "EndTime": number;
    /**
     * 实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 需查询的消息的 Topic
     * @example `TP_xxx`
     */
    "Topic": string;
}
