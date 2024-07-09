export interface DescribeDiagnosticMetricsResponse {
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
    /**
     * 诊断指标。
     */
    Metrics: {
        /**
         * 诊断指标ID。
         * @example `GuestOS.WinFirewall`
         */
        MetricId: string;
        /**
         * 诊断指标名称。
         * @example `CPU诊断`
         */
        MetricName: string;
        /**
         * 诊断指标分类。
         * @example `CPU`
         */
        MetricCategory: string;
        /**
         * 诊断指标描述。
         * @example `CPU诊断`
         */
        Description: string;
        /**
         * 诊断指标支持的资源。
         * @example `instance`
         */
        ResourceType: string;
        /**
         * 是否需要在GuestOS内执行脚本。
         * @example `true`
         */
        GuestMetric: boolean;
        /**
         * 支持的操作系统。取值范围：
         * - Windows：支持Windows操作系统。
         * - Linux：支持Linux操作系统。
         * - All：支持Windows和Linux操作系统。
         * @example `ALL`
         */
        SupportedOperatingSystem: string;
    }[];
}
