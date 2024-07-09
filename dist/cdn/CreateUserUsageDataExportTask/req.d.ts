export interface CreateUserUsageDataExportTaskRequest {
    /**
     * 获取数据起始时间点，数据粒度为5分钟。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2015-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点，结束时间需大于起始时间。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2015-12-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 任务名称。
     * @example `刷新`
     */
    "TaskName"?: string;
    /**
     * 导出文件的语言。
     * - **zh-cn**（默认值）：简体中文。
     * - **en-us**：英文。
     * @example `zh-cn`
     */
    "Language"?: string;
}
