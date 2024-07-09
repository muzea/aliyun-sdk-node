export interface DeleteMetaCollectionEntityRequest {
    /**
     * 集合唯一识别符。
     * @example `album.12345`
     */
    "CollectionQualifiedName": string;
    /**
     * 实体唯一标识符。
     * @example `maxcompute.projectA.tableB`
     */
    "EntityQualifiedName": string;
}
