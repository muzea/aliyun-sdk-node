export interface DescribeDedicatedBlockStorageClusterDisksRequest {
    /**
     * 专属块存储集群所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-heyuan`
     */
    "RegionId": string;
    /**
     * 分页查询时每页的最大条目数。最大值为500。
     * 默认值：10
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。
     * @example `AAAAAdDWBF2`
     */
    "NextToken"?: string;
    /**
     * 专属块存储集群ID。
     * @example `dbsc-cn-od43bf****`
     */
    "DbscId": string;
}
