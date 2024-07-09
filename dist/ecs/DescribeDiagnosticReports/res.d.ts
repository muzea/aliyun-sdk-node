export interface DescribeDiagnosticReportsResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE*****`
     */
    RequestId: string;
    /**
     * 本次调用返回的查询凭证值。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    NextToken: string;
    Reports: {
        /**
         * 诊断报告列表。
         */
        Report: {
            /**
             * 资源ID。
             * @example `i-uf6i0tv2refv8wz*****`
             */
            ResourceId: string;
            /**
             * 资源类型。
             * @example `instance`
             */
            ResourceType: string;
            /**
             * 诊断指标集合ID。
             * @example `dms-bp17p0qwtr72zmu*****`
             */
            MetricSetId: string;
            /**
             * 开始时间。调用[CreateDiagnosticReport](~~442490~~)接口创建诊断报告时传入的参数。
             * @example `2022-07-11T12:00:00Z`
             */
            StartTime: string;
            /**
             * 结束时间。调用[CreateDiagnosticReport](~~442490~~)接口创建诊断报告时传入的参数。
             * @example `2022-07-11T14:00:00Z`
             */
            EndTime: string;
            /**
             * 诊断报告ID。
             * @example `dr-uf6i0tv2refv8wz*****`
             */
            ReportId: string;
            /**
             * 诊断报告状态。
             * @example `Finished`
             */
            Status: string;
            /**
             * 诊断报告创建时间。
             * @example `2022-07-11T12:00:00Z`
             */
            CreationTime: string;
            /**
             * 诊断报告结束时间。
             * @example `2022-07-11T14:00:00Z`
             */
            FinishedTime: string;
            /**
             * 严重等级。取值范围：
             * - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
             * - Normal：诊断正常，没有发现问题。
             * - Info：有关联信息，可能与异常相关。
             * - Warn：有关联信息，可能导致异常。
             * - Critical：有关键异常。
             * @example `Normal`
             */
            Severity: string;
            Issues: {
                /**
                 * 诊断问题列表。
                 */
                Issue: {
                    /**
                     * 诊断指标ID。
                     * @example `GuestOS.WinFirewall`
                     */
                    MetricId: string;
                    /**
                     * 诊断指标分类。
                     * @example `ECSService.GuestOS`
                     */
                    MetricCategory: string;
                    /**
                     * 诊断问题的唯一识别码。
                     * @example `GuestOS.CPU.HighUtiliz*****`
                     */
                    IssueId: string;
                    /**
                     * 诊断指标严重等级。严重等级由轻到重如下：
                     * - Info：有关联信息，可能与异常相关。
                     * - Warn：有关联信息，可能导致异常。
                     * - Critical：有关键异常。
                     * @example `Info`
                     */
                    Severity: string;
                }[];
            };
        }[];
    };
}
