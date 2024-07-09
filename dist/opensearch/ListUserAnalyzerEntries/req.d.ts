export interface ListUserAnalyzerEntriesRequest {
    /**
     * 分析器名称。
     * @example `"kevin_test"`
     */
    "name": string;
    /**
     * 词条key。
     * @example `"kevintest"`
     */
    "word"?: string;
    /**
     * 页码，默认 pageNumber=1。
     * @example `1`
     */
    "pageNumber"?: number;
    /**
     * 每页返回数目，默认 pageSize=10。
     * @example `10`
     */
    "pageSize"?: number;
}
