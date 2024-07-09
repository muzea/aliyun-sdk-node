export interface QueryUserListRequest {
    /**
     * 组织成员用户名或昵称的关键字。
     * @example `测试用户`
     */
    "Keyword"?: string;
    /**
     * 组织成员列表的当前页码：
     * - 起始值：1
     * - 默认值：1
     * @example `1`
     */
    "PageNum"?: number;
    /**
     *
     * 分页查询时的每页行数：
     * - 默认值：10
     * - 最大值：1000
     * @example `10`
     */
    "PageSize"?: number;
}
