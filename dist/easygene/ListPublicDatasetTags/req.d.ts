export interface ListPublicDatasetTagsRequest {
    /**
     * 标签名中搜索的关键字
     * @example `遗传多样性`
     */
    "Search"?: string;
    /**
     * 排序字段:TagName,LastModified
     * @example `LastModified`
     */
    "OrderBy"?: string;
    /**
     * 是否反转
     * @example `true`
     */
    "IsReversed"?: boolean;
    /**
     * 翻页Token用来标记当前开始读取的位置，置空表示从头开始
     * @example `0f2cc944-67db-4fb1-bb10-f136cda74bda`
     */
    "NextToken"?: string;
    /**
     * 分页数量
     * @example `10`
     */
    "MaxResults"?: number;
}
