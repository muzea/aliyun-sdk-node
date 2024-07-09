export interface ListAccountsRequest {
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据行数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 通过标签过滤。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `tag_key`
         */
        Key: string;
        /**
         * 标签值。
         * @example `tag_value`
         */
        Value: string;
    }[];
    /**
     * 是否返回标签信息。取值：
     * - false（默认值）：不返回。
     * - true：返回。
     * @example `true`
     */
    "IncludeTags"?: boolean;
}
