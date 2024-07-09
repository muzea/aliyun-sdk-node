export interface ListUserAdOrganizationUnitsRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * AD办公网络的ID。
     * @example `cn-hangzhou+dir-485361****`
     */
    "OfficeSiteId": string;
    /**
     * 模糊搜索字符串。
     * @example `develop`
     */
    "Filter"?: string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：第一次查询和没有下一次查询时，均无需填写。如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 返回的最大数。取值范围：1~500。
     * 默认值：500。
     * @example `100`
     */
    "MaxResults"?: number;
}
