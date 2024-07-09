export interface ListShadowSchemasRequest {
    /**
     * 项目ID
     * @example `PIC3UA0V`
     */
    "ProjectId": string;
    /**
     * 查询类型
     * @example `deviceModelId`
     */
    "QueryType"?: string;
    /**
     * 和查询类型匹配的查询值
     * @example `120`
     */
    "QueryValue"?: string;
    /**
     * 查询的页码
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页查询的数量
     * @example `10`
     */
    "PageSize"?: number;
}
