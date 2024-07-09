export interface SearchResourcesRequest {
    /**
     * 查询返回结果下一页的令牌。
     * 当返回结果数据总条数超过`MaxResults`限制，则数据会被截断，您可以使用`NextToken`查询下一页数据。
     * @example `eyJzZWFyY2hBZnRlcnMiOlsiMTAwMTU2Nzk4MTU1OSJd****`
     */
    "NextToken"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。
     * 默认值：20。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 过滤条件。
     */
    "Filter"?: {
        /**
         * 过滤条件键。取值见下方`支持的过滤参数`。
         * @example `RegionId`
         */
        Key: string;
        /**
         * 过滤条件值。
         */
        Value: string[];
        /**
         * 匹配方式。
         * 取值：Equals，表示相等匹配。
         * @example `Equals`
         */
        MatchType: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-acfmzawhxxc****`
     */
    "ResourceGroupId"?: string;
    /**
     * 排序参数。
     */
    "SortCriterion"?: {
        /**
         * 排序条件。
         * 取值：CreateTime，表示按资源创建时间排序。
         * @example `CreateTime`
         */
        Key: string;
        /**
         * 排序顺序。取值：
         * - ASC（默认值）：升序。
         * - DESC：降序。
         * @example `ASC`
         */
        Order: string;
    };
}
