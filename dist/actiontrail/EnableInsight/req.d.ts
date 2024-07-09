export interface EnableInsightRequest {
    /**
     * 审计事件洞察类型，取值：
     * - IpInsight：非常用IP事件。
     * - ApiCallRateInsight：API请求异常事件。
     * - ApiErrorRateInsight：API失败异常事件。
     * @example `IpInsight`
     */
    "InsightType"?: string;
}
