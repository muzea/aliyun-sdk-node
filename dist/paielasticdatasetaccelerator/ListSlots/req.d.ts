export interface ListSlotsRequest {
    /**
     * 数据集加速槽ID的列表，多个加速槽ID以半角逗号（,）分隔。
     * @example `slot-my1tk3jggooi5u****,slot-n69468yvjz8d12****,slot-tga4omjrepklkg****`
     */
    "SlotIds"?: string;
    /**
     * 加速槽所对应的数据集加速实例的唯一标识符。如何获取加速实例ID，请参见[ListInstances](~~467899~~)。
     * @example `inst-my1tk3jggooi5u****`
     */
    "InstanceIds"?: string;
    /**
     * 数据集加速槽名称，支持模糊匹配。
     * @example `acc_instance_slot_1`
     */
    "Name"?: string;
    /**
     * 数据集加速槽的数据存储类型，取值如下：
     * - OSS：OSS文件存储。
     * - NAS：NAS文件存储。
     * @example `OSS`
     */
    "StorageType"?: string;
    /**
     * 数据集加速槽所处状态，取值如下：
     * - Created：已创建。
     * - Preparing：正在准备资源。
     * - Loading：正在加载数据。
     * - Running：正在运行，提供服务。
     * - Reloading：正在重新加载数据。
     * - Succeed：成功完成。
     * - Failed：已失败。
     * - Stopping：正在停止。
     * - Stopped：已停止。
     * @example `Running`
     */
    "Phase"?: string;
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
     * 加速槽列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的加速槽数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 加速槽所对应的数据集加速挂载点的唯一标识符。
     * @example `endp-my1tk3jggooi5uwks5`
     */
    "EndpointIds"?: string;
    /**
     * 数据集加速槽的数据存储路径（URI）。
     */
    "StorageUri"?: string;
}
