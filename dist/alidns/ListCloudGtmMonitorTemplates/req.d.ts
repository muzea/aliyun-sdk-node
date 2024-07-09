export interface ListCloudGtmMonitorTemplatesRequest {
    /**
     * 返回值语言，取值：
     * - zh-CN：中文。
     * - en-US：英文。
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时设置的每页行数，最大值100，默认为20。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 健康检查探测模板的名称，一般为了方便配置人员区分和记忆，建议名称可以区分健康检查协议。
     * @example `IPv4-Ping`
     */
    "Name"?: string;
    /**
     * 探测节点IP地址的类型：
     * - IPv4：当探测的目标地址类型为IPv4地址时适用；
     * - IPv6：当探测的目标地址类型为IPv6地址时适用；
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * 对目标IP地址发起探测的协议类型：
     * - ping
     * - tcp
     * - http
     * - https
     * @example `ping`
     */
    "Protocol"?: string;
}
