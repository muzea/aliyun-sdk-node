export interface DescribeVsTopDomainsByFlowRequest {
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。<br>格式为：YYYY-MM-DDThh:mm:ssZ<br> 最小数据粒度为5分钟<br> 不写默认读取当月数据
     * @example `2021-12-12T10:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间需大于起始时间；获日期格式按照ISO8601表示法，并使用UTC时间。<br>格式为：YYYY-MM-DDThh:mm:ssZ
     * @example `2018-12-10T18:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 域名获取数量限制，默认为20，取值支持1~100
     * @example `3`
     */
    "Limit"?: number;
}
