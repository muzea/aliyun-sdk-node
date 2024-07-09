export interface DescribeTerminalSessionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `i-bp1i7gg30r52z2em****`
     */
    "InstanceId"?: string;
    /**
     * 会话ID。
     * @example `s-hz023od0x9****`
     */
    "SessionId"?: string;
    /**
     * 分页查询时每页的最大条目数。
     * 最大值为100。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
}
