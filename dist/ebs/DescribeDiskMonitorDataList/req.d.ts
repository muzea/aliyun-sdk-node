export interface DescribeDiskMonitorDataListRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~354276~~)查询块存储数据洞察支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 监控数据类型。当前仅支持pro。
     * pro：包含Burst IO监控数据。
     * @example `pro`
     */
    "Type": string;
    /**
     * 云盘ID列表。多个ID之间用半角逗号（,）隔开，格式为JSON数组。
     * @example `["d-bp67acfmxazb4p****","d-bp67acfmxazs5t****"]`
     */
    "DiskIds"?: string;
    /**
     * 获取云盘的秒级监控数据的起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2022-06-01T03:00:00Z`
     */
    "StartTime": string;
    /**
     * 获取云盘的秒级监控数据的结束时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为`yyyy-MM-ddTHH:mm:ssZ`。
     * @example `2022-06-01T05:00:00Z`
     */
    "EndTime": string;
    /**
     * 分页查询时每页的最大条目数。一旦设置该参数，即表示使用`MaxResults`与`NextToken`组合参数的查询方式。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: string;
    /**
     * 查询凭证（Token）。取值为上一次调用该接口返回的NextToken参数值，初次调用接口时无需设置该参数。
     * @example `e71d8a535bd9c****`
     */
    "NextToken"?: string;
}
