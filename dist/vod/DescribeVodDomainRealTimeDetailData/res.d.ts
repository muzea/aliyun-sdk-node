export interface DescribeVodDomainRealTimeDetailDataResponse {
    /**
     * 返回数据详情。
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
     * @example `1710298E-8AFA-5F6D-A3E9-47103C52177D`
     */
    RequestId: string;
}
