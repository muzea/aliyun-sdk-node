export interface ListSavedSearchResponse {
    /**
     * 符合查询条件的快速查询总数。
     * @example `4`
     */
    total: number;
    /**
     * 当前页返回的快速查询个数。
     * @example `4`
     */
    count: number;
    /**
     * 快速查询列表。
     * @example `[ "test-1", "test-2" ]`
     */
    savedsearchItems: any[];
}
