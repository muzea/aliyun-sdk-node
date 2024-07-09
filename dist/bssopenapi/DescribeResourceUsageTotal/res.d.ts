export interface DescribeResourceUsageTotalResponse {
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
     * 请求id
     * @example `364C7C81-5E5E-51A0-B738-1969D2671B05`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `True`
     */
    Success: boolean;
    /**
     * 数据
     */
    Data: {
        /**
         * 时段使用率
         */
        PeriodCoverage: {
            /**
             * 使用率
             * @example `0.1`
             */
            UsagePercentage: number;
            /**
             * 时段
             * @example `2021071500`
             */
            Period: string;
        }[];
        /**
         * 总使用率
         */
        TotalUsage: {
            /**
             * 总按量实例成本
             * @example `200`
             */
            PostpaidCost: number;
            /**
             * 总节省金额
             * @example `100`
             */
            SavedCost: number;
            /**
             * 总使用率
             * @example `1`
             */
            UsagePercentage: number;
            /**
             * 潜在总节省金额
             * @example `100`
             */
            PotentialSavedCost: number;
            /**
             * 总资源购买费用
             * @example `10`
             */
            ReservationCost: number;
        };
    };
}
