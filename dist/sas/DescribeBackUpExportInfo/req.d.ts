export interface DescribeBackUpExportInfoRequest {
    /**
     * 分页查询时，当前页的页码。默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示的每页数据的最大条数。默认值为1。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 要导出归档数据的类型。取值：
     * - **suspiciousExport**：安全告警。
     * @example `suspiciousExport`
     */
    "ExportType": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文。
     * - **en**：英文。
     * @example `zh`
     */
    "Lang"?: string;
}
