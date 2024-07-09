export interface DeleteLineageRelationRequest {
    /**
     * 源实体唯一标识
     * @example `maxcompute-table.project.table`
     */
    "SrcEntityQualifiedName": string;
    /**
     * 目标实体唯一标识
     * @example `custom-report.report123`
     */
    "DestEntityQualifiedName": string;
    /**
     * 血缘关系唯一标识
     * @example `dfazcdfdfccdedd`
     */
    "RelationshipGuid"?: string;
}
