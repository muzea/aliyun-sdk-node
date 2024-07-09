export interface ListAggregateConfigDeliveryChannelsRequest {
    /**
     * 投递渠道ID。多个投递渠道ID之间用半角逗号（,）分隔。
     * @example `cdc-d9106457e0d900b1****`
     */
    "DeliveryChannelIds"?: string;
    /**
     * 账号组ID。
     * 关于如何获取账号组ID，请参见[ListAggregators](~~255797~~)。
     * @example `ca-a4e5626622af0079****`
     */
    "AggregatorId": string;
}
