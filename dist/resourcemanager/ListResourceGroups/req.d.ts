export interface ListResourceGroupsRequest {
    /**
     * 资源组状态，用于查询的过滤条件。取值：
     * - Creating：创建中。
     * - OK：创建成功。
     * - PendingDelete：等待删除。
     * @example `OK`
     */
    "Status"?: string;
    /**
     * 页码。
     * 起始值：1。默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据条数。
     * 取值范围：1~100。默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源组ID，用于查询的过滤条件。
     * 长度不能超过18个字符，且以`rg-`开头。
     * > 该参数已被收编到参数`ResourceGroupIds`，如果您同时设置了`ResourceGroupId`和`ResourceGroupIds`，则会以`ResourceGroupIds`为准。
     * @example `rg-9gLOoK****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源组显示名称，用于查询的过滤条件。支持模糊查询。
     * 长度不能超过50个字符。
     * @example `my-project`
     */
    "DisplayName"?: string;
    /**
     * 资源组唯一标识，用于查询的过滤条件。支持模糊查询。
     * 长度不能超过50个字符，可包含英文字母、数字和短划线（-）。
     * @example `my-project`
     */
    "Name"?: string;
    /**
     * 标签，用于查询的过滤条件。
     * 最多可以设置20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `k1`
         */
        Key: string;
        /**
         * 标签值。
         * @example `v1`
         */
        Value: string;
    }[];
    /**
     * 是否返回标签信息。取值：
     * - false（默认值）：不返回。
     * - true：返回。
     * > 当您设置了标签过滤条件后，不论`IncludeTags`为何值，都会返回标签信息。
     * @example `false`
     */
    "IncludeTags"?: boolean;
    /**
     * 资源组ID列表，用于查询的过滤条件。
     * 最多可以设置100个资源组ID。
     * > 如果您同时设置了`ResourceGroupId`和`ResourceGroupIds`，则会以`ResourceGroupIds`为准。
     */
    "ResourceGroupIds"?: string[];
}
