export interface GetAggregateConfigDeliveryChannelRequest {
    /**
     * 投递渠道ID。
     * 关于如何获取投递渠道ID，请参见[ListAggregateConfigDeliveryChannels](~~429842~~)。
     * @example `cdc-d9106457e0d900b1****`
     */
    "DeliveryChannelId": string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-a4e5626622af0079****`
     */
    "AggregatorId": string;
}
