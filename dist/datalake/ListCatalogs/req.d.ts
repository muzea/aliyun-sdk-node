export interface ListCatalogsRequest {
    /**
     * CatalogId的匹配正则
     * @example `.*`
     */
    "IdPattern"?: string;
    /**
     * 翻页token，从返回结果返回，无则传空字符串或''
     * @example `‘’`
     */
    "NextPageToken"?: string;
    /**
     * 分页大小
     * @example `10`
     */
    "PageSize"?: number;
}
