export interface DescribeServersRequest {
    /**
     * 站点对ID
     * @example `s-0007rvzart0u501t4e5r`
     */
    "SitePairId"?: string;
    /**
     * 受保护服务器ID列表
     * @example `"[\"sr-0005qxusucbi38lqfc2q\",\"sr-0005qxusucbi38lqfc2r\"]"`
     */
    "ServerIds"?: string;
    /**
     * 分页参数：当前页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数：每页显示条数。
     * @example `10`
     */
    "PageSize"?: number;
}
