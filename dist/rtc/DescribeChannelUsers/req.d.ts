export interface DescribeChannelUsersRequest {
    /**
     * 应用ID，通过控制台创建和查询，仅支持传单个ID。
     * @example `a2hz****`
     */
    "AppId": string;
    /**
     * 要查询的频道ID，仅支持传单个ID。
     * @example `testId`
     */
    "ChannelId": string;
}
