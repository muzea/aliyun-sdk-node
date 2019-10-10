interface RemoveTerminalsRequest {
    "RegionId"?: string;
    /**
    * 应用ID，通过控制台开通创建。
    * @example `yourAppId`
    */ "AppId": string;
    /**
    * 频道ID，加入的频道。
    * @example `yourChannelId`
    */ "ChannelId": string;
    "TerminalIds": string[];
    "OwnerId"?: number;
}
export { RemoveTerminalsRequest };