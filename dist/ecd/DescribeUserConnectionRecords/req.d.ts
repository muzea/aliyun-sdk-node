export interface DescribeUserConnectionRecordsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 云电脑池ID。
     * @example `dg-2i8qxpv6t1a03****`
     */
    "DesktopGroupId": string;
    /**
     * 授权用户ID。
     * @example `alice`
     */
    "EndUserId": string;
    /**
     * 用户账号体系类型。
     * @example `SIMPLE`
     */
    "EndUserType"?: string;
    /**
     * 分页查询时每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 以开始连接时间作为筛选条件的最小值。格式为Unix时间戳。单位为毫秒。
     * @example `1631239200000`
     */
    "ConnectStartTimeFrom"?: number;
    /**
     * 以开始连接时间作为筛选条件的最大值。格式为Unix时间戳。单位为毫秒。
     * @example `1631241000000`
     */
    "ConnectStartTimeTo"?: number;
    /**
     * 以终止连接时间作为筛选条件的最小值。格式为Unix时间戳。单位为毫秒。
     * @example `1631266200000`
     */
    "ConnectEndTimeFrom"?: number;
    /**
     * 以终止连接时间作为筛选条件的最大值。格式为Unix时间戳。单位为毫秒。
     * @example `1631268000000`
     */
    "ConnectEndTimeTo"?: number;
    /**
     * 以连接时长作为筛选条件的最小值。
     * @example `100`
     */
    "ConnectDurationFrom"?: number;
    /**
     * 以连接时长作为筛选条件的最大值。
     * @example `100`
     */
    "ConnectDurationTo"?: number;
    /**
     * 云电脑ID。
     * @example `ecd-138dsptkrt00u****`
     */
    "DesktopId"?: string;
}
