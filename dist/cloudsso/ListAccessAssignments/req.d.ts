export interface ListAccessAssignmentsRequest {
    /**
     * 目录ID。
     * @example `d-00fc2p61****`
     */
    "DirectoryId": string;
    /**
     * 访问配置ID，用于查询的过滤条件。
     * @example `ac-00jhtfl8thteu6uj****`
     */
    "AccessConfigurationId"?: string;
    /**
     * 任务目标类型，用于查询的过滤条件。
     * 取值：RD-Account，表示任务目标类型为RD账号。
     * > `TargetId`与`TargetType`必须同时配置才能作为有效的过滤条件进行查询。
     * @example `RD-Account`
     */
    "TargetType"?: string;
    /**
     * 任务目标ID，用于查询的过滤条件。
     * > `TargetId`与`TargetType`必须同时配置才能作为有效的过滤条件进行查询。
     * @example `114240524784****`
     */
    "TargetId"?: string;
    /**
     * 云SSO身份类型，用于查询的过滤条件。取值：
     * - User：用户。
     * - Group：用户组。
     * > `PrincipalId`与`PrincipalType`必须同时配置才能作为有效的过滤条件进行查询。
     * @example `User`
     */
    "PrincipalType"?: string;
    /**
     * 云SSO身份ID，用于查询的过滤条件。具体如下：
     * - 当`PrincipalType`为User时，`PrincipalId`为云SSO用户ID。
     * - 当`PrincipalType`为Group时，`PrincipalId`为云SSO用户组ID。
     * > `PrincipalId`与`PrincipalType`必须同时配置才能作为有效的过滤条件进行查询。
     * @example `u-00q8wbq42wiltcrk****`
     */
    "PrincipalId"?: string;
    /**
     * 查询返回结果下一页的令牌。首次调用API不需要`NextToken`。
     * 当您首次调用API时，如果返回数据总条数超过`MaxResults`限制，数据会被截断，只返回`MaxResults`条数据，同时，返回参数`IsTruncated`为`true`，返回一个`NextToken`。您可以使用上一次返回的`NextToken`继续调用API，其他请求参数保持不变，查询被截断的数据。您可以按此方法多次查询，直到`IsTruncated`为`false`，表示全部数据查询完毕。
     * @example `K1c3o9K7pFxoTtxH1Nm7MMLb7zrDGvftYBQBPDVv7AD3a8yhRb3Mk8L9ivmN6bFSjfkZNTAg3h4****`
     */
    "NextToken"?: string;
    /**
     * 每页的最大数据条数。
     * 取值范围：1~20。
     * 默认值：10。
     * @example `10`
     */
    "MaxResults"?: number;
}
