export interface DescribeResourceUsageRequest {
    /**
     * 服务空间ID。
     * @example `226e5213-697c-****-b4ff-35a09f8a52de`
     */
    "SpaceId": string;
    /**
     * 页码。取值范围：大于1的任意整数。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小。默认30，最大1000，取值：1-1000。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 获取资源用量起始时间。日期格式按照ISO8601表示法，并使用北京时间（UTC+8），格式为yyyy-MM-ddTHH:mm:ssZ，默认返回今天的数据。
     * @example `2021-10-01T00:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取资源用量结束时间。日期格式按照ISO8601表示法，并使用北京时间（UTC+8），格式为yyyy-MM-ddTHH:mm:ssZ。结束时间需晚于起始时间。
     * @example `2021-10-02T00:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 可选，默认值 JSON，当前仅支持JSON格式。
     * @example `JSON`
     */
    "Format"?: string;
}
