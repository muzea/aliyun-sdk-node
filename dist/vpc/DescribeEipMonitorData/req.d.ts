export interface DescribeEipMonitorDataRequest {
    /**
     * EIP所属地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * EIP的实例ID。
     * @example `eip-2zeerraiwb7uj6idcfv****`
     */
    "AllocationId": string;
    /**
     * 获取数据的起始时间。使用UTC时间。按照ISO8601标准，格式为`YYYY-MM-DDThh:mm:ssZ`。例如，北京时间2013年01月10日20点00分00秒，表示为`2013-01-10T12:00:00Z`。
     * 如果不是整分，则自动取下一分钟为起始时间点。
     * @example `2020-01-05T01:05:05Z`
     */
    "StartTime": string;
    /**
     * 获取数据的结束时间。使用UTC时间。按照ISO8601标准，格式为`YYYY-MM-DDThh:mm:ssZ`。例如，北京时间2013年01月10日20点00分00秒，表示为`2013-01-10T12:00:00Z`。
     * 如果不是整分，则自动取下一分钟为结束时间点。
     * @example `2020-01-05T03:05:10Z`
     */
    "EndTime": string;
    /**
     * 每条监控数据的时间长度。单位：秒。取值：**60**（默认值） 、**300** 、 **900** 或 **3600**。
     * - 如果（**EndTime**–**StartTime**）/ **Period**大于200，则最多返回200条监控数据。
     * - 如果（**EndTime**–**StartTime**）/ **Period**小于等于200，则只返回起始时间点到结束时间点的监控数据。
     * @example `60`
     */
    "Period"?: number;
}
