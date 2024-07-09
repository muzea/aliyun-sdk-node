export interface GetCheckSummaryResponse {
    /**
     * 总览返回值。
     */
    Summarys: {
        /**
         * 检查项类型。包括：
         * - **COMPLIANCE**： 合规
         * - **RISK**：安全风险
         * - **IDENTITY_PERMISSION**： 身份权限
         * @example `IDENTITY_PERMISSION`
         */
        Type: string;
        /**
         * 通过检查的检查项个数。
         * @example `10`
         */
        PassCount: number;
        /**
         * 检查到的风险项数量。
         * @example `5`
         */
        FailCount: number;
        /**
         * 检查项的标准输出。
         */
        Standards: {
            /**
             * 检查项ID。
             * @example `1`
             */
            Id: number;
            /**
             * 检查项名称。
             * @example `身份权限管理`
             */
            ShowName: string;
            /**
             * 通过检查项数量。
             * @example `1`
             */
            PassCount: number;
            /**
             * 未通过检查项数量。
             * @example `1`
             */
            FailCount: number;
            /**
             * 风险等级为**高危**的检查项数量。
             * @example `1`
             */
            RiskLevelHighCount: number;
            /**
             * 风险等级为**中危**的检查项数量。
             * @example `1`
             */
            RiskLevelMediumCount: number;
            /**
             * 风险等级为**低危**的检查项数量。
             * @example `1`
             */
            RiskLevelLowCount: number;
            /**
             * 标准的风险统计信息。
             */
            StandardStatistic: {
                /**
                 * 通过检查项数量。
                 * @example `3`
                 */
                PassCount: number;
                /**
                 * 通过的级别为低危的检查项数量。
                 * @example `1`
                 */
                PassLowCount: number;
                /**
                 * 通过的级别为中危的检查项数量。
                 * @example `1`
                 */
                PassMediumCount: number;
                /**
                 * 通过的级别为高危的检查项数量。
                 * @example `1`
                 */
                PassHighCount: number;
                /**
                 * 未通过检查项数量。
                 * @example `3`
                 */
                NotPassCount: number;
                /**
                 * 未通过的级别为低危的检查项数量。
                 * @example `1`
                 */
                NotPassLowCount: number;
                /**
                 * 未通过的级别为中危的检查项数量。
                 * @example `1`
                 */
                NotPassMediumCount: number;
                /**
                 * 未通过的级别为高危的检查项数量。
                 * @example `1`
                 */
                NotPassHighCount: number;
                /**
                 * 未检查的检查项数量。
                 * @example `3`
                 */
                NotCheckCount: number;
                /**
                 * 未检查的级别为低危的检查项数量。
                 * @example `1`
                 */
                NotCheckLowCount: number;
                /**
                 * 未检查的级别为中危的检查项数量。
                 * @example `1`
                 */
                NotCheckMediumCount: number;
                /**
                 * 未检查的级别为高危的检查项数量。
                 * @example `1`
                 */
                NotCheckHighCount: number;
            };
        }[];
        /**
         * 风险类别的风险统计信息。
         */
        TypeStatistic: {
            /**
             * 通过检查项数量。
             * @example `3`
             */
            PassCount: number;
            /**
             * 通过的级别为低危的检查项数量。
             * @example `1`
             */
            PassLowCount: number;
            /**
             * 通过的级别为中危的检查项数量。
             * @example `1`
             */
            PassMediumCount: number;
            /**
             * 通过的级别为高危的检查项数量。
             * @example `1`
             */
            PassHighCount: number;
            /**
             * 未通过检查项数量。
             * @example `3`
             */
            NotPassCount: number;
            /**
             * 未通过的级别为低危的检查项数量。
             * @example `1`
             */
            NotPassLowCount: number;
            /**
             * 未通过的级别为中危的检查项数量。
             * @example `1`
             */
            NotPassMediumCount: number;
            /**
             * 未通过的级别为高危的检查项数量。
             * @example `1`
             */
            NotPassHighCount: number;
            /**
             * 未检查的检查项数量。
             * @example `3`
             */
            NotCheckCount: number;
            /**
             * 未检查的级别为低危的检查项数量。
             * @example `1`
             */
            NotCheckLowCount: number;
            /**
             * 未检查的级别为中危的检查项数量。
             * @example `1`
             */
            NotCheckMediumCount: number;
            /**
             * 未检查的级别为高危的检查项数量。
             * @example `1`
             */
            NotCheckHighCount: number;
        };
    }[];
    /**
     * 整体风险统计信息。
     */
    OverallStatistic: {
        /**
         * 通过检查项数量。
         * @example `3`
         */
        PassCount: number;
        /**
         * 通过的级别为低危的检查项数量。
         * @example `1`
         */
        PassLowCount: number;
        /**
         * 通过的级别为中危的检查项数量。
         * @example `1`
         */
        PassMediumCount: number;
        /**
         * 通过的级别为高危的检查项数量。
         * @example `1`
         */
        PassHighCount: number;
        /**
         * 未通过检查项数量。
         * @example `3`
         */
        NotPassCount: number;
        /**
         * 未通过的级别为低危的检查项数量。
         * @example `1`
         */
        NotPassLowCount: number;
        /**
         * 未通过的级别为中危的检查项数量。
         * @example `1`
         */
        NotPassMediumCount: number;
        /**
         * 未通过的级别为高危的检查项数量。
         * @example `1`
         */
        NotPassHighCount: number;
        /**
         * 未检查的检查项数量。
         * @example `3`
         */
        NotCheckCount: number;
        /**
         * 未检查的级别为低危的检查项数量。
         * @example `1`
         */
        NotCheckLowCount: number;
        /**
         * 未检查的级别为中危的检查项数量。
         * @example `1`
         */
        NotCheckMediumCount: number;
        /**
         * 未检查的级别为高危的检查项数量。
         * @example `1`
         */
        NotCheckHighCount: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `843E4805-****-7EE12FA8DBFD`
     */
    RequestId: string;
    /**
     * 检查项数相关统计信息。
     */
    OverallItemStatistic: {
        /**
         * 用户当前已有检查项数。
         * @example `25`
         */
        ResultCount: number;
        /**
         * 系统已发布检查项数。
         * @example `620`
         */
        ReleaseCount: number;
    };
}
