export interface ListTagResourcesRequest {
    /**
     * 地域ID。可以调用[DescribeRegions](~~196646~~)获取无影云电脑支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型。
     * @example `ALIYUN::GWS::INSTANCE`
     */
    "ResourceType": string;
    /**
     * 分页查询时每页行数。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始Token。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 资源ID列表，即云电脑ID列表。可包含1\~50个。
     * @example `ecd-ia2zw38bi6cm7****`
     */
    "ResourceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。可包含1\~20个。
         * @example `department`
         */
        Key: string;
        /**
         * 标签值。可包含1\~20个。
         * @example `design`
         */
        Value: string;
    }[];
}
