export interface ListLiveSnapshotTemplatesResponse {
    /**
     * 请求ID。
     * @example `******11-DB8D-4A9A-875B-275798******`
     */
    RequestId: string;
    /**
     * 模板列表。
     */
    TemplateList: {
        /**
         * 模板ID。
         * @example `****a046-263c-3560-978a-fb287782****`
         */
        TemplateId: string;
        /**
         * 模板名称。
         * @example `模板1`
         */
        TemplateName: string;
        /**
         * 模板类型。
         * @example `custom`
         */
        Type: string;
        /**
         * 截图时间间隔，单位：秒。
         * @example `10`
         */
        TimeInterval: number;
        /**
         * 创建时间。
         * @example `2022-07-20T02:48:58Z`
         */
        CreateTime: string;
    }[];
    /**
     * 页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 页宽。
     * @example `10`
     */
    PageSize: number;
    /**
     * 排序。
     * @example `desc`
     */
    SortBy: string;
    /**
     * 总数。
     * @example `100`
     */
    TotalCount: number;
}
