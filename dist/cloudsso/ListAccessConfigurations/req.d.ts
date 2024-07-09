export interface ListAccessConfigurationsRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 查询返回结果下一页的令牌。首次调用API不需要`NextToken`。
     * 当您首次调用API时，如果返回数据总条数超过`MaxResults`限制，数据会被截断，只返回`MaxResults`条数据，同时，返回参数`IsTruncated`为`true`，返回一个`NextToken`。您可以使用上一次返回的`NextToken`继续调用API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到`IsTruncated`为`false`，表示全部数据查询完毕。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    "NextToken"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~100。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 过滤条件。
     * 格式：<Attribute> <Operator> <Value>，不区分大小写。目前，<Attribute>只支持AccessConfigurationName，<Operator>只支持eq（Equals）和sw（Start With）。
     * 示例：Filter = "AccessConfigurationName sw test"，表示查询名称以test开头的全部访问配置。Filter = "AccessConfigurationName eq TestAccessConfiguration"，表示查询名称为TestAccessConfiguration的访问配置。
     * @example `AccessConfigurationName sw test`
     */
    "Filter"?: string;
    /**
     * 状态通知信息，用于查询的过滤条件。
     * 取值：ReprovisionRequired，表示查询需要重新部署的访问配置。
     * @example `ReprovisionRequired`
     */
    "StatusNotifications"?: string;
}
