export interface DescribeTagValueListRequest {
    /**
     * 页码。
     * 起始值：1，默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：50。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标签键。
     * 关于如何获取标签键，请参见[DescribeTagKeyList](~~145558~~)。
     * @example `tagKey1`
     */
    "TagKey": string;
}
