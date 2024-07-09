export interface DescribeVodAIDataRequest {
    /**
     * 获取数据起始时间点。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2019-02-01T13:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取数据结束时间点，需晚于起始时间。格式为：`yyyy-MM-ddTHH:mm:ssZ`（UTC时间）。
     * @example `2019-02-01T15:00:00Z`
     */
    "EndTime": string;
    /**
     * 存储地域。默认返回所有区域。支持批量查询，多个地域使用半角逗号（,）分隔。取值：
     * - **cn-shanghai**：上海。
     * - **cn-beijing**：北京。
     * - **eu-central-1**：德国。
     * - **ap-southeast-1**：新加坡。
     * @example `cn-beijing`
     */
    "Region"?: string;
    /**
     * AI类型。默认返回类型。支持批量查询，多个区域使用半角逗号（,）分隔。取值：
     * - **AIVideoCensor**：智能审核。
     * - **AIVideoFPShot**：视频DNA。
     * - **AIVideoTag**：智能标签。
     * @example `AIVideoCensor`
     */
    "AIType"?: string;
}
