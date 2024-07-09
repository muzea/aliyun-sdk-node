export interface ListExtensionsRequest {
    /**
     * 请求的数据页数，用于翻页。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页显示的条数
     * @example `10`
     */
    "PageSize"?: number;
}
