export interface DescribeDomainPathDataRequest {
    /**
     * 取得第几页。从**1**开始。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * 取值：**1**~**1000**之间的任意整数。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 路径，以正斜线（/）开头，不填表示查询所有路径。如果路径是目录，需要以正斜线（/）结尾。
     * > 路径信息不支持模糊匹配，需要指定查询的目录深度，只能设置为一个固定值，例如设置一级目录/path/，表示数据统计时，固定统计一级目录的带宽。
     * @example `/path/`
     */
    "Path"?: string;
    /**
     * 开始时间，日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-DDThh:mm:ssZ。
     * 例如：2016-10-20T04:00:00Z。
     * @example `2016-10-20T04:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间，日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-DDThh:mm:ssZ。开始时间和结束时间，间隔小于30天。例如：2016-10-21T04:00:00Z。
     * @example `2016-10-21T04:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 加速域名。
     * >仅支持单个域名查询。
     * @example `example.com`
     */
    "DomainName": string;
}
