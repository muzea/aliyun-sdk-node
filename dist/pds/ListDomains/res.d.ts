export interface ListDomainsResponse {
    /**
     * 返回的 domain 列表
     */
    items: any[];
    /**
     * 用作下次遍历的 marker
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_marker: string;
}
