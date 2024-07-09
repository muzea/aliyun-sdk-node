export interface ListInstanceSnapshotRequest {
    /**
     * 实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 实例快照列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的实例快照列表数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 按排序字段gmtCreae排序。
     * @example `gmtCreate`
     */
    "SortBy"?: string;
    /**
     * 排列顺序，取值如下：
     * - Desc： 降序排列。
     * - Asc： 升序排列。
     * @example `DESC`
     */
    "Order"?: string;
}
