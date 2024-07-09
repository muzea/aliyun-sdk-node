export interface ListTagsRequest {
    /**
     * 标签所属的资源的类型，取值如下：
     * - Instance：数据集加速实例。
     * - Slot：数据集加速槽。
     * @example `instance`
     */
    "ResourceType"?: string;
    /**
     * 标签所属的资源的ID。
     * - 当ResourceType为Instance时，需要配置为数据集加速实例ID，如何获取加速实例ID，请参见[ListInstances](~~467899~~)。
     * - 当ResourceType为Slot时，需要配置为数据集加速槽ID，如何获取数据集加速槽ID，请参见[ListSlots](~~467905~~)。
     * @example `inst-my1tk3jggooi5uwks5`
     */
    "ResourceId"?: string;
    /**
     * 标签的键值。
     * 长度限制为64 Unicode字符。
     * @example `dataset_version`
     */
    "Key"?: string;
    /**
     * 标签的值。
     * 长度限制为64 Unicode字符。
     * @example `v0.1.0`
     */
    "Value"?: string;
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
     * 标签列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的标签数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
}
