export interface ListLineageRequest {
    /**
     * 实体唯一标识符。
     * @example `maxcompute-table.project.table`
     */
    "EntityQualifiedName": string;
    /**
     * 分页信息，指定本次读取的起始点。
     * @example `next-token-from-previous-request`
     */
    "NextToken"?: string;
    /**
     * 实体名称关键词。
     * @example `name-keyword`
     */
    "Keyword"?: string;
    /**
     * 血缘上下游。取值如下：
     * - up：上游。
     * - down：下游。
     * @example `up`
     */
    "Direction": string;
    /**
     * 分页大小，最大为100。
     * @example `10`
     */
    "PageSize"?: number;
}
