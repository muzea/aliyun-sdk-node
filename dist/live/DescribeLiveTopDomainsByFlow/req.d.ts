export interface DescribeLiveTopDomainsByFlowRequest {
    /**
     * 获取数据起始时间点，日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh:mm:ssZ（UTC时间）。最小数据粒度为5分钟，不写默认读取当月数据。
     * @example `2018-03-17T16:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 结束时间需大于起始时间。日期格式按照ISO8601表示法，并使用UTC时间。
     * 格式为：YYYY-MM-DDThh:mm:ssZ。
     * @example `2018-03-20T16:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 获取域名数量限制。默认为20，取值支持1~100。
     * @example `20`
     */
    "Limit"?: number;
}
