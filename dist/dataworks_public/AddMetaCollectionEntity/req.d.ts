export interface AddMetaCollectionEntityRequest {
    /**
     * 集合唯一标识符。
     * @example `album.2222`
     */
    "CollectionQualifiedName": string;
    /**
     * 实体唯一标识符。
     * @example `maxcompute-table.projectA.tableB`
     */
    "EntityQualifiedName": string;
    /**
     * 对实体的备注信息。
     * @example `this is a remark`
     */
    "Remark"?: string;
}
