export interface ListProjectsRequest {
    /**
     * 数据迁移或数据同步项目的名称/ID。
     * @example `np_4w****`
     */
    "SearchKey"?: string;
    /**
     * 项目的类型，包括 `MIGRATION`（表示数据迁移项目）和 `SYNC`（表示数据同步项目）。
     * @example `MIGRATION`
     */
    "Type"?: string;
    /**
     * 数据迁移或数据同步项目的状态集合，包括 INIT（未启动）, RUNNING（运行中）、SUSPEND（已暂停）、FAILED（失败）、FINISHED（已完成）、RELEASING（释放中）、RELEASED（已释放）、DELETED（已删除）、RUNNING_MODIFYING（修改中）、RUNNING_MERGING（合并中）和 RUNNING_ALARMING（告警中）。
     */
    "Status"?: string[];
    /**
     * 标签 ID 的集合，最多支持 5 个。
     */
    "LabelIds"?: string[];
    /**
     * 源端数据源类型的集合。
     */
    "SourceEndpointTypes"?: string[];
    /**
     * 目标端数据源类型的集合。
     */
    "SinkEndpointTypes"?: string[];
    /**
     * 是否展示子项目。
     * @example `false`
     */
    "VisibleSubProject"?: boolean;
    /**
     * 排序字段，包括 `gmtCreate` 和 `gmtModified`，默认值为 `gmtCreate`。
     * @example `gmtCreate`
     */
    "SortField"?: string;
    /**
     * 排列顺序，包括 `asc`（升序）和 `descend`（降序）。默认值为 `descend`。
     * @example `descend`
     */
    "Order"?: string;
    /**
     * 是否需要查询项目关联信息（数据源连接信息、传输实例信息、项目步骤信息等），默认值为 true。
     * @example `true`
     */
    "NeedRelatedInfo"?: boolean;
    /**
     * 页序号，分页查询时生效。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 页大小，分页查询时生效。
     * @example `10`
     */
    "PageSize"?: number;
}
