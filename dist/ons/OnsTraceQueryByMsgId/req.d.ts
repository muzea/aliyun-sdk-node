export interface OnsTraceQueryByMsgIdRequest {
    /**
     * 需查询的消息的Topic。
     * @example `test`
     */
    "Topic": string;
    /**
     * 需查询的消息的ID，即Message ID。
     * @example `1E05791C117818B4AAC23B1BB0CE****`
     */
    "MsgId": string;
    /**
     * 查询的时间范围的起始时间戳，单位：毫秒。
     * @example `1570852800000`
     */
    "BeginTime": number;
    /**
     * 查询的时间范围的结束时间戳，单位：毫秒。
     * @example `1570968000000`
     */
    "EndTime": number;
    /**
     * 需查询的消息的Topic所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId"?: string;
}
