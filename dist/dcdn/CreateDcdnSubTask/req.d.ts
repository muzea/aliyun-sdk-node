export interface CreateDcdnSubTaskRequest {
    /**
     * 支持定制的报表ID列表，多个用英文逗号（,）分隔。取值：
     * - **2**：热门URL（按请求数排序）。
     * - **4**：热门URL（按流量排序）。
     * - **6**：热门Referer（按请求数排序）。
     * - **8**：热门Referer（按流量排序）。
     * - **10**：回源热门URL（按请求数排序）。
     * - **12**：回源热门URL（按流量排序）。
     * - **14**：Top客户端IP（按请求数排序）。
     * - **16**：Top客户端IP（按流量排序）。
     * - **18**：域名排行（按流量排序）。
     * - **20**：PV和UV。
     * - **22**：访问区域分布。
     * - **24**：运营商分布。
     * - **26**：IPv4/IPv6峰值带宽。
     * - **27**：回源带宽。
     * @example `2,4,6`
     */
    "ReportIds": string;
    /**
     * <props="china">待订阅的域名列表，多个域名用半角逗号（,）分隔，订阅域名数量上限为500个，超过500个请[填写信息](https://page.aliyun.com/form/act2017566026/index.htm)申请。</props>
     * <props="intl">待订阅的域名列表，多个域名用半角逗号（,）分隔，订阅域名数量上限为500个，超过500个请[提交工单](https://workorder-intl.console.aliyun.com/?spm=5176.2020520001.aliyun_topbar.18.dbd44bd3e4f845#/ticket/createIndex)申请。</props>
     * > 不传该参数，默认为账号下的所有域名订阅报表交付任务。
     * @example `example.com,example.org`
     */
    "DomainName"?: string;
}
