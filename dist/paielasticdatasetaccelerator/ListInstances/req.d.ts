export interface ListInstancesRequest {
    /**
     * 实例ID的列表，多个加速实例ID间，以半角逗号（,）分隔。
     * @example `inst-my1tk3jggooi5uwks5, inst-n69468yvjz8d12as7d, inst-tga4omjrepklkg1onn`
     */
    "InstanceIds"?: string;
    /**
     * 实例名称，支持模糊匹配。
     * @example `acc_instance_1`
     */
    "Name"?: string;
    /**
     * 数据集加速实例的类型，参考：产品规格，取值如下：
     * - basic：基础版。
     * - enhanced：增强版。
     * @example `basic`
     */
    "Type"?: string;
    /**
     * 数据集加速实例的付费类型，取值如下：
     * - PayAsYouGo：后付费（按量付费）。
     * - Subscription：预付费（包年包月）。
     * @example `PayAsYouGo`
     */
    "PaymentType"?: string;
    /**
     * 数据集加速实例所处状态，取值如下：
     * - Created：初始化。
     * - Running：运行中。
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
     * 数据集加速实例列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的数据集加速实例的数量，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
}
