export interface GetRepoTagScanSummaryResponse {
    /**
     * 未知等级漏洞数
     * @example `4`
     */
    UnknownSeverity: number;
    /**
     * 请求ID
     * @example `BC648259-91A7-4502-BED3-EDF64361FA83`
     */
    RequestId: string;
    /**
     * 总漏洞数
     * @example `196`
     */
    TotalSeverity: number;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 中危漏洞数
     * @example `81`
     */
    MediumSeverity: number;
    /**
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 高危漏洞数
     * @example `22`
     */
    HighSeverity: number;
    /**
     * 低危漏洞数
     * @example `89`
     */
    LowSeverity: number;
}
