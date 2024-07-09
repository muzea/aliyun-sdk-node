export interface DescribeDomainResolveStatisticsSummaryRequest {
    /**
     * 关键字，与SearchMode配合使用。
     * @example `test`
     */
    "Keyword"?: string;
    /**
     * 关键词的搜索模式。取值：
     * - 模糊搜索（默认）：LIKE
     * - 精确搜索：EXACT
     * @example `EXACT`
     */
    "SearchMode"?: string;
    /**
     * 排序方向。取值：
     * - 递减：DESC
     * - 递增：ASC
     * @example `DESC`
     */
    "Direction"?: string;
    /**
     * 解析量查询条件，可用于查询不同解析量类别的域名列表及域名解析量数据。
     * 不传：查询解析量不为0的数据
     * 传小于0的值：查询所有数据
     * 传0：查询无解析量的数据
     * 传大于0的值：查询解析量不超过该值的域名
     * @example `-1`
     */
    "Threshold"?: number;
    /**
     * 开始时间，格式yyyy-MM-dd，如: 2023-03-01
     * @example `2023-03-01`
     */
    "StartDate": string;
    /**
     * 结束时间，格式yyyy-MM-dd，如：2023-03-13
     * @example `2023-03-01`
     */
    "EndDate"?: string;
    /**
     * 当前页数，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值1000，最小值为1。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * lang，语言：zh、en、ja。
     * @example `zh`
     */
    "Lang"?: string;
}
