export interface ListInstancesRequest {
    /**
     * 按工作空间ID过滤。如何获取工作空间ID，请参见[ListWorkspaces](~~449124~~)。
     * @example `40823`
     */
    "WorkspaceId"?: string;
    /**
     * 按实例名称过滤。
     * @example `training_data`
     */
    "InstanceName"?: string;
    /**
     * 按资源组ID过滤，假如为空，只过滤后付费资源组的实例，填ALL会过滤出所有的实例。
     * @example `rg-123456789`
     */
    "ResourceId"?: string;
    /**
     * 根据实例状态过滤，取值如下：
     * - Creating：创建中。
     * - Running：运行中。
     * - Stopped：已停止。
     * - Failed：已失败。
     * @example `Running`
     */
    "Status"?: string;
    /**
     * 付费类型，取值如下：
     * - PayAsYouGo：后付费（后付费/按量付费）。
     * - Subscription：预付费（预付费/包年包月）。
     * @example `PayAsYouGo`
     */
    "PaymentType"?: string;
    /**
     * 工作空间可见度。取值如下：
     * - PRIVATE（默认值）：表示工作空间内自己以及管理员可见。
     * - PUBLIC：为工作空间所有用户可见。
     * @example `PRIVATE`
     */
    "Accessibility"?: string;
    /**
     * 加速器类型。
     * CPU：无计算加速，只使用CPU计算。
     * GPU：使用GPU进行计算加速。
     * @example `CPU`
     */
    "AcceleratorType"?: string;
    /**
     * 实例列表的页码。起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页显示的实例数量。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 按字段gmtCreate排序。
     * @example `gmtCreate`
     */
    "SortBy"?: string;
    /**
     * 排列顺序。取值如下：
     * - DESC：降序。
     * - ASC：升序。
     * @example `DESC`
     */
    "Order"?: string;
    /**
     * 按实例ID过滤。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId"?: string;
    /**
     * 用于过滤的实例标签，最多支持4组标签。
     * @example `{
      "key1": "value1",
      "key2": "value2",
      "key3": "value3"
    }`
     */
    "Labels"?: any;
}
