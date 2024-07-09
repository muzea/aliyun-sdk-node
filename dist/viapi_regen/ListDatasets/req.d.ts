export interface ListDatasetsRequest {
    /**
     * 当前页数。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 每页数据显示条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 生产空间ID。
     * @example `63`
     */
    "WorkspaceId": number;
}
