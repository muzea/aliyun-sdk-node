export interface ListDiagnoseReportIdsRequest {
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
     * @example `en`
     */
    "lang"?: string;
    /**
     * 查询开始时间戳。
     * 最小值：1000000000000 ms
     * 最大值：2000000000000 ms
     * @example `1595088000000`
     */
    "startTime": number;
    /**
     * 查询结束时间戳。
     * 最小值：1000000000000 ms
     * 最大值：2000000000000 ms
     * @example `1595174399999`
     */
    "endTime": number;
    /**
     * 分页数。默认值：1，最小值：1，最大值：200。
     * @example `1`
     */
    "page"?: number;
    /**
     * 每页报告ID的数量。默认值：10，最小值：1，最大值：500。
     * @example `15`
     */
    "size"?: number;
    /**
     * 健康诊断的触发方式，支持：SYSTEM（系统自动触发）、INNER（内部触发）和USER（用户手动触发）。
     * @example `SYSTEM`
     */
    "trigger"?: string;
}
