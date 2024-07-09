export interface DescribeEslModelByTemplateVersionRequest {
    /**
     * 门店模板版本号；
     * @example `1.1.0`
     */
    "TemplateVersion"?: string;
    /**
     * 分页参数：当前页码，默认值1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页参数：每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
}
