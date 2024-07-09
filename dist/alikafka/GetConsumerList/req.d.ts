export interface GetConsumerListRequest {
    /**
     * Group所属实例的ID。
     * @example `alikafka_post-cn-v0h18sav****`
     */
    "InstanceId": string;
    /**
     * Group所属实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 当前页面。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示的消费组数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定Group的ID。如果不指定，则查询所有Group。
     * @example `kafka-test`
     */
    "ConsumerId"?: string;
}
