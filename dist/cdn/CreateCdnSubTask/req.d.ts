export interface CreateCdnSubTaskRequest {
    /**
     * 支持定制的报表ID列表，多个用英文逗号（,）分隔。取值：
     * - **1**：热门URL（按请求数排序）。
     * - **3**：热门URL（按流量排序）。
     * - **5**：热门Referer（按请求数排序）。
     * - **7**：热门Referer（按流量排序）。
     * - **9**：回源热门URL（按请求数排序）。
     * - **11**：回源热门URL（按流量排序）。
     * - **13**：Top客户端IP（按请求数排序）。
     * - **15**：Top客户端IP（按流量排序）。
     * - **17**：域名排行（按流量排序）。
     * - **19**：PV和UV。
     * - **21**：访问区域分布。
     * - **23**：运营商分布。
     * @example `1,3,5`
     */
    "ReportIds": string;
    /**
     * <props="china">待订阅的域名列表，多个域名用半角逗号（,）分隔</props>
     * <props="intl">待订阅的域名列表，多个域名用半角逗号（,）分隔</props>
     * > 不传该参数，默认为账号下的所有域名订阅报表交付任务。
     * @example `www.example1.com,www.example2.com`
     */
    "DomainName"?: string;
}
