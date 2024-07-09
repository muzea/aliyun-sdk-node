export interface OnsTopicSubDetailRequest {
    /**
     * 需查询的Topic所对应的实例ID。
     * @example `MQ_INST_111111111111_DOxxxxxx`
     */
    "InstanceId": string;
    /**
     * 需查询的Topic。
     * @example `test`
     */
    "Topic": string;
}
