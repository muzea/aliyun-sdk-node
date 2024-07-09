export interface DescribeGeographicRegionMembershipRequest {
    /**
     * 查询页码。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页显示的条目数。默认值为**10**，取值范围：**1**~**50**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的区域ID。取值：
     * - **china**：中国内地。
     * - **asia-pacific**：亚太。
     * - **europe**：欧洲。
     * - **australia**：澳洲。
     * - **north-america**：北美。
     * @example `china `
     */
    "GeographicRegionId": string;
}
