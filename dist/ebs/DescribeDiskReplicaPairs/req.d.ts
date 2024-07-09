export interface DescribeDiskReplicaPairsRequest {
    /**
     * 异步复制关系中主盘或从盘所属的地域ID。您可以调用[DescribeRegions](~~354276~~)查询异步复制功能支持的地域信息。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 本次调用期望查询的最大条目数。可配合NextToken参数一起使用。
     * 取值范围：1~500。
     * 默认值：10。
     * @example `1`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。如果设置了NextToken，则请求参数PageSize和PageNumber将失效，且返回数据中的TotalCount无效。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 异步复制关系ID列表。您可以指定一个或多个异步复制关系ID进行查询。格式为：`pair-cn-dsa****,pair-cn-asd****`。
     * 默认值为空，表示查询当前地域下所有的异步复制关系。最多允许填写100个复制关系ID。
     * @example `pair-cn-dsa****`
     */
    "PairIds"?: string;
    /**
     * 获取本Region为生产站点或灾备站点的复制对数据。取值范围：
     * - production：生产站点。
     * - backup：灾备站点。
     * 默认值：production。
     * @example `production`
     */
    "Site"?: string;
    /**
     * 一致性复制组ID，您可以指定一个一致性复制组ID来查询组内的复制对。格式为：`pg-****`。
     * 默认值为空，表示查询当前地域下所有的异步复制关系。
     * > 当该参数为`-`时，返回不在任何一致性组中的复制对。
     * @example `pg-****`
     */
    "ReplicaGroupId"?: string;
    /**
     * 分页查询时的页码。
     * @example `5`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围1-100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 异步复制对所在的企业资源组ID。
     * @example `rg-acfmvs******`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 异步复制对的标签键。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 异步复制对的标签值。
         * @example `TestValue`
         */
        Value: string;
    }[];
}
