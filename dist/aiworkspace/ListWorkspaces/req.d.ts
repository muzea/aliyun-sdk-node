export interface ListWorkspacesRequest {
    /**
     * 工作空间列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的排序字段，默认使用GmtCreateTime。取值如下。
     * * GmtCreateTime（默认值）：按创建时间。
     * * GmtModifiedTime：按修改时间。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 分页查询时，对指定的排序字段进行升序或降序。取值如下：
     * * ASC（默认值）：升序。
     * * DESC ：降序。
     * @example `ASC`
     */
    "Order"?: string;
    /**
     * 工作空间名称。
     * @example `abc`
     */
    "WorkspaceName"?: string;
    /**
     * 逗号分割的模块列表。默认值：PAI。
     * @example `PAI`
     */
    "ModuleList"?: string;
    /**
     * 工作空间状态，目前支持如下值：
     * - ENABLED：正常。
     * - INITIALIZING：初始化中。
     * - FAILURE：失败。
     * - DISABLED：手动禁用。
     * - FROZEN：欠费冻结。
     * - UPDATING：项目更新中。
     * @example `ENABLED`
     */
    "Status"?: string;
    /**
     * 选项，取值如下：
     * * GetWorkspaces（默认值）：获取工作空间列表，会返回Workspaces。
     * * GetResourceLimits：获取资源限制，会返回ResourceLimits。
     * @example `GetWorkspaces`
     */
    "Option"?: string;
    /**
     * 是否显示工作空间详细信息。取值如下：
     * - false（默认值）：不显示。
     * - true：显示。
     * @example `true`
     */
    "Verbose"?: boolean;
    /**
     * 工作空间详情的返回字段列表。用于限定返回结果中的工作空间属性。
     * 多个属性用半角逗号（,）分隔。目前只支持Id，表示工作空间ID。
     * @example `Id`
     */
    "Fields"?: string;
    /**
     * 工作空间ID列表。多个工作空间ID用半角逗号（,）分隔。
     * @example `123,234`
     */
    "WorkspaceIds"?: string;
}
