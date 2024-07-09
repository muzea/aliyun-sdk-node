export interface ListUserResponse {
    /**
     * 下一页起始资源标识符, 最后一页该值为空
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhMg`
     */
    next_marker: string;
    /**
     * 用户信息列表
     */
    items: any[];
}
