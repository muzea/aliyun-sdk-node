export interface ListMultiAccountResourceGroupsRequest {
    /**
     * 分页查询时每页行数。
     * 每页最大行数：100。默认值：10。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 查询开始的Token。
     * @example `AAAAAS2Nboi3t4xGrdlG5/Ks/Q1xPG9jzviYEuZydevXIkgF`
     */
    "NextToken"?: string;
    /**
     * 资源目录管理账号ID或成员ID。
     * @example `1394339739****`
     */
    "AccountId": string;
    /**
     * 资源组ID列表。
     */
    "ResourceGroupIds"?: string[];
}
