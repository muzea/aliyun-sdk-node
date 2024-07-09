export interface OnsTopicDeleteRequest {
    /**
     * 指定删除的Topic。
     * @example `test`
     */
    "Topic": string;
    /**
     * 需删除的Topic所对应的实例ID。
     * @example `MQ_INST_188077086902****_BXSuW61e`
     */
    "InstanceId"?: string;
}
