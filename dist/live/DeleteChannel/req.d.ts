export interface DeleteChannelRequest {
    /**
     * 应用ID，仅支持传单个ID。
     * @example `eo85****`
     */
    "AppId"?: string;
    /**
     * 已入会的频道ID，仅支持传单个ID。
     * @example `testid`
     */
    "ChannelId"?: string;
}
