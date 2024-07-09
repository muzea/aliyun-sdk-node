export interface DescribeCustomLogConfigResponse {
    /**
     * 日志配置tag信息。
     * @example `img1`
     */
    Tag: string;
    /**
     * 请求ID。
     * @example `94E3559F-7B6A-4A5E-AFFD-44E2A208A249`
     */
    RequestId: string;
    /**
     * 具体配置格式。
     * @example `$time_iso8601_$request_method_$`
     */
    Remark: string;
    /**
     * 样例。
     * @example `"[9/Jun/2015:01:58:09 +0800] 188.165.15.75 - 1542 \"-\" \"GEThttp: //www.aliyun.com/index.html\" 200`
     */
    Sample: string;
}
