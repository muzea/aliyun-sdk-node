export interface SearchCloudGtmMonitorTemplatesRequest {
    /**
     * 返回结果显示的语言。取值：
     * - zh-CN：中文
     * - en-US：英文
     * @example `en-US`
     */
    "AcceptLanguage"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber": number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 健康探测模板的名称，按照输入的关键字进行模糊搜索。
     * @example `IPv4-Ping
    `
     */
    "Name"?: string;
    /**
     * 按照探测节点IP地址的类型进行精确搜索：
     * - IPv4：当探测的目标地址类型为IPv4地址时适用；
     * - IPv6：当探测的目标地址类型为IPv6地址时适用；
     * @example `IPv4`
     */
    "IpVersion"?: string;
    /**
     * 按照探测协议类型进行精确搜索：
     * - ping
     * - tcp
     * - http
     * - https
     * @example `ping`
     */
    "Protocol"?: string;
}
