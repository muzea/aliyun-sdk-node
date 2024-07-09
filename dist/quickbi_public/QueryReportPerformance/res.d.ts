export interface QueryReportPerformanceResponse {
    /**
     * 请求ID。
     * @example `1FC71085-D5FD-08E0-813A-4D4BD1031BC5`
     */
    RequestId: string;
    Result: {
        /**
         * 作品ID。
         * @example `6b407e50-e774-406b-9956-da2425c2****`
         */
        ReportId: string;
        /**
         * 报告名称。
         * @example `ClusterAddonUpgradeReport`
         */
        ReportName: string;
        /**
         * 图表查询次数。
         * @example `1`
         */
        ComponentQueryCount: number;
        /**
         * 图表平均查询次数。
         * @example `2.0`
         */
        ComponentQueryCountAvg: number;
        /**
         * 报表类型。
         * @example `report`
         */
        ReportType: string;
        /**
         * 图表查询超时次数。
         * @example `8`
         */
        QueryTimeoutCount: number;
        /**
         * 重复查询占比。
         * @example `0.7
        `
         */
        RepeatSqlQueryPercent: string;
        /**
         * 空间名称。
         * @example `自定义模板`
         */
        WorkspaceName: string;
        /**
         * 作品所属工作空间ID。
         * @example `ab46ed33-6278-4ef7-8013-8c1335f266ee`
         */
        WorkspaceId: string;
        /**
         * 重复查询数量。
         * @example `3`
         */
        RepeatQueryPercentNum: number;
        /**
         * 重复查询占比。
         * @example `0.8`
         */
        RepeatQueryPercent: string;
        /**
         * 命中Quick引擎平均查询耗时。
         * @example `10`
         */
        QuickIndexCostTimeAvg: number;
        /**
         * 命中Quick引擎次数。
         * @example `5`
         */
        QuickIndexQueryCount: number;
        /**
         * 命中缓存平均耗时。
         * @example `2.2`
         */
        CacheCostTimeAvg: number;
        /**
         * 命中缓存次数。
         * @example `1`
         */
        CacheQueryCount: number;
        /**
         * 重复查询次数。
         * @example `1`
         */
        RepeatSqlQueryCount: number;
        /**
         * 平均查询时间。
         * @example `0.2`
         */
        CostTimeAvg: number;
        /**
         * 平均查询次数。
         * @example `3.3`
         */
        QueryCountAvg: number;
        /**
         * 查询次数。
         * @example `50`
         */
        QueryCount: number;
        /**
         * 图表查询超时次数占比。
         * @example `0.5`
         */
        QueryTimeoutCountPercent: number;
        /**
         * 查询超过10s查询次数。
         * @example `0.5`
         */
        QueryOverTenSecPercentNum: number;
        /**
         * 查询超过5s查询次数占比。
         * @example `0.5`
         */
        QueryOverFivePercentNum: number;
        /**
         * 查询超过10s占比。
         * @example `0.5`
         */
        QueryOverTenSecPercent: string;
        /**
         * 查询超过5s占比。
         * @example `0.5`
         */
        QueryOverFiveSecPercent: string;
    }[];
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `True`
     */
    Success: boolean;
}
