export interface GetTopicStatusRequest {
    /**
     *  实例ID。
     * @example `alikafka_pre-cn-v0h15tjm****`
     */
    "InstanceId": string;
    /**
     * Topic名称。
     * @example `normal_topic_9d034262835916103455551be06cc****`
     */
    "Topic": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
