export interface DescribeSubDomainRecordsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 用户端IP。
     * @example `192.0.2.0`
     */
    "UserClientIp"?: string;
    /**
     * `例如参数SubDomain为"a.www.example.com"为例：`
     * `如果参数DomainName为空，则查询域名为example.com、主机名为”a.www“的解析记录。`
     * `如果参数DomainName为"www.example.com"，则查询域名为"www.example.com"、主机名为"a"的解析记录。`
     * `如果参数DomainName为"a.www.example.com"，则查询域名为"a.www.example.com"、主机名为"@"的解析记录。`
     * @example `a.www.example.com`
     */
    "SubDomain": string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 解析记录类型。若不传值，则返回子域名对应的全部解析记录类型。
     * 解析类型包括(不区分大小写)：**A、MX、CNAME、TXT、REDIRECT_URL、FORWORD_URL、NS、AAAA、SRV**。
     * @example `MX`
     */
    "Type"?: string;
    /**
     * 解析线路。
     * @example `default`
     */
    "Line"?: string;
    /**
     * 域名名称。
     * @example `example.com`
     */
    "DomainName"?: string;
}
