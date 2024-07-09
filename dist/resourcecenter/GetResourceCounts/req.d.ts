export interface GetResourceCountsRequest {
    /**
     * 资源数量统计的分组维度。取值：
     * - ResourceType：资源类型。
     * - RegionId：地域。
     * - ResourceGroupId：资源组ID。
     * @example `ResourceType`
     */
    "GroupByKey"?: string;
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
         * 取值为Equals，表示相等匹配。
         * @example `Equals`
         */
        MatchType: string;
    }[];
}
