export interface ListResourcesRequest {
    /**
     * 工作空间ID。如何获取工作空间ID，请参见 [ListWorkspaces](~~449124~~)。
     * - 对于ListResourceByWorkspace，该参数必填。
     * - 对于ListResource，该参数无需配置。
     * @example `123`
     */
    "WorkspaceId"?: string;
    /**
     * 资源列表的页码，起始值为1，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * **该字段已废弃，将会下线，请使用ResourceType字段**
     * @example `MaxCompute`
     */
    "ProductTypes"?: string;
    /**
     * 资源分组名。如何获取资源分组名，请参见[ListResources](~~449143~~)。
     * @example `group`
     */
    "GroupName"?: string;
    /**
     * 资源名。格式为：
     * - 长度为3~28个字符
     * - 同地域内唯一。
     * @example `resource`
     */
    "ResourceName"?: string;
    /**
     * 选项，取值如下：
     * - ListResourceByWorkspace（默认值）：获取工作空间的资源列表。
     * - ListResource：获取用户的资源列表。
     * @example `ListResourceByWorkspace`
     */
    "Option"?: string;
    /**
     * 是否展示详细信息，目前详细信息包含字段Quotas。取值如下：
     * - true（默认值）：表示展示详细信息。
     * - false：表示不展示详细信息。
     * @example `true`
     */
    "Verbose"?: boolean;
    /**
     * 资源类型列表。取值如下：
     * - MaxCompute：大数据计算服务资源。
     * - ECS：通用计算资源
     * - Lingjun：灵骏智算资源
     * - ACS：ACS计算资源
     * - FLINK：Flink资源。
     * @example `MaxCompute`
     */
    "ResourceTypes"?: string;
    /**
     * QuotaId集合，用逗号分割。只有同时具有这些QuotaId的资源才会被返回。
     * > 目前只有ResourceTypes=ACS的资源才支持用该参数过滤。
     * >
     * @example `quota-k******da,quota-cd******w`
     */
    "QuotaIds"?: string;
    /**
     * Label过滤条件集合，多个条件用逗号分隔。只有同时满足这些标签的资源才会被返回。
     * 目前只有ProductType=ACS的资源才支持用该参数过滤。
     * @example `system.supported.dsw=true,system.supported.dlc=true`
     */
    "Labels"?: string;
    /**
     * 逗号分隔的集合，表明要返回的字段。
     * 目前支持
     * - Quota
     * - Label
     * - IsDefault
     * @example `Quota,IsDefault`
     */
    "VerboseFields"?: string;
}
