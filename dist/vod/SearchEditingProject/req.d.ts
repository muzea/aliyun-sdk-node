export interface SearchEditingProjectRequest {
    /**
     * CreationTime（创建时间）的结束时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-11T13:00:00Z`
     */
    "EndTime"?: string;
    /**
     * CreationTime（创建时间）的开始时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
     * @example `2017-01-11T12:00:00Z`
     */
    "StartTime"?: string;
    /**
     * 云剪辑工程状态。多个用英文逗号（,）分隔。默认获取所有云剪辑工程。
     * 取值范围：
     * - **Normal**：草稿。
     * - **Producing**：合成中。
     * - **Produced**：合成成功。
     * - **ProduceFailed**：合成失败。
     * @example `Normal`
     */
    "Status"?: string;
    /**
     * 当前页码。默认值为**1**。
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 分页大小，每页显示条数。默认值为**10**，最大值为**100**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 结果排序方式。取值范围：
     * - **CreationTime:Desc**（默认值）：按创建时间倒序。
     * - **CreationTime:Asc**：按创建时间升序。
     * @example `CreationTime:Desc`
     */
    "SortBy"?: string;
    /**
     * 云剪辑工程标题。
     * @example `test`
     */
    "Title"?: string;
}
