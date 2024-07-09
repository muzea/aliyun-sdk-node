export interface DescribeAclEntriesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 分页查询时每页的最大条目数。最大值：1600
     * 默认值：1600
     * @example `50`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6kRxd1mKkNnHlUy14zdjl/I`
     */
    "NextToken"?: string;
    /**
     * 公网访问控制策略对应的粒度。
     * @example `desktop`
     */
    "SourceType"?: string;
    /**
     * 公网访问控制对应的实例ID，即办公网络ID或云电脑ID。
     * @example `cn-hangzhou+dir-****`
     */
    "SourceId"?: string;
}
