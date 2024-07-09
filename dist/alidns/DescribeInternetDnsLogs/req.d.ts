export interface DescribeInternetDnsLogsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 查询的开始时间（时间戳）。
     * @example `1709192640000`
     */
    "StartTimestamp"?: number;
    /**
     * 查询的结束时间（时间戳）。
     * @example `1709196299999`
     */
    "EndTimestamp"?: number;
    /**
     * 分页查询大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 模块类型
     * - AUTHORITY（默认值）：公网权威DNS
     * - RECURSION：公网递归DNS
     * @example `AUTHORITY`
     */
    "Module"?: string;
    /**
     * 查询参数
     * - sourceIp：源IP地址
     * - queryNameFuzzy：域名（模糊值）
     * - queryType：记录类型
     * - value：解析结果
     * - status：状态
     * - serverIp：解析服务器IP
     * @example `{"sourceIp":"59.82.XX.XX","queryType":"A"}`
     */
    "QueryCondition"?: string;
    /**
     * 域名名称。
     * @example `www.example.com`
     */
    "DomainName"?: string;
    /**
     * 公共DNS专属配置ID
     * @example `51**4`
     */
    "AccountId"?: number;
}
