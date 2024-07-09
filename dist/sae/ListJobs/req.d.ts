export interface ListJobsRequest {
    /**
     * 当前页数。取值从1开始。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 页面大小。取值范围为\[0,200]。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 任务模板名称。
     * @example `demo-app`
     */
    "AppName"?: string;
    /**
     * 命名空间ID。
     * @example `cn-beijing:demo`
     */
    "NamespaceId"?: string;
    /**
     * 标签列表，JSON字符串。取值说明如下：
     * - **key**：标签键。
     * - **value**：标签值。
     * @example `[{"key":"key","value":"value"}]`
     */
    "Tags"?: string;
    /**
     * 对任务模板进行排序。取值说明如下：
     * - **running**：按照当前实例数进行排序。
     * - **instances**：按照目标实例数进行排序。
     * @example `running`
     */
    "OrderBy"?: string;
    /**
     * 根据**OrderBy**参数传入的字段名排序。取值说明如下：
     *   - **true**：按升序排序。
     *   - **false**：按降序排序。
     * @example `true`
     */
    "Reverse"?: boolean;
    /**
     * 设置筛选任务模板的维度。取值说明如下：
     * - **appName**：任务模板名称。
     * - **appIds**：任务模板ID。
     * @example `appName`
     */
    "FieldType"?: string;
    /**
     * 根据已设置的**FieldType**筛选维度，选择输入目标任务模板的任务模板名称或任务模板ID。
     * @example `demo-app`
     */
    "FieldValue"?: string;
    /**
     * Workload需指定为`job`。
     * @example `job`
     */
    "Workload"?: string;
}
