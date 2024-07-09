export interface ListCheckItemWarningSummaryResponse {
    /**
     * 检查项风险统计信息列表。
     */
    List: {
        /**
         * 基线分类。
         * @example `weak_password`
         */
        RiskType: string;
        /**
         * 基线分类名称。
         * @example `week_pa****`
         */
        Alias: string;
        /**
         * 检查项id。
         * @example `696`
         */
        CheckId: number;
        /**
         * 检查项描述。
         * @example `Config the Event Audit policys`
         */
        CheckItem: string;
        /**
         * 检查项风险等级。取值：
         * - **high**：高危
         * - **medium**：中危
         * - **low**：低危
         * @example `high`
         */
        CheckLevel: string;
        /**
         * 检查项类别。
         * @example `Security audit`
         */
        CheckType: string;
        /**
         * 检查项建议。
         * @example `In the Administrative Tools window, double-click Local Security Policy. In the Local Security Policy window that appears, choose Security Settings\\Local Policies\\Audit Policy, configure all audit policies as: `Success, Failure`.`
         */
        Advice: string;
        /**
         * 检查项详情描述。
         * @example `Config the Event Audit policys`
         */
        Description: string;
        /**
         * 检查项风险状态。取值：
         * - **1**：未通过
         * - **3**：已通过
         * @example `1`
         */
        Status: number;
        /**
         * 检查项风险影响的机器数量。
         * @example `20`
         */
        WarningMachineCount: number;
        /**
         * 检查项是否属于容器运行时类别。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        ContainerCheckItem: boolean;
        /**
         * 归属的基线分类列表。
         */
        AffiliatedRiskTypes: string[];
        /**
         * 归属的基线列表。
         */
        AffiliatedRisks: string[];
        /**
         * 检查项已开启的基线列表。
         */
        EnableRisks: string[];
    }[];
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的检查项的总数量。
         * @example `149`
         */
        TotalCount: number;
        /**
         * 查询到的检查项的当前页显示数据条数。
         * @example `4`
         */
        Count: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DC97C9EC-4B7D-5EFF-8A5E-A5CCC9ED****`
     */
    RequestId: string;
}
