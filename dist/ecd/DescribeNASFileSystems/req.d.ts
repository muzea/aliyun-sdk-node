export interface DescribeNASFileSystemsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 工作区ID。
     * @example `cn-hangzhou+dir-363353****`
     */
    "OfficeSiteId"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * NAS文件系统ID。
     * @example `04f314****`
     */
    "FileSystemId"?: string[];
    /**
     * 是否过滤只支持UPM的NAS文件系统。
     * @example `false`
     */
    "MatchCompatibleProfile"?: boolean;
}
