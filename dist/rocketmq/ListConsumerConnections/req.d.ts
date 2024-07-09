export interface ListConsumerConnectionsRequest {
    /**
     * 实例ID。
     * @example `rmq-cn-uax32mf9h1f`
     */
    "instanceId": string;
    /**
     * 消费者分组ID。
     * @example `GID_TEST_STOCK_OPEND_GW`
     */
    "consumerGroupId": string;
}
