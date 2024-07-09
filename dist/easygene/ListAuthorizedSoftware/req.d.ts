export interface ListAuthorizedSoftwareRequest {
    /**
     * 地域ID
     * @example `cn-shanghai`
     */
    "Location": string;
    /**
     * 软件名称、软件长名称中搜索的关键字
     * @example `Sentieon`
     */
    "Search"?: string;
    /**
     * 排序字段
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
