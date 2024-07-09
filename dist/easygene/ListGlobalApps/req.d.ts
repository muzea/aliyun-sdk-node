export interface ListGlobalAppsRequest {
    /**
     * 模糊搜索字段：NamesapceName  AppName  Categories AppDescription
     * @example `群体变异`
     */
    "Search"?: string;
    /**
     * 排序字段
     * @example `AppName, LastModified, Used`
     */
    "OrderBy"?: string;
    /**
     * 是否逆序，默认逆序排列
     * @example `true`
     */
    "IsReversed"?: boolean;
    /**
     * 翻页Token用来标记当前开始读取的位置，置空表示从头开始
     * @example `0f2cc944-67db-4fb1-bb10-f136cda74bda`
     */
    "NextToken"?: string;
    /**
     * 分页数
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 可见范围，OpenAccess为所有内容可见
     * @example `OpenAccess`
     */
    "AppScope"?: string;
    /**
     * 分类
     * @example `群体变异`
     */
    "Category"?: string;
    /**
     * 工具集
     * @example `Sentieon`
     */
    "Toolkit"?: string;
    /**
     * 地域ID
     * @example `cn-beijing`
     */
    "Location"?: string;
}
