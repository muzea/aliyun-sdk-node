export interface DescribeCloudDriveUsersRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 企业网盘ID。
     * @example `cn-hangzhou+cds-066224****`
     */
    "CdsId": string;
    /**
     * 终端用户ID。
     * 如果不为空，则只查询当前用户的个人盘；如果为空，则查询所有用户的个人盘。
     * @example `alice`
     */
    "EndUserId"?: string;
    /**
     * 分页查询时每页行数。
     * - 最大值：100。
     * - 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `aGN4YzAxQGNuLWhhbmd6aG91LjExNzU5NTMyNjgzMTQ1****`
     */
    "NextToken"?: string;
}
