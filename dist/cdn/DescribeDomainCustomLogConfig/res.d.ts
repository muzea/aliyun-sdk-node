export interface DescribeDomainCustomLogConfigResponse {
    /**
     * 日志配置ID。
     * @example `123`
     */
    ConfigId: string;
    /**
     * 日志配置tag信息。
     * @example `book`
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
     * @example `[9/Jun/2015:01:58:09+0800]188.165.15.75-1542\"-\"\"GET http://www.aliyun.com/index.html\`
     */
    Sample: string;
}
