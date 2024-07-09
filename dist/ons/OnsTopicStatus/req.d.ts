export interface OnsTopicStatusRequest {
    /**
     * 需查询的Topic名称。
     * @example `test`
     */
    "Topic": string;
    /**
     * 需查询的Topic所对应的实例ID。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId"?: string;
}
