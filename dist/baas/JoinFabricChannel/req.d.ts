interface JoinFabricChannelRequest {
    /**
    * 地域
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    /**
    * 操作
    * @example `accept`
    */ "Do": string;
    /**
    * 通道ID
    * @example `chan-channelx-1l1hmckuu****`
    */ "ChannelId": string;
    /**
    * 位置
    * @example `cn-hangzhou`
    */ "Location"?: string;
}
export { JoinFabricChannelRequest };