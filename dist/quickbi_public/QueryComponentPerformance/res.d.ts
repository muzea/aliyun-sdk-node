export interface QueryComponentPerformanceResponse {
    /**
     * 请求ID。
     * @example `BCE45E6D-9304-4F94-86BB-5A772B1615FF`
     */
    RequestId: string;
    Result: {
        /**
         * 组件ID。
         * @example `0696083a-ca72-4d89-8e7a-c017910e0***`
         */
        ComponentId: string;
        /**
         * 组件名称。
         * @example `线图`
         */
        ComponentName: string;
        /**
         * 作品ID。
         * @example `6b407e50-e774-406b-9956-da2425c2****`
         */
        ReportId: string;
        /**
         * 报告名称。
         * @example `ClusterRiskReport`
         */
        ReportName: string;
        /**
         * 报表类型。
         * @example `report`
         */
        ReportType: string;
        /**
         * 图表查询超时次数。
         * @example `1`
         */
        QueryTimeoutCount: number;
        /**
         * 重复查询占比。
         * @example `0.3`
         */
        RepeatSqlQueryPercent: string;
        /**
         * 空间名称。
         * @example `测试空间`
         */
        WorkspaceName: string;
        /**
         * 空间唯一ID。
         * @example `89713491-cb4f-4579-b889-e82c35f1****`
         */
        WorkspaceId: string;
        /**
         * 重复查询数量。
         * @example `2`
         */
        RepeatQueryPercentNum: number;
        /**
         * 重复查询占比。
         * @example `0.3`
         */
        RepeatQueryPercent: string;
        /**
         * 命中Quick引擎平均查询耗时。
         * @example `0.3`
         */
        QuickIndexCostTimeAvg: number;
        /**
         * 命中Quick引擎次数。
         * @example `3`
         */
        QuickIndexQueryCount: number;
        /**
         * 命中缓存平均耗时。
         * @example `0.3`
         */
        CacheCostTimeAvg: number;
        /**
         * 命中缓存次数。
         * @example `3`
         */
        CacheQueryCount: number;
        /**
         * 重复查询次数。
         * @example `5`
         */
        RepeatSqlQueryCount: number;
        /**
         * 平均查询时间。
         * @example `0.3`
         */
        CostTimeAvg: number;
        /**
         * 平均查询次数。
         * @example `0.3`
         */
        QueryCountAvg: number;
        /**
         * 查询次数。
         * @example `5`
         */
        QueryCount: number;
        /**
         * 图表查询超时次数占比。
         * @example `0.3`
         */
        QueryTimeoutCountPercent: number;
        /**
         * 查询超过10s查询次数占比。
         * @example `0.3`
         */
        QueryOverTenSecPercentNum: number;
        /**
         * 查询超过5s查询次数。
         * @example `5`
         */
        QueryOverFivePercentNum: number;
        /**
         * 查询超过10s占比。
         * @example `0.3`
         */
        QueryOverTenSecPercent: string;
        /**
         * 查询超过5s占比。
         * @example `0.3`
         */
        QueryOverFiveSecPercent: string;
    }[];
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
