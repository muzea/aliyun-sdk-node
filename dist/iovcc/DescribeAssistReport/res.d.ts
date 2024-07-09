export interface DescribeAssistReportResponse {
    /**
     * 请求ID。
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 诊断结论。
     * @example `手动设置正确时间`
     */
    AssistResult: string;
    /**
     * 诊断原因定位，描述问题的主要原因。
     * @example `没有和时间服务器同步`
     */
    AssistReason: string;
    /**
     * 诊断会话ID。
     * @example `510`
     */
    AssistId: string;
    /**
     * 诊断缺陷描述，描述问题现象、复现步骤。
     * @example `设备时间异常`
     */
    AssistDescription: string;
    /**
     * 诊断标签，用于历史查询，按空格分隔。
     * @example `系统时间`
     */
    AssistTag: string;
}
