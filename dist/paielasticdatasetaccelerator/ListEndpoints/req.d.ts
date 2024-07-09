export interface ListEndpointsRequest {
    /**
     * 数据集加速槽挂载点ID的列表，多个挂载点ID，以半角逗号（,）分隔。
     * @example `end-my1tk3jggooi5u****,end-n69468yvjz8d12****,end-tga4omjrepklkg****`
     */
    "EndpointIds"?: string;
    /**
     * 所属的数据集加速槽ID。如何获取数据集加速槽ID，请参见[ListSlots](~~467905~~)。
     * @example `slot-my1tk3jggooi5u****`
     */
    "SlotIds"?: string;
    /**
     * 数据集加速槽挂载点名称，支持模糊匹配。
     * @example `acc_instance_slot_mount_1`
     */
    "Name"?: string;
    /**
     * 挂载点的网络类型，根据网络类型不同，下列中需要传入的参数也有所不同。
     * - VPC：挂载点处于VPC网络。
     * - INNER：挂载点处于PAI内部网络中，用于PAI其他产品进行访问。
     * @example `VPC`
     */
    "Type"?: string;
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
     * 加速端点列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的加速端点数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 所属加速实例的ID。
     * @example `inst-ivrq92qhbyrg4jctih`
     */
    "InstanceIds"?: string;
}
