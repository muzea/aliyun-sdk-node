export interface ListHoneypotRequest {
    /**
     * 蜜罐名称。
     * @example `mx-rouyi`
     */
    "HoneypotName"?: string;
    /**
     * 蜜罐管理节点名称。
     * @example `honeypot_master`
     */
    "NodeName"?: string;
    /**
     * 蜜罐管理节点ID。
     * @example `a882e590-b87b-45a6-87b9-d0a3e5a0****`
     */
    "NodeId"?: string;
    /**
     * 蜜罐ID集合。
     */
    "HoneypotIds"?: string[];
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，每页最多显示的数据条数。
     * @example `20`
     */
    "PageSize"?: number;
}
