export interface GetMqSofamqTraceByMsgIdRequest {
    /**
     *  查询的时间范围的起始时间点，单位：毫秒。
     * @example `1570852800`
     */
    "BeginTime": number;
    /**
     * 需要查询的单元
     * @example `RZ01A`
     */
    "Cell"?: string;
    /**
     * 查询的时间范围的结束时间点，单位：毫秒。
     * @example `1570968000`
     */
    "EndTime": number;
    /**
     * 需查询的消息的 Topic 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `MQ_INST_111111111111_DOxxxxxx	 `
     */
    "InstanceId": string;
    /**
     * 需查询的消息的 ID，即 Message ID
     * @example `1E05791C117818B4AAC23B1BB0CE****	 `
     */
    "MsgId": string;
    /**
     * 需查询的消息的 Topic
     * @example `test`
     */
    "Topic": string;
}
