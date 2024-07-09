export interface EnableAutoTopicCreationRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * 目前只支持这三种入参：
     * - enable: 开启自动创建 Topic。
     * - disable: 关闭自动创建 Topic。
     * - updatePartition: 修改自动创建分区数。
     * @example `enable`
     */
    "Operate": string;
    /**
     * 调整自动创建 Topic 默认分区数。
     * 当 Operate 值为 updatePartition 时，才传递该值。
     * @example `12`
     */
    "PartitionNum"?: number;
}
