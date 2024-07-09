export interface ListDeprecatedTemplatesRequest {
    /**
     * 实例ID。
     * @example `es-cn-t57p81n7ai89v****`
     */
    "InstanceId": string;
    /**
     * 索引模板名称。
     * @example `component-openstore-index-template`
     */
    "name"?: string;
    /**
     * 分页查询时设置的页数。
     * @example `5`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。
     * @example `10`
     */
    "size"?: number;
}
