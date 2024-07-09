export interface DescribeCheckWarningSummaryResponse {
    /**
     * 指定返回结果的当前页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `00BD7CE2-284A-4534-BD09-FB69836DD750`
     */
    RequestId: string;
    /**
     * 基线检查项的总数。
     * @example `100`
     */
    TotalCount: number;
    /**
     * 当前页显示的检测项条数。
     * @example `10`
     */
    Count: number;
    /**
     * 检查项统计明细。
     */
    WarningSummarys: {
        /**
         * 低危检查项的个数。
         * @example `3`
         */
        LowWarningCount: number;
        /**
         * 基线检查项个数。
         * @example `10`
         */
        CheckCount: number;
        /**
         * 中危检查项的个数。
         * @example `2`
         */
        MediumWarningCount: number;
        /**
         * 最近执行基线检查的时间。
         * @example `2019-01-01 12:23:00`
         */
        LastFoundTime: string;
        /**
         *  风险项ID。
         * @example `118`
         */
        RiskId: number;
        /**
         *  风险项二级分类。
         * @example `Redis`
         */
        SubTypeAlias: string;
        /**
         *  检测出基线风险项的资产的数量。
         * @example `11`
         */
        WarningMachineCount: number;
        /**
         * 高危检查项个数。
         * @example `1`
         */
        HighWarningCount: number;
        /**
         * 基线检查项的分类，例如：数据库、系统、弱密码检测和中间件。
         * @example `databases`
         */
        TypeAlias: string;
        /**
         * 基线检查风险项名称。
         * @example `Redis`
         */
        RiskName: string;
        /**
         *  基线检查风险项的危险等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * @example `high`
         */
        Level: string;
        /**
         * 可利用性。取值：
         * - **true**：可利用
         * - **false**：不可利用
         * @example `false`
         */
        CheckExploit: boolean;
        /**
         * 是否数据库风险项。取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        DatabaseRisk: boolean;
        /**
         * 基线是否属于容器运行时类别。取值：
         * - **true**：是
         * - **false**：否
         * @example `false`
         */
        ContainerRisk: boolean;
    }[];
}
