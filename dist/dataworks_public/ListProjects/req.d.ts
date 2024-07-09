export interface ListProjectsRequest {
    /**
     * 页码数。最小值1，最大值100
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的数据量，默认为10条，最大100条。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmzbn7pt****`
     */
    "ResourceManagerResourceGroupId"?: string;
    /**
     * 工作空间绑定的标签信息列表。
     */
    "Tags"?: {
        /**
         * 标签键。
         * @example `key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `value`
         */
        Value: string;
    }[];
}
