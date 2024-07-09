export interface DescribeDesktopGroupSessionsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 连接状态。
     * @example `Connected`
     */
    "SessionStatus"?: string;
    /**
     * 会话类型。
     * @example `1`
     */
    "OwnType"?: number;
    /**
     * 用户账号名。
     * @example `xianqiu`
     */
    "EndUserId"?: string;
    /**
     * 查询开始时间。
     * @example `"2022-08-31T06:56:45Z"`
     */
    "StartTime"?: string;
    /**
     * 查询结束时间。
     * @example `"2022-08-31T06:56:45Z"`
     */
    "EndTime"?: string;
    /**
     * 每页最大数量。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 下一页token。
     * @example `"asdfdfsdfsdfds"`
     */
    "NextToken"?: string;
}
