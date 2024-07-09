export interface GetTopicSubscribeStatusRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例 ID。
     * 可调用 [GetInstanceList](~~437663~~) 获取。
     * @example `alikafka_pre-cn-v0h1cng0***`
     */
    "InstanceId": string;
    /**
     * Topic 名称。
     * 可调用 [GetTopicList](~~437677~~) 获取。
     * @example `topic_name`
     */
    "Topic": string;
}
