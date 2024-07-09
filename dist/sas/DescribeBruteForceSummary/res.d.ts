export interface DescribeBruteForceSummaryResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `AE60EAE3-ABD0-897C-B0F16CAC6C7D`
     */
    RequestId: string;
    /**
     * 防暴力破解IP拦截策略的统计信息。
     */
    BruteForceSummary: {
        /**
         * 防暴力破解IP拦截策略总数。
         * @example `13`
         */
        AllStrategyCount: number;
        /**
         * 已启用的防暴力破解IP拦截策略数量。
         * @example `2`
         */
        EffectiveCount: number;
        /**
         * 防御策略数。
         * @example `2`
         */
        AntiBruteForceRuleCount: string;
        /**
         * 自定义拦截规则数。
         * @example `19730`
         */
        CustomRecordCount: string;
        /**
         * 系统拦截规则数。
         * @example `2`
         */
        SystemRecordCount: string;
        /**
         * 生效的自定义拦截规则数。
         * @example `3`
         */
        CustomEffectiveCount: string;
        /**
         * 生效的系统拦截规则数。
         * @example `1`
         */
        SystemEffectiveCount: string;
    };
}
