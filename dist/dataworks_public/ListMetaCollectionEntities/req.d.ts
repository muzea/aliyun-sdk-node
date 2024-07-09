export interface ListMetaCollectionEntitiesRequest {
    /**
     * 集合唯一标识。
     * @example `album.12345`
     */
    "CollectionQualifiedName": string;
    /**
     * 实体类型。示例：maxcompute-table表示MaxCompute表类型。
     * @example `maxcompute-table`
     */
    "EntityType"?: string;
    /**
     * 搜索关键词。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 分页信息，指定本次读取的起始点。
     * @example `12222`
     */
    "NextToken"?: string;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
}
