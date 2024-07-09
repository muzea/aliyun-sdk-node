export interface ListAliasesRequest {
    /**
     * 当前页数。
     * 取值范围：大于0的整数。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页返回的结果个数。
     * 取值范围：0~100。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
}
