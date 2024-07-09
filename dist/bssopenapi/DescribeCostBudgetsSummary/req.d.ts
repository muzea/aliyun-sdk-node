export interface DescribeCostBudgetsSummaryRequest {
    /**
     * 预算名称。模糊匹配
     * @example `全年预算`
     */
    "BudgetName"?: string;
    /**
     * 预算状态，枚举值：overdue（已过期）,notOverdue（未过期）。不填写则默认取全部
     * @example `notOverdue`
     */
    "BudgetStatus"?: string;
    /**
     * 预算类型。枚举值：cost(费用预算), byquantity（按量编制预算）, asset（使用率及覆盖率预算）。
     * 不填写则默认取全部
     * @example `cost`
     */
    "BudgetType"?: string;
    /**
     * 当前调用开始读取的位置，参数值必须为空或者使用返回结果中的NextToken设值，否则会报错，空则代表从头开始读取。默认：空
     * @example `eyJwYWdlTnVtIjoyLCJwYWdlU2l6ZSI6NH0=`
     */
    "NextToken"?: string;
    /**
     * 读取的最大数据记录数量。默认值：10，最大值：10，最小值：1。
     * @example `5`
     */
    "MaxResults"?: number;
}
