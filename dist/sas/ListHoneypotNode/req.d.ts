export interface ListHoneypotNodeRequest {
    /**
     * 管理节点名称。
     * @example `cyct_cnymu`
     */
    "NodeName"?: string;
    /**
     * 节点ID。
     * @example `7d110ca6-05ee-4149-8042-13ad1a41fd****`
     */
    "NodeId"?: string;
    /**
     * 分页查询时的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `20`
     */
    "PageSize"?: number;
}
