export interface DescribeDiagnoseReportRequest {
    /**
     * 实例ID。
     * @example `es-cn-mp91kzb8m0009****`
     */
    "InstanceId": string;
    /**
     * 生成智能诊断报告的语言。默认为浏览器语言，支持：
     * - en：英语
     * - zh：简体中文
     * - zt：繁体中文
     * - es：西班牙语
     * - fr：法语
     * @example `en`
     */
    "lang"?: string;
    /**
     * 报告ID。可通过[ListDiagnoseReportIds](~~183774~~) API获取。
     * @example `scheduled__2020-09-15T00:40:00`
     */
    "ReportId": string;
}
