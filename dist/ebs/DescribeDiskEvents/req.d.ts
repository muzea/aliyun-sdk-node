export interface DescribeDiskEventsRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~354276~~)查询块存储数据洞察支持的地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 云盘类型。取值范围：
     * - cloud_efficiency：高效云盘。
     * - cloud_ssd：SSD盘。
     * - cloud_essd：ESSD云盘。
     * @example `cloud_essd`
     */
    "DiskCategory"?: string;
    /**
     * 事件类型。当前仅支持DataNeedProtect（数据需要保护）。
     * @example `DataNeedProtect`
     */
    "Type"?: string;
    /**
     * 云盘ID。
     * @example `d-bp67acfmxazb4p****`
     */
    "DiskId"?: string;
    /**
     * 获取云盘的秒级监控数据的起始时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-06-01T03:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取云盘的秒级监控数据的结束时间点。按照[ISO 8601](~~25696~~)标准表示，并使用UTC+0时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * @example `2022-06-01T05:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 分页查询时每页行数。最大值为100。
     * 默认值：
     * - 当不设置值或设置的值小于10时，默认值为10。
     * - 当设置的值大于100时，默认值为100。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的`NextToken`参数值。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    "NextToken"?: string;
}
