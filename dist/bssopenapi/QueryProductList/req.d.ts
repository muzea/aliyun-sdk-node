export interface QueryProductListRequest {
    /**
     * 是否返回产品总数目，默认为false。
     * @example `true`
     */
    "QueryTotalCount"?: boolean;
    /**
     * 当前页码。
     * @example `1`
     */
    "PageNum": number;
    /**
     * 每页记录数，最大300，默认为20。
     * @example `10`
     */
    "PageSize"?: number;
}
