export interface DeleteAggregateConfigDeliveryChannelRequest {
    /**
     * 账号组ID。
     * @example `ca-23c6626622af0041****`
     */
    "AggregatorId": string;
    /**
     * 投递渠道ID。
     * 关于如何获取投递渠道ID，请参见[ListAggregateConfigDeliveryChannels](~~429842~~)。
     * @example `cdc-38c3013b46c9002c****`
     */
    "DeliveryChannelId": string;
}
