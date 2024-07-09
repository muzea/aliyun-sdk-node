export interface ExportSuspEventsResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EF145C20-6A19-529A-8BDD-0671DXXXXXX`
     */
    RequestId: string;
    /**
     * 导出文件的名称。
     * @example `suspicious_event_20221209`
     */
    FileName: string;
    /**
     * 异常事件的导出记录 ID。
     * @example `1`
     */
    Id: number;
}
