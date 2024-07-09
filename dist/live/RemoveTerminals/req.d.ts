export interface RemoveTerminalsRequest {
    /**
     * 应用ID，仅支持传单个ID。
     * @example `aec****`
     */
    "AppId": string;
    /**
     * 已加入的频道ID，仅支持传单个ID。
     * @example `testId`
     */
    "ChannelId": string;
    /**
     * 用户列表ID。
     */
    "TerminalIds": string[];
}
