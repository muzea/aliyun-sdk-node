export interface DescribeUserInfoInChannelRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `4eah****`
     */
    "AppId": string;
    /**
     * 频道ID，仅支持传单个ID。
     * @example `1234`
     */
    "ChannelId": string;
    /**
     * 用户ID，仅支持传单个ID。
     * @example `testId`
     */
    "UserId": string;
}
