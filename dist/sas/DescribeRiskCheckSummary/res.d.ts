export interface DescribeRiskCheckSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `291B49F9-1685-4005-9D34-606B6F78740F`
     */
    RequestId: string;
    /**
     * 云产品配置检查的结果统计。
     */
    RiskCheckSummary: {
        /**
         * 检查项的数量。
         * @example `4`
         */
        ItemCount: number;
        /**
         * 检查结果中风险项影响的资产数量。
         * @example `0`
         */
        AffectedAssetCount: number;
        /**
         * 检查不通过的检查项数量。
         * @example `0`
         */
        DisabledRiskCount: number;
        /**
         * 检查到的风险项数量。
         * @example `1`
         */
        RiskCount: number;
        /**
         * 检查出的风险项数量在检查项总数中所占的百分比。
         * @example `0.25`
         */
        RiskRate: number;
        /**
         * 上次检查到的风险项数量。
         * @example `0`
         */
        PreviousCount: number;
        /**
         * 上次检查的时间戳。单位：毫秒。
         * @example `1545012926000`
         */
        PreviousTime: number;
        /**
         * 检查通过的检查项数量。
         * @example `3`
         */
        EnabledRiskCount: number;
        /**
         * 检查项每类危险等级的数量列表。
         */
        RiskLevelCount: {
            /**
             * 检查项的危险等级。取值：
             * - **high**：高危
             * - **medium**：中危
             * - **low**：低危
             * @example `medium`
             */
            Key: string;
            /**
             * 检查项的危险等级的数量。
             * @example `1`
             */
            Count: number;
        }[];
        /**
         * 检查项类型的统计信息列表。
         */
        Groups: {
            /**
             * 预计检查时间。
             * @example `0`
             */
            RemainingTime: number;
            /**
             * 检查完成的状态。取值：
             * - **finish**：检查已完成
             * - **running**：检查中
             * - **waiting**：检查等待中
             * - **notStart**：检查未开始
             * @example `finish`
             */
            Status: string;
            /**
             * 检查项类型在控制台**全部类型**下拉列表中的排列顺序。
             * @example `1`
             */
            Sort: number;
            /**
             * 检查项类别的名称。
             * @example `身份认证及权限`
             */
            Title: string;
            /**
             * 检查项类别ID。
             * @example `1`
             */
            Id: number;
            /**
             * 检查项结果统计列表。
             */
            CountByStatus: {
                /**
                 * 完成检查后，检查项的状态。取值：
                 * - **pass**：检查通过，表示检查项正常。
                 * - **failed**：检查不通过，表示检查项存在风险。
                 * @example `pass`
                 */
                Status: string;
                /**
                 * 检查到的风险项数量。
                 * @example `2`
                 */
                Count: number;
            }[];
        }[];
    };
}
