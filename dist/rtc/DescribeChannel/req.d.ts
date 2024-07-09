export interface DescribeChannelRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `eo85****`
     */
    "AppId": string;
    /**
     * 待查询的频道ID，仅支持传单个ID。
     * @example `testid`
     */
    "ChannelId": string;
}
