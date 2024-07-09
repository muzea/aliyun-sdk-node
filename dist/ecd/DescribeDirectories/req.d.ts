export interface DescribeDirectoriesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 目录类型。
     * @example `RAM`
     */
    "DirectoryType"?: string;
    /**
     * 目录状态，和`Status`相同。
     * @example `REGISTERED`
     */
    "DirectoryStatus"?: string;
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
     * 目录ID。可设置一个或多个。
     * @example `cn-hangzhou+dir-gx2x1dhsmu52rd****`
     */
    "DirectoryId"?: string[];
    /**
     * 目录状态。
     * @example `REGISTERED`
     */
    "Status"?: string;
}
