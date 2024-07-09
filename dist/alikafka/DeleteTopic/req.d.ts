export interface DeleteTopicRequest {
    /**
     * 实例ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * Topic名称。
     * @example `test`
     */
    "Topic": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
