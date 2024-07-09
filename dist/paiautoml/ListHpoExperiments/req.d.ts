export interface ListHpoExperimentsRequest {
    /**
     * 实验名称关键字
     * @example `任意关键字`
     */
    "Name"?: string;
    /**
     * 实验创建人的UserId
     * @example `266977839132045194`
     */
    "Creator"?: string;
    /**
     * 页码。起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 最早的实验创建时间
     * @example `yyyy-mm-dd hh:mm:ss或着yyyy-mm-dd，比如2023-03-31 10:29:30`
     */
    "MinCreateTime"?: string;
    /**
     * 最晚的实验创建时间
     * @example `yyyy-mm-dd hh:mm:ss或着yyyy-mm-dd，比如2023-03-31 10:29:30`
     */
    "MaxCreateTime"?: string;
    /**
     * 实验状态
     * @example `CREATED, RUNNING, FINISHED, FAILED, EARLY_STOPPED, USER_CANCELED, SYS_CANCELED, WAITING, NO_MORE_TRIAL, UNKNOWN`
     */
    "Status"?: string;
    /**
     * 工作空间ID。
     * @example `default`
     */
    "WorkspaceId"?: string;
    /**
     * 工作空间可见性，可能值为：
     * - PRIVATE：在此工作空间中，仅对您和管理员可见。
     * - PUBLIC：在此工作空间中，对所有人可见。
     * @example `PRIVATE`
     */
    "Accessibility"?: string;
    /**
     * 响应里是否包括实验配置数据
     * @example `True或者False，默认False表示不包括`
     */
    "IncludeConfigData"?: string;
    /**
     * 查询结果排序依据
     * @example `create_time, update_time, workspace_id, status, accessibility其中之一`
     */
    "SortBy"?: string;
    /**
     * 排序顺序，取值如下，与SortBy一起使用。
     * - DESC（默认值）：降序排列。
     * - ASC：升序排列。
     * @example `DESC或ASC`
     */
    "Order"?: string;
}
