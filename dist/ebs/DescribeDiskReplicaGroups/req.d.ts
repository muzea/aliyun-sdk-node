export interface DescribeDiskReplicaGroupsRequest {
    /**
     * 一致性复制组所属的地域ID。
     * @example `cn-beijing`
     */
    "RegionId": string;
    /**
     * 本次调用期望查询的最大条目数。可配合NextToken参数一起使用。
     * 取值范围：1~500。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。如果设置了NextToken，则请求参数PageSize和PageNumber将失效，且返回数据中的TotalCount无效。
     * @example `AAAAAdDWBF2****`
     */
    "NextToken"?: string;
    /**
     * 一致性复制组的ID列表。您可以指定一个或多个一致性复制组的ID进行查询。多个一致性复制组的ID之间用半角逗号（,）分隔。
     * 默认值为空，表示查询当前地域下所有的一致性复制组。最多允许填写100个复制组ID。
     * @example `AAAAAdDWBF2****`
     */
    "GroupIds"?: string;
    /**
     * 查询并返回指定站点的记录，主要应用于跨可用区复制对的场景。
     * - 如果不指定该参数，则系统会返回生产站点的复制对记录和状态信息。
     * - 如果指定该参数，则系统仅返回指定Site的复制对的记录和状态信息。取值范围：
     *     - production：生产站点。
     *     - backup：灾备站点。
     * @example `production`
     */
    "Site"?: string;
    /**
     * 分页查询时的页码。
     * @example `5`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * 取值范围1~100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 一致性复制组所在的企业资源组ID。
     * @example `rg-aekz*****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 一致性复制组的标签键。
         * @example `tag-key`
         */
        Key: string;
        /**
         * 一致性复制组的标签值。
         * @example `tag-value`
         */
        Value: string;
    }[];
}
