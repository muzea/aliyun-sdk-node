export interface UpdateInstanceConfigRequest {
    /**
     * 需要更新的云消息队列 Kafka 版的配置。配置信息必须是一个合法的JSON字符串。
     * @example `{"kafka.log.retention.hours":"33"}`
     */
    "Config": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例的ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
}
