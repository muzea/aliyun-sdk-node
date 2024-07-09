export interface QueryCubePerformanceResponse {
    /**
     * 请求ID。
     * @example `685072a0-1fd5-40ef-ae6b-cf94e79e718f`
     */
    RequestId: string;
    Result: {
        /**
         * 数据集ID。
         * @example `7c7223ae-****-3c744528014b`
         */
        CubeId: string;
        /**
         * 数据集名称。
         * @example `test`
         */
        CubeName: string;
        /**
         * 图表查询超时次数。
         * @example `1`
         */
        QueryTimeoutCount: number;
        /**
         * 重复查询占比。
         * @example `1`
         */
        RepeatSqlQueryPercent: string;
        /**
         * 空间名称。
         * @example `测试工作空间`
         */
        WorkspaceName: string;
        /**
         * 作品所属工作空间的ID。
         * @example `87c6b145-090c-43e1-9426-8f93be23****`
         */
        WorkspaceId: string;
        /**
         * 重复查询数。
         * @example `1`
         */
        RepeatQueryPercentNum: number;
        /**
         * 重复查询占比。
         * @example `0.3`
         */
        RepeatQueryPercent: string;
        /**
         * 命中Quick引擎平均查询耗时。
         * @example `1`
         */
        QuickIndexCostTimeAvg: number;
        /**
         * 命中Quick引擎次数。
         * @example `1`
         */
        QuickIndexQueryCount: number;
        /**
         * 命中缓存平均耗时。
         * @example `1`
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
         * @example `1`
         */
        CostTimeAvg: number;
        /**
         * 平均查询次数。
         * @example `1`
         */
        QueryCountAvg: number;
        /**
         * 查询次数。
         * @example `50`
         */
        QueryCount: number;
        /**
         * 图表查询超时次数占比。
         * @example `1`
         */
        QueryTimeoutCountPercent: number;
        /**
         * 查询超过10s查询次数占比。
         * @example `1.0`
         */
        QueryOverTenSecPercentNum: number;
        /**
         * 查询超过5s查询次数占比。
         * @example `1.0`
         */
        QueryOverFivePercentNum: number;
        /**
         * 查询超过10s占比。
         * @example `1.0`
         */
        QueryOverTenSecPercent: string;
        /**
         * 查询超过5s占比。
         * @example `1.0`
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
