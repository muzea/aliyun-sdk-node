export interface DeleteConsumerGroupRequest {
    /**
     *  实例ID。
     * @example `alikafka_post-cn-v0h1fgs2****`
     */
    "InstanceId": string;
    /**
     * Group名称。
     * @example `CID-test`
     */
    "ConsumerId": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
