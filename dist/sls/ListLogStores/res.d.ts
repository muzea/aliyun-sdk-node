export interface ListLogStoresResponse {
    /**
     * 符合查询条件的Logstore总数。
     * @example `2`
     */
    total: number;
    /**
     * 当前返回行数。
     * @example `2`
     */
    count: number;
    /**
     * 满足条件的Logstore列表。
     * @example `["test-1","test-2"]`
     */
    logstores: string[];
}
