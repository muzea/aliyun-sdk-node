export interface JoinFabricChannelRequest {
    /**
     * 通道ID
     * @example `chan-channelx-1l1hmckuu****`
     */
    "ChannelId": string;
    /**
     * 操作
     * @example `accept`
     */
    "Do": string;
    /**
     * 位置
     * @example `cn-hangzhou`
     */
    "Location"?: string;
}
