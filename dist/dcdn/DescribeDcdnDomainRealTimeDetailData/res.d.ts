export interface DescribeDcdnDomainRealTimeDetailDataResponse {
    /**
     * 数据信息列表。
     * > 该字段受API限制，按JSON字符串返回，各个字段意义及名称如下表所示。
     * @example `[
        {
          "time_stp": "2018-06-05T20:00:00Z",
          "domain_name": "example.com",
          "location": "Guangdong",
          "isp": "telecom",
          "qps": 10.0
        },
        {
          "time_stp": "2018-06-05T20:00:00Z",
          "domain_name": "example.com",
          "location": "Jiangsu",
          "isp": "unicom",
          "qps": 11.1
        }
      ]`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `A603F324-7A05-4FB3-ADF3-2563233D26CC`
     */
    RequestId: string;
}
