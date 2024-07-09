export interface DescribeRtcChannelListRequest {
    /**
     * 应用ID，可通过控制台创建和查询，仅支持传单个ID。
     * @example `aoe****`
     */
    "AppId"?: string;
    /**
     * 查询时间点，UTC格式，格式为yyyy-MM-ddTHH:mm:ssZ。
     * 时间粒度为天。
     * @example `2018-01-29T00:00:00Z`
     */
    "TimePoint": string;
    /**
     * 排序顺序，默认按StartTime逆序排序。
     * @example `desc`
     */
    "SortType"?: string;
    /**
     * 服务区域，默认查询所有区域。
     * - **cn**：中国。
     * - **us**：美国。
     * @example `cn`
     */
    "ServiceArea"?: string;
    /**
     * 用户ID，仅支持传单个ID。
     * @example `testUser`
     */
    "UserId"?: string;
    /**
     * 频道ID，仅支持传单个ID。
     * @example `testChannel`
     */
    "ChannelId"?: string;
    /**
     * 第几页，取值：大于**0**。
     * 默认为1。
     * @example `1`
     */
    "PageNo": number;
    /**
     * 显示数量，取值：大于**0**。
     * 默认为10。
     * @example `20`
     */
    "PageSize": number;
}
