export interface RemoveTerminalsRequest {
    /**
     * 用户ID列表。
     * @example `1811xxxx`
     */
    "TerminalIds": string[];
    /**
     * 应用ID，仅支持传单个ID。
     * 可通过控制台创建和查询。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 已加入的频道ID，仅支持传单个ID。
     * @example `yourChannelId`
     */
    "ChannelId": string;
}
