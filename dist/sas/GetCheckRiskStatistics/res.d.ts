export interface GetCheckRiskStatisticsResponse {
    /**
     * 风险场景检查项统计信息列表。
     */
    Data: {
        /**
         * 风险场景名称。
         * @example `SECURITY`
         */
        SceneName: string;
        /**
         * 低危检查项数量。
         * @example `3`
         */
        LowWarningCount: number;
        /**
         * 中危检查项数量。
         * @example `29`
         */
        MediumWarningCount: number;
        /**
         * 高危检查项数量。
         * @example `43`
         */
        HighWarningCount: number;
        /**
         * 检查项总数量。
         * @example `219`
         */
        TotalCount: number;
        /**
         * 通过检查项数量。
         * @example `143`
         */
        PassCount: number;
        /**
         * 风险场景下基线分类检查项统计信息列表。
         */
        SubStatistics: {
            /**
             * 基线类别。
             * @example `weak_password`
             */
            TypeName: string;
            /**
             * 基线类别名称。
             * @example `weak_password`
             */
            Alias: string;
            /**
             * 低危检查项数量。
             * @example `0`
             */
            LowWarningCount: number;
            /**
             * 中危检查项数量。
             * @example `0`
             */
            MediumWarningCount: number;
            /**
             * 高危检查项数量。
             * @example `3`
             */
            HighWarningCount: number;
            /**
             * 检查项总数量。
             * @example `5`
             */
            TotalCount: number;
            /**
             * 通过检查项数量。
             * @example `2`
             */
            PassCount: number;
        }[];
    }[];
    /**
     * 风险场景数量。
     * @example `3`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `2C455672-2490-5211-84EC-420C7818****`
     */
    RequestId: string;
}
