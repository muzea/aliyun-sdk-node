export interface ListTicketTemplatesRequest {
    /**
     * 模板名称，模糊搜索。
     * @example `模板1`
     */
    "SearchPattern"?: string;
    /**
     * 工单类目ID。
     * @example `43c2671b-********86d0-6bd187905cc8`
     */
    "CategoryId"?: string;
    /**
     * 模板状态。
     * - Enabled(已上线)
     * - Disabled(已下线)
     * @example `Enabled`
     */
    "State"?: string;
    /**
     * 分页序号，范围1-100。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，范围1-100。
     * @example `100`
     */
    "PageSize"?: number;
    /**
     * 实例ID。
     * @example `ccc-test`
     */
    "InstanceId": string;
}
