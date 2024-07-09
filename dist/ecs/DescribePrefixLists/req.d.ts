export interface DescribePrefixListsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-chengdu`
     */
    "RegionId": string;
    /**
     * 前缀列表的名称。
     * @example `PrefixListNameSample`
     */
    "PrefixListName"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。
     * 最大值：100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 前缀列表的地址族。取值范围：
     * - IPv4。
     * - IPv6。
     * 默认值：空，查询所有前缀列表信息。
     * @example `IPv4`
     */
    "AddressFamily"?: string;
    /**
     * 前缀列表ID。N的取值范围：0~100。
     * @example `pl-x1j1k5ykzqlixdcy****`
     */
    "PrefixListId"?: string[];
}
