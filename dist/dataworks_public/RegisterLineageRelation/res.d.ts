export interface RegisterLineageRelationResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 错误信息。
     * @example `The entity of lineage not exist, xxx`
     */
    ErrorMessage: string;
    /**
     * 请求的ID：用于定位日志、排查问题。
     * @example `EE50E05E-028C-182B-9xxx`
     */
    RequestId: string;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码。
     * @example `1010210001`
     */
    ErrorCode: string;
    /**
     * 血缘关系对象。
     */
    LineageRelation: {
        /**
         * 源实体唯一标识。
         * @example `maxcompute-table.project.table`
         */
        SrcEntityQualifiedName: string;
        /**
         * 目标实体唯一标识。
         * @example `custom-report.month_stat_user`
         */
        DestEntityQualifiedName: string;
        /**
         * 实体间血缘关系ID。
         * @example `dfsldfdlsfdsaaaabbbb`
         */
        RelationshipGuid: string;
    };
}
