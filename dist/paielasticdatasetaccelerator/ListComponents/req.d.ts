export interface ListComponentsRequest {
    /**
     * 数据集加速组件ID的列表，多个组件ID以半角逗号（,）分隔。
     * @example `cmpt-my1tk3jggooi5u****,cmpt-n69468yvjz8d12****,cmpt-tga4omjrepklkg****`
     */
    "ComponentIds"?: string;
    /**
     * 数据集加速组件名称，支持模糊匹配。
     * @example `dataset-accelerator`
     */
    "Name"?: string;
    /**
     * 数据集加速组件版本。
     * @example `v1.0.0`
     */
    "Version"?: string;
    /**
     * 排序字段。
     * @example `GmtCreateTime`
     */
    "SortBy"?: string;
    /**
     * 排列顺序，取值如下：
     * - Desc： 降序排列。
     * - Asc： 升序排列。
     * @example `Desc`
     */
    "Order"?: string;
    /**
     * 组件列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的组件数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
}
