export interface ListDashboardResponse {
    /**
     * 仪表盘的名字列表，对应dashboardName。
     */
    dashboards: string[];
    /**
     * 仪表盘。
     */
    dashboardItems: {
        /**
         * 仪表盘ID。同一个Project下，仪表盘ID唯一，不可重复。支持模糊查询，例如输入da，会查询出所有以da开头的仪表盘。
         * @example `dashboard-1609294922657-434834`
         */
        dashboardName: string;
        /**
         * 仪表盘显示名称。
         * @example `data-ingest`
         */
        displayName: string;
    }[];
}
