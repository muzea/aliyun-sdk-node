export interface SearchShareLinkResponse {
    /**
     * 分享列表
     */
    items: any[];
    /**
     * 下次起始点
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_marker: string;
    /**
     * 总数量
     * @example `101`
     */
    total_count: number;
}
