export interface GetOverviewRequest {
    /**
     * 查询时间。单位：天。比如传入30，说明查询30天内的治理规则情况。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 地域。
     * @example `cn-hangzhou`
     */
    "Region"?: string;
    /**
     * 返回信息的语言类型：
     * - zh：中文
     * - en：英文
     * @example `zh`
     */
    "AcceptLanguage"?: string;
}
