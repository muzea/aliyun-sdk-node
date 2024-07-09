export interface StopChannelRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 已存在的频道ID，仅支持传单个ID。
     * @example `testid`
     */
    "ChannelId": string;
}
