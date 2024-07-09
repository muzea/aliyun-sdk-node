export interface GetEmissionSummaryResponse {
    /**
     * 汇总详情数据
     */
    data: {
        /**
         * 本周期统计指标
         * @example `276.4`
         */
        currentPeriodCarbonEmissionData: number;
        /**
         * 上周期统计指标
         * @example `9.40100`
         */
        lastPeriodCarbonEmissionData: number;
        /**
         * 总用能排放量
         * @example `276.46`
         */
        totalCarbonEmissionData: number;
        /**
         * 碳减排放量
         * @example `0.0`
         */
        carbonSaveConversion: number;
        /**
         * 本周期同比
         * @example `28.410`
         */
        ratio: number;
        /**
         * 已排占比
         * @example `2.7657`
         */
        actualEmissionRatio: number;
        /**
         * 按股比计算碳排
         * @example `248.81400`
         */
        weightingCarbonEmissionData: number;
        /**
         * 上周期按股比计算碳排
         * @example `8.4609`
         */
        lastPeriodWeightingCarbonEmissionData: number;
        /**
         * 股比碳排同比
         * @example `28.4102`
         */
        weightingRatio: number;
        /**
         * 是否展示股比碳排
         * @example `true`
         */
        isWeighting: boolean;
    };
    /**
     * Id of the request
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
}
