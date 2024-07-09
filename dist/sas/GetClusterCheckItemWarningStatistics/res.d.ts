export interface GetClusterCheckItemWarningStatisticsResponse {
    /**
     * 基线检查按照高中低等级统计数据。
     */
    Data: {
        /**
         * 低危检查项数量。
         * @example `1`
         */
        LowWarningCount: number;
        /**
         * 中危检查项数量。
         * @example `2`
         */
        MediumWarningCount: number;
        /**
         * 高危检查项数量。
         * @example `3`
         */
        HighWarningCount: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C2B285A3-3493-5C5F-A224-4CCE4BFC****`
     */
    RequestId: string;
}
