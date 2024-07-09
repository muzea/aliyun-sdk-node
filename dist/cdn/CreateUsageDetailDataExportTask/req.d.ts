export interface CreateUsageDetailDataExportTaskRequest {
    /**
     * 获取数据起始时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2019-12-10T20:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点。
     * 日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需晚于起始时间。
     * @example `2019-12-10T21:00:00Z`
     */
    "EndTime": string;
    /**
     * 域名组信息。如果该信息不为空，则忽略**DomainNames**字段。
     * @example `xxx`
     */
    "Group"?: string;
    /**
     * 如果域名组为空，则以该字段提供的域名为准导出数据。
     * 如果未填写该参数，则导出用户维度数据。
     * @example `example.com`
     */
    "DomainNames"?: string;
    /**
     * 需要获取的用量类型。取值：
     * - **flow**：流量带宽数据。
     * - **vas**：请求数据。
     * @example `flow`
     */
    "Type": string;
    /**
     * 任务名称。
     * @example `刷新`
     */
    "TaskName"?: string;
    /**
     * 导出文件的语言。取值：
     * - **zh-cn**（默认值）：简体中文。
     * - **en-us**：英文。
     * @example `en-us`
     */
    "Language"?: string;
}
