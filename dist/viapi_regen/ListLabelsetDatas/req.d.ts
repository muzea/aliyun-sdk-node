export interface ListLabelsetDatasRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页显示数据条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 标注ID，用来标识标注的唯一性，通过标注ID查询对应数据。
     * @example `219`
     */
    "LabelId": number;
    /**
     * 标注数据筛选的字段。
     * @example `image`
     */
    "Name"?: string;
    /**
     * 标注数据筛选的条件。
     * @example `LIKE`
     */
    "Operation"?: string;
    /**
     * 标注数据筛选的值。
     * @example `1`
     */
    "Value"?: string;
    /**
     * 是否查看废弃的标注数据。
     * @example `true`
     */
    "IsAbandon"?: boolean;
}
