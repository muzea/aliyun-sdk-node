export interface DescribeFaultDiagnosisFactorDistributionStatResponse {
    /**
     * 影响因素分布统计数据。
     */
    StatList: {
        /**
         * 影响因素ID，详情请参见下文中的影响因素ID取值。
         * @example `1`
         */
        FactorId: string;
        /**
         * 影响用户数。
         * @example `100`
         */
        UserCount: number;
        /**
         * 影响用户占比。
         * @example `0.9239`
         */
        UserRatio: number;
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
