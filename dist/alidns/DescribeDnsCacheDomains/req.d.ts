export interface DescribeDnsCacheDomainsRequest {
    /**
     * 语言
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 关键字，按照”%Keyword%”模式搜索，不区分大小写
     * @example `a`
     */
    "Keyword"?: string;
    /**
     * 当前页数，起始值为1，默认为1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，最大值**100**，默认为**20**
     * @example `20`
     */
    "PageSize"?: number;
}
