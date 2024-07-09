export interface ListTaskFlowsByPageRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 过滤条件，应用场景ID
     * @example `12***`
     */
    "ScenarioId"?: number;
    /**
     * 过滤条件，任务流ID列表。
     */
    "DagIdList"?: number[];
    /**
     * 搜索任务流名称关键字。
     * @example `测试节点`
     */
    "SearchKey"?: string;
    /**
     * 第几页。
     * @example `1`
     */
    "PageIndex"?: number;
    /**
     * 每页数据量。
     * @example `20`
     */
    "PageSize"?: number;
}
