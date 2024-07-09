export interface DescribeTagsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 资源类型：ZONE
     * @example `ZONE`
     */
    "ResourceType": string;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页面大小。默认值为20，最大值为200。
     * @example `20`
     */
    "PageSize"?: number;
}
