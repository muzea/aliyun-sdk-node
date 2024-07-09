export interface ListTemplateRequest {
    /**
     * 页码
     * @example `1`
     */
    "NextToken": number;
    /**
     * 分页大小
     * @example `10`
     */
    "MaxResults": number;
    /**
     * 排序字段：
     * - 1：按更新时间排序
     * - 2：按创建时间排序
     * - 3：按系统推荐排序
     * - 4：按使用次数排序
     * - 不输入任何值或输入除了1，2，3，4之外的任意整数：按系统推荐排序
     * @example `1`
     */
    "OrderType"?: number;
    /**
     * 搜索模板名称关键字
     * @example `“CADT”`
     */
    "Keyword"?: string;
    /**
     * “public”代表开放模板，“private”代表私有模板。
     * @example `private`
     */
    "Type": string;
    /**
     * 模板的标签
     * @example `2`
     */
    "TagList"?: number;
    /**
     * 资源组ID
     * @example `rg-acfmyjt3c5om3hi`
     */
    "ResourceGroupId"?: string;
}
