export interface ListAppResponse {
    /**
     * 应用列表。
     */
    Apps: {
        /**
         * 应用ID。
         * @example `4384****`
         */
        AppId: string;
        /**
         * 应用的创建时间。
         * @example `2022-04-06 02:00:00`
         */
        GmtCreate: string;
        /**
         * 应用的最后修改时间。
         * @example `2022-04-06 02:00:00`
         */
        GmtModified: string;
        /**
         * 应用名称。
         * @example `example`
         */
        AppName: string;
        /**
         * 应用类型。取值：
         * - end_game：端游（客户端游戏）。
         * - hand_game：手游（移动端游戏）。
         * - ai_app：人工智能应用。
         * - render_app：渲染类应用。
         * - cluster_compute：科研计算应用。
         * - compute：科研渲染应用。
         * @example `end_game`
         */
        AppType: string;
        /**
         * 应用总共创建的版本数。
         * @example `28`
         */
        VersionTotalNum: number;
        /**
         * 应用总共适配成功的版本数。
         * @example `10`
         */
        VersionAdaptNum: number;
    }[];
    /**
     * 应用总数。
     * @example `12`
     */
    Total: number;
    /**
     * 请求ID。
     * @example `46329898-489C-4E63-9BA1-C1DA5C5D0986`
     */
    RequestId: string;
}
