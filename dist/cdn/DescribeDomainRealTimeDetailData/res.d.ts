export interface DescribeDomainRealTimeDetailDataResponse {
    /**
     * 地区运营商详细数据。
     * @example `[
          {
                "time_stp": "2018-06-05T20:00:00Z",
                "domain_name": "example.com",
                "location": "Guangdong",
                "isp": "telecom",
                "qps": 10
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
     * @example `B49E6DDA-F413-422B-B58E-2FA23F286726`
     */
    RequestId: string;
}
