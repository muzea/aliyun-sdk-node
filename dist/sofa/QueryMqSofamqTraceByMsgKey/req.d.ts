export interface QueryMqSofamqTraceByMsgKeyRequest {
    /**
     *  查询的时间范围的起始时间点
     * @example `1570852800`
     */
    "BeginTime": number;
    /**
     * 需要查询的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 查询的时间范围的结束时间点
     * @example `1570968000`
     */
    "EndTime": number;
    /**
     *  需查询的消息的 Topic 所对应的实例 ID
     * @example `MQ_INST_111111111111_DOxxxxxx	`
     */
    "InstanceId": string;
    /**
     *  需查询的消息的 Message Key
     * @example `ORDERID_100`
     */
    "MsgKey": string;
    /**
     * 需查询的消息的 Topic
     * @example `test`
     */
    "Topic": string;
}
