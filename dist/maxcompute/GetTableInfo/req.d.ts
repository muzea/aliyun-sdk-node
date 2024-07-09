export interface GetTableInfoRequest {
    /**
     * 项目名称。
     * @example `projectA`
     */
    "projectName": string;
    /**
     * schema名称。
     * @example `default`
     */
    "schemaName"?: string;
    /**
     * 表名
     * @example `sale_detail`
     */
    "tableName": string;
    /**
     * 表类型。
     * @example `internal`
     */
    "type"?: string;
}
