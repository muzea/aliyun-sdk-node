export interface DescribeVirtualMFADevicesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云桌面支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 返回结果的最大数量。取值范围：1~500。默认值：100。
     * @example `100`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证。取值为上一次调用此API时返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-269345****`
     */
    "OfficeSiteId"?: string;
    /**
     * AD用户名。
     * @example `testuser`
     */
    "EndUserId"?: string[];
}
