export interface DescribeHighlightInfoRequest {
    /**
     * 获取数据的起始时间点。日期格式按照iso8601表示法，并使用utc时间，格式为yyyy-mm-ddthh:mm:ssz。
     * @example `2023-02-19T16:00:00Z`
     */
    "StartTime": string;
    /**
     * 结束时间。日期格式按照iso8601表示法，并使用utc时间，格式为yyyy-mm-ddthh:mm:ssz。
     * @example `2023-04-10T02:43:34Z`
     */
    "EndTime"?: string;
    /**
     * 日志链路ID。
     * @example `800e749616838513398137319e`
     */
    "TraceId": string;
    /**
     * 访问语言。取值：
     * - **en_US**（默认）：英文
     * - **zh_CN**：中文
     * @example `en_US`
     */
    "Lang": string;
}
