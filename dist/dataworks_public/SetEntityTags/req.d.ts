export interface SetEntityTagsRequest {
    /**
     * 实体唯一标识符，例如：maxcompute-table.projectA.tableA。
     * @example `maxcompute-table.projectA.tableA`
     */
    "QualifiedName": string;
    /**
     * 标签列表。
     */
    "Tags"?: any[];
}
