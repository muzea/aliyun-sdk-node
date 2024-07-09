export interface ListDiagnoseReportRequest {
    /**
     * 实例ID。
     * @example `es-cn-n6w1qu7ei000p****`
     */
    "InstanceId": string;
    /**
     * 获取的报告的语言。默认为浏览器语言，支持：
     * - en：英语
     * - zh：简体中文
     * - zt：繁体中文
     * - es：西班牙语
     * - fr：法语
     * @example `es`
     */
    "lang"?: string;
    /**
     * 查询开始时间戳。单位：毫秒。
     * - 最小值：1000000000000
     * - 最大值：2000000000000
     * @example `1594569600000`
     */
    "startTime": number;
    /**
     * 查询结束时间戳。单位：毫秒。
     * - 最小值：1000000000000
     * - 最大值：2000000000000
     * @example `1595174399999`
     */
    "endTime": number;
    /**
     * 分页数。默认值：1，最小值：1，最大值：200。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页报告数。默认值：10，最小值：1，最大值：500。
     * @example `20`
     */
    "size"?: number;
    /**
     * 是否展示诊断项详情。
     * @example `true`
     */
    "detail"?: boolean;
    /**
     * 健康诊断的触发方式，支持：
     * - SYSTEM（默认）：系统自动触发
     * - INNER：内部触发
     * - USER：用户手动触发
     * @example `SYSTEM`
     */
    "trigger"?: string;
}
