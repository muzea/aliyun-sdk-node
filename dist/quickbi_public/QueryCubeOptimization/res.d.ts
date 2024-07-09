export interface QueryCubeOptimizationResponse {
    /**
     * 请求ID。
     * @example `D787E1A3-A93C-424A-B626-C2B05DF8D885`
     */
    RequestId: string;
    Result: {
        /**
         * 数据集诊断信息。
         */
        CubePerformanceDiagnoseModel: {
            /**
             * 数据集ID。
             * @example `3e45b61a-9ba8-4c7c-8248-8dbe69945636`
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
             * @example `0.3`
             */
            RepeatSqlQueryPercent: string;
            /**
             * 工作空间名称。
             * @example `eco0sh0prods`
             */
            WorkspaceName: string;
            /**
             * 工作空间ID。
             * @example `6ea74bff-c818-4188-b462-dbb45a24dbac`
             */
            WorkspaceId: string;
            /**
             * 重复查询数。
             * @example `2`
             */
            RepeatQueryPercentNum: number;
            /**
             * 重复查询占比。
             * @example `0.1`
             */
            RepeatQueryPercent: string;
            /**
             * 命中Quick引擎平均查询耗时。
             * @example `1`
             */
            QuickIndexCostTimeAvg: number;
            /**
             * 命中Quick引擎次数。
             * @example `2`
             */
            QuickIndexQueryCount: number;
            /**
             * 命中缓存平均耗时。
             * @example `1`
             */
            CacheCostTimeAvg: number;
            /**
             * 命中缓存次数。
             * @example `2`
             */
            CacheQueryCount: number;
            /**
             * 重复查询次数。
             * @example `2`
             */
            RepeatSqlQueryCount: number;
            /**
             * 平均查询时间。
             * @example `1.0`
             */
            CostTimeAvg: number;
            /**
             * 平均查询次数。
             * @example `2`
             */
            QueryCountAvg: number;
            /**
             * 查询次数。
             * @example `50`
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
             * 查询超过5s查询次数占比。
             * @example `0.1`
             */
            QueryOverFivePercentNum: number;
            /**
             * 查询超过10s占比。
             * @example `0.1`
             */
            QueryOverTenSecPercent: string;
            /**
             * 查询超过5s占比。
             * @example `0.5`
             */
            QueryOverFiveSecPercent: string;
        };
        /**
         * 建议的类型，取值说明：
         * - **OPEN_CACHE**：开放缓存。
         * - **OPEN_QUICK_ENGINE**：开放快速缓存。
         * - **INCREASE_CACHE_TIME**：增长缓存时间。
         * @example `OPENQUICKENGINE`
         */
        AdviceType: string;
    }[];
    /**
     * 是否请求成功。取值范围：
     * - true：请求成功
     * - false：请求失败
     * @example `true`
     */
    Success: boolean;
}
