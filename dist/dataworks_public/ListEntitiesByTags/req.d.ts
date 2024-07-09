export interface ListEntitiesByTagsRequest {
    /**
     * 实体的类型。
     * @example `maxcompute-table`
     */
    "EntityType": string;
    /**
     * 标签列表。
     */
    "Tags": any[];
    /**
     * 分页信息，指定本次读取的起始点。
     * @example `12345`
     */
    "NextToken"?: string;
    /**
     * 每页显示的条数，默认为 10 条、最大 100 条。
     * @example `10`
     */
    "PageSize"?: number;
}
