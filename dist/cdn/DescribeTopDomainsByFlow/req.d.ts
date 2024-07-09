export interface DescribeTopDomainsByFlowRequest {
    /**
     * 获取数据的起始时间点。日期格式按照ISO8601表示法，并使用UTC时间，格式为yyyy-MM-ddTHH:mm:ssZ。
     * > StartTime必须设置为北京时间0点对应的UTC时间，例如：北京时间06月01日0点，需要设置为UTC时间“2021-05-31T16:00:00Z”。
     * @example `2019-12-22T08:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 获取数据的结束时间点。日期格式按照ISO8601表示法，并使用UTC时间。格式为yyyy-MM-ddTHH:mm:ssZ。
     * > 结束时间需大于起始时间。
     * @example `2019-12-23T08:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 域名获取数量限制，默认为**20**，取值**1**~**100**。
     * @example `20`
     */
    "Limit"?: number;
}
