export interface SearchEditingProjectRequest {
    /**
     * CreationTime（创建时间）的开始时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2017-01-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * CreationTime（创建时间）的结束时间。格式为：yyyy-MM-ddTHH:mm:ssZ（UTC时间）。
     * @example `2017-01-11T12:00:00Z`
     */
    "EndTime"?: string;
    /**
     * 云剪辑工程状态。多个用英文逗号（,）分隔。默认获取所有云剪辑工程。
     * 取值范围：
     * \-Draft：草稿。
     * \-Producing：合成中。
     * \-Produced：合成成功。
     * \-ProduceFailed：合成失败。
     * @example `Producing`
     */
    "Status"?: string;
    /**
     * 结果排序方式。取值范围：
     * \-CreationTime:Desc（默认值）：按创建时间倒序。
     * \-CreationTime:Asc：按创建时间升序。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 分页的页码。默认值：1。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为10，最大值为100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 创建来源：
     * \-OpenAPI
     * \-AliyunConsole
     * \-WebSDK
     * @example `WebSDK`
     */
    "CreateSource"?: string;
    /**
     * 模板类型：
     * \-Timeline
     * \-VETemplate
     * @example `Timeline`
     */
    "TemplateType"?: string;
    /**
     * 剪辑工程类型，默认EditingProject
     * - EditingProject: 普通剪辑工程
     * - LiveEditingProject: 直播剪辑工程
     * @example `EditingProject`
     */
    "ProjectType"?: string;
}
