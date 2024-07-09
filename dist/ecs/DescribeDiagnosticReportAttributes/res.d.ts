export interface DescribeDiagnosticReportAttributesResponse {
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
    /**
     * 资源ID。
     * @example `i-uf6i0tv2refv8wz*****`
     */
    ResourceId: string;
    /**
     * 资源类型。支持的类型为instance。
     * @example `instance`
     */
    ResourceType: string;
    /**
     * 诊断报告ID。资源诊断报告的唯一标志。
     * @example `dr-uf6i0tv2refv8wz*****`
     */
    ReportId: string;
    /**
     * 诊断报告状态。可能值：
     * - InProgress：诊断中。
     * - Finished：诊断完成。
     * - Failed：诊断失败。
     * @example `Finished`
     */
    Status: string;
    /**
     * 诊断报告创建时间。
     * @example `2022-07-11T12:00:00Z`
     */
    CreationTime: string;
    /**
     * 诊断报告完成时间。
     * @example `2022-07-11T14:00:00Z`
     */
    FinishedTime: string;
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
     * 报告严重等级。所有指标中最严重的等级，严重等级由轻到重如下：
     * - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
     * - Normal：诊断正常，没有发现问题。
     * - Info：有关联信息，可能与异常相关。
     * - Warn：有关联信息，可能导致异常。
     * - Critical：有关键异常。
     * @example `Normal`
     */
    Severity: string;
    /**
     * 诊断指标集合ID。
     * @example `dms-bp17p0qwtr72zmu*****`
     */
    MetricSetId: string;
    MetricResults: {
        /**
         * 诊断集合中所有指标的诊断结果。
         */
        MetricResult: {
            /**
             * 诊断指标ID。
             * @example `GuestOS.WinFirewall`
             */
            MetricId: string;
            /**
             * 诊断指标分类。
             * @example `CPU`
             */
            MetricCategory: string;
            /**
             * 诊断指标严重等级。可能值：
             * - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
             * - Normal：诊断正常，没有发现问题。
             * - Info：有关联信息，可能与异常相关。
             * - NotSupport：GuestOS版本不支持诊断该项目。
             * - Warn：有关联信息，可能导致异常。
             * - Critical：有关键异常。
             * @example `Normal`
             */
            Severity: string;
            /**
             * 指标诊断状态。可能值：
             * - InProgress：诊断中。
             * - Finished：诊断完成。
             * - Failed：诊断失败。
             * @example `Finished`
             */
            Status: string;
            Issues: {
                /**
                 * 诊断问题列表。
                 */
                Issue: {
                    /**
                     * 诊断问题的唯一识别码。
                     * @example `GuestOS.CPU.HighUtiliz*****`
                     */
                    IssueId: string;
                    /**
                     * 诊断问题严重程度，严重等级由轻到重如下：
                     * - Info：有关联信息，可能与异常相关。
                     * - Warn：有关联信息，可能导致异常。
                     * - Critical：有关键异常。
                     * @example `Info`
                     */
                    Severity: string;
                    /**
                     * 诊断问题携带的额外数据，帮助理解问题更多信息，数据格式为JSON的字符串。
                     * @example `{
                      "TotalPercent": 95,
                      "TopUtilizationProcesses": [
                        {
                          "Pid": "1223",
                          "CommandName": "/usr/bin/mem.py",
                          "PhysicalMemoryPercent": 50
                        }
                      ]
                    }`
                     */
                    Additional: string;
                    /**
                     * 问题发生的时间。
                     * @example `2022-07-11T14:00:00Z`
                     */
                    OccurrenceTime: string;
                }[];
            };
        }[];
    };
    /**
     * 诊断报告的扩展属性。
     * @example `{"OfflineDiagReportStatus":"CONFIRMED"}`
     */
    Attributes: string;
}
