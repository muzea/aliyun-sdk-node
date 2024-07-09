export interface DescribeDomainLogsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
     * @example `test`
     */
    "KeyWord"?: string;
    /**
     * 域名分组ID。
     * @example `2223`
     */
    "GroupId"?: string;
    /**
     * 当前页数，起始值为**1**，默认为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 开始时间。格式：**YYYY-MM-DD**。
     * @example `2019-07-04`
     */
    "StartDate"?: string;
    /**
     * 结束时间。格式：**YYYY-MM-DD**。
     * @example `2019-07-04`
     */
    "endDate"?: string;
    /**
     * 查询内容类型。
     * - domain：域名
     * - slavedns：辅助DNS
     * @example `domain`
     */
    "Type"?: string;
}
