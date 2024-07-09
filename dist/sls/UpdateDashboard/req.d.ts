export interface UpdateDashboardRequest {
    /**
     * Project名称。
     * @example `ali-test-project`
     */
    "project": string;
    /**
     * 仪表盘名称。
     * @example `dashboard-1609294922657-434834`
     */
    "dashboardName": string;
    /**
     * 仪表盘数据结构。
     */
    "body"?: {
        /**
         * 仪表盘名称。
         * @example `dashboard-1609294922657-434834`
         */
        dashboardName: string;
        /**
         * 仪表盘显示名称。
         * @example `Method pv`
         */
        displayName: string;
        /**
         * 仪表盘描述信息。
         * @example `test dashboard.`
         */
        description: string;
        /**
         * 仪表盘属性值。
         */
        attribute: any;
        /**
         * 包含的图表。
         */
        charts: any[];
    };
}
