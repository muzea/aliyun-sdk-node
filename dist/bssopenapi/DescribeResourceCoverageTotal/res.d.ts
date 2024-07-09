export interface DescribeResourceCoverageTotalResponse {
    /**
     * 状态码
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求标识
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据
     */
    Data: {
        /**
         * 时段覆盖率
         */
        PeriodCoverage: {
            /**
             * 覆盖率
             * @example `0.1`
             */
            CoveragePercentage: number;
            /**
             * 时段
             * yyyyMMddHH
             * @example `2020110100`
             */
            Period: string;
        }[];
        /**
         * 总覆盖率
         */
        TotalCoverage: {
            /**
             * 抵扣单位
             * @example `算力*小时`
             */
            CapacityUnit: string;
            /**
             * 总抵扣量
             * @example `1`
             */
            DeductQuantity: number;
            /**
             * 总覆盖率
             * @example `1`
             */
            CoveragePercentage: number;
            /**
             * 总使用量
             * @example `1`
             */
            TotalQuantity: number;
        };
    };
}
