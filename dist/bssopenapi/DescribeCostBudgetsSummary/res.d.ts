export interface DescribeCostBudgetsSummaryResponse {
    /**
     * 请求ID。
     * @example `3BFC23FE-A182-4D96-A1E4-7521B30B8E43`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful!`
     */
    Message: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 下页token
         * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=`
         */
        NextToken: string;
        /**
         * 本次请求所返回的最大记录条数。
         * @example `5`
         */
        MaxResults: number;
        /**
         * 总记录数。
         * @example `20`
         */
        TotalCount: number;
        /**
         * 列表信息。
         */
        Items: {
            /**
             * 预算名称。
             * @example `全年预算`
             */
            BudgetName: string;
            /**
             * 预算状态
             * @example `overdue`
             */
            BudgetStatus: string;
            /**
             * 预算类型。
             * @example `cost`
             */
            BudgetType: string;
            /**
             * 预算相关信息，其中：
             * - BudgetCycleType是滚动周期，枚举值：daily（日），monthly（月），quarterly（季），yearly(年)；
             * - TotalBudgetAmount是预算总额；
             * - BudgetMemo是预算备注。
             * @example `{           "budgetCycleType": "monthly",           "budgetMemo": "",           "totalBudgetAmount": 220         }`
             */
            Budget: any;
            /**
             * 预实分析相关信息，其中：
             * - ActualConsumeSum 是累计实际值；
             * - ActualAddForecastedAmount是累计实际与预测之和。当预算类型为费用预算时，累计实际与预测之和为从预算开始日期至当前日期的实际发生额加上从当前日期至预算截止日期的预测值。若当前日期至预算截止日期超过一年，则不会包含超过一年的预测金额部分；当预算类型为使用率及覆盖率预算时，累计实际与预测之和为从预算开始日期至预算截止日期的使用率或覆盖率，不含超过一年的预测部分。
             * - ActualAndBudgetComparison是预实对比，累计实际值/预算总额*100%；
             * @example `{           "actualConsumeSum": 88.6,           "actualAddForecastedAmount": 89.6,           "actualAndBudgetComparison": "20.73%"         }`
             */
            CalculatedValues: any;
            /**
             * 账期相关信息。其中：
             * - ConsumePeriodBegin是预算起始日期；
             * - ConsumePeriodEnd是预算截止日期。
             * @example `{           "consumePeriodBegin": "2022-10",           "consumePeriodEnd": "2022-11"         }`
             */
            ConsumePeriod: any;
        }[];
        /**
         * 站点名称
         * @example `cn`
         */
        HostId: string;
    };
}
