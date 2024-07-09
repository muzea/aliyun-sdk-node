export interface DescribeDiagnosticReportsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 诊断报告ID列表。
     */
    "ReportIds"?: string[];
    /**
     * 资源ID列表。最多支持100个ID。
     */
    "ResourceIds"?: string[];
    /**
     * 报告状态。取值范围：
     * - InProgress：诊断中。
     * - Failed：诊断失败。
     * - Finished：诊断完成。
     * @example `Finished`
     */
    "Status"?: string;
    /**
     * 严重等级。取值范围：
     * - Unknown：初始状态，表示未开始诊断或者诊断过程程序异常退出，无诊断结论。
     * - Normal：诊断正常，没有发现问题。
     * - Info：有关联信息，可能与异常相关。
     * - Warn：有关联信息，可能导致异常。
     * - Critical：有关键异常。
     * @example `Normal`
     */
    "Severity"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用接口返回的`NextToken`参数值，初次调用接口时无需设置该参数。
     * @example `caeba0bbb2be03f84eb48b699f0a4883`
     */
    "NextToken"?: string;
    /**
     * 分页查询时每页行数。最大值为100。
     * 默认值：
     * - 当不设置值时，默认值为10。
     * - 当设置的值大于100时，默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
}
