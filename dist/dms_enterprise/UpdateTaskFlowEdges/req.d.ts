export interface UpdateTaskFlowEdgesRequest {
    /**
     * 租户ID。
     * > 取自系统右上角头像处悬停展示的租户ID信息，详情请参见[查看租户信息](~~181330~~)。
     * @example `3***`
     */
    "Tid"?: number;
    /**
     * 任务流ID，可通过调用接口[ListTaskFlow](~~424565~~)或[ListLhTaskFlowAndScenario](~~426672~~)获取该参数的值。
     * @example `15***`
     */
    "DagId": number;
    /**
     * 更新后的任务流边列表。
     */
    "Edges": {
        /**
         * 任务流边ID。
         * @example `24***`
         */
        Id: number;
        /**
         * 边的终点节点ID。
         * @example `44***`
         */
        NodeEnd: number;
        /**
         * 边的起点节点ID。
         * @example `44***`
         */
        NodeFrom: number;
    }[];
}
