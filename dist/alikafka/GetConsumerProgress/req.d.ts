export interface GetConsumerProgressRequest {
    /**
     * 实例ID。
     * @example `alikafka_pre-cn-mp919o4v****`
     */
    "InstanceId": string;
    /**
     * Group的名称。
     * @example `kafka-test`
     */
    "ConsumerId": string;
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
