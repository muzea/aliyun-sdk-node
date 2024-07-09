export interface DescribeDynamicTagRuleListRequest {
    /**
     * 标签归属的地域ID。
     * @example `cn-hangzhou`
     */
    "TagRegionId"?: string;
    /**
     * 标签键。
     * 关于如何获取标签键，请参见[DescribeTagKeyList](~~145558~~)。
     * @example `tagkey1`
     */
    "TagKey"?: string;
    /**
     * 标签值。
     * 关于如何获取标签值，请参见[DescribeTagValueList](~~145557~~)。
     * @example `*`
     */
    "TagValue"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 分页时每页显示的数据行数。
     * 起始值：1。默认值：30。
     * @example `30`
     */
    "PageSize"?: string;
    /**
     * 智能标签规则ID。
     * @example `004155fa-15ba-466d-b61a-***********`
     */
    "DynamicTagRuleId"?: string;
}
