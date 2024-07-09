export interface OnsTraceQueryByMsgKeyRequest {
    /**
     * 需查询的消息的Topic。
     * @example `test`
     */
    "Topic": string;
    /**
     * 需查询的消息的Message Key。
     * @example `ORDERID_100`
     */
    "MsgKey": string;
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
