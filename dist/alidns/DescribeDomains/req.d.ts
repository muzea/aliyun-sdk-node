export interface DescribeDomainsRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 关键字，按照“%KeyWord%”模式搜索，不区分大小写。
     * @example `com`
     */
    "KeyWord"?: string;
    /**
     * 指域名分组ID。如不填或传空字符，将在全部域名下查询。如传defaultGroup，将在默认分组下查询。
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
     * 搜索模式。取值：
     * - **LIKE**：模糊搜索
     * - **EXACT**：精确搜索
     * @example `LIKE`
     */
    "SearchMode"?: string;
    /**
     * 资源组ID。
     * @example `rg-resourcegroupid01`
     */
    "ResourceGroupId"?: string;
    /**
     * 是否查询域名星标。
     * @example `true`
     */
    "Starmark"?: boolean;
}
