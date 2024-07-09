export interface DescribeSavingsPlansUsageTotalResponse {
    /**
     * 状态码
     * @example `success`
     */
    Code: string;
    /**
     * 接口调用信息
     * @example `Successful!`
     */
    Message: string;
    /**
     * 请求ID
     * @example `79EE7556-0CFD-44EB-9CD6-B3B526E3A85F`
     */
    RequestId: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回的查询数据
     */
    Data: {
        /**
         * 每个时间端的使用率数据
         */
        PeriodCoverage: {
            /**
             * 使用率
             * @example `1`
             */
            Percentage: number;
            /**
             * 数据所属时间段，格式 yyyyMMddHH.
             * @example `2021041500`
             */
            Period: string;
        }[];
        /**
         * 总使用率概览
         */
        TotalUsage: {
            /**
             * 后付费价格
             * @example `200`
             */
            PostpaidCost: number;
            /**
             * 节省的金额
             * @example `100`
             */
            SavedCost: number;
            /**
             * 总使用率
             * @example `1`
             */
            UsagePercentage: number;
            /**
             * 节省计划的总量
             * @example `100`
             */
            PoolValue: number;
        };
    };
}
