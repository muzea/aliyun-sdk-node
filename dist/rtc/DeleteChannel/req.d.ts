interface DeleteChannelRequest {
    "RegionId"?: string;
    /**
    * 应用ID，通过控制台开通创建。
    * @example `yourAppId`
    */ "AppId": string;
    /**
    * 频道ID，加入的频道。
    * @example `yourChannelId`
    */ "ChannelId": string;
    "OwnerId"?: number;
}
export { DeleteChannelRequest };