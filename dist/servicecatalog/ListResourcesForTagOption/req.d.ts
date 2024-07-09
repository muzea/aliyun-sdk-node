export interface ListResourcesForTagOptionRequest {
    /**
     * 标签选项ID。
     * @example `tag-bp1u6mdf3d****`
     */
    "TagOptionId": string;
    /**
     * 标签选项关联的资源类型。取值：
     * - Product：产品。
     * - Portfolio：产品组合。
     * @example `Product`
     */
    "ResourceType": string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。起始值：1。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
