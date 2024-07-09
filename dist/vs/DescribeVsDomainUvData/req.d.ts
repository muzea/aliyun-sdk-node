export interface DescribeVsDomainUvDataRequest {
    /**
     * 视图计算域名名称
     * @example `example.aliyundoc.com`
     */
    "DomainName": string;
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。<br>格式为：YYYY-MM-DDThh:mm:ssZ<br> 最小数据粒度为1小时<br> 不写默认读取过去24小时数据
     * @example `2021-10-12T10:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间需大于起始时间；获日期格式按照ISO8601表示法，并使用UTC时间。<br>格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2021-11-24T00:00:00Z`
     */
    "EndTime"?: string;
}
