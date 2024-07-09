export interface DescribeCdnReportResponse {
    /**
     * 查询到的报表数据。
     * @example `{
          "data": [
                {
                      "deliver": {
                            "report": {
                                  "title": "TopUrlByAcc",
                                  "format": "table",
                                  "shape": "",
                                  "header": [
                                        "url",
                                        "traf",
                                        "traf_rate",
                                        "acc",
                                        "acc_rate"
                                  ]
                            }
                      },
                      "data": [
                            {
                                  "acc": 440,
                                  "acc_rate": "0.200%",
                                  "traf": 22,
                                  "url": "http://demo.com",
                                  "traf_rate": "0.100%"
                            },
                            {
                                  "acc": 440,
                                  "acc_rate": "0.200%",
                                  "traf": 22,
                                  "url": "http://demo.com",
                                  "traf_rate": "0.100%"
                            }
                      ]
                }
          ]
    }`
     */
    Content: any;
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
}
