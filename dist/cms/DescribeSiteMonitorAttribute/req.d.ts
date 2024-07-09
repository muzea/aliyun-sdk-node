export interface DescribeSiteMonitorAttributeRequest {
    /**
     * 监控任务ID。
     * @example `cc641dff-c19d-45f3-ad0a-818a0c4f****`
     */
    "TaskId": string;
    /**
     * 返回的任务详情是否包含报警规则。
     * - true：如果该参数的取值为true，则返回报警规则。
     * - false（默认值）：如果该参数的取值为false，则不返回报警规则。
     * @example `false`
     */
    "IncludeAlert"?: boolean;
}
