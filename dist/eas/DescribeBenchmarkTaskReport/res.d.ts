export interface DescribeBenchmarkTaskReportResponse {
    /**
     * 请求ID。
     * @example `40325405-579C-4D82********`
     */
    RequestId: string;
    /**
     * 当ReportType为Report时，返回压测报告的下载地址。
     * @example `http://eas-benchmark.oss-cn-chengdu.aliyuncs.com/summary/benchmark-larec-test-015d-10007.html`
     */
    ReportUrl: string;
    /**
     * 当ReportType为RAW时，返回压测报告的详细数据。
     * @example `{
        "TimestampList": ["int64"],
        "QPSList": ["float32"],
        "RTList": [
          {
            "AVG": "float32",
            "TP100": "float32",
            "TP99": "float32",
            "TP90": "float32",
            "TP50": "float32",
            "TP10": "float32"
          }
        ],
        "TrafficList": [
          {
            "Send": "float64",
            "Receive": "float64"
          }
        ],
        "StatusCode": {
          "200": "uint64",
          "450": "uint64",
          "500": "uint64"
        },
        "Count": "uint64",
        "Total": "float64",
        "MinRT": "float32",
        "AvgRT": "float32",
        "MaxRT": "float32",
        "QPS": "float32",
        "TotalSend": "float64",
        "TotalReceive": "float64",
        "RTDistribution": [
          {
            "Latency": "float32",
            "Percentage": "int"
          }
        ],
        "RTHistogram": [
          {
            "Count": "int",
            "Mark": "float32",
            "Frequency": "float32"
          }
        ]
      }`
     */
    Data: any;
}
