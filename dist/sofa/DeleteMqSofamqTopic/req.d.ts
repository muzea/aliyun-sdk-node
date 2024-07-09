export interface DeleteMqSofamqTopicRequest {
    /**
     * 需删除的 Topic 所对应的实例 ID。针对有独立命名空间的实例，该参数为必填。
     * @example `000001`
     */
    "InstanceId": string;
    /**
     * 指定删除的 Topic
     * @example `test`
     */
    "Topic": string;
}
