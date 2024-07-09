export interface DescribeImageBaselineStrategyResponse {
    /**
     * 本次请求的ID。
     * @example `9F85AC10-A1FE-54D7-935A-F28D5256****`
     */
    RequestId: string;
    /**
     * 基线检查策略信息。
     */
    Strategy: {
        /**
         * 基线检查策略类型。取值：
         * - **default**：默认策略
         * - **full**：全基线项策略
         * - **normal**：常规基线项策略
         * @example `default`
         */
        Type: string;
        /**
         * 策略名称。
         * @example `default`
         */
        StrategyName: string;
        /**
         * 基线检查策略ID。
         * @example `8257`
         */
        StrategyId: number;
        /**
         * 选择的基线检查项数量。
         * @example `10`
         */
        SelectedItemCount: number;
        /**
         * 基线检查项总数
         * @example `100`
         */
        TotalItemCount: number;
        /**
         * 基线项列表。
         */
        BaselineItemList: {
            /**
             * 基线主项的名称key。
             * @example `identification`
             */
            NameKey: string;
            /**
             * 基线子项的key。
             * @example `duplicate_pwd_hash`
             */
            ItemKey: string;
            /**
             * 基线主项的分类key。
             * @example `identification`
             */
            ClassKey: string;
        }[];
        /**
         * 无代理检测基线检查策略。
         * @example `hc_win2008_cis_rules`
         */
        BaselineItem: string;
    };
}
