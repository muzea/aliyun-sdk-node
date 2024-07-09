export interface ListJobTemplatesRequest {
    /**
     * 作业模板名称。
     * 您可以通过调用[ListJobTemplates](~~87248~~)获取模板名称。
     * @example `jobtemplateName`
     */
    "Name"?: string;
    /**
     * 当前页码。起始值：1
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：50
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
