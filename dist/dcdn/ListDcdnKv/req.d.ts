export interface ListDcdnKvRequest {
    /**
     * Namespace名称。
     * @example `ns1`
     */
    "Namespace": string;
    /**
     * 指定返回的页大小，默认为50，最大为100。
     * @example `50`
     */
    "PageSize"?: number;
    /**
     * 指定页码，PageNumber\*PageSize最大不可超过50000。
     * @example `10`
     */
    "PageNumber"?: number;
    /**
     * 指定查找前缀。
     * @example `prefix-`
     */
    "Prefix"?: string;
}
