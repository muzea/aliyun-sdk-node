interface CreateFabricChannelMemberRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "Organization": string[];
    /**
    * 通道ID
    * @example `chan-channelx-1l1hmckuuisxo`
    */ "ChannelId": string;
}
export { CreateFabricChannelMemberRequest };