export interface ListGroupMemberResponse {
    /**
     * 用户列表
     */
    user_items: any[];
    /**
     * 群组列表
     */
    group_items: any[];
    /**
     * 下一页起始资源标识符, 最后一页该值为空。
     * @example `NWQ1Yjk4YmI1ZDRlYmU1Y2E0YWE0NmJhYWJmODBhNDQ2NzhlMTRhM1`
     */
    next_marker: string;
}
